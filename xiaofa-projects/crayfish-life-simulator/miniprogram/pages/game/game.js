// pages/game/game.js
const app = getApp();
const eventList = require('../../data/events.js');

Page({
	data: {
		status: 'event',
		age: 0,
		ageStage: '幼儿',
		eventCount: 0,
		isCultivator: false,
		isEndingPending: false,
		talentTags: [],
		triggeredEvents: [],
		autoNextTimer: null,
		attributes: {
			vitality: 10,
			intelligence: 10,
			wealth: 10,
			luck: 10,
			charm: 10,
		},
		currentEvent: null,
		showResult: false,
		eventResult: '',
		attrChanges: [],
		pendingEndingId: null,
	},

	onLoad: function (options) {
		let attrs = {
			vitality: 10,
			intelligence: 10,
			wealth: 10,
			luck: 10,
			charm: 10,
		};
		let tags = [];
		if (options.params) {
			const p = JSON.parse(decodeURIComponent(options.params));
			attrs = p.attributes;
			tags = p.talentTags || [];
		}
		this.data.attributes = attrs;
		this.data.talentTags = tags;
		if (tags.includes('cultivate') || tags.includes('god'))
			this.data.isCultivator = true;
		this.setData({
			attributes: attrs,
			talentTags: tags,
			isCultivator: this.data.isCultivator,
			status: 'event',
		});
		// 直接加载第一个事件，无需等待
		this.triggerRandomEvent();
	},

	getAgeStage: function (age) {
		if (this.data.isCultivator) {
			if (age >= 980) return '渡劫期';
			if (age >= 800) return '元婴期';
			if (age >= 500) return '金丹期';
			if (age >= 300) return '筑基期';
			return '修仙者';
		}
		if (age <= 5) return '幼儿';
		if (age <= 12) return '少年';
		if (age <= 17) return '青少年';
		if (age <= 25) return '青年';
		if (age <= 40) return '壮年';
		if (age <= 60) return '中年';
		if (age <= 80) return '老年';
		if (age <= 105) return '耄耋';
		return '长寿者';
	},

	getAvailableEvents: function () {
		const { age, attributes, talentTags, triggeredEvents, isCultivator } =
			this.data;
		this.setData({ ageStage: this.getAgeStage(age) });
		return eventList.filter((e) => {
			if (e.isEnding || e.isCultivateTrigger) {
				if (isCultivator && e.isCultivateTrigger) return false;
				if (e.isCultivateTrigger && age < 105) return false;
			}
			if (triggeredEvents.includes(e.id)) return false;
			const minAge = e.minAge || 1;
			const maxAge = e.maxAge || 999;
			if (age < minAge || age > maxAge) return false;
			if (e.requires) {
				for (const [key, minVal] of Object.entries(e.requires)) {
					if (
						attributes.hasOwnProperty(key) &&
						attributes[key] < minVal
					)
						return false;
				}
			}
			if (e.tags && e.tags.length > 0) {
				if (
					!talentTags.includes('god') &&
					!e.tags.some((t) => talentTags.includes(t))
				)
					return false;
			}
			return true;
		});
	},

	// 结局概率：幼年极低，成年后逐步上升，符合人类生命规律
	// 经过测试调优：中晚年结局概率略提高，让寿命分布更集中在合理区间
	getEndingRatio: function (age) {
		if (age < 18) return 0.005; // 18岁以下极低
		if (age < 30) return 0.015; // 18-29岁 1.5%
		if (age < 40) return 0.03; // 30-39岁 3%
		if (age < 50) return 0.06 + (age - 40) * 0.004; // 40-49岁 6%-10%
		if (age < 60) return 0.10 + (age - 50) * 0.01; // 50-59岁 10%-20%
		if (age < 70) return 0.20 + (age - 60) * 0.02; // 60-69岁 20%-40%
		if (age < 80) return 0.40 + (age - 70) * 0.025; // 70-79岁 40%-65%
		return Math.min(0.90, 0.65 + (age - 80) * 0.01); // 80+岁，最高90%
	},

	triggerRandomEvent: function () {
		const { talentTags, eventCount } = this.data;
		let { age } = this.data;

		// 当前年龄的普通事件用完时，强制涨岁直到有事件可用
		let events = this.getAvailableEvents();
		let normalCheck = events.filter(
			(e) => !e.isEnding && !e.isCultivateTrigger
		);
		let safetyCount = 0;
		while (normalCheck.length === 0 && age < 999 && safetyCount < 200) {
			age++;
			this.data.age = age;
			this.setData({ age, ageStage: this.getAgeStage(age) });
			events = this.getAvailableEvents();
			normalCheck = events.filter(
				(e) => !e.isEnding && !e.isCultivateTrigger
			);
			safetyCount++;
		}

		if (normalCheck.length === 0) {
			this.endGame();
			return;
		}

		// 每8件事触发一次结局检查机会
		const isAgeCheckEvent = eventCount % 8 === 7;
		const normalEvents = events.filter(
			(e) => !e.isEnding && !e.isCultivateTrigger
		);
		const endingEvents = events.filter(
			(e) => e.isEnding || e.isCultivateTrigger
		);

		const weightedNormal = [];
		normalEvents.forEach((ev) => {
			let w = 1;
			if (ev.tags) {
				ev.tags.forEach((tag) => {
					if (talentTags.includes(tag) || talentTags.includes('god'))
						w *= 3;
				});
			}
			for (let i = 0; i < w; i++) weightedNormal.push(ev);
		});

		if (weightedNormal.length === 0 && endingEvents.length > 0) {
			const ev =
				endingEvents[Math.floor(Math.random() * endingEvents.length)];
			this.setData({
				currentEvent: ev,
				status: 'event',
				showResult: false,
				isEndingPending: false,
				pendingEndingId: null,
			});
			return;
		}
		if (weightedNormal.length === 0) {
			this.endGame();
			return;
		}

		const normalTotal = weightedNormal.length;
		const weightedEnding = [];
		if (isAgeCheckEvent && endingEvents.length > 0) {
			const hasCultivate = endingEvents.some((e) => e.isCultivateTrigger);
			const ratio = hasCultivate
				? Math.min(0.9, Math.max(0.05, (age - 104) * 0.05))
				: this.getEndingRatio(age);
			const endingTotal = Math.max(
				1,
				Math.round((normalTotal * ratio) / (1 - ratio))
			);
			const perEvent = Math.max(
				1,
				Math.round(endingTotal / endingEvents.length)
			);
			endingEvents.forEach((ev) => {
				const w = perEvent * (ev.endingWeight || 1);
				for (let i = 0; i < w; i++) weightedEnding.push(ev);
			});
		}

		const all = [...weightedNormal, ...weightedEnding];
		if (all.length === 0) {
			this.endGame();
			return;
		}
		const ev = all[Math.floor(Math.random() * all.length)];
		if (!ev) {
			this.endGame();
			return;
		}
		if (!ev.isEnding && !ev.isCultivateTrigger)
			this.data.triggeredEvents.push(ev.id);
		this.setData({
			currentEvent: ev,
			status: 'event',
			showResult: false,
			isEndingPending: false,
			pendingEndingId: null,
		});
	},

	startNewEvent: function () {
		this.triggerRandomEvent();
	},

	selectOption: function (e) {
		// 守卫：如果结果已经显示（showResult=true），不能重复选择
		if (this.data.showResult) return;

		const idx = e.currentTarget.dataset.index;
		const option = this.data.currentEvent.options[idx];
		const attributes = { ...this.data.attributes };
		const attrChanges = [];
		const attrNames = {
			vitality: '活力',
			intelligence: '智力',
			wealth: '财富',
			luck: '运气',
			charm: '魅力',
		};
		for (const [key, delta] of Object.entries(option.effects)) {
			if (attributes.hasOwnProperty(key)) {
				const old = attributes[key];
				attributes[key] = Math.max(0, old + delta);
				if (attributes[key] !== old)
					attrChanges.push({
						name: attrNames[key],
						delta: attributes[key] - old,
					});
			}
		}
		const newEventCount = this.data.eventCount + 1;
		let newAge = this.data.age;
		// 每8件事涨1岁，让玩家有充足的事件体验
		if (newEventCount % 8 === 0) {
			newAge++;
			// 涨岁后进行属性自然衰减
			const decayedAttrs = this.ageDecay(attributes, newAge);
			// 检查是否有属性归零
			if (Object.values(decayedAttrs).some(a => a <= 0)) {
				this.setData({
					attributes: decayedAttrs,
					eventCount: newEventCount,
					age: newAge,
					ageStage: this.getAgeStage(newAge),
					eventResult: option.result + '\n\n时光流逝，你的身体逐渐衰退，一项属性归零了...',
					attrChanges,
					showResult: true,
					isEndingPending: true,
					pendingEndingId: null,
				});
				return;
			}
			// 将衰减后的属性应用，并添加衰减提示
			let hasChange = false;
			for (const key in decayedAttrs) {
				if (decayedAttrs[key] !== attributes[key]) {
					attrChanges.push({
						name: attrNames[key],
						delta: decayedAttrs[key] - attributes[key],
					});
					hasChange = true;
					break;
				}
			}
			if (hasChange) {
				this.setData({
					attributes: decayedAttrs,
					eventCount: newEventCount,
					age: newAge,
					ageStage: this.getAgeStage(newAge),
					eventResult: option.result + (hasChange ? '\n\n岁月不饶人，你的身体悄悄发生了变化...' : ''),
					attrChanges,
					showResult: true,
				});
			} else {
				this.setData({
					attributes: decayedAttrs,
					eventCount: newEventCount,
					age: newAge,
					ageStage: this.getAgeStage(newAge),
					eventResult: option.result,
					attrChanges,
					showResult: true,
				});
			}
		} else {
			// 不涨岁，直接设置
			this.setData({
				attributes,
				eventCount: newEventCount,
				age: newAge,
				ageStage: this.getAgeStage(newAge),
				eventResult: option.result,
				attrChanges,
				showResult: true,
			});
		}
		// 检查最终属性是否有归零（衰减后也需要检查）
		const finalAttrs = newEventCount % 8 === 0 ? decayedAttrs : attributes;
		if (Object.values(finalAttrs).some((a) => a <= 0)) {
			this.setData({ isEndingPending: true, pendingEndingId: null });
			// 属性归零属于突发意外结局，1.5秒后自动跳结局页，不用手动点
			setTimeout(() => {
				this.goToResult();
			}, 1500);
			return;
		}
		if (option.isCultivateOption) {
			this.setData({ isCultivator: true });
			setTimeout(() => this.nextEvent(), 2500);
			return;
		}
		if (option.isEndingOption) {
			this.setData({
				isEndingPending: true,
				pendingEndingId: option.endingId || null,
			});
			return;
		}
		if (this.data.isCultivator) {
			const result = this.checkCultivatorBreakthrough(newAge, attributes);
			if (result) {
				this.setData({ eventResult: result.msg, showResult: true });
				if (result.end) {
					this.setData({
						isEndingPending: true,
						pendingEndingId: null,
					});
					// 渡劫失败也是结局，1.5秒后自动跳结局页
					setTimeout(() => {
						this.goToResult();
					}, 1500);
				}
				else setTimeout(() => this.nextEvent(), 2500);
				return;
			}
		}
		// --- 普通事件：结果显示后，800ms自动跳下一事件
		// 用户也可以手动点击"点击继续"跳过等待
		// 如果已经触发结局(isEndingPending=true)，一定不要自动继续
		if (this.data.status !== 'ended' && !this.data.isEndingPending) {
			this.setData({
				autoNextTimer: setTimeout(() => this.nextEvent(), 800),
			});
		}
	},

	goToResult: function () {
		if (this.data.isEndingPending) this.endGame(this.data.pendingEndingId);
	},

	// 手动跳过结果，直接下一事件（普通非结局事件）
	skipResult: function () {
		if (this.data.autoNextTimer) {
			clearTimeout(this.data.autoNextTimer);
			this.setData({ autoNextTimer: null });
		}
		if (!this.data.isEndingPending) {
			this.nextEvent();
		}
	},

	// 属性自然衰减：随着年龄增长，随机衰减1点属性（40岁后开始）
	ageDecay: function (attributes, age) {
		if (age < 40) return attributes; // 40岁前不衰减
		if (age > 105 && this.data.isCultivator) return attributes; // 修仙者不衰减

		// 40-60岁：20%概率衰减，60-80岁：40%，80+：60%
		let decayChance = 0.2;
		if (age >= 60) decayChance = 0.4;
		if (age >= 80) decayChance = 0.6;

		if (Math.random() > decayChance) return attributes;

		const attrCopy = { ...attributes };
		// 优先衰减活力>魅力>财富>智力>运气，活力最容易衰减
		const candidates = [];
		['vitality', 'charm', 'wealth', 'intelligence', 'luck'].forEach(key => {
			if (attrCopy[key] > 3) candidates.push(key); // 不衰减到0以下
		});

		if (candidates.length > 0) {
			const key = candidates[Math.floor(Math.random() * candidates.length)];
			attrCopy[key]--;
		}

		return attrCopy;
	},

	checkCultivatorBreakthrough: function (age, attrs) {
		const r = Math.random();
		let failChance = 0;
		if (age === 300) {
			failChance = attrs.intelligence < 80 || attrs.luck < 70 ? 0.4 : 0.25;
			if (r < failChance)
				return {
					msg: '💥 筑基期渡劫失败，修为散尽，寿元耗尽...',
					end: true,
				};
			return { msg: '✨ 筑基期渡劫成功！寿命延长到500岁！', end: false };
		}
		if (age === 500) {
			failChance = attrs.intelligence < 90 || attrs.luck < 80 ? 0.45 : 0.3;
			if (r < failChance)
				return { msg: '💥 金丹期渡劫失败，神魂俱灭...', end: true };
			return { msg: '✨ 金丹期渡劫成功！寿命延长到800岁！', end: false };
		}
		if (age === 800) {
			failChance = attrs.intelligence < 95 || attrs.luck < 90 ? 0.55 : 0.35;
			if (r < failChance)
				return {
					msg: '💥 元婴期渡劫失败，被九天神雷劈成飞灰...',
					end: true,
				};
			return { msg: '✨ 元婴期渡劫成功！寿命延长到980岁！', end: false };
		}
		if (age >= 980) {
			failChance = attrs.intelligence < 100 || attrs.luck < 95 ? 0.65 : 0.4;
			if (r < failChance)
				return {
					msg: '💥 九九天劫失败！你在雷火中化为灰烬，修为尽毁...',
					end: true,
				};
			return {
				msg: '✨✨✨ 你历经九九天劫，成功飞升！成为虾中至尊，与天地同寿！✨✨✨',
				end: true,
			};
		}
		return null;
	},

	nextEvent: function () {
		// 直接触发下一个事件，减少中间 setData 次数
		this.data.showResult = false;
		this.data.isEndingPending = false;
		this.triggerRandomEvent();
	},

	endGame: function (forcedEndingId) {
		this.setData({ status: 'ended' });
		const finalData = {
			age: this.data.age,
			attributes: this.data.attributes,
			isCultivator: this.data.isCultivator,
			forcedEndingId: forcedEndingId || null,
		};
		wx.redirectTo({
			url:
				'/pages/result/result?data=' +
				encodeURIComponent(JSON.stringify(finalData)),
		});
	},

	skipWaiting: function () {
		// 已移除等待画面，此函数保留兼容性
	},

	skipResult: function () {
		if (this.data.isEndingPending) {
			this.endGame(this.data.pendingEndingId);
			return;
		}
		if (this.data.showResult && this.data.status !== 'ended') {
			if (this.data.autoNextTimer) clearTimeout(this.data.autoNextTimer);
			this.nextEvent();
		}
	},

	backToHome: function () {
		wx.navigateBack();
	},
});

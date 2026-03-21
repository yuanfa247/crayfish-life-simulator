// pages/game/game.js
const app = getApp();
const eventList = require('../../data/events.js');

Page({
	data: {
		status: 'event',
		age: 1,
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
	getEndingRatio: function (age) {
		if (age < 18) return 0.005; // 18岁以下极低
		if (age < 30) return 0.01; // 18-29岁 1%
		if (age < 40) return 0.02; // 30-39岁 2%
		if (age < 50) return 0.04 + (age - 40) * 0.003; // 40-49岁 4%-7%
		if (age < 60) return 0.07 + (age - 50) * 0.008; // 50-59岁 7%-15%
		if (age < 70) return 0.15 + (age - 60) * 0.015; // 60-69岁 15%-30%
		if (age < 80) return 0.3 + (age - 70) * 0.02; // 70-79岁 30%-50%
		return Math.min(0.85, 0.5 + (age - 80) * 0.012); // 80+岁
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
		if (newEventCount % 8 === 0) newAge++;
		this.setData({
			attributes,
			eventCount: newEventCount,
			age: newAge,
			ageStage: this.getAgeStage(newAge),
			eventResult: option.result,
			attrChanges,
			showResult: true,
		});
		if (Object.values(attributes).some((a) => a <= 0)) {
			this.setData({ isEndingPending: true, pendingEndingId: null });
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
				if (result.end)
					this.setData({
						isEndingPending: true,
						pendingEndingId: null,
					});
				else setTimeout(() => this.nextEvent(), 2500);
				return;
			}
		}
		if (this.data.status !== 'ended') {
			this.setData({
				autoNextTimer: setTimeout(() => this.nextEvent(), 800),
			});
		}
	},

	goToResult: function () {
		if (this.data.isEndingPending) this.endGame(this.data.pendingEndingId);
	},

	checkCultivatorBreakthrough: function (age, attrs) {
		const r = Math.random();
		if (age === 300) {
			if (attrs.intelligence < 80 || attrs.luck < 70 || r < 0.2)
				return {
					msg: '💥 筑基期渡劫失败，修为散尽，寿元耗尽...',
					end: true,
				};
			return { msg: '✨ 筑基期渡劫成功！寿命延长到500岁！', end: false };
		}
		if (age === 500) {
			if (attrs.intelligence < 90 || attrs.luck < 80 || r < 0.25)
				return { msg: '💥 金丹期渡劫失败，神魂俱灭...', end: true };
			return { msg: '✨ 金丹期渡劫成功！寿命延长到800岁！', end: false };
		}
		if (age === 800) {
			if (attrs.intelligence < 95 || attrs.luck < 90 || r < 0.3)
				return {
					msg: '💥 元婴期渡劫失败，被九天神雷劈成飞灰...',
					end: true,
				};
			return { msg: '✨ 元婴期渡劫成功！寿命延长到980岁！', end: false };
		}
		if (age >= 980) {
			if (attrs.intelligence < 100 || attrs.luck < 95 || r < 0.35)
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

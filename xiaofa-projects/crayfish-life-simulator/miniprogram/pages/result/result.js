// pages/result/result.js
const endingList = require('../../data/endings.js');

Page({
	data: {
		age: 1,
		attributes: {},
		attrList: [],
		isCultivator: false,
		forcedEndingId: null,
		ending: null,
		endingText: '',
		totalScore: 0,
	},

	onLoad: function (options) {
		if (options.data) {
			const finalData = JSON.parse(decodeURIComponent(options.data));
			// 先同步赋值到 this.data，再 setData，确保 calculateEnding 能读到最新值
			this.data.age = finalData.age;
			this.data.attributes = finalData.attributes;
			this.data.isCultivator = finalData.isCultivator || false;
			this.data.forcedEndingId = finalData.forcedEndingId || null;
			this.setData({
				age: finalData.age,
				attributes: finalData.attributes,
				isCultivator: finalData.isCultivator || false,
				forcedEndingId: finalData.forcedEndingId || null,
			});
			this.calculateEnding();
		}
	},

	// 根据最终属性计算结局
	calculateEnding: function () {
		const { age, attributes, isCultivator, forcedEndingId } = this.data;
		let totalScore = 0;
		for (const v of Object.values(attributes)) {
			totalScore += v;
		}

		let matchedEnding = null;

		// 优先使用结局事件直接指定的结局 ID
		if (forcedEndingId) {
			matchedEnding = endingList.find((e) => e.id === forcedEndingId);
		}

		// 修仙成功结局
		if (!matchedEnding && isCultivator && age >= 980) {
			const intelligence = attributes.intelligence || 0;
			const luck = attributes.luck || 0;
			const charm = attributes.charm || 0;
			const vitality = attributes.vitality || 0;

			if (vitality >= 100 && intelligence >= 80 && luck >= 80) {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_immortal_supreme'
				);
			} else if (intelligence >= 100 && luck >= 95) {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_immortal_free'
				);
			} else if (charm >= 80 && vitality >= 70) {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_immortal_guardian'
				);
			} else if (intelligence >= 90 && luck >= 85) {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_immortal_explorer'
				);
			} else {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_immortal_basic'
				);
			}
		}

		// 修仙失败结局
		if (!matchedEnding && isCultivator && age >= 300) {
			if (age >= 800) {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_800_fail'
				);
			} else if (age >= 500) {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_500_fail'
				);
			} else {
				matchedEnding = endingList.find(
					(e) => e.id === 'cultivator_300_fail'
				);
			}
		}

		// 普通人生结局：按优先级匹配
		if (!matchedEnding) {
			const sortedEndings = endingList
				.filter((e) => !e.id.startsWith('cultivator_'))
				.sort((a, b) => (b.priority || 0) - (a.priority || 0));

			for (const ending of sortedEndings) {
				let match = true;

				if (ending.minAge && age < ending.minAge) match = false;
				if (ending.maxAge && age > ending.maxAge) match = false;

				if (match && ending.conditions) {
					for (const [attr, cond] of Object.entries(
						ending.conditions
					)) {
						const val = attributes[attr] || 0;
						if (cond.min && val < cond.min) match = false;
						if (cond.max && val > cond.max) match = false;
					}
				}

				if (match && ending.totalScore) {
					if (
						ending.totalScore.min &&
						totalScore < ending.totalScore.min
					)
						match = false;
					if (
						ending.totalScore.max &&
						totalScore > ending.totalScore.max
					)
						match = false;
				}

				if (match) {
					matchedEnding = ending;
					break;
				}
			}
		}

		// 兜底默认结局
		if (!matchedEnding) {
			matchedEnding = endingList.find((e) => e.id === 'default') || {
				title: '平凡的一生',
				description:
					'你的小龙虾平平淡淡地走完了一生，这就是最简单的幸福。',
				image: '🦞',
			};
		}

		// 替换 endingText 中的 {{age}} 占位符
		const endingText = matchedEnding.endingText
			? matchedEnding.endingText.replace('{{age}}', age)
			: '';

		const attrLabels = {
			vitality: '活力',
			intelligence: '智力',
			wealth: '财富',
			luck: '运气',
			charm: '魅力',
		};
		const attrList = Object.keys(attrLabels).map((key) => ({
			key,
			label: attrLabels[key],
			value: this.data.attributes[key] || 0,
		}));

		this.setData({
			ending: matchedEnding,
			endingText,
			attrList,
			totalScore,
		});
	},

	restart: function () {
		wx.reLaunch({
			url: '/pages/index/index',
		});
	},

	backHome: function () {
		wx.reLaunch({
			url: '/pages/index/index',
		});
	},

	shareGame: function () {},

	onShareAppMessage: function () {
		const ageText = this.data.isCultivator ? '修行了' : '活了';
		return {
			title:
				'我的小龙虾' +
				ageText +
				this.data.age +
				'岁，快来养一只你的小龙虾！',
			path: '/pages/index/index',
		};
	},
});

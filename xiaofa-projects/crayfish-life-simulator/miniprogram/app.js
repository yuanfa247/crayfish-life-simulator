// app.js - 《养成一只龙虾》人生模拟器
// 背景故事：你原本是一只小龙虾，在菜市场被捞起后意外转生成为人类
// 现在你要体验完整的人生，同时保留前世龙虾的特殊能力
App({
	onLaunch() {
		// 小程序启动
		console.log('养成一只龙虾 - 人生模拟器启动');
		// 初始化全局数据
		this.globalData = {
			// 游戏状态
			gameStatus: 'idle',
			// 用户偏好
			settings: {
				enableAds: true,
				autoSave: true,
			},
			// 多周目继承数据
			newGamePlus: {
				// 继承属性：上一局的20%属性加成到下一局
				inheritedAttrs: {
					vitality: 0,
					intelligence: 0,
					wealth: 0,
					luck: 0,
					charm: 0,
				},
				// 当前周目数
				runCount: 0,
			},
			// 成就系统
			achievements: [
				{
					id: 1,
					name: "初次体验",
					desc: "完成第一局游戏",
					unlocked: false,
					unlockTime: null,
					reward: { vitality: 1 }
				},
				{
					id: 2,
					name: "长寿老人",
					desc: "寿命达到90岁以上",
					unlocked: false,
					unlockTime: null,
					reward: { vitality: 2 }
				},
				{
					id: 3,
					name: "世界首富",
					desc: "财富达到100以上",
					unlocked: false,
					unlockTime: null,
					reward: { wealth: 2 }
				},
				{
					id: 4,
					name: "修仙大佬",
					desc: "成功飞升成仙",
					unlocked: false,
					unlockTime: null,
					reward: { intelligence: 2, luck: 1 }
				},
				{
					id: 5,
					name: "人生赢家",
					desc: "全属性都达到80以上",
					unlocked: false,
					unlockTime: null,
					reward: { all: 1 }
				},
				{
					id: 6,
					name: "非酋转世",
					desc: "连续3局不到30岁就死亡",
					unlocked: false,
					unlockTime: null,
					reward: { luck: 3 }
				},
				{
					id: 7,
					name: "百战百胜",
					desc: "完成10局游戏",
					unlocked: false,
					unlockTime: null,
					reward: { all: 2 }
				},
				{
					id: 8,
					name: "龙虾王",
					desc: "解锁所有龙虾专属天赋",
					unlocked: false,
					unlockTime: null,
					reward: { vitality: 3, luck: 2 }
				}
			]
		};

		// 从本地存储加载多周目和成就数据
		this.loadSaveData();
	},

	// 加载本地保存的数据
	loadSaveData() {
		try {
			const newGamePlus = wx.getStorageSync('newGamePlus');
			const achievements = wx.getStorageSync('achievements');
			if (newGamePlus) {
				this.globalData.newGamePlus = newGamePlus;
			}
			if (achievements) {
				this.globalData.achievements = achievements;
			}
		} catch (e) {
			console.log('加载存档失败', e);
		}
	},

	// 保存数据到本地存储
	saveData() {
		try {
			wx.setStorageSync('newGamePlus', this.globalData.newGamePlus);
			wx.setStorageSync('achievements', this.globalData.achievements);
		} catch (e) {
			console.log('保存存档失败', e);
		}
	},

	// 解锁成就
	unlockAchievement(achievementId) {
		const achievement = this.globalData.achievements.find(a => a.id === achievementId);
		if (achievement && !achievement.unlocked) {
			achievement.unlocked = true;
			achievement.unlockTime = new Date().toISOString();
			// 应用成就奖励到继承属性
			if (achievement.reward) {
				for (const [key, val] of Object.entries(achievement.reward)) {
					if (key === 'all') {
						this.globalData.newGamePlus.inheritedAttrs.vitality += val;
						this.globalData.newGamePlus.inheritedAttrs.intelligence += val;
						this.globalData.newGamePlus.inheritedAttrs.wealth += val;
						this.globalData.newGamePlus.inheritedAttrs.luck += val;
						this.globalData.newGamePlus.inheritedAttrs.charm += val;
					} else if (this.globalData.newGamePlus.inheritedAttrs.hasOwnProperty(key)) {
						this.globalData.newGamePlus.inheritedAttrs[key] += val;
					}
				}
			}
			this.saveData();
			return achievement;
		}
		return null;
	},

	globalData: {},
});

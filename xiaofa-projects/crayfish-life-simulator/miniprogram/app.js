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
		};
	},
	globalData: {},
});

// pages/result/result.js
Page({
  data: {
    survivalDays: 0,
    finalLevel: 1,
    achievements: []
  },

  onLoad: function () {
    // 计算生存天数等结果
    this.calculateResult()
  },

  calculateResult: function () {
    // TODO: 从游戏页面获取实际数据
    // 临时模拟数据
    this.setData({
      survivalDays: Math.floor(Math.random() * 30) + 1,
      finalLevel: 1,
      achievements: [
        { name: '初次见面', unlocked: true },
        { name: '存活一周', unlocked: this.data.survivalDays >= 7 },
        { name: '满级达人', unlocked: this.data.finalLevel >= 10 }
      ]
    })
  },

  // 重新开始
  restart: function () {
    wx.redirectTo({
      url: '/pages/game/game'
    })
  },

  // 返回首页
  backHome: function () {
    wx.navigateBack()
  }
})

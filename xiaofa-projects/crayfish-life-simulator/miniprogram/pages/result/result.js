// pages/result/result.js
const endingList = require('../../data/endings.js')

Page({
  data: {
    age: 1,
    attributes: {},
    ending: null
  },

  onLoad: function (options) {
    if (options.data) {
      const finalData = JSON.parse(decodeURIComponent(options.data))
      this.setData({
        age: finalData.age,
        attributes: finalData.attributes
      })
      this.calculateEnding()
    }
  },

  // 根据最终属性计算结局
  calculateEnding: function () {
    const { age, attributes } = this.data
    let totalScore = 0
    for (const v of Object.values(attributes)) {
      totalScore += v
    }

    // 根据总分数和年龄匹配结局
    let matchedEnding = null
    // 按优先级从高到低匹配
    const sortedEndings = endingList.sort((a, b) => (b.priority || 0) - (a.priority || 0))
    
    for (const ending of sortedEndings) {
      let match = true
      
      // 检查年龄条件
      if (ending.minAge && age < ending.minAge) match = false
      if (ending.maxAge && age > ending.maxAge) match = false
      
      // 检查属性条件
      if (match && ending.conditions) {
        for (const [attr, cond] of Object.entries(ending.conditions)) {
          const val = attributes[attr] || 0
          if (cond.min && val < cond.min) match = false
          if (cond.max && val > cond.max) match = false
        }
      }

      // 检查总分条件
      if (match && ending.totalScore) {
        if (ending.totalScore.min && totalScore < ending.totalScore.min) match = false
        if (ending.totalScore.max && totalScore > ending.totalScore.max) match = false
      }

      if (match) {
        matchedEnding = ending
        break
      }
    }

    // 如果没有匹配到，使用默认结局
    if (!matchedEnding) {
      matchedEnding = endingList.find(e => e.id === 'default') || {
        title: '平凡的一生',
        description: '你的小龙虾平平淡淡地走完了一生，没有波澜壮阔，也没有惊天动地，这就是最简单的幸福。',
        image: '🦞'
      }
    }

    this.setData({
      ending: matchedEnding,
      totalScore
    })
  },

  // 重新开始游戏 - 直接回到首页，首页会自动重置
  restart: function () {
    wx.navigateBack()
  },

  // 返回首页
  backHome: function () {
    wx.navigateBack()
  },

  // 分享游戏
  shareGame: function () {
    // 微信小程序分享会自动处理
  },

  onShareAppMessage: function () {
    return {
      title: '我的小龙虾活了' + this.data.age + '岁，快来养一只你的小龙虾！',
      path: '/pages/index/index'
    }
  }
})

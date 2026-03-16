// pages/game/game.js
const app = getApp()

Page({
  data: {
    // 游戏状态
    status: 'playing', // playing, paused, ended
    // 当前属性
    attributes: {
      health: 100,
      happiness: 100,
      hunger: 100,
      clean: 100,
      experience: 0,
      level: 1
    },
    // 事件列表
    events: [],
    // 倒计时
    nextEventTimer: 0
  },

  onLoad: function () {
    this.initGame()
  },

  onShow: function () {
    // 启动事件倒计时
    this.startEventTimer()
  },

  onHide: function () {
    this.stopEventTimer()
  },

  // 初始化游戏
  initGame: function () {
    this.setData({
      'attributes.health': 100,
      'attributes.happiness': 100,
      'attributes.hunger': 100,
      'attributes.clean': 100,
      'attributes.experience': 0,
      'attributes.level': 1,
      status: 'playing',
      events: []
    })
  },

  // 开始事件倒计时
  startEventTimer: function () {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000)
  },

  // 停止倒计时
  stopEventTimer: function () {
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  },

  // 每秒滴答
  tick: function () {
    // 消耗属性
    let { hunger, clean, happiness } = this.data.attributes
    hunger -= 1
    clean -= 1
    happiness -= 0.5

    this.setData({
      'attributes.hunger': Math.max(0, hunger),
      'attributes.clean': Math.max(0, clean),
      'attributes.happiness': Math.max(0, happiness)
    })

    // 检查游戏是否结束
    this.checkGameOver()
  },

  // 检查游戏结束
  checkGameOver: function () {
    const { health } = this.data.attributes
    if (health <= 0) {
      this.gameOver()
    }
  },

  // 游戏结束
  gameOver: function () {
    this.setData({ status: 'ended' })
    this.stopEventTimer()
    
    // 跳转到结果页
    wx.redirectTo({
      url: '/pages/result/result'
    })
  },

  // 喂食
  feed: function () {
    let { hunger, happiness } = this.data.attributes
    hunger = Math.min(100, hunger + 30)
    happiness += 5
    this.setData({
      'attributes.hunger': hunger,
      'attributes.happiness': Math.min(100, happiness)
    })
  },

  // 清洁
  clean: function () {
    let { clean, happiness } = this.data.attributes
    clean = Math.min(100, clean + 30)
    happiness += 5
    this.setData({
      'attributes.clean': clean,
      'attributes.happiness': Math.min(100, happiness)
    })
  },

  // 玩耍
  play: function () {
    let { happiness, hunger } = this.data.attributes
    happiness = Math.min(100, happiness + 20)
    hunger -= 10
    this.setData({
      'attributes.happiness': happiness,
      'attributes.hunger': Math.max(0, hunger)
    })
  },

  // 休息
  rest: function () {
    let { health, happiness } = this.data.attributes
    health = Math.min(100, health + 20)
    happiness += 10
    this.setData({
      'attributes.health': health,
      'attributes.happiness': Math.min(100, happiness)
    })
  }
})

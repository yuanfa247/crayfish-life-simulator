// pages/game/game.js
const app = getApp()
const eventList = require('../../data/events.js')

Page({
  data: {
    // 游戏状态
    status: 'playing', // playing: 游戏中, event: 事件选择, ended: 结束
    // 当前年龄
    age: 1,
    // 年龄阶段
    ageStage: '幼虾', // 幼虾/青年/壮年/老年
    // 总经历事件数
    eventCount: 0,
    // 初始属性（从首页传入）
    attributes: {
      vitality: 0,    // 活力
      intelligence: 0,// 智力
      wealth: 0,      // 财富
      luck: 0,        // 运气
      charm: 0        // 魅力
    },
    // 当前事件
    currentEvent: null,
    // 事件选择后的结果展示
    showResult: false,
    eventResult: ''
  },

  onLoad: function (options) {
    // 从首页获取初始属性
    if (options.attributes) {
      const attrs = JSON.parse(decodeURIComponent(options.attributes))
      this.setData({
        attributes: attrs
      })
    } else {
      // 默认属性
      this.setData({
        'attributes.vitality': 10,    // 活力
        'attributes.intelligence': 10,// 智力
        'attributes.wealth': 10,      // 财富/食物储备
        'attributes.luck': 10,        // 运气
        'attributes.charm': 10        // 魅力
      })
    }
  },

  // 根据年龄获取年龄阶段
  getAgeStage: function (age) {
    if (age <= 5) return '幼虾'
    if (age <= 15) return '青年'
    if (age <= 30) return '壮年'
    return '老年'
  },

  // 获取符合当前条件的可触发事件列表
  getAvailableEvents: function () {
    const { age, attributes } = this.data
    // 更新年龄阶段
    const ageStage = this.getAgeStage(age)
    this.setData({ ageStage })
    
    return eventList.filter(e => {
      // 年龄范围筛选
      const minAge = e.minAge || 1
      const maxAge = e.maxAge || 100
      if (age < minAge || age > maxAge) return false
      
      // 属性条件筛选（如果有配置）
      if (e.requires) {
        for (const [key, minValue] of Object.entries(e.requires)) {
          if (!attributes.hasOwnProperty(key)) continue
          if (attributes[key] < minValue) return false
        }
      }
      
      return true
    })
  },

  // 随机抽取一个事件
  triggerRandomEvent: function () {
    const availableEvents = this.getAvailableEvents()
    if (availableEvents.length === 0) {
      // 没有符合条件的事件，继续等待
      this.setData({ status: 'playing' })
      return
    }
    // 随机抽取
    const randomIndex = Math.floor(Math.random() * availableEvents.length)
    const event = availableEvents[randomIndex]
    this.setData({
      currentEvent: event,
      status: 'event',
      showResult: false
    })
  },

  // 开始新事件（点击按钮触发）
  startNewEvent: function () {
    this.triggerRandomEvent()
  },

  // 选择事件选项
  selectOption: function (e) {
    const optionIndex = e.currentTarget.dataset.index
    const option = this.data.currentEvent.options[optionIndex]
    
    // 应用属性变化
    const attributes = { ...this.data.attributes }
    for (const [key, delta] of Object.entries(option.effects)) {
      // 只处理已定义的五个属性，忽略happiness/health等遗留字段
      if (attributes.hasOwnProperty(key)) {
        attributes[key] += delta
        // 属性不能小于0
        if (attributes[key] < 0) attributes[key] = 0
      }
    }

    // 更新数据
    this.setData({
      attributes,
      eventCount: this.data.eventCount + 1,
      eventResult: option.result,
      showResult: true
    })

    // 每经历5个事件，年龄增长1岁
    if (this.data.eventCount % 5 === 0) {
      const newAge = this.data.age + 1
      this.setData({
        age: newAge,
        ageStage: this.getAgeStage(newAge)
      })
    }

    // 检查是否游戏结束（年龄达到最大或某个属性归零）
    this.checkGameEnd()
  },

  // 检查游戏是否结束
  checkGameEnd: function () {
    const { age, attributes } = this.data
    const attrs = Object.values(attributes)
    // 任意属性归0 或 年龄达到60，游戏结束
    if (attrs.some(a => a <= 0) || age >= 60) {
      this.endGame()
    }
  },

  // 继续下一个事件
  nextEvent: function () {
    this.setData({
      status: 'playing',
      currentEvent: null,
      showResult: false
    })
  },

  // 结束游戏，跳转结果页
  endGame: function () {
    this.setData({ status: 'ended' })
    // 将最终属性和年龄传给结果页
    const finalData = {
      age: this.data.age,
      attributes: this.data.attributes
    }
    wx.redirectTo({
      url: '/pages/result/result?data=' + encodeURIComponent(JSON.stringify(finalData))
    })
  },

  // 返回首页
  backToHome: function () {
    wx.navigateBack()
  }
})

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
    ageStage: '幼虾', // 幼虾/青年/壮年/老年/筑基期(300+)/金丹期(500+)/元婴期(800+)/渡劫期(980)
    // 总经历事件数
    eventCount: 0,
    // 是否进入修仙模式
    isCultivator: false,
    // 天赋标签，影响事件触发
    talentTags: [],
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
    // 从首页获取初始属性和天赋
    if (options.params) {
      const params = JSON.parse(decodeURIComponent(options.params))
      this.setData({
        attributes: params.attributes,
        talentTags: params.talentTags || []
      })
    } else {
      // 默认属性
      this.setData({
        'attributes.vitality': 10,    // 活力
        'attributes.intelligence': 10,// 智力
        'attributes.wealth': 10,      // 财富/食物储备
        'attributes.luck': 10,        // 运气
        'attributes.charm': 10        // 魅力,
        talentTags: []
      })
    }
    // 修仙天赋直接开启修仙模式
    if (this.data.talentTags.includes('cultivate') || this.data.talentTags.includes('god')) {
      this.setData({ isCultivator: true })
    }
    // 提前预加载事件列表，优化读取速度
    this.getAvailableEvents()
    // 自动触发第一个事件，缩短等待时间
    setTimeout(() => {
      this.triggerRandomEvent()
    }, 300)
  },

  // 根据年龄获取年龄阶段
  getAgeStage: function (age) {
    if (this.data.isCultivator) {
      if (age >= 980) return '渡劫期'
      if (age >= 800) return '元婴期'
      if (age >= 500) return '金丹期'
      if (age >= 300) return '筑基期'
      return '修仙者'
    }
    if (age <= 5) return '幼虾'
    if (age <= 15) return '青年'
    if (age <= 30) return '壮年'
    if (age <= 105) return '老年'
    return '长寿者'
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

  // 随机抽取一个事件（天赋标签加权）
  triggerRandomEvent: function () {
    const availableEvents = this.getAvailableEvents()
    if (availableEvents.length === 0) {
      // 没有符合条件的事件，继续等待
      this.setData({ status: 'playing' })
      return
    }
    // 天赋加权：对应标签的事件概率提升3倍
    const weightedEvents = []
    const talentTags = this.data.talentTags
    availableEvents.forEach(event => {
      let weight = 1
      // 如果事件有tag，且天赋包含该tag，权重乘以3
      if (event.tags) {
        event.tags.forEach(tag => {
          if (talentTags.includes(tag) || talentTags.includes('god')) {
            weight *= 3
          }
        })
      }
      // 锦鲤天赋，所有事件权重乘以2
      if (talentTags.includes('luck')) {
        weight *= 2
      }
      // 按权重添加到数组
      for (let i = 0; i < weight; i++) {
        weightedEvents.push(event)
      }
    })
    // 随机抽取加权后的事件
    const randomIndex = Math.floor(Math.random() * weightedEvents.length)
    const event = weightedEvents[randomIndex]
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
    
    // 1.2秒后自动进入下一个事件，也支持点击跳过
    if (this.data.status !== 'ended') {
      this.setData({ autoNextTimer: setTimeout(() => {
        this.nextEvent()
      }, 1200) })
    }
  },

  // 检查游戏是否结束
  checkGameEnd: function () {
    const { age, attributes, isCultivator } = this.data
    const attrs = Object.values(attributes)
    
    // 普通模式（未修仙）
    if (!isCultivator) {
      // 60岁以下，任意属性归0 → 意外死亡
      if (age < 60 && attrs.some(a => a <= 0)) {
        this.endGame()
        return
      }
      // 60-105岁，任意属性归0 → 寿终正寝；到105岁自动结束
      if ((age >= 60 && age <= 105) && (attrs.some(a => a <= 0) || age === 105)) {
        this.endGame()
        return
      }
      // 105岁以上，小概率触发修仙机缘（有修仙天赋直接触发，否则智力≥70，运气≥60）
      if ((age > 105 && attributes.intelligence >= 70 && attributes.luck >= 60) || talentTags.includes('cultivate')) {
        this.setData({ isCultivator: true })
        // 触发修仙事件
        this.setData({
          eventResult: "🎉 你意外获得上古传承，踏上修仙之路，寿命大幅延长！",
          showResult: true
        })
        setTimeout(() => {
          this.nextEvent()
        }, 3000)
        return
      }
    }

    // 修仙模式
    if (isCultivator) {
      // 300岁渡劫坎：智力≥80，运气≥70
      if (age === 300) {
        if (attributes.intelligence < 80 || attributes.luck < 70) {
          this.setData({
            eventResult: "💥 筑基期渡劫失败，修为散尽，寿元耗尽...",
            showResult: true
          })
          setTimeout(() => this.endGame(), 2000)
          return
        }
      }
      // 500岁渡劫坎：智力≥90，运气≥80
      if (age === 500) {
        if (attributes.intelligence < 90 || attributes.luck < 80) {
          this.setData({
            eventResult: "💥 金丹期渡劫失败，神魂俱灭...",
            showResult: true
          })
          setTimeout(() => this.endGame(), 2000)
          return
        }
      }
      // 800岁渡劫坎：智力≥95，运气≥90
      if (age === 800) {
        if (attributes.intelligence < 95 || attributes.luck < 90) {
          this.setData({
            eventResult: "💥 元婴期渡劫失败，被九天神雷劈成飞灰...",
            showResult: true
          })
          setTimeout(() => this.endGame(), 2000)
          return
        }
      }
      // 980岁终极渡劫，成功达成最高结局
      if (age >= 980) {
        this.setData({
          eventResult: "✨ 你历经九九天劫，成功飞升，成为虾中至尊，与天地同寿！",
          showResult: true
        })
        setTimeout(() => this.endGame(), 3000)
        return
      }
    }
  },

  // 继续下一个事件（自动触发）
  nextEvent: function () {
    this.setData({
      status: 'playing',
      currentEvent: null,
      showResult: false
    })
    // 自动触发下一个事件，缩短等待时间
    setTimeout(() => {
      this.triggerRandomEvent()
    }, 300)
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

  // 跳过等待直接触发事件
  skipWaiting: function () {
    if (this.data.status === 'playing') {
      this.triggerRandomEvent()
    }
  },

  // 跳过结果展示直接进入下一个事件
  skipResult: function () {
    if (this.data.showResult && this.data.status !== 'ended') {
      // 清除自动跳转定时器
      if (this.data.autoNextTimer) {
        clearTimeout(this.data.autoNextTimer)
      }
      this.nextEvent()
    }
  },

  // 返回首页
  backToHome: function () {
    wx.navigateBack()
  }
})

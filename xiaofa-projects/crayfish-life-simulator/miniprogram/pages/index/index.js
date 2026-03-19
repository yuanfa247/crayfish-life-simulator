// index.js - 首页
const app = getApp();

Page({
  data: {
    // 随机生成的开局属性
    attrs: {
      vitality: 0,
      intelligence: 0,
      wealth: 0,
      luck: 0,
      charm: 0
    }
  },

  onLoad() {
    // 页面加载就随机生成开局
    this.randomAttrs();
  },

  // 随机生成开局属性（总和50点）
  randomAttrs() {
    let total = 50;
    let attrs = {
      vitality: 0,
      intelligence: 0,
      wealth: 0,
      luck: 0,
      charm: 0
    };

    const keys = Object.keys(attrs);
    // 每个属性最少5点
    keys.forEach(key => {
      attrs[key] = 5;
      total -= 5;
    });

    // 随机分配剩余点数
    while (total > 0) {
      const key = keys[Math.floor(Math.random() * keys.length)];
      const add = Math.min(Math.ceil(Math.random() * total), total);
      attrs[key] += add;
      total -= add;
    }

    this.setData({ attrs });
  },

  // 重新随机
  reRandom() {
    this.randomAttrs();
  },

  // 开始游戏
  startGame() {
    const attrsStr = encodeURIComponent(JSON.stringify(this.data.attrs));
    wx.navigateTo({
      url: `/pages/game/game?attributes=${attrsStr}`
    });
  },

  // 打开设置
  openSettings() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  }
})

// index.js - 首页
const app = getApp();

Page({
  data: {
    // 当前步骤 1:属性分配 2:天赋选择
    step: 1,
    // 随机生成的开局属性
    attrs: {
      vitality: 0,
      intelligence: 0,
      wealth: 0,
      luck: 0,
      charm: 0
    },
    // 属性列表，用于循环展示
    attrList: [
      { key: 'vitality', label: '活力' },
      { key: 'intelligence', label: '智力' },
      { key: 'wealth', label: '财富' },
      { key: 'luck', label: '运气' },
      { key: 'charm', label: '魅力' }
    ],
    // 总属性点
    totalPoints: 50,
    // 剩余可分配点数
    remainingPoints: 0,
    // 天赋列表 10选3
    talentList: [
      { id: 1, name: '天生神力', desc: '从小力气就比别人大', effectDesc: '活力+5', effects: { vitality: 5 } },
      { id: 2, name: '学霸附体', desc: '学习能力超强', effectDesc: '智力+5', effects: { intelligence: 5 } },
      { id: 3, name: '家财万贯', desc: '出生在富裕家庭', effectDesc: '财富+5', effects: { wealth: 5 } },
      { id: 4, name: '锦鲤转世', desc: '运气好到爆棚', effectDesc: '运气+5', effects: { luck: 5 } },
      { id: 5, name: '颜值爆表', desc: '长得特别好看', effectDesc: '魅力+5', effects: { charm: 5 } },
      { id: 6, name: '修仙体质', desc: '天生适合修行', effectDesc: '智力+3，运气+2', effects: { intelligence: 3, luck: 2 } },
      { id: 7, name: '社交达人', desc: '特别会说话', effectDesc: '魅力+3，财富+2', effects: { charm: 3, wealth: 2 } },
      { id: 8, name: '钢铁身躯', desc: '不容易生病受伤', effectDesc: '活力+3，魅力+2', effects: { vitality: 3, charm: 2 } },
      { id: 9, name: '商业头脑', desc: '特别会赚钱', effectDesc: '智力+3，财富+2', effects: { intelligence: 3, wealth: 2 } },
      { id: 10, name: '天选之子', desc: '各方面都很均衡', effectDesc: '全属性+2', effects: { vitality: 2, intelligence: 2, wealth: 2, luck: 2, charm: 2 } }
    ],
    // 已选择的天赋
    selectedTalents: []
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
    // 每个属性最少1点
    keys.forEach(key => {
      attrs[key] = 1;
      total -= 1;
    });

    // 随机分配剩余点数
    while (total > 0) {
      const key = keys[Math.floor(Math.random() * keys.length)];
      const add = Math.min(Math.ceil(Math.random() * total), total);
      attrs[key] += add;
      total -= add;
    }

    // 计算剩余点数
    const used = Object.values(attrs).reduce((sum, val) => sum + val, 0);
    this.setData({ 
      attrs, 
      remainingPoints: this.data.totalPoints - used 
    });
  },

  // 调整属性点数
  changeAttr(e) {
    const { key, op } = e.currentTarget.dataset;
    const attrs = { ...this.data.attrs };
    let remainingPoints = this.data.remainingPoints;

    if (op === '+') {
      if (remainingPoints <= 0) return;
      attrs[key] += 1;
      remainingPoints -= 1;
    } else if (op === '-') {
      if (attrs[key] <= 1) return;
      attrs[key] -= 1;
      remainingPoints += 1;
    }

    this.setData({ attrs, remainingPoints });
  },

  // 进入天赋选择步骤
  goToTalent() {
    if (this.data.remainingPoints !== 0) {
      wx.showToast({ title: '请分配完所有属性点', icon: 'none' });
      return;
    }
    // 重置天赋选择
    const talentList = this.data.talentList.map(t => ({ ...t, selected: false }));
    this.setData({ step: 2, talentList, selectedTalents: [] });
  },

  // 返回属性调整步骤
  goToAttr() {
    this.setData({ step: 1 });
  },

  // 选择/取消天赋
  selectTalent(e) {
    const talentId = e.currentTarget.dataset.id;
    const talentList = [...this.data.talentList];
    const selectedTalents = [...this.data.selectedTalents];
    const talentIndex = talentList.findIndex(t => t.id === talentId);
    const talent = talentList[talentIndex];

    if (talent.selected) {
      // 取消选择
      talent.selected = false;
      const index = selectedTalents.findIndex(t => t.id === talentId);
      selectedTalents.splice(index, 1);
    } else {
      // 最多选3个
      if (selectedTalents.length >= 3) {
        wx.showToast({ title: '最多选择3个天赋', icon: 'none' });
        return;
      }
      talent.selected = true;
      selectedTalents.push(talent);
    }

    this.setData({ talentList, selectedTalents });
  },

  // 重新随机
  reRandom() {
    this.randomAttrs();
  },

  // 开始游戏
  startGame() {
    // 应用天赋加成
    const finalAttrs = { ...this.data.attrs };
    this.data.selectedTalents.forEach(talent => {
      for (const [key, val] of Object.entries(talent.effects)) {
        if (finalAttrs.hasOwnProperty(key)) {
          finalAttrs[key] += val;
        }
      }
    });
    const attrsStr = encodeURIComponent(JSON.stringify(finalAttrs));
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

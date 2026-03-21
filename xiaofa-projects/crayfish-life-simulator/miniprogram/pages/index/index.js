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
    totalPoints: 25,
    // 剩余可分配点数
    remainingPoints: 0,
    // 完整天赋库（所有可选天赋），等级：0-白板 1-绿色 2-蓝色 3-紫色 4-橙色 5-红色
    talentPool: [
      // 白板天赋（等级0，最多，普通实用不废柴）
      { id: 101, name: '身强体健', desc: '从小很少生病', effectDesc: '活力+2', level: 0, effects: { vitality: 2 } },
      { id: 102, name: '过目不忘', desc: '记东西比别人快', effectDesc: '智力+2', level: 0, effects: { intelligence: 2 } },
      { id: 103, name: '勤俭节约', desc: '平时不乱花钱', effectDesc: '财富+2', level: 0, effects: { wealth: 2 } },
      { id: 104, name: '运气不错', desc: '偶尔能捡小便宜', effectDesc: '运气+2', level: 0, effects: { luck: 2 } },
      { id: 105, name: '讨人喜欢', desc: '长辈都很喜欢你', effectDesc: '魅力+2', level: 0, effects: { charm: 2 } },
      { id: 106, name: '能跑能跳', desc: '体育成绩一直不错', effectDesc: '活力+1，运气+1', level: 0, effects: { vitality: 1, luck: 1 } },
      { id: 107, name: '喜欢看书', desc: '平时没事就爱看书', effectDesc: '智力+1，魅力+1', level: 0, effects: { intelligence: 1, charm: 1 } },
      { id: 108, name: '手气还行', desc: '抽奖偶尔能中', effectDesc: '运气+1，财富+1', level: 0, effects: { luck: 1, wealth: 1 } },
      { id: 109, name: '人缘挺好', desc: '朋友比较多', effectDesc: '魅力+1，运气+1', level: 0, effects: { charm: 1, luck: 1 } },
      { id: 110, name: '动手能力强', desc: '小手工做的很好', effectDesc: '活力+1，智力+1', level: 0, effects: { vitality: 1, intelligence: 1 } },
      { id: 111, name: '精打细算', desc: '会过日子不乱花钱', effectDesc: '财富+1，智力+1', level: 0, effects: { wealth: 1, intelligence: 1 } },
      { id: 112, name: '爱笑', desc: '每天都开开心心', effectDesc: '魅力+1，活力+1', level: 0, effects: { charm: 1, vitality: 1 } },
      
      // 绿色天赋（等级1，比白板好）
      { id: 201, name: '力气不小', desc: '比同龄人有力气', effectDesc: '活力+3', level: 1, effects: { vitality: 3 } },
      { id: 202, name: '成绩优秀', desc: '读书成绩一直很好', effectDesc: '智力+3', level: 1, effects: { intelligence: 3 } },
      { id: 203, name: '小有积蓄', desc: '家里条件还可以', effectDesc: '财富+3', level: 1, effects: { wealth: 3 } },
      { id: 204, name: '幸运儿', desc: '运气比普通人好', effectDesc: '运气+3', level: 1, effects: { luck: 3 } },
      { id: 205, name: '长相清秀', desc: '长得挺好看的', effectDesc: '魅力+3', level: 1, effects: { charm: 3 } },
      
      // 蓝色天赋（等级2，稀有）
      { id: 1, name: '天生神力', desc: '从小力气就比别人大', effectDesc: '活力+5 | 解锁力量类特殊事件', level: 2, effects: { vitality: 5, tag: 'strength' } },
      { id: 2, name: '学霸附体', desc: '学习能力超强', effectDesc: '智力+5 | 解锁学习类特殊事件', level: 2, effects: { intelligence: 5, tag: 'intelligence' } },
      { id: 7, name: '社交达人', desc: '特别会说话', effectDesc: '魅力+3，财富+2 | 解锁商业合作事件', level: 2, effects: { charm: 3, wealth: 2, tag: 'social' } },
      { id: 9, name: '商业头脑', desc: '特别会赚钱', effectDesc: '智力+3，财富+2 | 解锁投资类特殊事件', level: 2, effects: { intelligence: 3, wealth: 2, tag: 'business' } },
      
      // 紫色天赋（等级3，史诗）
      { id: 3, name: '家财万贯', desc: '出生在富裕家庭', effectDesc: '财富+5 | 解锁财富类特殊事件', level: 3, effects: { wealth: 5, tag: 'wealth' } },
      { id: 5, name: '颜值爆表', desc: '长得特别好看', effectDesc: '魅力+5 | 解锁社交类特殊事件', level: 3, effects: { charm: 5, tag: 'charm' } },
      { id: 8, name: '钢铁身躯', desc: '不容易生病受伤', effectDesc: '活力+3，魅力+2 | 大幅降低意外死亡概率', level: 3, effects: { vitality: 3, charm: 2, tag: 'tough' } },
      
      // 橙色天赋（等级4，传说）
      { id: 4, name: '锦鲤转世', desc: '运气好到爆棚', effectDesc: '运气+5 | 大幅提升幸运事件概率', level: 4, effects: { luck: 5, tag: 'luck' } },
      
      // 红色天赋（等级5，神话，概率极低）
      { id: 6, name: '修仙体质', desc: '天生适合修行', effectDesc: '智力+3，运气+2 | 大幅提高修仙概率', level: 5, effects: { intelligence: 3, luck: 2, tag: 'cultivate' } },
      { id: 10, name: '天选之子', desc: '各方面都很均衡', effectDesc: '全属性+2 | 解锁所有特殊事件', level: 5, effects: { vitality: 2, intelligence: 2, wealth: 2, luck: 2, charm: 2, tag: 'god' } }
    ],
    // 当前展示的天赋列表（随机抽取10个）
    talentList: [],
    // 已选择的天赋
    selectedTalents: []
  },

  onLoad() {
    // 页面加载就随机生成开局和天赋
    this.randomAttrs();
    this.randomTalents();
  },

  // 按概率随机抽取10个不重复天赋
  randomTalents() {
    const talentPool = [...this.data.talentPool];
    const selected = [];
    // 天赋等级权重：白板60%，绿色20%，蓝色10%，紫色6%，橙色3%，红色1%
    const weightMap = { 0:60, 1:20, 2:10, 3:6, 4:3, 5:1 };
    
    while (selected.length < 10 && talentPool.length > 0) {
      // 计算总权重
      let totalWeight = talentPool.reduce((sum, t) => sum + weightMap[t.level], 0);
      let random = Math.random() * totalWeight;
      let currentWeight = 0;
      
      // 按权重抽取
      for (let i = 0; i < talentPool.length; i++) {
        currentWeight += weightMap[talentPool[i].level];
        if (random <= currentWeight) {
          selected.push({ ...talentPool[i], selected: false });
          talentPool.splice(i, 1);
          break;
        }
      }
    }
    
    this.setData({ talentList: selected, selectedTalents: [] });
  },

  // 随机生成开局属性（总和25点）
  randomAttrs() {
    let total = 25;
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

  // 重新随机：属性+天赋一起重置
  reRandom() {
    this.randomAttrs();
    this.randomTalents();
  },

  // 开始游戏
  startGame() {
    // 应用天赋加成
    const finalAttrs = { ...this.data.attrs };
    const talentTags = [];
    this.data.selectedTalents.forEach(talent => {
      for (const [key, val] of Object.entries(talent.effects)) {
        if (key === 'tag') {
          talentTags.push(val);
        } else if (finalAttrs.hasOwnProperty(key)) {
          finalAttrs[key] += val;
        }
      }
    });
    const params = {
      attributes: finalAttrs,
      talentTags: talentTags
    };
    const paramsStr = encodeURIComponent(JSON.stringify(params));
    wx.navigateTo({
      url: `/pages/game/game?params=${paramsStr}`
    });
  },

  // 打开设置
  openSettings() {
    wx.navigateTo({
      url: '/pages/settings/settings'
    });
  }
})

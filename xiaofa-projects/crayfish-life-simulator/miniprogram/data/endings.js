// 结局库 - 小龙虾人生模拟器
// 结局优先级越高越先匹配

module.exports = [
  {
    id: 'early_death',
    title: '出师未捷身先死',
    description: '还没长大就遇到了天敌，你的小龙虾生涯就这样早早结束了。不过没关系，再来一次说不定能活更久！',
    image: '💀',
    priority: 10,
    totalScore: {
      max: 20
    },
    endingText: '享年 {{age}} 岁'
  },
  {
    id: 'died_pollution',
    title: '水污染受害者',
    description: '生活的水域被人类活动污染，你没能坚持到最后。保护环境，就是保护我们小龙虾的未来。',
    image: '🌊',
    priority: 8,
    conditions: {
      vitality: {
        max: 5
      }
    },
    endingText: '享年 {{age}} 岁'
  },
  {
    id: 'caught_by_human',
    title: '清蒸小龙虾',
    description: '你最终还是被人类捞了上去，成为了餐桌上的一道美食。不过能被人类品尝，也是一种价值不是吗？',
    image: '🍤',
    priority: 9,
    conditions: {
      luck: {
        max: 3
      }
    },
    endingText: '成为了最受欢迎的那一只'
  },
  {
    id: 'long_life',
    title: '长寿王者',
    description: '你经历了风风雨雨，躲过了天敌、渔网、污染，活成了这片水域最年长的小龙虾。这本身就是一种胜利！',
    image: '👑',
    priority: 5,
    minAge: 50,
    endingText: '活了整整 {{age}} 岁，是这片水域最长寿的传说'
  },
  {
    id: 'rich_clan_leader',
    title: '小龙虾之王',
    description: '你占据了最好的领地，拥有最多的食物，成为了整个小龙虾族群的王者。子孙满堂，受万人敬仰。',
    image: '👑',
    priority: 6,
    conditions: {
      wealth: {
        min: 40
      },
      charm: {
        min: 30
      }
    },
    endingText: '你的子孙统治了这片水域'
  },
  {
    id: 'wisdom_elder',
    title: '智者',
    description: '你一生都在学习和思考，懂得了很多生存的智慧。年轻小龙虾都来向你请教，你成为了大家的精神领袖。',
    image: '📜',
    priority: 6,
    conditions: {
      intelligence: {
        min: 40
      }
    },
    endingText: '你的故事被代代相传'
  },
  {
    id: 'lucky_survivor',
    title: '天选之子',
    description: '无数次危险都被你侥幸躲过，洪水、天敌、渔网都没能带走你。你就是这片水域最幸运的小龙虾！',
    image: '🍀',
    priority: 6,
    conditions: {
      luck: {
        min: 40
      }
    },
    endingText: '运气就是你最大的实力'
  },
  {
    id: 'happy_life',
    title: '快乐小龙虾',
    description: '你这一辈子每天都开开心心，没什么烦恼，想吃就吃想玩就玩。虽然不是最强大的，但一定是最快乐的。',
    image: '😊',
    priority: 5,
    conditions: {
      charm: {
        min: 35
      }
    },
    endingText: '快乐的一生就是成功的一生'
  },
  {
    id: 'wanderer',
    title: '流浪旅行者',
    description: '你一生都在漂流，从一个水域到另一个水域，见识了很多风景，遇到了很多朋友。你的足迹遍布各处。',
    image: '🚤',
    priority: 5,
    conditions: {
      vitality: {
        min: 30
      },
      wealth: {
        max: 20
      }
    },
    endingText: '见过了世界，无悔这一生'
  },
  {
    id: 'default',
    title: '平凡的虾生',
    description: '你的小龙虾平平淡淡地走完了一生，没有波澜壮阔，也没有惊天动地。但认真走过的每一步，都算数。',
    image: '🦞',
    priority: 0,
    endingText: '享年 {{age}} 岁，这一生，你已经尽力了'
  }
]

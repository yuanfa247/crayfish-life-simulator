// 事件库 - 龙虾转生人生模拟器
// 背景：你原本是一只小龙虾，死在菜市场后重生成为了人类
// 事件类型：normal(普通事件), key(关键事件), special(特殊事件)
// 属性影响格式：{ attribute: delta }, 属性：vitality(活力)/intelligence(智力)/wealth(财富)/luck(运气)/charm(魅力)
// 年龄范围：minAge ~ maxAge
// tags：对应天赋标签，只有拥有对应天赋才能触发

module.exports = [
  // ---------- 幼年事件 (0-6岁) - 共 35 个事件 ----------
  {
    id: 1,
    title: "诞生",
    description: "你缓缓睁开眼，发现自己重生成为了人类婴儿...前世记忆还在，你记得你曾经是一只逍遥自在的小龙虾",
    type: "key",
    minAge: 1,
    maxAge: 1,
    tags: [],
    options: [
      {
        text: "接受新生，继续人生",
        effects: {
          vitality: +3,
          intelligence: +2
        },
        result: "带着前世小龙虾的记忆，开始你不一样的人生"
      }
    ]
  },
  {
    id: 2,
    title: "第一次学爬",
    description: "到了学爬的年纪，你继承了小龙虾爬行天赋",
    type: "normal",
    minAge: 1,
    maxAge: 3,
    tags: [],
    options: [
      {
        text: "慢慢适应人类身体",
        effects: {
          vitality: +2,
          intelligence: +1
        },
        result: "虽然不如以前爬行自在，但你学的比同龄人都快"
      }
    ]
  },
  {
    id: 3,
    title: "幼儿园里抓螃蟹",
    description: "幼儿园秋游，小朋友们在水沟里抓螃蟹，你一眼就看出螃蟹躲在哪里",
    type: "normal",
    minAge: 2,
    maxAge: 5,
    tags: ['lobster-perception'],
    options: [
      {
        text: "出手就是最大的一只",
        effects: {
          luck: +3,
          charm: +2
        },
        result: "小朋友们都夸你厉害，老师还给你发了小红花"
      }
    ]
  },
  // ---------- 原始小龙虾事件保留（适配新设定）----------
  {
    id: 101,
    title: "初次下水",
    description: "你想起作为小龙虾第一次下水的感觉，现在你去游泳馆游泳，那种感觉又回来了...",
    type: "normal",
    minAge: 1,
    maxAge: 10,
    tags: [],
    options: [
      {
        text: "勇敢地往远处游",
        effects: {
          vitality: +5,
          luck: +2
        },
        result: "你锻炼了肌肉，感觉充满力量"
      },
      {
        text: "躲在水草旁边观察",
        effects: {
          intelligence: +5,
          luck: +1
        },
        result: "你变得更加谨慎，懂得观察环境"
      }
    ]
  },
  {
    id: 102,
    title: "寻找食物",
    description: "跟着本能，你知道哪里能找到好吃的...",
    type: "normal",
    minAge: 1,
    maxAge: 15,
    tags: [],
    options: [
      {
        text: "吃水底的水藻和微生物",
        effects: {
          vitality: +3,
          wealth: +1
        },
        result: "味道一般，勉强填饱肚子"
      },
      {
        text: "冒险去吃水面上的浮游生物",
        effects: {
          vitality: +8,
          luck: -2
        },
        result: "营养丰富，但差点被飞鸟发现"
      }
    ]
  },
      {
        text: "勇敢地往远处游",
        effects: {
          vitality: +5,
          luck: +2
        },
        result: "你锻炼了肌肉，感觉充满力量"
      },
      {
        text: "躲在水草后面观察",
        effects: {
          intelligence: +5,
          luck: +1
        },
        result: "你变得更加谨慎，懂得观察环境"
      }
    ]
  },
  {
    id: 2,
    title: "寻找食物",
    description: "肚子饿了，需要找点东西吃...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "吃水底的水藻",
        effects: {
          vitality: +3,
          wealth: +1
        },
        result: "味道一般，勉强填饱肚子"
      },
      {
        text: "冒险去吃水面上的浮游生物",
        effects: {
          vitality: +8,
          luck: -2
        },
        result: "营养丰富，但差点被飞鸟发现"
      }
    ]
  },
  {
    id: 3,
    title: "遇到同类",
    description: "你遇到了一群和你差不多大的小龙虾...",
    type: "normal",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "和它们一起玩耍",
        effects: {
          charm: +3,
          luck: +2
        },
        result: "你交到了朋友，心情愉快"
      },
      {
        text: "躲开它们，自己玩",
        effects: {
          intelligence: +2,
          charm: -1
        },
        result: "你习惯了独处，更加独立"
      }
    ]
  },
  {
    id: 4,
    title: "清澈水坑",
    description: "你发现了一个清澈的小水坑，阳光能照到水底...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "进去泡澡",
        effects: {
          vitality: +2,
          happiness: +5
        },
        result: "水温刚好，舒服极了"
      },
      {
        text: "在这里觅食",
        effects: {
          wealth: +4,
          vitality: +1
        },
        result: "水坑里小虫很多，收获不错"
      }
    ]
  },
  {
    id: 5,
    title: "石子迷宫",
    description: "水底有一片石头堆，像迷宫一样...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "进去探险",
        effects: {
          intelligence: +3,
          luck: +1
        },
        result: "你在迷宫深处发现了一片食物丰富的区域"
      },
      {
        text: "绕开走",
        effects: {
          vitality: +1
        },
        result: "保存体力，不去冒险"
      }
    ]
  },
  {
    id: 6,
    title: "被大鱼追赶",
    description: "一条大鱼突然从你身边游过，看起来想吃掉你...",
    type: "key",
    minAge: 1,
    maxAge: 4,
    options: [
      {
        text: "赶紧钻进淤泥",
        effects: {
          intelligence: +3,
          vitality: -2
        },
        result: "大鱼没发现你，成功躲过一劫"
      },
      {
        text: "拼命往水草里跑",
        effects: {
          vitality: +3,
          luck: -3
        },
        result: "你跑得很快，但大鱼还是擦着你过去了"
      }
    ]
  },
  {
    id: 7,
    title: "第一次蜕壳",
    description: "到了第一次蜕壳的时候，你感觉身体痒痒的...",
    type: "key",
    minAge: 2,
    maxAge: 4,
    options: [
      {
        text: "找个安全的地方慢慢蜕",
        effects: {
          vitality: +5,
          intelligence: +2
        },
        result: "蜕壳很顺利，你长大了一圈"
      },
      {
        text: "借助石头用力蹭",
        effects: {
          vitality: +8,
          vitality: -3
        },
        result: "蜕壳很快，但有点受伤"
      }
    ]
  },
  {
    id: 8,
    title: "人类投喂",
    description: "岸边有人往水里扔面包屑...",
    type: "special",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "抢着吃",
        effects: {
          vitality: +6,
          wealth: +3
        },
        result: "面包屑真好吃，你吃了个饱"
      },
      {
        text: "先看看再说",
        effects: {
          intelligence: +3
        },
        result: "你观察到其他同类先去，确定安全才慢慢靠近"
      }
    ]
  },
  {
    id: 9,
    title: "水草迷宫",
    description: "一片茂密的水草挡在前面，里面好像有动静...",
    type: "normal",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "穿过去看看",
        effects: {
          luck: +3,
          vitality: +2
        },
        result: "里面藏着很多小虫子，饱餐一顿"
      },
      {
        text: "绕过去",
        effects: {
          intelligence: +2
        },
        result: "安全第一，不冒不必要的险"
      }
    ]
  },
  {
    id: 10,
    title: "结识朋友",
    description: "有一只小龙虾一直跟着你，看起来想和你做朋友...",
    type: "normal",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "接受它，一起玩",
        effects: {
          charm: +4,
          happiness: +4
        },
        result: "你们成为了好朋友，一起觅食一起玩耍"
      },
      {
        text: "保持距离",
        effects: {
          intelligence: +1
        },
        result: "你习惯独来独往，不想被拖累"
      }
    ]
  },
  {
    id: 11,
    title: "退潮",
    description: "潮水退了，你被困在一片浅水区...",
    type: "special",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "赶紧往深水爬",
        effects: {
          vitality: +4,
          intelligence: +2
        },
        result: "你赶在水完全退之前回到了深水"
      },
      {
        text: "躲在水洼里等涨潮",
        effects: {
          luck: +3
        },
        result: "水洼够深，你安全等到了涨潮"
      }
    ]
  },
  {
    id: 12,
    title: "捡到螺丝钉",
    description: "你在水底发现了一颗闪亮的螺丝钉...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "推到一边收藏起来",
        effects: {
          wealth: +2,
          charm: +1
        },
        result: "这颗螺丝钉成为了你收藏的第一件宝贝"
      },
      {
        text: "没什么用，走开",
        effects: {
          intelligence: +1
        },
        result: "你继续去找食物，不玩这些没用的"
      }
    ]
  },
  {
    id: 13,
    title: "水黾掠过",
    description: "一只水黾在水面上快速滑过，打破了平静...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "抬头看看热闹",
        effects: {
          happiness: +2
        },
        result: "见识了新事物，心情不错"
      },
      {
        text: "躲起来",
        effects: {
          intelligence: +1
        },
        result: "不知道是什么东西，小心为上"
      }
    ]
  },
  {
    id: 14,
    title: "争夺食物",
    description: "你发现了一块美食，但另一只小龙虾也看上了...",
    type: "key",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "和它决斗",
        effects: {
          vitality: +5,
          wealth: +4,
          vitality: -2
        },
        result: "你打赢了，独占了这块食物"
      },
      {
        text: "分给它一半",
        effects: {
          charm: +3,
          wealth: +2
        },
        result: "你们平分了食物，成为了饭友"
      },
      {
        text: "让给它",
        effects: {
          intelligence: +2,
          charm: +1
        },
        result: "食物可以再找，打架伤和气"
      }
    ]
  },
  {
    id: 15,
    title: "雨天浑浊",
    description: "下雨了，水变得很浑浊，看不清方向...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "待在原地不动",
        effects: {
          health: +3
        },
        result: "雨停了水变清，你再继续活动"
      },
      {
        text: "摸着石头找食物",
        effects: {
          wealth: +3,
          luck: -2
        },
        result: "你摸到了很多沉下来的食物，虽然有点风险但收获大"
      }
    ]
  },
  {
    id: 16,
    title: "水蛭吸血",
    description: "你感觉身上痒痒的，发现一只水蛭叮在了身上...",
    type: "special",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "用石头刮掉它",
        effects: {
          vitality: -3,
          intelligence: +2
        },
        result: "成功去掉了水蛭，只是流了点血"
      },
      {
        text: "找同伴帮忙",
        effects: {
          vitality: -2,
          charm: +1
        },
        result: "同伴帮你弄掉了水蛭，多谢朋友"
      }
    ]
  },
  {
    id: 17,
    title: "跟着水草漂",
    description: "一根水草被水流冲着走，你可以抓住它去下游...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "抓住水草去下游",
        effects: {
          luck: +5,
          intelligence: -1
        },
        result: "下游的食物更多，这一趟很值"
      },
      {
        text: "待在自己熟悉的地方",
        effects: {
          intelligence: +2
        },
        result: "金窝银窝不如自己的狗窝"
      }
    ]
  },
  {
    id: 18,
    title: "阳光明媚",
    description: "今天天气真好，阳光透进水底，暖洋洋的...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "趴在石头上晒太阳",
        effects: {
          vitality: +3,
          happiness: +5
        },
        result: "舒服极了，身心都得到放松"
      },
      {
        text: "趁好天气多找食物",
        effects: {
          wealth: +4,
          vitality: +2
        },
        result: "收获满满，储存了很多能量"
      }
    ]
  },
  {
    id: 19,
    title: "水草缠绕",
    description: "你不小心被水草缠住了钳子...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "慢慢挣开",
        effects: {
          vitality: -2,
          intelligence: +2
        },
        result: "你成功挣脱了，只是消耗了一些体力"
      },
      {
        text: "用力挣扎",
        effects: {
          vitality: -5,
          vitality: +1
        },
        result: "越挣越紧，费了好大劲才出来"
      }
    ]
  },
  {
    id: 20,
    title: "发现贝壳堆",
    description: "退潮后，你发现了一片小贝壳堆...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "大吃一顿",
        effects: {
          vitality: +6,
          wealth: +4
        },
        result: "贝壳里还有很多肉，你饱餐了一顿"
      },
      {
        text: "挑个好看的收藏",
        effects: {
          wealth: +2,
          charm: +2
        },
        result: "你选了一个最漂亮的贝壳，当成装饰品"
      }
    ]
  },
  {
    id: 21,
    title: "老乌龟路过",
    description: "一只老乌龟从你身边慢慢爬过...",
    type: "special",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "向它请教",
        effects: {
          intelligence: +5,
          happiness: +3
        },
        result: "它告诉你：活的久才是赢家，慢慢来比较快"
      },
      {
        text: "不理它，继续找吃的",
        effects: {
          vitality: +3
        },
        result: "你相信自己的节奏，不需要别人指点"
      }
    ]
  },
  {
    id: 22,
    title: "沙子埋身",
    description: "一阵水流把沙子冲起来，把你半个身子埋住了...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "慢慢拱出来",
        effects: {
          vitality: -1
        },
        result: "你清理干净沙子，继续上路"
      },
      {
        text: "干脆埋在这里休息",
        effects: {
          vitality: +3,
          happiness: +2
        },
        result: "沙子暖暖的，睡一觉很舒服"
      }
    ]
  },
  {
    id: 23,
    title: "水轮转动",
    description: "岸边有个水轮在转动，带着水流哗哗响...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "去水轮附近玩",
        effects: {
          luck: +4,
          vitality: -1
        },
        result: "水轮带上来很多食物，捡了个便宜"
      },
      {
        text: "离远点",
        effects: {
          intelligence: +2
        },
        result: "那地方太危险，容易被打到"
      }
    ]
  },
  {
    id: 24,
    title: "比赛赛跑",
    description: "几只小龙虾提议比赛谁爬得快...",
    type: "normal",
    minAge: 3,
    maxAge: 5,
    options: [
      {
        text: "参加比赛",
        effects: {
          vitality: +4,
          charm: +2
        },
        result: "你得了第二名，大家为你鼓掌"
      },
      {
        text: "不参加，保存体力",
        effects: {
          intelligence: +2
        },
        result: "你在一边看着，吃着刚找到的食物"
      }
    ]
  },
  {
    id: 25,
    title: "找到秘密洞穴",
    description: "你在石缝里发现了一个隐蔽的小洞穴...",
    type: "key",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "占为己有",
        effects: {
          wealth: +3,
          intelligence: +3
        },
        result: "这成为了你私人的藏身之处"
      },
      {
        text: "告诉朋友们",
        effects: {
          charm: +5,
          wealth: +2
        },
        result: "大家共享这个藏身点，你受到了感谢"
      }
    ]
  },
  {
    id: 26,
    title: "鸟粪落下",
    description: "天上一只鸟拉了屎，正好落在你附近水面...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "吃掉鸟粪里的种子",
        effects: {
          vitality: +2,
          luck: -1
        },
        result: "虽然听起来恶心，但确实能填饱肚子"
      },
      {
        text: "赶紧躲开",
        effects: {
          intelligence: +2
        },
        result: "这种不确定的东西还是离远点好"
      }
    ]
  },
  {
    id: 27,
    title: "误入渔网",
    description: "你不小心游进了一张破渔网里...",
    type: "special",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "顺着网眼往外钻",
        effects: {
          intelligence: +4,
          vitality: -2
        },
        result: "你找到网眼钻了出来，有惊无险"
      },
      {
        text: "用钳子剪断网线",
        effects: {
          vitality: +3,
          vitality: -3
        },
        result: "你剪断了几根线，终于逃了出来"
      }
    ]
  },
  {
    id: 28,
    title: "学习打洞",
    description: "看到成年小龙虾会打洞，你也想学...",
    type: "normal",
    minAge: 3,
    maxAge: 5,
    options: [
      {
        text: "努力练习",
        effects: {
          vitality: +4,
          intelligence: +2
        },
        result: "你学会了打洞，以后遇到危险能躲进去"
      },
      {
        text: "反正有别人的洞可以躲",
        effects: {
          happiness: +3
        },
        result: "省点力气，吃吃逛逛不好吗"
      }
    ]
  },
  {
    id: 29,
    title: "和螃蟹抢地盘",
    description: "一只小螃蟹占了一块不错的地方，你也看中了...",
    type: "key",
    minAge: 3,
    maxAge: 5,
    options: [
      {
        text: "和它干一架",
        effects: {
          vitality: +6,
          wealth: +5,
          vitality: -4
        },
        result: "你用钳子吓退了螃蟹，占领了这块好地方"
      },
      {
        text: "算了，另找一块",
        effects: {
          intelligence: +3,
          vitality: +1
        },
        result: "打架伤身体，再找一块就是了"
      }
    ]
  },
  {
    id: 30,
    title: "吃到寄生虫",
    description: "你吃了一块变质的食物，感觉肚子不舒服...",
    type: "special",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "多运动排出去",
        effects: {
          vitality: -3,
          intelligence: +2
        },
        result: "运动过后舒服多了，以后会注意"
      },
      {
        text: "趴着不动休息",
        effects: {
          vitality: -5
        },
        result: "休息了很久才缓过来"
      }
    ]
  },
  {
    id: 31,
    title: "找到浮萍床",
    description: "水面上漂浮着一大片浮萍，看起来软软的...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "爬上去晒太阳",
        effects: {
          happiness: +6,
          vitality: +2
        },
        result: "躺在浮萍上晒太阳，这是小龙虾顶配享受"
      },
      {
        text: "这里虫子多，赶紧觅食",
        effects: {
          wealth: +5,
          vitality: +1
        },
        result: "浮萍下面藏了很多小虫，收获丰厚"
      }
    ]
  },
  {
    id: 32,
    title: "暗流涌动",
    description: "突然来了一股暗流，水流一下子变急了...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "抓住石头稳住",
        effects: {
          intelligence: +3,
          vitality: +1
        },
        result: "暗流过去，你还在原地"
      },
      {
        text: "顺着水流漂走",
        effects: {
          luck: +4,
          intelligence: -1
        },
        result: "你被冲到一个新地方，这里食物更丰富"
      }
    ]
  },
  {
    id: 33,
    title: "模仿成年虾",
    description: "你看到成年小龙虾怎么觅食怎么躲避危险...",
    type: "normal",
    minAge: 2,
    maxAge: 5,
    options: [
      {
        text: "认真学习模仿",
        effects: {
          intelligence: +4,
          vitality: +2
        },
        result: "你学到了很多实用技巧"
      },
      {
        text: "按自己方式来",
        effects: {
          intelligence: +1,
          luck: +2
        },
        result: "走出自己的虾生道路"
      }
    ]
  },
  {
    id: 34,
    title: "月光下散步",
    description: "晚上，月光洒在水面上，很安静...",
    type: "normal",
    minAge: 1,
    maxAge: 5,
    options: [
      {
        text: "趁凉快出去走走",
        effects: {
          happiness: +4,
          vitality: +2
        },
        result: "夜晚的水域别有一番风味"
      },
      {
        text: "躲在石头缝里睡觉",
        effects: {
          vitality: +3
        },
        result: "好好休息，白天才有精力觅食"
      }
    ]
  },
  {
    id: 35,
    title: "第一次捕猎",
    description: "你看到一只小小的水生虫子，想试试能不能抓到它...",
    type: "key",
    minAge: 3,
    maxAge: 5,
    options: [
      {
        text: "悄悄靠近猛地出击",
        effects: {
          intelligence: +3,
          vitality: +4,
          wealth: +3
        },
        result: "你成功抓住了虫子，证明了自己"
      },
      {
        text: "太费劲，吃草算了",
        effects: {
          vitality: +2
        },
        result: "吃草也能吃饱，不费那个劲"
      }
    ]
  },

  // ---------- 青年期事件 (6-15岁) ----------
  {
    id: 36,
    title: "蜕壳",
    description: "到了蜕壳的时候，这是成长的必经之路...",
    type: "key",
    minAge: 5,
    maxAge: 10,
    options: [
      {
        text: "慢慢蜕壳，保存体力",
        effects: {
          vitality: +8,
          intelligence: +3
        },
        result: "蜕壳很顺利，你长大了一圈"
      },
      {
        text: "用力挣脱旧壳",
        effects: {
          vitality: +12,
          vitality: -5
        },
        result: "你快速完成蜕壳，但消耗了大量体力"
      }
    ]
  },
  {
    id: 37,
    title: "水流变化",
    description: "最近水流变大，冲来了很多东西...",
    type: "normal",
    minAge: 6,
    maxAge: 20,
    options: [
      {
        text: "抓住冲来的食物",
        effects: {
          wealth: +5,
          vitality: +3
        },
        result: "收获了一顿丰盛的美餐"
      },
      {
        text: "躲到石头后面避险",
        effects: {
          vitality: +5,
          wealth: -2
        },
        result: "安全第一，虽然没捡到食物，但保住了命"
      }
    ]
  },
  {
    id: 38,
    title: "遇到天敌",
    description: "一只黑鱼向你游过来了！",
    type: "key",
    minAge: 8,
    maxAge: 18,
    options: [
      {
        text: "快速钻到石缝里",
        effects: {
          vitality: +3,
          intelligence: +3
        },
        result: "你成功躲过一劫"
      },
      {
        text: "和它拼了！",
        effects: {
          vitality: +10,
          vitality: -15
        },
        result: "你靠钳子吓退了它，但自己也受了重伤"
      }
    ]
  },

  // ---------- 青年期继续 (待扩充) ----------
  {
    id: 39,
    title: "人类捕捞",
    description: "一张大网突然落了下来...",
    type: "special",
    minAge: 10,
    maxAge: 50,
    options: [
      {
        text: "往水底淤泥里钻",
        effects: {
          luck: +5,
          vitality: -2
        },
        result: "淤泥遮住了你的身体，网捞走了其他人"
      },
      {
        text: "跟着大部队一起跑",
        effects: {
          luck: -5,
          vitality: +5
        },
        result: "你跟着大家逃出了网区，但很惊险"
      }
    ]
  },

  // ---------- 壮年/青年期事件 ----------
  {
    id: 40,
    title: "争夺领地",
    description: "你看中了一块风水宝地，但是已有小龙虾占据...",
    type: "key",
    minAge: 16,
    maxAge: 25,
    requires: {
      vitality: 20
    },
    options: [
      {
        text: "和它决斗",
        effects: {
          vitality: +10,
          wealth: +8,
          vitality: -8
        },
        result: "你打赢了，夺取了这块食物丰富的领地"
      },
      {
        text: "另找一块地方",
        effects: {
          vitality: +5,
          wealth: +3
        },
        result: "虽然地方差点，但胜在安全"
      }
    ]
  },
  {
    id: 41,
    title: "遇到爱情",
    description: "你遇到了一只让你心动的小龙虾...",
    type: "key",
    minAge: 18,
    maxAge: 35,
    requires: {
      charm: 15
    },
    options: [
      {
        text: "勇敢追求",
        effects: {
          charm: +5,
          luck: +3,
          happiness: +10
        },
        result: "对方接受了你的追求，你们在一起了"
      },
      {
        text: "默默暗恋",
        effects: {
          intelligence: +2,
          happiness: -5
        },
        result: "你把这份感情藏在了心里"
      }
    ]
  },
  {
    id: 42,
    title: "洪水来了",
    description: "连续下了几天暴雨，水位暴涨，水流湍急...",
    type: "special",
    minAge: 20,
    maxAge: 40,
    options: [
      {
        text: "抓住大树根不走",
        effects: {
          vitality: +5,
          vitality: +5
        },
        result: "洪水过后，你还在原地"
      },
      {
        text: "跟着洪水漂流",
        effects: {
          wealth: +10,
          luck: +5,
          vitality: -5
        },
        result: "你被冲到了一个新的水域，这里资源更丰富"
      }
    ]
  },

  // ---------- 中年期事件 (30+) ----------
  {
    id: 43,
    title: "养育后代",
    description: "你的小宝宝们快要孵化了...",
    type: "key",
    minAge: 30,
    maxAge: 45,
    options: [
      {
        text: "精心守护",
        effects: {
          happiness: +10,
          vitality: -8
        },
        result: "大部分卵都成功孵化，你当爸爸/妈妈了"
      },
      {
        text: "顺其自然",
        effects: {
          vitality: +5,
          happiness: +3
        },
        result: "能活下来多少看它们自己的造化"
      }
    ]
  },
  {
    id: 44,
    title: "水污染",
    description: "最近水味道怪怪的，有点发臭...",
    type: "special",
    minAge: 25,
    maxAge: 60,
    options: [
      {
        text: "赶紧迁徙到上游",
        effects: {
          vitality: +10,
          wealth: -5
        },
        result: "虽然辛苦，但你远离了污染"
      },
      {
        text: "留在原地，懒得动",
        effects: {
          vitality: -15
        },
        result: "你感觉身体越来越不舒服"
      }
    ]
  },
  {
    id: 45,
    title: "成为族长",
    description: "凭借年龄和经验，大家推选你当这片水域的族长...",
    type: "key",
    minAge: 35,
    maxAge: 50,
    requires: {
      intelligence: 30,
      charm: 20
    },
    options: [
      {
        text: "接受位置，负起责任",
        effects: {
          intelligence: +8,
          charm: +8,
          vitality: -5
        },
        result: "你带领大家找到了新的觅食区，受到尊重"
      },
      {
        text: "推辞不受，安享自在",
        effects: {
          happiness: +10,
          intelligence: +3
        },
        result: "你过着自由自在的生活，无官一身轻"
      }
    ]
  },

  // ---------- 老年期事件 (46+) ----------
  {
    id: 46,
    title: "回忆一生",
    description: "你静静地趴在石头上，回忆起这一生的点点滴滴...",
    type: "normal",
    minAge: 45,
    maxAge: 100,
    options: [
      {
        text: "感觉这一生很满足",
        effects: {
          happiness: +10
        },
        result: "你笑着，没有遗憾"
      },
      {
        text: "还有很多想做的事没做",
        effects: {
          happiness: -5,
          vitality: +5
        },
        result: "你还想再活五百年"
      }
    ]
  },
  {
    id: 47,
    title: "水温下降",
    description: "秋天来了，水温越来越低，你行动越来越慢...",
    type: "normal",
    minAge: 50,
    maxAge: 100,
    options: [
      {
        text: "钻到深水区冬眠",
        effects: {
          vitality: +10,
          vitality: -5
        },
        result: "你熬过了寒冷的冬天"
      },
      {
        text: "留在浅水区晒太阳",
        effects: {
          happiness: +5,
          vitality: -8
        },
        result: "晒太阳很舒服，但风险很大"
      }
    ]
  },

  // ---------- 通用事件（全年龄段）----------
  {
    id: 48,
    title: "捡到漂亮贝壳",
    description: "你在水底发现了一颗漂亮的贝壳...",
    type: "normal",
    minAge: 1,
    maxAge: 100,
    options: [
      {
        text: "收藏起来",
        effects: {
          happiness: +5,
          wealth: +3
        },
        result: "这颗贝壳成为了你的宝贝"
      },
      {
        text: "送给好朋友",
        effects: {
          happiness: +3,
          charm: +3
        },
        result: "你的朋友很开心"
      }
    ]
  },
  {
    id: 49,
    title: "阳光普照",
    description: "今天天气很好，阳光透过水面照进来暖洋洋的...",
    type: "normal",
    minAge: 1,
    maxAge: 100,
    options: [
      {
        text: "趴在石头上晒太阳",
        effects: {
          happiness: +8,
          vitality: +3
        },
        result: "舒服极了，身心都得到了放松"
      },
      {
        text: "趁天气好多找点食物",
        effects: {
          wealth: +5,
          vitality: +3
        },
        result: "收获满满，储存了很多能量"
      }
    ]
  },
  {
    id: 50,
    title: "发现水洼",
    description: "退潮后，你发现了一个独立的小水洼，里面有很多小虫...",
    type: "normal",
    minAge: 1,
    maxAge: 100,
    options: [
      {
        text: "进去大吃一顿",
        effects: {
          vitality: +8,
          wealth: +5
        },
        result: "你饱餐了一顿，收获很大"
      },
      {
        text: "保持警惕，观察一下",
        effects: {
          intelligence: +5,
          wealth: +2
        },
        result: "确认安全后才慢慢进食"
      }
    ]
  }
]
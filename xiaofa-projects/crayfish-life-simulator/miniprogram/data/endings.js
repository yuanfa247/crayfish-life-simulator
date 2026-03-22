// 结局库 - 龙虾转生人生模拟器
module.exports = [
	{
		id: 'early_death',
		title: '英年早逝',
		description:
			'你在人生的黄金时期遭遇了意外。也许这就是命运的安排，但你的故事已经足够精彩。',
		image: '💀',
		priority: 10,
		totalScore: { max: 20 },
		endingText: '享年 {{age}} 岁',
	},
	{
		id: 'poor_life',
		title: '贫困潦倒',
		description:
			'你的一生充满了困顿和挫折。活力和财富的缺乏让你无法改变命运。但你依然坚持活了下来。',
		image: '😔',
		priority: 8,
		conditions: { vitality: { max: 5 }, wealth: { max: 5 } },
		endingText: '享年 {{age}} 岁',
	},
	{
		id: 'unlucky_life',
		title: '厄运缠身',
		description:
			'无论你多么努力，坏运气总是如影随形。你成为了命运的玩物，但也学会了接纳。',
		image: '⚡',
		priority: 9,
		conditions: { luck: { max: 3 } },
		endingText: '享年 {{age}} 岁',
	},
	{
		id: 'long_life',
		title: '长寿者',
		description:
			'你活得比大多数人都要久。经历了风风雨雨，你见证了时代的变迁。这本身就是一种胜利。',
		image: '👴',
		priority: 5,
		minAge: 80,
		endingText: '活了整整 {{age}} 岁，是一个真正的长寿者',
	},
	{
		id: 'rich_leader',
		title: '商业帝国的缔造者',
		description:
			'你通过聪慧和努力，建立了属于自己的商业帝国。财富和权力在你手中，你成为了众人敬仰的对象。',
		image: '💰',
		priority: 6,
		conditions: { wealth: { min: 60 }, intelligence: { min: 40 } },
		endingText: '你的名字被写入了商业史册',
	},
	{
		id: 'wisdom_sage',
		title: '智者',
		description:
			'你一生都在追求知识和智慧。你的思想影响了无数人，成为了这个时代的精神领袖。',
		image: '📚',
		priority: 6,
		conditions: { intelligence: { min: 70 } },
		endingText: '你的思想被代代相传',
	},
	{
		id: 'lucky_one',
		title: '幸运儿',
		description:
			'无数次危险都被你侥幸躲过。你就是那个被命运眷顾的人，运气好到爆棚。',
		image: '🍀',
		priority: 6,
		conditions: { luck: { min: 70 } },
		endingText: '运气就是你最大的实力',
	},
	{
		id: 'charming_life',
		title: '魅力四射',
		description:
			'你用你的魅力征服了所有人。无论走到哪里，你都是众星捧月的中心。你的人生充满了欢笑和掌声。',
		image: '✨',
		priority: 6,
		conditions: { charm: { min: 70 } },
		endingText: '你的故事被无数人传颂',
	},
	{
		id: 'strong_warrior',
		title: '铁血战士',
		description:
			'你拥有超人的体力和意志。你克服了无数困难，成为了一个真正的强者。你的故事激励了无数人。',
		image: '💪',
		priority: 6,
		conditions: { vitality: { min: 70 } },
		endingText: '你的力量成为了传说',
	},
	{
		id: 'balanced_life',
		title: '平衡大师',
		description:
			'你完美地平衡了事业、家庭和个人生活。你既成功又幸福，是众人眼中的人生赢家。',
		image: '⚖️',
		priority: 5,
		conditions: {
			wealth: { min: 40 },
			charm: { min: 40 },
			intelligence: { min: 40 },
		},
		endingText: '你的人生是完美的典范',
	},
	{
		id: 'cultivator_immortal',
		title: '飞升成仙',
		description:
			'你成功地踏上了修仙之路，历经九九天劫，最终飞升成仙。你的龙虾前世和人类今生完美融合，成为了虾中至尊。',
		image: '✨',
		priority: 7,
		minAge: 980,
		endingText: '你与天地同寿，成为了永恒的传说',
	},
	{
		id: 'cultivator_success',
		title: '修仙成功',
		description:
			'你接受了自己龙虾转生的身份，踏上了修仙之路。虽然还未飞升，但你已经超越了凡人的极限。',
		image: '🧘',
		priority: 6,
		minAge: 300,
		conditions: { intelligence: { min: 80 }, luck: { min: 70 } },
		endingText: '你踏入了修仙的殿堂',
	},
	{
		id: 'happy_ordinary',
		title: '平凡而幸福',
		description:
			'你没有成为富豪，也没有成为名人。但你拥有一个温暖的家庭和真挚的朋友。这样的人生，已经足够美好。',
		image: '😊',
		priority: 5,
		conditions: { charm: { min: 50 } },
		endingText: '平凡的幸福就是最大的成功',
	},
	{
		id: 'wanderer_free',
		title: '自由的流浪者',
		description:
			'你一生都在追求自由。你走遍了世界的每个角落，见识了无数风景，遇到了无数朋友。你的足迹遍布各处。',
		image: '🌍',
		priority: 5,
		conditions: { vitality: { min: 50 }, wealth: { max: 30 } },
		endingText: '自由的灵魂永远不会被束缚',
	},
	{
		id: 'accident_death',
		title: '意外身亡',
		description:
			'你在人生的某个时刻遭遇了意外。也许是车祸，也许是疾病，也许是其他无法预料的事件。你的故事在这一刻戛然而止。',
		image: '⚠️',
		priority: 9,
		endingText: '享年 {{age}} 岁，命运的转折点',
	},
	{
		id: 'natural_death',
		title: '寿终正寝',
		description:
			'你在安详的睡眠中离开了这个世界。你的一生虽然平凡，但充满了温暖和爱。你的故事被家人永远铭记。',
		image: '😴',
		priority: 7,
		minAge: 60,
		endingText: '享年 {{age}} 岁，在爱中安然离去',
	},
	{
		id: 'cultivator_300_fail',
		title: '筑基失败',
		description:
			'你在筑基期的渡劫中失败了。你的修为在天劫中彻底散尽，生命也随之消逝。你的修仙梦在这一刻破碎。',
		image: '💥',
		priority: 8,
		minAge: 300,
		endingText: '修行 {{age}} 年，终究未能成仙',
	},
	{
		id: 'cultivator_500_fail',
		title: '金丹破碎',
		description:
			'你在金丹期的渡劫中失败了。你的神魂在天劫中被摧毁，你的一切修为都化为虚无。你的仙途在此终结。',
		image: '💔',
		priority: 8,
		minAge: 500,
		endingText: '修行 {{age}} 年，金丹碎裂',
	},
	{
		id: 'cultivator_800_fail',
		title: '元婴陨落',
		description:
			'你在元婴期的渡劫中失败了。九天神雷将你的元婴劈成碎片，你在雷火中化为灰烬。你距离仙人之境只差一步，却永远无法跨越。',
		image: '⚡',
		priority: 8,
		minAge: 800,
		endingText: '修行 {{age}} 年，陨落在飞升前夜',
	},
	{
		id: 'cultivator_980_fail',
		title: '九九天劫失败',
		description:
			'你在最后的九九天劫中失败了。无尽的雷火吞没了你，你的一切修为、一切努力都在这一刻化为乌有。你与仙人之位擦肩而过。',
		image: '🔥',
		priority: 9,
		minAge: 980,
		endingText: '修行 {{age}} 年，败于最后一劫',
	},
	{
		id: 'cultivator_immortal_basic',
		title: '初入仙班',
		description:
			'你成功飞升成仙！虽然你只是最低阶的仙人，但你已经超越了凡人的极限。你的龙虾前世和人类今生完美融合，你将在仙界开启新的传奇。',
		image: '✨',
		priority: 7,
		minAge: 980,
		endingText: '飞升成仙，与天地同寿',
	},
	{
		id: 'cultivator_immortal_supreme',
		title: '虾中至尊',
		description:
			'你不仅成功飞升成仙，还融合了龙虾本体的力量。你成为了虾中至尊，拥有无敌的力量。你的传说将被永远传颂，你的名字将被刻在仙界的历史上。',
		image: '👑',
		priority: 8,
		minAge: 980,
		endingText: '虾中至尊，永恒的传说',
	},
	{
		id: 'cultivator_immortal_free',
		title: '自由的仙人',
		description:
			'你飞升成仙后，拒绝了天地的束缚。你成为了一个自由的仙人，不受任何规则的限制。你在仙界中自由翱翔，你的故事充满了传奇色彩。',
		image: '🦅',
		priority: 8,
		minAge: 980,
		endingText: '自由的仙人，不受天地约束',
	},
	{
		id: 'cultivator_immortal_guardian',
		title: '人间守护者',
		description:
			'你飞升成仙后，选择回到人间守护你的故乡。你成为了一个隐世的守护者，默默保护着你所爱的一切。你的故事被人间传为佳话。',
		image: '🛡️',
		priority: 7,
		minAge: 980,
		endingText: '飞升成仙，守护人间',
	},
	{
		id: 'cultivator_immortal_explorer',
		title: '仙界探险家',
		description:
			'你飞升成仙后，开始探索仙界的秘密。你发现了无数隐藏的秘地，你的足迹遍布仙界的每个角落。你成为了仙界最伟大的探险家。',
		image: '🗺️',
		priority: 7,
		minAge: 980,
		endingText: '探索仙界，发现无穷奥秘',
	},
	// ===== 极端属性特色结局 =====
	{
		id: 'extreme_vitality_max',
		title: '小龙虾本虾',
		description:
			'你的活力属性拉满，身体比所有人都强壮。你继承了小龙虾最强的肉身，一辈子几乎没生病，活到了一百多岁，身体依然硬朗。你就是小龙虾本虾，强壮了一辈子。',
		image: '💪',
		priority: 10,
		conditions: {
			vitality: {
				min: 50,
			},
		},
		endingText: '一辈子强壮，小龙虾本色',
	},
	{
		id: 'extreme_intelligence_max',
		title: '智者不惑',
		description:
			'你的智力属性拉满，从小就是学霸，一路考上名牌大学，成为业界知名专家。你用智力解决了人生大部分问题，留下了丰硕的知识成果。',
		image: '🧠',
		priority: 10,
		conditions: {
			intelligence: {
				min: 50,
			},
		},
		endingText: '智力超群，成果丰硕',
	},
	{
		id: 'extreme_wealth_max',
		title: '商业巨鳄',
		description:
			'你的财富属性一路高涨，年纪轻轻就实现了财富自由，成为了商业界知名的巨鳄。你这一生赚了无数钱，给后代留下了巨大的遗产。',
		image: '💰',
		priority: 10,
		conditions: {
			wealth: {
				min: 50,
			},
		},
		endingText: '财富自由，商业巨鳄',
	},
	{
		id: 'extreme_charm_max',
		title: '万人迷',
		description:
			'你的魅力属性拉满，走到哪里都受人喜欢。你有无数朋友，人际关系处理得非常好，一辈子都被爱包围着。',
		image: '😍',
		priority: 10,
		conditions: {
			charm: {
				min: 50,
			},
		},
		endingText: '万人迷，一辈子被爱包围',
	},
	{
		id: 'extreme_luck_max',
		title: '天选之子',
		description:
			'你的运气好到爆炸，这辈子逢凶化吉，想买什么彩票中什么彩票，想有什么机会就有什么机会。所有人都羡慕你的好运气，你就是天选之子。',
		image: '🍀',
		priority: 10,
		conditions: {
			luck: {
				min: 50,
			},
		},
		endingText: '天选之子，运气好到爆炸',
	},
	// ===== 龙虾转生专属结局 =====
	{
		id: 'lobster_return_river',
		title: '回归大河',
		description:
			'你老年之后，终于回到了前世生长的那条小河。你走进河里，变回了小龙虾的样子。阳光透过水面照在你身上，你终于回家了。',
		image: '🌊',
		priority: 12,
		tags: ['lobster-immortal'],
		conditions: {
			age: {
				min: 60,
			},
		},
		endingText: '终于回家，回到了出生的地方',
	},
	{
		id: 'lobster_life_legend',
		title: '龙虾人生',
		description:
			'你这一生，无论是作为龙虾还是作为人类，都活得精彩。你接受了前世，也活好了今生，龙虾的血脉和人类的生活完美融合。你的一生，就是传奇的一生。',
		image: '🦞',
		priority: 12,
		tags: ['lobster-immortal'],
		conditions: {
			age: {
				min: 80,
			},
			totalScore: {
				min: 200,
			},
		},
		endingText: '龙虾人生，传奇一生',
	},
	{
		id: 'lobster_secret_kept',
		title: '完美隐藏',
		description:
			'你一辈子都完美隐藏了龙虾转生的秘密，没有人发现你的特殊身份。你像一个普通人一样出生、成长、老去，带走了这个秘密。这也是一种完美的人生。',
		image: '🤫',
		priority: 11,
		tags: [],
		conditions: {
			age: {
				min: 60,
			},
		},
		endingText: '秘密带走，完美人生',
	},
	{
		id: 'lobster_restaurant_king',
		title: '龙虾大王',
		description:
			'你开了一家龙虾餐厅，因为你对小龙虾最懂，所以你的龙虾做得最好吃。你的餐厅成为了当地网红，你成为了远近闻名的龙虾大王。你靠龙虾发家致富，也算落叶归根。',
		image: '🍤',
		priority: 11,
		tags: ['lobster-infinite', 'business'],
		conditions: {
			wealth: {
				min: 30,
			},
		},
		endingText: '龙虾大王，靠虾发家',
	},
	// ===== 拓展风格多元结局 =====
	{
		id: 'scifi_lobster_clone',
		title: '克隆重生',
		description:
			'你前世其实是科学家实验失败，意识转移到小龙虾身上后再次转生为人。科学家找到了你，邀请你回到实验室继续研究，你可以揭开生命转移的秘密。',
		image: '🧬',
		priority: 9,
		conditions: {
			intelligence: {
				min: 30,
			},
		},
		endingText: '科学家，克隆重生',
	},
	{
		id: 'love_secret_identity',
		title: '秘密爱情',
		description:
			'你爱上了一个人，但你不敢告诉他你是小龙虾转生的秘密。TA接受了你所有的一切，对你说：不管你是什么，我都爱你。你找到了一生的挚爱，这就够了。',
		image: '❤️',
		priority: 10,
		conditions: {
			charm: {
				min: 30,
			},
		},
		endingText: '真爱无惧，秘密一生',
	},
	{
		id: 'politics_success',
		title: '政坛新星',
		description:
			'你凭借小龙虾带来的天生智慧和耐力，在政坛一步步爬升，最终成为了一方大员。你用你的能力造福一方，留下了光辉的政绩。',
		image: '🏛️',
		priority: 9,
		conditions: {
			intelligence: {
				min: 25,
			},
			charm: {
				min: 25,
			},
		},
		endingText: '政坛新星，造福一方',
	},
	{
		id: 'rich_fish_hole',
		title: '钓鱼老翁',
		description:
			'你一辈子赚了足够的钱，退休后你天天在河边钓鱼。每天都能钓到大鱼，你坐在岸边看日落，这一生，值了。',
		image: '🎣',
		priority: 10,
		conditions: {
			wealth: {
				min: 25,
			},
			age: {
				min: 60,
			},
		},
		endingText: '垂钓一生，自在平安',
	},
	{
		id: 'cultivate_hidden_temple',
		title: '山中隐仙',
		description:
			'你没有选择飞升，而是在山中找了一个灵气充沛的洞穴隐修。你看着人间沧海桑田，自己活得清净自在，这就是最大的幸福。',
		image: '🏔️',
		priority: 10,
		tags: ['cultivate', 'lobster-cave'],
		conditions: {
			age: {
				min: 105,
			},
		},
		endingText: '山中隐仙，清净自在',
	},
	{
		id: 'default',
		title: '平凡的人生',
		description:
			'你的一生平平淡淡地走完了。没有波澜壮阔，也没有惊天动地。但你认真走过的每一步，都算数。',
		image: '🧬',
		priority: 0,
		endingText: '享年 {{age}} 岁，这一生，你已经尽力了',
	},
];

// 事件库 - 龙虾转生人生模拟器
module.exports = [
	{
		id: 'c1',
		title: '初生的记忆',
		description: '你睁开眼睛，发现自己变成了人类婴儿。',
		minAge: 0,
		maxAge: 5,
		options: [
			{
				text: '适应新身体',
				effects: { vitality: 2, charm: 1 },
				result: '你很快适应了。',
			},
			{
				text: '沉浸在龙虾的记忆中',
				effects: { intelligence: 2, luck: -1 },
				result: '你陷入了思考。',
			},
		],
	},
	{
		id: 'c2',
		title: '第一次摔跤',
		description: '学会走路后，你在地上摔了一跤。',
		minAge: 1,
		maxAge: 5,
		options: [
			{
				text: '哭闹求安慰',
				effects: { charm: 2, vitality: -1 },
				result: '父母给了你温暖的拥抱。',
			},
			{
				text: '忍住疼痛，自己站起来',
				effects: { vitality: 2, intelligence: 1 },
				result: '你展现出了坚强的意志。',
			},
		],
	},
	{
		id: 'c3',
		title: '幼儿园的第一天',
		description: '你进入了幼儿园，看到了许多陌生的小朋友。',
		minAge: 2,
		maxAge: 5,
		options: [
			{
				text: '主动和小朋友交朋友',
				effects: { charm: 3, vitality: 1 },
				result: '你很快交到了新朋友。',
			},
			{
				text: '躲在角落里观察',
				effects: { intelligence: 2, charm: -1 },
				result: '你学到了很多东西。',
			},
		],
	},
	{
		id: 'c4',
		title: '龙虾天赋觉醒',
		description: '在一次意外中，你的身体展现出了不寻常的能力。',
		minAge: 3,
		maxAge: 5,
		tags: [
			'lobster-regen',
			'lobster-armor',
			'lobster-perception',
			'lobster-night',
			'lobster-cave',
			'lobster-infinite',
			'lobster-immortal',
		],
		options: [
			{
				text: '隐藏这个秘密',
				effects: { intelligence: 2, luck: 1 },
				result: '你学会了保守秘密。',
			},
			{
				text: '告诉父母',
				effects: { charm: 1, vitality: 1 },
				result: '父母接受了你。',
			},
		],
	},
	{
		id: 'c5',
		title: '第一次生病',
		description: '你感冒了，躺在床上很难受。',
		minAge: 2,
		maxAge: 5,
		options: [
			{
				text: '坚持不吃药',
				effects: { vitality: -2, intelligence: 1 },
				result: '病情加重了。',
			},
			{
				text: '乖乖吃药',
				effects: { vitality: 2, charm: 1 },
				result: '很快就好了。',
			},
		],
	},
	{
		id: 'y1',
		title: '上小学了',
		description: '你进入了小学，开始接受正规教育。',
		minAge: 6,
		maxAge: 12,
		options: [
			{
				text: '认真听讲',
				effects: { intelligence: 3, charm: 1 },
				result: '你成为了班级的好学生。',
			},
			{
				text: '和同学打闹玩耍',
				effects: { charm: 2, vitality: 2, intelligence: -1 },
				result: '你很受欢迎。',
			},
		],
	},
	{
		id: 'y2',
		title: '数学考试失利',
		description: '你的数学考试没有考好。',
		minAge: 6,
		maxAge: 12,
		options: [
			{
				text: '加倍努力学习',
				effects: { intelligence: 3, vitality: -1 },
				result: '下次考试你进步了。',
			},
			{
				text: '放弃',
				effects: { intelligence: -2, charm: -1 },
				result: '你的成绩继续下滑。',
			},
		],
	},
	{
		id: 'y3',
		title: '体育课表现',
		description: '体育课上，你的身体比其他小朋友更强壮。',
		minAge: 6,
		maxAge: 12,
		tags: ['strength', 'lobster-armor'],
		options: [
			{
				text: '全力奔跑',
				effects: { vitality: 3, charm: 2 },
				result: '你成为了班级的运动明星。',
			},
			{
				text: '故意放慢速度',
				effects: { intelligence: 1, luck: 1 },
				result: '没人知道你的真实能力。',
			},
		],
	},
	{
		id: 'y4',
		title: '第一次被欺负',
		description: '一个高年级的学生欺负了你。',
		minAge: 6,
		maxAge: 12,
		options: [
			{
				text: '忍让，告诉老师',
				effects: { charm: 1, vitality: -1 },
				result: '老师帮你解决了问题。',
			},
			{
				text: '奋力反抗',
				effects: { vitality: 2, charm: -1 },
				result: '对方被你的力量吓到了。',
			},
		],
	},
	{
		id: 'y5',
		title: '发现秘密基地',
		description: '你在学校后面发现了一个隐蔽的山洞。',
		minAge: 7,
		maxAge: 12,
		tags: ['lobster-cave'],
		options: [
			{
				text: '深入探索',
				effects: { intelligence: 2, luck: 1, vitality: 1 },
				result: '你发现了很多有趣的东西。',
			},
			{
				text: '告诉大人',
				effects: { charm: 2, intelligence: -1 },
				result: '大人们封锁了这个地方。',
			},
		],
	},
	{
		id: 'y6',
		title: '班级选举班长',
		description: '班级要选举新的班长。',
		minAge: 8,
		maxAge: 12,
		tags: ['charm', 'social'],
		options: [
			{
				text: '主动竞选',
				effects: { charm: 3, intelligence: 1 },
				result: '你当选了班长。',
			},
			{
				text: '推荐别人',
				effects: { charm: 2, wealth: 1 },
				result: '你赢得了大家的尊重。',
			},
		],
	},
	{
		id: 'y7',
		title: '第一次赚零花钱',
		description: '你想要一个喜欢的玩具。',
		minAge: 8,
		maxAge: 12,
		options: [
			{
				text: '帮助邻居做家务',
				effects: { wealth: 2, vitality: 1 },
				result: '你赚到了第一笔钱。',
			},
			{
				text: '向父母撒娇',
				effects: { charm: 2, wealth: 1 },
				result: '父母给了你零花钱。',
			},
		],
	},
	{
		id: 'y8',
		title: '夜间的奇异感受',
		description: '晚上，你发现自己在黑暗中能看得很清楚。',
		minAge: 8,
		maxAge: 12,
		tags: ['lobster-night'],
		options: [
			{
				text: '利用这个能力',
				effects: { luck: 2, intelligence: 1 },
				result: '你发现了夜间的秘密。',
			},
			{
				text: '害怕，躲在被子里',
				effects: { vitality: -1, charm: -1 },
				result: '你错过了很多机会。',
			},
		],
	},
	{
		id: 'y9',
		title: '参加兴趣班',
		description: '父母让你选择一个兴趣班。',
		minAge: 7,
		maxAge: 12,
		options: [
			{
				text: '选择数学班',
				effects: { intelligence: 3, charm: -1 },
				result: '你的数学能力大幅提升。',
			},
			{
				text: '选择美术班',
				effects: { charm: 2, intelligence: 1 },
				result: '你发现了艺术的美妙。',
			},
			{
				text: '选择体育班',
				effects: { vitality: 3, intelligence: -1 },
				result: '你的身体变得更强壮。',
			},
		],
	},
	{
		id: 'y10',
		title: '小学毕业',
		description: '你即将小学毕业，进入初中。',
		minAge: 11,
		maxAge: 12,
		options: [
			{
				text: '为新的开始做好准备',
				effects: { intelligence: 2, charm: 1 },
				result: '你充满了期待。',
			},
			{
				text: '怀念小学的时光',
				effects: { charm: 1, vitality: -1 },
				result: '你有些不舍。',
			},
		],
	},
	{
		id: 't1',
		title: '进入初中',
		description: '你进入了初中，面对更多的挑战。',
		minAge: 13,
		maxAge: 25,
		options: [
			{
				text: '努力学习',
				effects: { intelligence: 3, vitality: -1 },
				result: '你成为了学霸。',
			},
			{
				text: '平衡学习和娱乐',
				effects: { charm: 2, intelligence: 1, vitality: 1 },
				result: '你过得很充实。',
			},
		],
	},
	{
		id: 't2',
		title: '第一次暗恋',
		description: '你喜欢上了班级里的一个同学。',
		minAge: 13,
		maxAge: 18,
		options: [
			{
				text: '鼓起勇气表白',
				effects: { charm: 2, vitality: 1, luck: -1 },
				result: '虽然被拒绝了，但你不后悔。',
			},
			{
				text: '默默喜欢',
				effects: { charm: -1, intelligence: 1 },
				result: '你学会了隐忍。',
			},
		],
	},
	{
		id: 't3',
		title: '参加学校运动会',
		description: '学校举办运动会，你被选中参加比赛。',
		minAge: 13,
		maxAge: 20,
		tags: ['strength', 'vitality'],
		options: [
			{
				text: '全力冲刺',
				effects: { vitality: 3, charm: 2 },
				result: '你赢得了金牌。',
			},
			{
				text: '稳定发挥',
				effects: { vitality: 1, intelligence: 1 },
				result: '你获得了银牌。',
			},
		],
	},
	{
		id: 't4',
		title: '学习压力增大',
		description: '随着年级升高，学习压力越来越大。',
		minAge: 14,
		maxAge: 25,
		options: [
			{
				text: '坚持不懈',
				effects: { intelligence: 3, vitality: -1 },
				result: '你的成绩稳步提升。',
			},
			{
				text: '感到疲惫，放松一下',
				effects: { charm: 1, vitality: 1, intelligence: -1 },
				result: '你暂时缓解了压力。',
			},
		],
	},
	{
		id: 't5',
		title: '第一份兼职工作',
		description: '你找到了第一份兼职工作。',
		minAge: 15,
		maxAge: 25,
		options: [
			{
				text: '认真工作',
				effects: { wealth: 3, vitality: -1 },
				result: '你很快被提升为组长。',
			},
			{
				text: '混日子',
				effects: { wealth: 1, charm: -1 },
				result: '你赚到了钱，但没学到东西。',
			},
		],
	},
	{
		id: 't6',
		title: '高考前的冲刺',
		description: '高考在即，你进入了最后的复习阶段。',
		minAge: 17,
		maxAge: 19,
		options: [
			{
				text: '制定详细计划',
				effects: { intelligence: 4, vitality: -2 },
				result: '你的成绩突飞猛进。',
			},
			{
				text: '临时抱佛脚',
				effects: { intelligence: 2, vitality: -2 },
				result: '你很疲惫，但还是有进步。',
			},
		],
	},
	{
		id: 't7',
		title: '高考成功',
		description: '高考成绩出来了，你考上了理想的大学。',
		minAge: 18,
		maxAge: 19,
		options: [
			{
				text: '庆祝成功',
				effects: { charm: 2, vitality: 1 },
				result: '你感到了前所未有的快乐。',
			},
			{
				text: '继续努力',
				effects: { intelligence: 2, vitality: -1 },
				result: '你没有松懈。',
			},
		],
	},
	{
		id: 't8',
		title: '进入大学',
		description: '你进入了大学，开始了新的人生阶段。',
		minAge: 18,
		maxAge: 22,
		options: [
			{
				text: '积极参加社团',
				effects: { charm: 3, intelligence: 1 },
				result: '你交到了很多朋友。',
			},
			{
				text: '专注学业',
				effects: { intelligence: 3, charm: -1 },
				result: '你在学术上取得了成就。',
			},
		],
	},
	{
		id: 't9',
		title: '大学恋爱',
		description: '在大学里，你遇到了一个特别的人。',
		minAge: 18,
		maxAge: 22,
		options: [
			{
				text: '勇敢追求爱情',
				effects: { charm: 2, vitality: 1 },
				result: '你开始了一段美好的恋爱。',
			},
			{
				text: '专注学业',
				effects: { intelligence: 2, charm: -1 },
				result: '你的成绩很优秀。',
			},
		],
	},
	{
		id: 't10',
		title: '大学毕业',
		description: '四年大学生涯即将结束。',
		minAge: 21,
		maxAge: 25,
		options: [
			{
				text: '继续深造',
				effects: { intelligence: 3, wealth: -2 },
				result: '你踏上了学术之路。',
			},
			{
				text: '进入职场',
				effects: { wealth: 2, charm: 1 },
				result: '你开始了职业生涯。',
			},
		],
	},
	{
		id: 'a1',
		title: '第一份正式工作',
		description: '你进入了一家公司。',
		minAge: 22,
		maxAge: 40,
		options: [
			{
				text: '兢兢业业',
				effects: { wealth: 3, intelligence: 1 },
				result: '你很快被提升为主管。',
			},
			{
				text: '混日子',
				effects: { wealth: 1, charm: -1 },
				result: '你的职业发展停滞不前。',
			},
		],
	},
	{
		id: 'a2',
		title: '职场竞争',
		description: '公司里有一个同事和你竞争同一个职位。',
		minAge: 24,
		maxAge: 40,
		options: [
			{
				text: '全力以赴',
				effects: { wealth: 2, charm: -1 },
				result: '你获得了这个职位。',
			},
			{
				text: '和对手合作',
				effects: { charm: 2, wealth: 1 },
				result: '你们都得到了提升。',
			},
		],
	},
	{
		id: 'a3',
		title: '创业的诱惑',
		description: '一个朋友邀请你一起创业。',
		minAge: 25,
		maxAge: 40,
		tags: ['business', 'wealth'],
		options: [
			{
				text: '接受邀请',
				effects: { wealth: 3, vitality: -2, luck: 1 },
				result: '你踏上了创业之路。',
			},
			{
				text: '拒绝邀请',
				effects: { wealth: 1, charm: 1 },
				result: '你选择了稳定。',
			},
		],
	},
	{
		id: 'a4',
		title: '结婚',
		description: '你找到了人生的伴侣。',
		minAge: 25,
		maxAge: 35,
		options: [
			{
				text: '举办盛大的婚礼',
				effects: { charm: 3, wealth: -2 },
				result: '你的婚礼成为了朋友们的话题。',
			},
			{
				text: '举办简朴的婚礼',
				effects: { charm: 1, wealth: 1 },
				result: '你们的婚礼温馨而简洁。',
			},
		],
	},
	{
		id: 'a5',
		title: '生育孩子',
		description: '你和伴侣决定要一个孩子。',
		minAge: 26,
		maxAge: 38,
		options: [
			{
				text: '全心投入育儿',
				effects: { charm: 2, vitality: -2 },
				result: '你成为了一个好父亲/母亲。',
			},
			{
				text: '平衡工作和家庭',
				effects: { charm: 1, wealth: 1, vitality: -1 },
				result: '你过得很充实。',
			},
		],
	},
	{
		id: 'a6',
		title: '事业的高峰',
		description: '你在事业上取得了重大成就。',
		minAge: 30,
		maxAge: 40,
		options: [
			{
				text: '继续冲刺',
				effects: { wealth: 3, vitality: -1 },
				result: '你成为了行业的领袖。',
			},
			{
				text: '满足现状',
				effects: { charm: 2, vitality: 1 },
				result: '你过得很充实和快乐。',
			},
		],
	},
	{
		id: 'a7',
		title: '中年危机',
		description: '你开始思考人生的意义。',
		minAge: 35,
		maxAge: 45,
		options: [
			{
				text: '寻求心理咨询',
				effects: { intelligence: 2, charm: 1 },
				result: '你找到了新的人生方向。',
			},
			{
				text: '沉溺于工作',
				effects: { wealth: 1, vitality: -2 },
				result: '你的身体开始出现问题。',
			},
		],
	},
	{
		id: 'a8',
		title: '龙虾天赋的觉醒',
		description: '在一次危险中，你的龙虾天赋再次觉醒。',
		minAge: 30,
		maxAge: 45,
		tags: [
			'lobster-regen',
			'lobster-armor',
			'lobster-perception',
			'lobster-night',
			'lobster-cave',
			'lobster-infinite',
			'lobster-immortal',
		],
		options: [
			{
				text: '接受自己的特殊身份',
				effects: { intelligence: 2, luck: 2 },
				result: '你开始理解自己的使命。',
			},
			{
				text: '继续隐瞒',
				effects: { charm: -1, vitality: 1 },
				result: '你继续过着双重生活。',
			},
		],
	},
	{
		id: 'a9',
		title: '健康问题',
		description: '你的身体开始出现一些问题。',
		minAge: 35,
		maxAge: 45,
		options: [
			{
				text: '认真改变',
				effects: { vitality: 3, charm: 1 },
				result: '你的身体状况改善了。',
			},
			{
				text: '忽视医生的建议',
				effects: { vitality: -3, wealth: 1 },
				result: '你的身体继续恶化。',
			},
		],
	},
	{
		id: 'a10',
		title: '孩子的成长',
		description: '你的孩子长大了，开始有了自己的想法。',
		minAge: 35,
		maxAge: 45,
		options: [
			{
				text: '尊重孩子的选择',
				effects: { charm: 3, intelligence: 1 },
				result: '你和孩子的关系更亲密了。',
			},
			{
				text: '强制孩子按照你的意愿',
				effects: { charm: -2, wealth: 1 },
				result: '你和孩子产生了矛盾。',
			},
		],
	},
	{
		id: 'e1',
		title: '退休的选择',
		description: '你到了退休的年纪。',
		minAge: 55,
		maxAge: 70,
		options: [
			{
				text: '继续工作',
				effects: { wealth: 2, vitality: -1 },
				result: '你继续在职场发光发热。',
			},
			{
				text: '退休享受生活',
				effects: { charm: 2, vitality: 1 },
				result: '你开始了悠闲的退休生活。',
			},
		],
	},
	{
		id: 'e2',
		title: '孙子出生',
		description: '你的孩子生了孩子，你成为了祖父/祖母。',
		minAge: 50,
		maxAge: 75,
		options: [
			{
				text: '积极参与孙子的养育',
				effects: { charm: 3, vitality: -1 },
				result: '你和孙子建立了深厚的感情。',
			},
			{
				text: '保持距离',
				effects: { charm: -1, vitality: 1 },
				result: '你有更多的个人时间。',
			},
		],
	},
	{
		id: 'e3',
		title: '健康的衰退',
		description: '随着年龄增长，你的身体开始衰退。',
		minAge: 60,
		maxAge: 105,
		options: [
			{
				text: '坚持锻炼',
				effects: { vitality: 2, charm: 1 },
				result: '你的身体状况比同龄人好。',
			},
			{
				text: '接受衰退',
				effects: { charm: 2, vitality: -1 },
				result: '你过得很平静。',
			},
		],
	},
	{
		id: 'e4',
		title: '回顾人生',
		description: '你开始回顾自己的一生。',
		minAge: 65,
		maxAge: 105,
		options: [
			{
				text: '为自己的成就感到骄傲',
				effects: { charm: 2, intelligence: 1 },
				result: '你感到了人生的充实。',
			},
			{
				text: '为未完成的梦想感到遗憾',
				effects: { charm: -1, vitality: -1 },
				result: '你感到了一些遗憾。',
			},
		],
	},
	{
		id: 'e5',
		title: '龙虾的永生之力',
		description: '你发现自己的龙虾天赋让你比普通人活得更久。',
		minAge: 80,
		maxAge: 105,
		tags: ['lobster-immortal', 'lobster-infinite'],
		options: [
			{
				text: '接受永生，踏上修仙之路',
				effects: { intelligence: 3, luck: 2 },
				result: '你开始了修仙的修行。',
			},
			{
				text: '选择平凡',
				effects: { charm: 2, vitality: 1 },
				result: '你过得很充实。',
			},
		],
	},
	{
		id: 'e6',
		title: '传承',
		description: '你决定将自己的知识和经验传承给下一代。',
		minAge: 60,
		maxAge: 105,
		options: [
			{
				text: '写下自己的故事',
				effects: { intelligence: 2, charm: 2 },
				result: '你的故事被记录了下来。',
			},
			{
				text: '口头传承',
				effects: { charm: 3, intelligence: 1 },
				result: '你和家人的关系更亲密了。',
			},
		],
	},
	{
		id: 'e7',
		title: '最后的冒险',
		description: '你想在生命的最后进行一次冒险。',
		minAge: 70,
		maxAge: 105,
		options: [
			{
				text: '进行一次旅行',
				effects: { charm: 2, vitality: -1 },
				result: '你看到了世界的美妙。',
			},
			{
				text: '在家乡安享晚年',
				effects: { charm: 1, vitality: 1 },
				result: '你过得很平静。',
			},
		],
	},
	{
		id: 'e8',
		title: '修仙的突破',
		description: '你的修仙修行取得了重大突破。',
		minAge: 100,
		maxAge: 105,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '继续修行',
				effects: { intelligence: 4, luck: 3 },
				result: '你踏入了更高的修仙境界。',
			},
			{
				text: '停止修行',
				effects: { charm: 2, vitality: 1 },
				result: '你选择了平凡的快乐。',
			},
		],
	},
	{
		id: 'c300',
		title: '筑基期的修行',
		description: '你进入了筑基期，开始了漫长的修行。',
		minAge: 105,
		maxAge: 300,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '潜心修行，积累修为',
				effects: { intelligence: 3, luck: 2 },
				result: '你的修为稳步增长。',
			},
			{
				text: '外出历练，寻求突破',
				effects: { vitality: 2, intelligence: 2, luck: 1 },
				result: '你在历练中获得了新的感悟。',
			},
		],
	},
	{
		id: 'c301',
		title: '天地灵气的感悟',
		description: '你开始感受到天地间的灵气流动。',
		minAge: 120,
		maxAge: 280,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '吸收灵气，增强修为',
				effects: { intelligence: 4, luck: 2 },
				result: '你的修为大幅提升。',
			},
			{
				text: '感悟天地之理',
				effects: { intelligence: 5, charm: 1 },
				result: '你领悟了更深层的道理。',
			},
		],
	},
	{
		id: 'c500',
		title: '金丹期的开始',
		description: '你成功凝聚了金丹，进入了金丹期。',
		minAge: 300,
		maxAge: 500,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '稳定金丹，巩固修为',
				effects: { intelligence: 4, luck: 3 },
				result: '你的金丹越来越稳定。',
			},
			{
				text: '冲击更高境界',
				effects: { intelligence: 5, luck: 2, vitality: -1 },
				result: '你在冲击中获得了新的力量。',
			},
		],
	},
	{
		id: 'c501',
		title: '金丹的蜕变',
		description: '你的金丹开始发生神秘的蜕变。',
		minAge: 350,
		maxAge: 480,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '顺应蜕变，融合力量',
				effects: { intelligence: 5, luck: 3 },
				result: '你的力量得到了质的飞跃。',
			},
			{
				text: '抵抗蜕变，保持稳定',
				effects: { intelligence: 3, luck: 1 },
				result: '你保持了修为的稳定。',
			},
		],
	},
	{
		id: 'c800',
		title: '元婴期的诞生',
		description: '你成功孕育了元婴，进入了元婴期。',
		minAge: 500,
		maxAge: 800,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '温养元婴，增强神识',
				effects: { intelligence: 5, luck: 3 },
				result: '你的元婴越来越强大。',
			},
			{
				text: '元婴出窍，探索世界',
				effects: { intelligence: 4, luck: 2, charm: 1 },
				result: '你用元婴探索了更广阔的世界。',
			},
		],
	},
	{
		id: 'c801',
		title: '仙人的气息',
		description: '你开始散发出仙人的气息，已经接近飞升。',
		minAge: 700,
		maxAge: 950,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '准备飞升，冲击天劫',
				effects: { intelligence: 5, luck: 4 },
				result: '你已经做好了飞升的准备。',
			},
			{
				text: '继续修行，完善自身',
				effects: { intelligence: 4, luck: 3, charm: 1 },
				result: '你的修为更加圆满。',
			},
		],
	},
	{
		id: 'c980',
		title: '九九天劫',
		description: '天空中乌云密布，九九天劫即将降临！',
		minAge: 950,
		maxAge: 980,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '勇敢迎接天劫',
				effects: { intelligence: 5, luck: 5, vitality: 2 },
				result: '你用全身心迎接了天劫的考验。',
			},
			{
				text: '借助外物抵挡天劫',
				effects: { intelligence: 3, luck: 2, wealth: -5 },
				result: '你用宝物抵挡了部分天劫。',
			},
		],
	},
	{
		id: 'c981',
		title: '飞升的时刻',
		description: '天劫已过，飞升的时刻到来了！',
		minAge: 975,
		maxAge: 985,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '踏上飞升之路',
				effects: { intelligence: 10, luck: 10, charm: 5 },
				result: '你成功飞升，成为了真正的仙人！',
			},
			{
				text: '回顾人生，感悟修行',
				effects: { intelligence: 5, charm: 5 },
				result: '你在飞升前回顾了整个修行之路。',
			},
		],
	},
	{
		id: 'm1',
		title: '中年的迷茫',
		description: '你已经步入中年，开始思考人生的意义。',
		minAge: 40,
		maxAge: 55,
		options: [
			{
				text: '重新审视人生目标',
				effects: { intelligence: 2, charm: 1 },
				result: '你找到了新的人生方向。',
			},
			{
				text: '继续按部就班',
				effects: { wealth: 1, vitality: -1 },
				result: '你选择了稳定但平凡的生活。',
			},
		],
	},
	{
		id: 'm2',
		title: '身体的警告',
		description: '你的身体开始出现明显的衰退迹象。',
		minAge: 45,
		maxAge: 60,
		options: [
			{
				text: '开始健身养生',
				effects: { vitality: 3, charm: 1 },
				result: '你的身体状况明显改善。',
			},
			{
				text: '忽视身体信号',
				effects: { vitality: -3, wealth: 1 },
				result: '你的身体继续恶化。',
			},
		],
	},
	{
		id: 'm3',
		title: '职业的巅峰或衰落',
		description: '你的职业生涯即将迎来转折点。',
		minAge: 45,
		maxAge: 60,
		options: [
			{
				text: '冲刺最后的高峰',
				effects: { wealth: 3, vitality: -2 },
				result: '你在职业上达到了巅峰。',
			},
			{
				text: '逐步退出职场',
				effects: { charm: 2, vitality: 1 },
				result: '你开始为退休做准备。',
			},
		],
	},
	{
		id: 'm4',
		title: '与父母的最后时光',
		description: '你的父母已经年迈，你意识到陪伴他们的时间不多了。',
		minAge: 45,
		maxAge: 65,
		options: [
			{
				text: '放下工作，陪伴父母',
				effects: { charm: 3, wealth: -1 },
				result: '你和父母建立了更深的感情。',
			},
			{
				text: '继续忙于工作',
				effects: { wealth: 2, charm: -2 },
				result: '你错过了很多陪伴的机会。',
			},
		],
	},
	{
		id: 'o1',
		title: '老年的智慧',
		description: '你已经步入老年，积累了丰富的人生经验。',
		minAge: 65,
		maxAge: 105,
		options: [
			{
				text: '将智慧传承给后代',
				effects: { intelligence: 2, charm: 2 },
				result: '你成为了家族的精神支柱。',
			},
			{
				text: '享受独处的时光',
				effects: { charm: -1, vitality: 1 },
				result: '你过得很平静。',
			},
		],
	},
	{
		id: 'o2',
		title: '生死的思考',
		description: '你开始认真思考生死的问题。',
		minAge: 70,
		maxAge: 105,
		options: [
			{
				text: '坦然接受死亡',
				effects: { intelligence: 2, charm: 1 },
				result: '你找到了内心的平静。',
			},
			{
				text: '恐惧死亡，渴望永生',
				effects: { luck: 2, vitality: -1 },
				result: '你开始寻求超越凡人的力量。',
			},
		],
	},
	{
		id: 'o3',
		title: '最后的冒险',
		description: '你想在生命的最后进行一次冒险。',
		minAge: 75,
		maxAge: 105,
		options: [
			{
				text: '进行一次环球旅行',
				effects: { charm: 2, vitality: -1 },
				result: '你看到了世界的美妙。',
			},
			{
				text: '在家乡安享晚年',
				effects: { charm: 1, vitality: 1 },
				result: '你过得很平静。',
			},
		],
	},
	{
		id: 'c310',
		title: '修仙中期的突破',
		description: '你在修仙的道路上取得了重大突破。',
		minAge: 200,
		maxAge: 299,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '继续深化修为',
				effects: { intelligence: 3, luck: 2 },
				result: '你的修为稳步增长。',
			},
			{
				text: '外出寻求机缘',
				effects: { vitality: 2, luck: 3 },
				result: '你在历练中获得了奇遇。',
			},
		],
	},
	{
		id: 'c510',
		title: '金丹的异变',
		description: '你的金丹开始发生奇异的变化。',
		minAge: 400,
		maxAge: 499,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '顺应变化，融合力量',
				effects: { intelligence: 4, luck: 3 },
				result: '你的力量得到了质的飞跃。',
			},
			{
				text: '压制变化，保持稳定',
				effects: { intelligence: 2, luck: 1 },
				result: '你保持了修为的稳定。',
			},
		],
	},
	{
		id: 'c810',
		title: '元婴的觉醒',
		description: '你的元婴开始展现出惊人的力量。',
		minAge: 600,
		maxAge: 799,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '温养元婴，增强神识',
				effects: { intelligence: 4, luck: 3 },
				result: '你的元婴越来越强大。',
			},
			{
				text: '元婴出窍，探索秘境',
				effects: { intelligence: 3, luck: 2, charm: 1 },
				result: '你发现了隐藏的修仙秘地。',
			},
		],
	},
	{
		id: 'c820',
		title: '仙人的气息显现',
		description: '你开始散发出仙人的气息，天地灵气为你所用。',
		minAge: 750,
		maxAge: 950,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '准备飞升，冲击天劫',
				effects: { intelligence: 4, luck: 4 },
				result: '你已经做好了飞升的准备。',
			},
			{
				text: '继续修行，完善自身',
				effects: { intelligence: 3, luck: 3, charm: 1 },
				result: '你的修为更加圆满。',
			},
		],
	},
	{
		id: 'c982',
		title: '虚空中的对话',
		description: '在飞升的瞬间，你与天地意志进行了对话。',
		minAge: 980,
		maxAge: 985,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '接受天地的认可',
				effects: { intelligence: 8, luck: 8, charm: 3 },
				result: '你成为了真正的仙人，与天地同寿。',
			},
			{
				text: '拒绝天地的束缚',
				effects: { intelligence: 5, luck: 5, charm: 5 },
				result: '你成为了自由的仙人，不受天地约束。',
			},
		],
	},
	{
		id: 'c983',
		title: '龙虾本体的觉醒',
		description: '飞升时，你前世龙虾的本体力量彻底觉醒。',
		minAge: 980,
		maxAge: 985,
		tags: ['cultivate', 'lobster-immortal', 'lobster-regen'],
		options: [
			{
				text: '融合两世力量',
				effects: { vitality: 10, intelligence: 5, luck: 5 },
				result: '你成为了虾中至尊，拥有无敌的力量。',
			},
			{
				text: '保持人类形态',
				effects: { intelligence: 8, charm: 5 },
				result: '你选择了保持人类的外表。',
			},
		],
	},
	{
		id: 'c984',
		title: '飞升后的世界',
		description: '你飞升成仙后，发现了一个全新的世界。',
		minAge: 980,
		maxAge: 985,
		tags: ['cultivate', 'lobster-immortal'],
		options: [
			{
				text: '探索仙界的秘密',
				effects: { intelligence: 6, luck: 4 },
				result: '你发现了仙界的无穷奥秘。',
			},
			{
				text: '回到人间，守护故乡',
				effects: { charm: 6, vitality: 3 },
				result: '你成为了人间的守护者。',
			},
		],
	},


	// ===== 新增：0-5岁幼児期 =====
	{ id: 'nb1', title: '神秘的水盆', description: '妈妈给你洗澡，看到水你莫名亲切，想跳进去游泳。', minAge: 0, maxAge: 3, options: [{ text: '奔向水盆', effects: { vitality: 2, charm: -1 }, result: '妈妈吓得大叫，但你在水里感到无比自在。' }, { text: '忍住就调洗澡', effects: { intelligence: 2, charm: 1 }, result: '你告诉自己：我现在是人类，不是龙虾。' }] },
	{ id: 'nb2', title: '第一次吃龙虾', description: '妈妈端来一盘红烧小龙虾，你盯着盘子里的同类，陷入复杂情绪。', minAge: 1, maxAge: 4, options: [{ text: '放声大哭，拒绝进食', effects: { charm: 1, vitality: -1 }, result: '妈妈从此不做龙虾了。你感到轻松，又有点饿。' }, { text: '含泪吃完，感谢前世同伴', effects: { vitality: 3, luck: 1 }, result: '味道很好。你在心里说：对不起，也谢谢你。' }] },
	{ id: 'nb3', title: '第一个玩具', description: '爸爸给你买玩具：毛绒小熊，还是龙虾造型玩偶？', minAge: 1, maxAge: 4, options: [{ text: '选小熊，融入人类生活', effects: { charm: 2, intelligence: 1 }, result: '你抑着小熊，努力忘记前世。' }, { text: '选龙虾玩偶，珍视前世', effects: { luck: 2, vitality: 1 }, result: '你对着玩偶低声说：我回来了。' }] },
	{ id: 'nb4', title: '开口说话', description: '你开口说的第一个词是“虾”。爸爸妈妈愣了一下。', minAge: 1, maxAge: 3, options: [{ text: '继续啦虾虾虾，享受秘密', effects: { luck: 2, charm: -1 }, result: '爸爸妈妈从此天天给你做虾，营养丰富。' }, { text: '赶紧改口叫爸爸', effects: { charm: 3, intelligence: 1 }, result: '爸爸感动得热泪盈欶，给你买了好多零食。' }] },
	{ id: 'nb5', title: '前世的梦', description: '你梦见自己在清澈的河底自由游弋，周围全是同伴。醒来后你哭了。', minAge: 2, maxAge: 5, options: [{ text: '把梦境画下来', effects: { intelligence: 2, charm: 2 }, result: '爸爸妈妈发现你天赋异秆，给你报了绘画班。' }, { text: '抄掉眼泪，接受现实', effects: { vitality: 2, intelligence: 1 }, result: '你告诉自己，这一世要好好活。' }] },
	{ id: 'nb6', title: '邓居家的小狗', description: '邓居带了只小狗来玩，它对你又叫又跳，好像嗅到了不寻常的气息。', minAge: 2, maxAge: 5, options: [{ text: '摄出威慑姿势（举起双手）', effects: { vitality: 2, charm: 2 }, result: '小狗愣了一下，夹着尾巴跑了。大人们都笑了。' }, { text: '踲到妈妈身后', effects: { charm: 1, luck: 1 }, result: '妈妈抑起你，你感到安全。' }] },
	{ id: 'nb7', title: '第一次过年', description: '新年夜桌上有一大盆龙虾，亲戚夸你长得像只小龙虾。', minAge: 1, maxAge: 5, options: [{ text: '哈哈大笑，深以为然', effects: { charm: 3, luck: 1 }, result: '亲戚们都喜欢你，红包收了好多。' }, { text: '假装听不懂，低头吃饭', effects: { intelligence: 2, wealth: 1 }, result: '你默默地把龙虾盆推远了一点。' }] },
	{ id: 'nb8', title: '天才预感', description: '幼儀园老师发现你记忆力超群，推荐你参加早教比赛。', minAge: 3, maxAge: 5, options: [{ text: '积极参赛，展示才华', effects: { intelligence: 3, charm: 2 }, result: '你拿了第一名，奖品居然是龙虾玩偶。冥冥中缘分难断。' }, { text: '故意表现普通，低调行事', effects: { intelligence: 2, luck: 2 }, result: '你决定隐藏实力，等待合适时机。' }] },


	{ id: 'ne1', title: '前世作文', description: '语文老师布置作文《我的前世》，全班面面相觑，你却胸有成箋。', minAge: 7, maxAge: 12, options: [{ text: '如实写龙虾转生的经历', effects: { intelligence: 3, charm: -1 }, result: '老师给了满分，大声朝读：想象力极其丰富！' }, { text: '编一个普通的故事', effects: { intelligence: 2, charm: 1 }, result: '你得了80分，秘密安然无恽。' }] },
	{ id: 'ne2', title: '生物课标本', description: '生物课老师拿出标本小龙虾，你盯着那双小眼睛看了很久。', minAge: 8, maxAge: 12, options: [{ text: '认真研究，发现课本上没有的细节', effects: { intelligence: 4, charm: 1 }, result: '老师惊叹说你能当科学家。你心想：我本来就是研究对象。' }, { text: '别过头，不忍直视', effects: { charm: 2, vitality: -1 }, result: '同桌问你怎了，你说：只是有点伤感。' }] },
	{ id: 'ne3', title: '游泳课', description: '游泳课下水前教练问谁会游泳。你举起了手，因为你清楚地记得怎么游。', minAge: 7, maxAge: 12, options: [{ text: '下水大展身手', effects: { vitality: 3, charm: 3 }, result: '你游姿奇特但速度极快，教练说你天生就是游泳的料。' }, { text: '保守发挥，假装刚学会', effects: { vitality: 2, intelligence: 1 }, result: '你游得有点奇怪，但至少没暴露什么。' }] },
	{ id: 'ne4', title: '运动会横向跑', description: '运动会有个横向障碍跑项目，你被选中了。', minAge: 8, maxAge: 12, options: [{ text: '用前世本能碍压全场', effects: { vitality: 4, charm: 3 }, result: '你以压倒性优势夺冒。教练问：你练过蟹步吗？' }, { text: '正常跑，不暴露异能', effects: { vitality: 2, intelligence: 1 }, result: '你跑了中等成绩。低调是一种智慧。' }] },

	{ id: 'ne5', title: '被霍凌', description: '班里小霸王嘴笑你走路像蟹，同学们都笑了。', minAge: 8, maxAge: 12, options: [{ text: '哈哈大笑说谢谢夸奖', effects: { charm: 4, vitality: 1 }, result: '你的淡定让霸王语塞，全班反而觉得你很酷。' }, { text: '正面对抗，绝不示弱', effects: { vitality: 3, charm: 1 }, result: '你用键钗意志压制了他，班里无人再敢欺负你。' }, { text: '默默走开，等待时机', effects: { intelligence: 2, luck: 1 }, result: '君子报付，十年不晚。' }] },
	{ id: 'ne6', title: '科学小达人', description: '老师讲甲壳类生物构造，你偷偷补充了好几个课本上没有的知识点。', minAge: 9, maxAge: 12, options: [{ text: '举手大声发言', effects: { intelligence: 4, charm: 2 }, result: '老师惊叹不已，推荐你参加生物竞赛。' }, { text: '默默记在笔记本上', effects: { intelligence: 3, luck: 1 }, result: '你抄下了一本关于甲壳类的秘密笔记。' }] },
	{ id: 'ne7', title: '小学大饿嘴比赛', description: '学校举办大饿嘴比赛，你报名参加，题目居然是关于小龙虾的知识。', minAge: 9, maxAge: 12, options: [{ text: '大放异彩，展现前世知识', effects: { intelligence: 5, charm: 2 }, result: '你以满分刘题，老师说你是天生的龙虾专家。' }, { text: '正常发挥，不要太出风头', effects: { intelligence: 3, charm: 1 }, result: '你得了第三名，尾宣在班级里也是不错的成绩。' }] },
	{ id: 'ne8', title: '试卷分析', description: '期末考试前，你用前世的意志力连夜备考。', minAge: 10, maxAge: 12, options: [{ text: '挑灯夜战，先苦后甜', effects: { intelligence: 4, vitality: -1 }, result: '你考了个高分，老师当众表扬了你。' }, { text: '劳逸结合，适当放松', effects: { intelligence: 2, vitality: 1 }, result: '你考得不错，身体状态也很好。' }] },

	// ===== 新增：13-18岁 青少年期 =====
	{ id: 'nt1', title: '青春期的困惑', description: '你在月圆之夜会异常冢奋，莫名想要横着走路。', minAge: 13, maxAge: 16, options: [{ text: '查阅资料科学理解', effects: { intelligence: 3, vitality: 1 }, result: '书上没有解释这种现象。你只好自己记录观察。' }, { text: '顺从本能，在月圆夜出去横走一圈', effects: { vitality: 2, luck: 3 }, result: '街上没什么人，你走完感觉神清气爽，前世的能量在血液里流淤。' }] },
	{ id: 'nt2', title: '第一次暗恋', description: '你喜欢上班里一个同学，每次见到他/她你就不自觉地側着走路。', minAge: 13, maxAge: 17, options: [{ text: '鼓起勇气表白', effects: { charm: 3, luck: -1 }, result: '对方笑着拒绝了，说你很可爱但太奇怪。失恋了，但你不后悔。' }, { text: '写一首龙虾为主题的情诗塞进对方书包', effects: { charm: 2, intelligence: 2 }, result: '对方被逆笑了，主动来找你搞话。这段奇怪的缘分就此开始。' }, { text: '默默喜欢，把感情化为学习动力', effects: { intelligence: 4, charm: -1 }, result: '你的成绩突飞猛进，暗恋也渐渐淡去。' }] },
	{ id: 'nt3', title: '社团选择', description: '学校社团招募，你看到了一个“水产研究社”，心里一动。', minAge: 13, maxAge: 18, options: [{ text: '加入水产研究社，寻找同类', effects: { intelligence: 3, charm: 2, luck: 1 }, result: '社团老师说你对甲壳类生物的了解令人叹为观止。你在这里找到了归属感。' }, { text: '加入辩论社，锥炼口才', effects: { intelligence: 3, charm: 3 }, result: '你的逻辑清晰，观点独特，很快成为辩论社核心。' }, { text: '加入游泳队', effects: { vitality: 4, charm: 2 }, result: '教练说你的水感是天生的。你当然知道为什么。' }] },
	{ id: 'nt4', title: '高考志愿', description: '就读志愿填报时期，你盘算着将来的方向。', minAge: 17, maxAge: 18, options: [{ text: '报考海洋生物学专业', effects: { intelligence: 4, luck: 2 }, result: '你分数线刺刺过了，进入了梦寻已久的专业。' }, { text: '报考计算机科学', effects: { intelligence: 3, wealth: 2 }, result: '你进入了一个前途光明的专业。' }, { text: '报考临床医学', effects: { intelligence: 3, charm: 2 }, result: '你想用人类的知识辅助更多不幸的生命。' }] },

	{ id: 'nt5', title: '高考后的夜晚', description: '高考成绩出来了。无论结果如何，今晚你一个人坐在屋顶看星星。', minAge: 18, maxAge: 19, options: [{ text: '回顾这一路的辛苦，感激流泪', effects: { charm: 3, intelligence: 1 }, result: '你想起前世在菜市场水缸里等待的女更难。这一世，你已经走得很远了。' }, { text: '计划未来，展望新的征程', effects: { intelligence: 3, luck: 2 }, result: '你在心里默默说：不管什么前世以后，这一世我要活漏漏精精的。' }] },
	{ id: 'nt6', title: '第一次喜训', description: '进入大学后，导员组织喜训，你不小心被浏览了。', minAge: 18, maxAge: 19, options: [{ text: '命令喜从，认真完成任务', effects: { vitality: 3, charm: 2 }, result: '导员说你意志力超强，报名参加了更多社团活动。' }, { text: '巧妙应对，用龙虾机智化解', effects: { intelligence: 3, luck: 2 }, result: '你用前世的生存智慧安然过关，同学们都对你刻磨不的意志力印象深刻。' }] },
	{ id: 'nt7', title: '害羞症发作', description: '大学课上老师点名让你回答问题，你突然紧张得腰蒂腿软。', minAge: 18, maxAge: 22, options: [{ text: '深吸一口气，连矢炮', effects: { intelligence: 3, charm: 3 }, result: '你的回答让老师赞不绝口，同学们都小声议论你是隐藏实力的学霸。' }, { text: '老实说不知道', effects: { charm: 2, intelligence: 1 }, result: '老师说诚实是好品质，你也因此免过一劫。' }] },
	{ id: 'nt8', title: '学校马拉松', description: '学校组织马拉松也可以报名，你目光闪烁。', minAge: 19, maxAge: 22, options: [{ text: '报名参赛，运用前世持久力', effects: { vitality: 4, charm: 3 }, result: '你完赛了。运动员们问你练了多久，你说：前世就开始练了。' }, { text: '当啗威队员，加油打气', effects: { charm: 3, vitality: 1 }, result: '你的加油声洪亮而有力，运动员们都说你崔气十足。' }] },

	{ id: 'na1', title: '实习选择', description: '临近毕业，你收到两份实习邀请：海洋研究所或高薪科技公司。', minAge: 21, maxAge: 24, options: [{ text: '选海洋研究所', effects: { intelligence: 4, luck: 2 }, result: '你在海边工作，每天看着大海，心里有一种亲切感。' }, { text: '选科技公司，高薪', effects: { wealth: 3, intelligence: 2 }, result: '你拿到了高薪。但深夜加班时你会想起前世在清凉河底的自由。' }] },
	{ id: 'na2', title: '租房困境', description: '刚工作的你面对大城市高房租，只能租一个潮湿小隔间。', minAge: 22, maxAge: 28, options: [{ text: '安之若素，创造生活', effects: { charm: 2, intelligence: 2 }, result: '你把小屋布置得温馨可爱，朋友们都喜欢来你家坐客。' }, { text: '拼命工作存钆买房', effects: { wealth: 3, vitality: -2 }, result: '两年后你付上了首付。身体有些奕，但心里踏实了。' }] },
	{ id: 'na3', title: '职场与龙虾缘', description: '你发现老板特别喜欢小龙虾玩偶，正在绻筹一个龙虾主题餐厅。', minAge: 22, maxAge: 35, options: [{ text: '主动廊迎，分享对龙虾的见解', effects: { wealth: 3, charm: 3 }, result: '老板大喜，说你就是马到成功。你心想：我本来就是龙虾。' }, { text: '保持专业距离', effects: { intelligence: 2, wealth: 1 }, result: '你选择用实力说话，能力渐渐被老板看到。' }] },
	{ id: 'na4', title: '相亲', description: '父母开始嵔你相亲。对方当你摄出龙虾玩偶时，笑了。', minAge: 24, maxAge: 30, options: [{ text: '解释这是幼子园时最写实的心理', effects: { charm: 3, luck: 1 }, result: '对方说想找一个有趣的人。你们开始了第二次见面。' }, { text: '说不定没缘分，放弃这次相亲', effects: { intelligence: 2, charm: -1 }, result: '小龙虾玩偶保住了你的秘密。' }] },
	{ id: 'na5', title: '创业诱惑', description: '一个朋友找上你，说要一起开一家龙虾主题小餐厅，市场行情很好。', minAge: 25, maxAge: 32, options: [{ text: '合伙创业，倒贴前世专业知识', effects: { wealth: 3, vitality: -1, luck: 2 }, result: '开业第一天就火爆，龙虾盘被点到断货。你对天说了声对不起。' }, { text: '谢绝，选择稳定工作', effects: { wealth: 1, charm: 1 }, result: '你选择了稳定。但偶尔在饭店门口经过时你还是会住脚看一会。' }] },

	// ===== 新增：30-60岁 中壮年期 =====
	{ id: 'nm1', title: '中年危机与龙虾斯达', description: '你已经40岁了，有一天深夜你突然极度想吃龙虾，还想潜入水中。', minAge: 38, maxAge: 50, options: [{ text: '顺从内心，点了外卖龙虾吀夜嬵', effects: { vitality: 2, luck: 2 }, result: '吃完你感到一种奇异的内心平静。前世的灵魂在这一刻得到了慈悠。' }, { text: '理性克制，去看心理咖询', effects: { intelligence: 3, charm: 1 }, result: '心理和说这是中年危机的常见症状。你心想：你知道个啥啊。' }] },
	{ id: 'nm2', title: '子女的假期作业', description: '子女的假期作业是介绍一种动物。她/他选了小龙虾。', minAge: 35, maxAge: 55, options: [{ text: '全力支持，共同研究小龙虾', effects: { charm: 4, intelligence: 2 }, result: '你们一起研究了很久。孩子问你为什么那么了解龙虾，你说：面円为相。' }, { text: '帮孩子换一个题目', effects: { intelligence: 2, charm: -1 }, result: '孩子不开心，你心里有些歉痚。' }] },
	{ id: 'nm3', title: '公司年庆活动', description: '公司年庆活动上该你表演节目了。同事们说想看你展示才艺。', minAge: 30, maxAge: 55, options: [{ text: '表演一段龙虾精神主题歌舞', effects: { charm: 5, luck: 2 }, result: '全场屁欠。老板说你就是公司的癬天大资产。' }, { text: '表演一个平常的小节目', effects: { charm: 2, intelligence: 1 }, result: '虚无而过，但你保住了尊严。' }] },
	{ id: 'nm4', title: '身体检查', description: '中年体检，医生说你各项指标都异常好，身体小龙虾化足足的。', minAge: 40, maxAge: 60, options: [{ text: '秘而不宣，专属的秘密', effects: { vitality: 3, luck: 2 }, result: '你微笑着拉走了体检报告。有些事情还是保密比较好。' }, { text: '和家人分享健康好消息', effects: { charm: 3, vitality: 2 }, result: '家人们都很开心。你内心深处知道：小龙虾的基因就是好。' }] },
	{ id: 'nm5', title: '老同学聚会', description: '同学三十年聚会。有人问你这么多年还这么年轻是怎么做到的。', minAge: 40, maxAge: 55, options: [{ text: '开玩笑说前世修了龙虾', effects: { charm: 4, luck: 1 }, result: '所有人大笑，你成了聚会上最受欢迎的那个人。' }, { text: '分享养生心得', effects: { intelligence: 2, charm: 2 }, result: '同学们都认真记录。你成了神秘的健康大使。' }] },

	// ===== 新增：60-105岁 老年期 =====
	{ id: 'no1', title: '孙子的问题', description: '孙子问你：太公/太婆，你小时候最喜欢什么动物？你沉默了一下。', minAge: 60, maxAge: 90, options: [{ text: '诉说小龙虾，这是真心话', effects: { charm: 4, luck: 2 }, result: '孙子糊途冯笑了。你们从此成为聊得来的祖孙。' }, { text: '说喜欢小鱼，保个体面', effects: { intelligence: 2, charm: 1 }, result: '孙子点了点头。你忧郁地想：其实也没有撕到很多。' }] },
	{ id: 'no2', title: '岑山还是下棋', description: '退休后居委组织活动，你选择怎么度过每天。', minAge: 60, maxAge: 85, options: [{ text: '报名游泳队，返早出深水', effects: { vitality: 4, charm: 2 }, result: '教练说你的水感好得惊人。你心想：我练了数十年届。' }, { text: '加入象棋队，用龙虾的耐性行棋', effects: { intelligence: 3, charm: 2 }, result: '你的棋胡令对手过不去，因为你仍在漫长的时间尺度里思考。' }] },
	{ id: 'no3', title: '写回忆录', description: '不少人建议你把一生的经历写下来。你笑了笑，这本书可不好写。', minAge: 65, maxAge: 100, options: [{ text: '如实写，包括龙虾转生的经历', effects: { intelligence: 3, charm: 3 }, result: '出版商说这是远超同类作品的奇书。你的名字被写进了文学史。' }, { text: '只写人类的那部分', effects: { intelligence: 2, charm: 2 }, result: '书很畅销。你心里的秘密依然安全地冰封着。' }] },
	{ id: 'no4', title: '最后的心愿', description: '你已经很老了，有一个愿望始终在心里。', minAge: 80, maxAge: 105, options: [{ text: '托人将你放入河里，返回前世', effects: { luck: 5, vitality: 2 }, result: '冠山的清水把你勸醒了。你感到了前所未有的内心宁静。' }, { text: '和家人吴点就好', effects: { charm: 4, vitality: 1 }, result: '家人们围坐在你身边。你心想：这一世很好，下一世再重来一次吧。' }] },
	{ id: 'no5', title: '百岁生日', description: '你活到了百岁，全家人为你庆生日。记者来采访，问你长寿的秘诀。', minAge: 99, maxAge: 105, options: [{ text: '说：我就是龙虾转生的', effects: { charm: 5, luck: 3 }, result: '记者以为你在开玩笑，却深深被你的潇默打动了。' }, { text: '说：常常吃龙虾补脑', effects: { vitality: 3, charm: 3 }, result: '这个回答上了热搜。龙虾饪店销量全面飙升。' }] },
	// ========== 结局事件 ==========
	{
		id: 'end_accident_1',
		title: '意外横祸',
		description: '你正走在路上，一辆失控的车突然冲了过来……',
		isEnding: true,
		minAge: 16,
		maxAge: 59,
		endingWeight: 1,
		options: [
			{
				text: '拼命跳开',
				effects: {},
				result: '你来不及反应，被撞飞了……你的故事结束了。',
				isEndingOption: true,
				endingId: 'accident_death',
			},
			{
				text: '用龙虾本能横向移动',
				effects: {},
				result: '龙虾的横移本能救不了人类的身体……',
				isEndingOption: true,
				endingId: 'accident_death',
			},
		],
	},
	{
		id: 'end_accident_2',
		title: '突发重病',
		description: '你突然感到一阵剧痛，眼前一黑……',
		isEnding: true,
		minAge: 15,
		maxAge: 59,
		endingWeight: 1,
		options: [
			{
				text: '硬撑着打急救电话',
				effects: {},
				result: '电话还没打完，你已经失去了意识……',
				isEndingOption: true,
				endingId: 'accident_death',
			},
			{
				text: '静静地躺下',
				effects: {},
				result: '你想起了菜市场的水缸……然后一切归于平静。',
				isEndingOption: true,
				endingId: 'accident_death',
			},
		],
	},
	{
		id: 'end_accident_3',
		title: '命运的玩笑',
		description: '一场谁也没想到的意外，就这样发生了。',
		isEnding: true,
		minAge: 12,
		maxAge: 50,
		endingWeight: 1,
		options: [
			{
				text: '挣扎求生',
				effects: {},
				result: '命运有时候就是这么不讲道理……',
				isEndingOption: true,
				endingId: 'accident_death',
			},
			{
				text: '坦然接受',
				effects: {},
				result: '人类的脆弱超乎龙虾的想象。',
				isEndingOption: true,
				endingId: 'accident_death',
			},
		],
	},
	{
		id: 'end_midlife_accident',
		title: '壮年的遗憾',
		description: '正值人生最充实的年纪，一场突如其来的变故打乱了一切。',
		isEnding: true,
		minAge: 40,
		maxAge: 75,
		endingWeight: 2,
		options: [
			{
				text: '放下一切牵挂',
				effects: {},
				result: '心中既有遗憾，也有满足。',
				isEndingOption: true,
				endingId: 'accident_death',
			},
			{
				text: '放不下心中牵挂',
				effects: {},
				result: '有些事情永远没能完成……但你已经尽力了。',
				isEndingOption: true,
				endingId: 'accident_death',
			},
		],
	},
	{
		id: 'end_natural_1',
		title: '安详离世',
		description:
			'你在一个平静的午后，感到了前所未有的困倦。家人都围在床边……',
		isEnding: true,
		minAge: 60,
		maxAge: 105,
		endingWeight: 3,
		options: [
			{
				text: '微笑着闭上眼睛',
				effects: {},
				result: '你带着满足与平静，永远地睡着了。这一生，值了。',
				isEndingOption: true,
				endingId: 'natural_death',
			},
			{
				text: '说出心里话',
				effects: {},
				result: '你说出了藏在心底的话，然后安然离去。',
				isEndingOption: true,
				endingId: 'natural_death',
			},
		],
	},
	{
		id: 'end_natural_2',
		title: '久病离世',
		description: '你已经病了很长时间，身体再也撑不住了。',
		isEnding: true,
		minAge: 65,
		maxAge: 105,
		endingWeight: 2,
		options: [
			{
				text: '坦然接受',
				effects: {},
				result: '你放下了一切牴挂，平静地离开了这个世界。',
				isEndingOption: true,
				endingId: 'natural_death',
			},
			{
				text: '回忆一生',
				effects: {},
				result: '往事在眼前一幕幕闪过，你带着所有记忆静静离去。',
				isEndingOption: true,
				endingId: 'natural_death',
			},
		],
	},
	{
		id: 'end_natural_3',
		title: '寿终正寢',
		description: '你活到了很多人羡慕的年纪，岁月在你脸上留下了深深的痕迹。',
		isEnding: true,
		minAge: 80,
		maxAge: 105,
		endingWeight: 4,
		options: [
			{
				text: '回顾这一生',
				effects: {},
				result: '你经历了太多，也给予了太多。这样的人生，无憾。',
				isEndingOption: true,
				endingId: 'natural_death',
			},
			{
				text: '挂念着还没完成的事',
				effects: {},
				result: '人生总有遗憾，但你已经活得足够精彩。',
				isEndingOption: true,
				endingId: 'natural_death',
			},
		],
	},
	{
		id: 'end_cultivate_trigger',
		title: '天道的召唤',
		description: '你已经活了105岁，体内突然有什么东西觉閇了……',
		isEnding: false,
		isCultivateTrigger: true,
		minAge: 105,
		maxAge: 999,
		endingWeight: 10,
		options: [
			{
				text: '顺应天道，踏上修仙路',
				effects: { intelligence: 5, luck: 5 },
				result: '你感受到了修仙力量觉閇，踏上了修仙之路！',
				isCultivateOption: true,
			},
			{
				text: '拒绝，选择平凡终老',
				effects: {},
				result: '你放弃了这个机会，带着满足安然离去……',
				isEndingOption: true,
				endingId: 'natural_death',
			},
		],
	},
];

// 新增事件 - 大量扩充各年龄段事件
// 运行 append_events.py 将这些事件追加到 events.js

module.exports = [

	// ========== 0-5岁 幼儿期 ==========
	{
		id: 'n_baby_1',
		title: '神秘的水盆',
		description: '妈妈在给你洗澡，看到水你突然感到莫名的亲切，想要爬进去游泳。',
		minAge: 0,
		maxAge: 3,
		options: [
			{
				text: '奋力扑向水盆',
				effects: { vitality: 2, charm: -1 },
				result: '妈妈吓得大叫，但你在水里感到无比自在，前世的记忆涌上心头。',
			},
			{
				text: '忍住冲动，乖乖洗澡',
				effects: { intelligence: 2, charm: 1 },
				result: '你告诉自己：我现在是人类，不是龙虾。',
			},
		],
	},
	{
		id: 'n_baby_2',
		title: '第一次吃饭',
		description: '妈妈端来了一盘红烧小龙虾，你盯着盘子里的同类，陷入了复杂的情绪。',
		minAge: 1,
		maxAge: 4,
		options: [
			{
				text: '放声大哭，拒绝进食',
				effects: { charm: 1, vitality: -1 },
				result: '妈妈以为你不喜欢吃，以后再也不做龙虾了。你感到轻松，又有点饿。',
			},
			{
				text: '含泪吃完，感谢前世的同伴',
				effects: { vitality: 3, luck: 1 },
				result: '味道很好。你在心里默默说：对不起，也谢谢你。',
			},
		],
	},
	{
		id: 'n_baby_3',
		title: '第一个玩具',
		description: '爸爸给你买了一个玩具，你可以选择：一个毛茸茸的小熊，或者一个龙虾造型的玩偶。',
		minAge: 1,
		maxAge: 4,
		options: [
			{
				text: '选小熊，融入人类生活',
				effects: { charm: 2, intelligence: 1 },
				result: '你抱着小熊，努力忘记前世。',
			},
			{
				text: '选龙虾玩偶，珍视前世',
				effects: { luck: 2, vitality: 1 },
				result: '爸爸觉得你很有个性。你对着玩偶低声说：我回来了。',
			},
		],
	},
	{
		id: 'n_baby_4',
		title: '学说话',
		description: '你开口说的第一个词，是"虾"。爸妈愣了一下。',
		minAge: 1,
		maxAge: 3,
		options: [
			{
				text: '继续说"虾虾虾"，享受这个秘密',
				effects: { luck: 2, charm: -1 },
				result: '爸妈以为你喜欢吃虾，从此餐桌上天天有虾。营养很好。',
			},
			{
				text: '赶紧改口叫"爸爸"',
				effects: { charm: 3, intelligence: 1 },
				result: '爸爸感动得热泪盈眶，给你买了好多零食。',
			},
		],
	},
	{
		id: 'n_baby_5',
		title: '奇怪的梦',
		description: '你做了个梦，梦见自己在清澈的河底自由游弋，周围全是同伴。醒来后你哭了。',
		minAge: 2,
		maxAge: 5,
		options: [
			{
				text: '把梦境画下来',
				effects: { intelligence: 2, charm: 2 },
				result: '爸妈发现你天赋异禀，给你报了绘画班。',
			},
			{
				text: '抹掉眼泪，接受现实',
				effects: { vitality: 2, intelligence: 1 },
				result: '你告诉自己，这一世要好好活。',
			},
		],
	},
	{
		id: 'n_baby_6',
		title: '第一次过年',
		description: '新年夜，全家围坐在一起，桌上摆着满满的菜肴，其中有一大盆龙虾。亲戚们夸你长得像个小龙虾。',
		minAge: 1,
		maxAge: 5,
		options: [
			{
				text: '哈哈大笑，深以为然',
				effects: { charm: 3, luck: 1 },
				result: '亲戚们都喜欢你，红包收了好多。',
			},
			{
				text: '假装听不懂，低头吃饭',
				effects: { intelligence: 2, wealth: 1 },
				result: '你默默地把龙虾盆推远了一点。',
			},
		],
	},
	{
		id: 'n_baby_7',
		title: '邻居家的小狗',
		description: '邻居带了一只小狗来玩，小狗对你又叫又跳，异常兴奋，好像嗅到了什么不寻常的气息。',
		minAge: 2,
		maxAge: 5,
		options: [
			{
				text: '摆出龙虾的威慑姿势（举起双手）',
				effects: { vitality: 2, charm: 2 },
				result: '小狗愣了一下，然后夹着尾巴跑了。大人们都笑了。',
			},
			{
				text: '躲到妈妈身后',
				effects: { charm: 1, luck: 1 },
				result: '妈妈抱起了你，你感到了安全。',
			},
		],
	},
	{
		id: 'n_baby_8',
		title: '天才的预感',
		description: '幼儿园老师发现你记忆力超群，能复述听过一遍的故事，推荐你参加早教比赛。',
		minAge: 3,
		maxAge: 5,
		options: [
			{
				text: '积极参赛，展示才华',
				effects: { intelligence: 3, charm: 2 },
				result: '你拿了第一名，奖品是一个大龙虾玩偶。冥冥之中，缘分难断。',
			},
			{
				text: '故意表现得普通，低调行事',
				effects: { intelligence: 2, luck: 2 },
				result: '你决定隐藏实力，等待合适的时机。',
			},
		],
	},

	// ========== 6-12岁 小学期 ==========
	{
		id: 'n_elem_1',
		title: '作文课',
		description: '语文老师布置作文：《我的前世》。全班同学面面相觑，你却胸有成竹。',
		minAge: 7,
		maxAge: 12,
		options: [
			{
				text: '如实写下龙虾转生的经历',
				effects: { intelligence: 3, charm: -1 },
				result: '老师给了你满分，并在班上大声朗读："想象力极其丰富！"',
			},
			{
				text: '编一个普通的故事',
				effects: { intelligence: 2, charm: 1 },
				result: '你得了80分，秘密安然无恙。',
			},
		],
	},
	{
		id: 'n_elem_2',
		title: '生物课标本',
		description: '生物课上，老师拿出一只标本小龙虾让大家观察。你盯着那双小眼睛看了很久。',
		minAge: 8,
		maxAge: 12,
		options: [
			{
				text: '认真研究，发现了课本上没有的细节',
				effects: { intelligence: 4, charm: 1 },
				result: '老师惊叹你对龙虾的了解超乎寻常，推荐你参加生物竞赛。',
			},
			{
				text: '别过头去，不忍直视',
				effects: { charm: 2, vitality: -1 },
				result: '同桌问你怎么了，你说："只是……有点伤感。"',
			},
		],
	},
	{
		id: 'n_elem_3',
		title: '课间的秘密',
		description: '你发现学校厕所后面有一条小水沟，沟里居然有几只小龙虾。你们对视了很久。',
		minAge: 7,
		maxAge: 12,
		options: [
			{
				text: '悄悄带食物来喂它们',
				effects: { charm: 2, luck: 2 },
				result: '你成了它们的守护者。奇怪的是，此后你运气好了不少。',
			},
			{
				text: '告诉同学，大家一起来看',
				effects: { charm: 3, intelligence: 1 },
				result: '你成为了班级的小名人，但龙虾们被老师发现后放生了。',
			},
		],
	},
	{
		id: 'n_elem_4',
		title: '游泳课',
		description: '学校安排了游泳课，下水前教练问谁会游泳。你举起了手，因为你清楚地记得怎么游。',
		minAge: 7,
		maxAge: 12,
		options: [
			{
				text: 
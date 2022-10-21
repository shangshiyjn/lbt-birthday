
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '给玫瑰花小姐的生日礼物',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: 'Hi 玫瑰花小姐', },
    { key: 's', wording: '这次的礼物，用抽奖的形式', },
    { key: 'd', wording: '把“选择权”交给你', },
  ],
  // 最终解释权归属人
  owner: '小王子先生',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '阳坊胜利涮羊肉', alias: '涮羊肉', image: '/images/1.png',  description: '「好羊肉才敢清水涮，阳坊镇见」' },
  { key: 'w', name: '知乎 + 小度一年VIP', alias: 'VIP', image: '/images/2.png',  description: '“想看就看，想听就听”' },
  { key: 'e', name: '美容仪', alias: '美容仪', image: '/images/3.png',  description: '「遇见最美的自己」' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/6.png',  description: '“想给你唱一百首情歌”' },
  { key: 't', name: '实现一个愿望', alias: '愿望', image: '/images/5.png',  description: '「许下你第一千零一个愿望」' },
  { key: 'y', name: '1314红包', alias: '1314', image: '/images/6.png',  description: '“从今往后，我都会在你身边”' },
  { key: 'u', name: '承包双十一购物车', alias: '购物车', image: '/images/7.png',  description: '“我要让全世界知道，这个鱼塘被你承包了”' },
  { key: 'i', name: '一次浪漫旅行', alias: '旅行', image: '/images/8.png',  description: '「想带你去浪漫的土耳其」' },
];

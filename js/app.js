/* 京东直招 · 视觉=Figma 2x 切图；输入/选择叠在稿面坐标上 */
(function () {
  "use strict";

  const PAGES = [
    { id: "home", name: "1.0 首页｜附近工作", h: 812 },
    { id: "location", name: "3.1 定位选择", img: "location.png", h: 812 },
    { id: "loc-focus", name: "3.2 搜索地址｜激活", img: "loc-search-focus.png", h: 812 },
    { id: "address-search", name: "3.2 搜索地址｜输入后", img: "address-search.png", h: 812 },
    { id: "search-empty", name: "3.4 搜索缺省", img: "search-empty.png", h: 812 },
    { id: "filter-salary", name: "4.1 筛选｜薪资范围", img: "filter-full.png", h: 1907, scroll: true, sticky: 106 },
    { id: "filter-loading", name: "4.3 筛选 loading", img: "filter-loading.png", h: 812 },
    { id: "filter-result", name: "4.3 筛选结果", img: "filter-result.png", h: 812, sticky: 106, scroll: true },
    { id: "filter-scroll", name: "4.4 筛选结果上滑｜最新", img: "filter-scroll.png", h: 812, scroll: true },
    { id: "filter-scroll-near", name: "4.4 筛选结果上滑｜距离", img: "filter-scroll-near.png", h: 812, scroll: true },
    { id: "filter-full", name: "4.5 筛选｜完整岗位", img: "filter-full.png", h: 1907, scroll: true, sticky: 106 },
    { id: "nearby", name: "5.1 附近机会｜按距离", img: "nearby.png", h: 812 },
    { id: "nearby-time", name: "5.2 附近机会｜按时间", img: "nearby-time.png", h: 812 },
    { id: "nearby-empty", name: "5.3 附近机会｜缺省", img: "nearby-empty.png", h: 812 },
    { id: "nearby-loc", name: "5.4 修改定位｜地图选点", img: "detail-loc.png", h: 812 },
    { id: "search", name: "6.1 搜索页", img: "search.png", h: 812, scroll: true },
    { id: "search-miss", name: "6.2 搜索｜无结果", img: "search-miss.png", h: 812 },
    { id: "jingang", name: "1.5 金刚位｜职位列表", h: 812 },
    { id: "job-detail", name: "8.0 职位详情页", img: "job-detail.png", h: 1126, scroll: true, sticky: 102, contentEnd: 1000 },
    { id: "job-detail-2", name: "8.1 职位详情页2", img: "job-detail-2.png", h: 812, scroll: true, sticky: 102 },
    { id: "mine", name: "9.1 我的页面", img: "mine.png", h: 812, scroll: true },
    { id: "onboard", name: "9.2 入职办理", img: "onboard.png", h: 812 },
    { id: "resume", name: "我的5 简历", img: "resume.png", h: 812, scroll: true },
    { id: "id-error", name: "7.5 证件上传有误", img: "id-error.png", h: 812 },
    { id: "broker", name: "9.0 经纪人页", img: "broker.png", h: 812, scroll: true },
    { id: "poster", name: "小程序推荐海报", img: "poster.png", h: 724 },
    { id: "detail-logistics", name: "职位详情-物流", img: "detail-logistics.png", h: 812, scroll: true, sticky: 102 },
    /* 集团：详情→报名渠道填写(97:29698)；达达：详情→渠道选择(121:28756)→成功 */
    { id: "detail-group", name: "职位详情-集团", img: "job-detail.png", h: 1126, scroll: true, sticky: 102, contentEnd: 1000 },
    { id: "detail-group-apply", name: "集团报名渠道", img: "detail-group.png", h: 812, scroll: true },
    { id: "detail-dada", name: "职位详情-达达", img: "job-detail-2.png", h: 812, scroll: true, sticky: 102 },
    { id: "detail-dada-apply", name: "达达报名渠道", img: "detail-dada-apply.png", h: 812 },
    { id: "apply-success", name: "报名成功", img: "apply-success.png", h: 812 },
    { id: "application-progress", name: "应聘记录", img: null, h: 812 },
    { id: "share", name: "分享", img: "share-poster.png", h: 812 },
  ];

  const NAV = [
    { id: "home", name: "首页" },
    { id: "filter-salary", name: "筛选" },
    { id: "nearby", name: "附近机会" },
    { id: "detail-logistics", name: "职位详情-物流" },
    { id: "detail-group", name: "职位详情-集团" },
    { id: "detail-dada", name: "职位详情-达达" },
    { id: "mine", name: "我的" },
    { id: "onboard", name: "办入职" },
    { id: "resume", name: "我的简历" },
    { id: "broker", name: "经纪人" },
    { id: "share", name: "分享" },
  ];

  const TAB = [
    { l: 0, t: 728, w: 94, h: 50, act: "to-home", title: "找工作" },
    { l: 94, t: 728, w: 94, h: 50, go: "broker", title: "推好友" },
    { l: 188, t: 728, w: 94, h: 50, go: "onboard", title: "办入职" },
    { l: 282, t: 728, w: 93, h: 50, go: "mine", title: "我的" },
  ];

  const CITY_DATA = [
    { n: "全国", cities: [] },
    { n: "江西", cities: [{ n: "全江西省", dists: [] }, { n: "南昌", dists: ["全南昌市", "东湖区", "西湖区"] }] },
    {
      n: "贵州",
      cities: [
        { n: "全贵州省", dists: [] },
        { n: "贵阳", dists: ["全贵阳市", "南明区", "云岩区", "花溪区", "贵安新区"] },
        { n: "毕节", dists: ["全毕节市", "七星关区"] },
        { n: "安顺", dists: ["全安顺市", "西秀区"] },
        { n: "遵义", dists: ["全遵义市", "红花岗区"] },
      ],
    },
    { n: "河北", cities: [{ n: "全河北省", dists: [] }, { n: "石家庄", dists: ["全石家庄市", "长安区"] }] },
    { n: "广西壮族自治区", cities: [{ n: "全广西", dists: [] }, { n: "南宁", dists: ["全南宁市", "青秀区"] }] },
    { n: "湖南", cities: [{ n: "全湖南省", dists: [] }, { n: "长沙", dists: ["全长沙市", "岳麓区"] }] },
    { n: "北京", cities: [{ n: "全北京市", dists: [] }, { n: "北京市", dists: ["朝阳区", "海淀区", "东城区", "西城区"] }] },
    { n: "江苏", cities: [{ n: "全江苏省", dists: [] }, { n: "南京", dists: ["全南京市", "玄武区"] }] },
    { n: "上海", cities: [{ n: "全上海市", dists: [] }, { n: "上海市", dists: ["浦东新区", "黄浦区"] }] },
    { n: "福建", cities: [{ n: "全福建省", dists: [] }, { n: "福州", dists: ["全福州市", "鼓楼区"] }] },
    { n: "湖北", cities: [{ n: "全湖北省", dists: [] }, { n: "武汉", dists: ["全武汉市", "武昌区", "洪山区"] }] },
    {
      n: "河南",
      cities: [
        { n: "全河南省", dists: [] },
        { n: "安阳", dists: ["全安阳市", "文峰区", "北关区"] },
        { n: "郑州", dists: ["全郑州市", "金水区", "中原区"] },
        { n: "信阳", dists: ["全信阳市", "浉河区"] },
        { n: "新乡", dists: ["全新乡市", "红旗区", "长垣市", "原阳县", "封丘县", "延津县", "凤泉区", "牧野区", "获嘉县", "卫滨区"] },
        { n: "鹤壁", dists: ["全鹤壁市", "淇滨区"] },
        { n: "许昌", dists: ["全许昌市", "魏都区"] },
        { n: "漯河", dists: ["全漯河市", "源汇区"] },
        { n: "周口", dists: ["全周口市", "川汇区"] },
        { n: "驻马店", dists: ["全驻马店市", "驿城区"] },
      ],
    },
    { n: "新疆维吾尔自治区", cities: [{ n: "全新疆", dists: [] }, { n: "乌鲁木齐", dists: ["全乌鲁木齐市", "天山区"] }] },
    { n: "浙江", cities: [{ n: "全浙江省", dists: [] }, { n: "杭州", dists: ["全杭州市", "西湖区"] }] },
    { n: "山东", cities: [{ n: "全山东省", dists: [] }, { n: "济南", dists: ["全济南市", "历下区"] }] },
    { n: "山西", cities: [{ n: "全山西省", dists: [] }, { n: "太原", dists: ["全太原市", "小店区"] }] },
    {
      n: "广东",
      cities: [
        { n: "全广东省", dists: [] },
        { n: "广州", dists: ["全广州市", "天河区"] },
        { n: "深圳", dists: ["全深圳市", "南山区"] },
      ],
    },
    { n: "甘肃", cities: [{ n: "全甘肃省", dists: [] }, { n: "兰州", dists: ["全兰州市", "城关区"] }] },
  ];

  const DETECTED_DISTRICT = "朝阳区";

  const JOB_MAP = {
    仓储拣运: [
      { key: "warehouse", title: "仓储拣运", site: "北京亦庄仓", pay: "6000~9000", unit: "元/月", tags: ["急招", "提供住宿"], dist: 120, loc: "北京市 大兴区", fresh: "1小时内发布" },
      { key: "warehouse", title: "仓储分拣员", site: "北京马驹桥仓", pay: "5500~8000", unit: "元/月", tags: ["全职"], dist: 2100, loc: "北京市 通州区", fresh: "3小时前发布" },
    ],
    快递员: [
      { key: "courier", title: "快递员", site: "北京麦庄站", pay: "6000~9000", unit: "元/月", tags: ["急招", "提供住宿", "提供食堂"], dist: 50, loc: "北京市 通州区", fresh: "三日内发布" },
      { key: "courier", title: "快递收派员", site: "通州配送站", pay: "6000~9000", unit: "元/月", tags: ["急招", "提供住宿"], dist: 800, loc: "北京市 通州区", fresh: "5小时前发布" },
    ],
    骑手: [
      { key: "rider", title: "马驹桥骑手", site: "北京马驹桥骑手组", pay: "6000~9000", unit: "元/月", tags: ["全职", "急招", "提供住宿", "提供食堂"], dist: 88, loc: "北京市 通州区", fresh: "一周内发布" },
      { key: "rider", title: "马驹桥骑手", site: "北京马驹桥骑手组", pay: "6000~9000", unit: "元/月", tags: ["全职", "急招", "提供住宿", "提供食堂"], dist: 88, loc: "北京市 通州区", fresh: "2小时前发布" },
      { key: "rider", title: "朝阳骑手", site: "朝阳配送站", pay: "7000~10000", unit: "元/月", tags: ["急招", "提供餐补"], dist: 1100, loc: "北京市 朝阳区", fresh: "一周前发布" },
    ],
    司机: [
      { key: "driver", title: "北京通州-摆渡车队-运输组-运输司机运输司机运输司机运输司机运输司机运输", site: "摆渡车队-运输组", pay: "6000~9000", unit: "元/月", tags: ["临时工", "要求C本"], dist: 1200, loc: "北京市 通州区", fresh: "1小时内发布" },
      { key: "driver", title: "货运司机", site: "北京运输车队", pay: "8000~15000", unit: "元/月", tags: ["急招", "要求C本"], dist: 3000, loc: "北京市 大兴区", fresh: "8小时前发布" },
    ],
    客服: [
      { key: "cs", title: "客服专员", site: "北京客服中心", pay: "5000~8000", unit: "元/月", tags: ["全职", "提供话补"], dist: 2600, loc: "北京市 朝阳区", fresh: "三日内发布" },
    ],
    家政维修: [
      { key: "install", title: "北京通州-家电安装组-正式工安装维修安装维修安装维修安装维修安装维修安装", site: "北京家电安装组", pay: "8000~15000", unit: "元/月", tags: ["急招", "提供住宿", "提供食堂"], dist: 50, loc: "北京市 通州区", fresh: "一周内发布" },
    ],
    门店服务: [
      { key: "store", title: "门店服务专员", site: "京东便利店-通州店", pay: "4500~7000", unit: "元/月", tags: ["全职"], dist: 600, loc: "北京市 通州区", fresh: "4小时前发布" },
    ],
    其他: [
      { key: "courier", title: "快递员", site: "北京麦庄站", pay: "6000~9000", unit: "元/月", tags: ["急招", "提供住宿", "提供食堂"], dist: 50, loc: "北京市 通州区", fresh: "一周前发布" },
      { key: "install", title: "家电安装组-正式工", site: "北京家电安装组", pay: "8000~15000", unit: "元/月", tags: ["急招", "提供住宿", "提供食堂"], dist: 3600, loc: "北京市 通州区", fresh: "6小时前发布" },
    ],
  };

  const JOB_DETAIL = {
    courier: {
      title: "快递员",
      pay: "6000~9000元/月",
      tags: ["快递员", "急招", "提供住宿", "提供食堂"],
      loc: "北京市 通州区",
      heads: "招2人",
      date: "2026-07-08",
      hr: "张女士",
      hrSub: "北京麦庄站·招聘经理",
      duties: ["负责片区快件的收取、投递和签收；", "按站点要求完成交接、盘点并及时处理异常件；", "维护客户关系，保证北京市通州区妥投时效。"],
      quals: ["年龄18-45周岁，身体健康，能适应户外派送；", "熟悉北京市通州区路况者优先；", "工作认真负责，服务意识强。"],
    },
    install: {
      title: "北京通州-家电安装组-正式工安装维修安装维修安装维修安装维修安装维修安装",
      pay: "8000~15000元/月",
      tags: ["家庭维修工程师", "急招", "提供住宿", "提供食堂"],
      loc: "北京市 通州区",
      heads: "招2人",
      date: "2026-07-08",
      hr: "张女士",
      hrSub: "北京家电安装组·招聘经理",
      duties: ["负责家电上门安装、调试和基础验收；", "按工单完成安装记录，并处理现场简单故障；", "维护客户现场秩序，保证安装质量和时效。"],
      quals: ["年龄18-45周岁，具备家电安装或维修经验；", "能适应北京市通州区上门服务；", "工作细心，沟通清楚，责任心强。"],
    },
    driver: {
      title: "北京通州-摆渡车队-运输组-运输司机运输司机运输司机运输司机运输司机运输",
      pay: "6000~9000元/月",
      tags: ["司机", "临时工", "提供住宿", "要求C本"],
      loc: "北京市 通州区",
      heads: "招2人",
      date: "2026-07-08",
      hr: "张女士",
      hrSub: "摆渡车队-运输组·招聘经理",
      duties: ["负责通州片区摆渡及货物运输；", "按车队要求完成出车、交接和异常上报；", "保管车辆，保证运输时效和行车安全。"],
      quals: ["年龄18-50周岁，持有C本及以上驾驶证；", "熟悉北京市通州区路况者优先；", "守时负责，服务意识强。"],
    },
    rider: {
      title: "马驹桥骑手",
      pay: "6000~9000元/月",
      tags: ["骑手", "全职", "急招", "提供住宿", "提供食堂"],
      loc: "北京市 通州区",
      heads: "招2人",
      date: "2026-07-08",
      hr: "张女士",
      hrSub: "北京马驹桥骑手组·招聘经理",
      duties: ["负责马驹桥片区订单的取送和准时送达；", "按站点要求完成配送交接和异常上报；", "保管配送装备，保证服务态度和配送时效。"],
      quals: ["年龄18-45周岁，身体健康，能适应骑行配送；", "熟悉北京市通州区、马驹桥路况者优先；", "守时负责，服务意识强。"],
    },
    cs: {
      title: "客服专员",
      pay: "5000~8000元/月",
      tags: ["客服", "全职", "提供话补", "五险一金"],
      loc: "北京市 朝阳区",
      heads: "招3人",
      date: "2026-07-08",
      hr: "李女士",
      hrSub: "北京客服中心·招聘经理",
      duties: ["负责客户咨询接待、工单记录与跟进；", "按标准话术解答物流/售后常见问题；", "及时升级异常问题，保证响应时效。"],
      quals: ["年龄18-40周岁，普通话标准，表达清晰；", "有客服或电话销售经验者优先；", "耐心细致，抗压能力强。"],
    },
    warehouse: {
      title: "仓储拣运",
      pay: "6000~9000元/月",
      tags: ["仓储拣运", "急招", "提供住宿", "提供食堂"],
      loc: "北京市 大兴区",
      heads: "招5人",
      date: "2026-07-08",
      hr: "王先生",
      hrSub: "北京亦庄仓·招聘经理",
      duties: ["负责仓库拣货、分拣与装卸搬运；", "按系统任务完成出入库交接；", "遵守仓内安全规范，保证作业时效。"],
      quals: ["年龄18-45周岁，能适应仓库站立作业；", "有仓储或物流经验者优先；", "吃苦耐劳，服从安排。"],
    },
    store: {
      title: "门店服务专员",
      pay: "4500~7000元/月",
      tags: ["门店服务", "全职", "提供餐补"],
      loc: "北京市 通州区",
      heads: "招2人",
      date: "2026-07-08",
      hr: "赵女士",
      hrSub: "京东便利店-通州店·店长",
      duties: ["负责门店接待、收银与货架整理；", "维护店面整洁，完成日常盘点；", "协助门店促销与顾客服务。"],
      quals: ["年龄18-40周岁，形象气质佳；", "有零售门店经验者优先；", "服务意识强，沟通顺畅。"],
    },
  };

  const CAT_TO_JOB_KEY = {
    仓储拣运: "warehouse",
    快递员: "courier",
    骑手: "rider",
    司机: "driver",
    客服: "cs",
    家政维修: "install",
    门店服务: "store",
    其他: "courier",
  };

  /* 对齐仓库 CitySearch：allCity[].value 包含关键字即命中 */
  const ALL_CITY = [
    { key: "110105", value: "北京-北京市-朝阳区" },
    { key: "demo1", value: "选项内容选项朝阳选项内容" },
    { key: "211381", value: "北票市-朝阳" },
    { key: "demo2", value: "选项内容选项朝阳选项内容" },
    { key: "110108", value: "北京-北京市-海淀区" },
    { key: "110101", value: "北京-北京市-东城区" },
    { key: "310115", value: "上海-上海市-浦东新区" },
    { key: "440106", value: "广东-广州市-天河区" },
    { key: "440305", value: "广东-深圳市-南山区" },
    { key: "520103", value: "贵州-贵阳市-云岩区" },
    { key: "520102", value: "贵州-贵阳市-南明区" },
    { key: "420106", value: "湖北-武汉市-武昌区" },
    { key: "320102", value: "江苏-南京市-玄武区" },
  ];

  const FILTER_CHIPS = [
    { k: "s0", t: "全部", l: 116, y: 144, w: 114, h: 32 },
    { k: "s1", t: "3k以下", l: 245, y: 144, w: 114, h: 32 },
    { k: "s2", t: "3000-5000", l: 116, y: 192, w: 114, h: 32 },
    { k: "s3", t: "5000-8000", l: 245, y: 192, w: 114, h: 32 },
    { k: "s4", t: "8000-1万", l: 116, y: 240, w: 114, h: 32 },
    { k: "s5", t: "1万以内", l: 245, y: 240, w: 114, h: 32 },
    { k: "s6", t: "1万-1.5万", l: 116, y: 288, w: 114, h: 32 },
    { k: "s7", t: "1.5万-2万", l: 245, y: 288, w: 114, h: 32 },
    { k: "w0", t: "全部", l: 116, y: 388, w: 114, h: 32 },
    { k: "w1", t: "提供住宿", l: 245, y: 388, w: 114, h: 32 },
    { k: "w2", t: "提供食堂", l: 116, y: 436, w: 114, h: 32 },
    { k: "w3", t: "提供餐补", l: 245, y: 436, w: 114, h: 32 },
    { k: "w4", t: "专业培训", l: 116, y: 484, w: 114, h: 32 },
    { k: "w5", t: "五险一金", l: 245, y: 484, w: 114, h: 32 },
    { k: "w6", t: "带薪年假", l: 116, y: 532, w: 114, h: 32 },
    { k: "w7", t: "提供话补", l: 245, y: 532, w: 114, h: 32 },
    { k: "r0", t: "全部", l: 116, y: 632, w: 114, h: 32 },
    { k: "r1", t: "占位", l: 245, y: 632, w: 114, h: 32 },
  ];

  /* 选项顺序按稿面两列「先左后右、同行优先」展开，与 78:174262 一致 */
  const FULL_FILTER_GROUPS = [
    {
      id: "fc",
      label: "职位类别",
      options: ["不限", "仓储拣运", "快递员", "骑手", "司机", "客服", "家政维修", "门店服务", "其他"],
    },
    {
      id: "ft",
      label: "职位类型",
      options: ["不限", "全职", "兼职", "临时工", "日结", "实习", "人才储备"],
    },
    {
      id: "fs",
      label: "薪资范围",
      options: ["不限", "4000元以下", "4000-6000元", "6000-8000元", "8000元以上"],
    },
    {
      id: "fw",
      label: "福利待遇",
      options: [
        "不限",
        "提供住宿",
        "提供食堂",
        "提供餐补",
        "五险一金",
        "晋升通道完善",
        "带薪年假",
        "专业培训",
        "专业培训",
        "就近派单",
        "工单充足",
        "时间灵活",
        "提供话补",
        "上手快",
        "多劳多得",
        "冬暖夏凉",
      ],
    },
    {
      id: "fe",
      label: "经验要求",
      options: ["不限", "有经验优先", "军人优先"],
    },
    {
      id: "fq",
      label: "资质要求",
      options: ["不限", "A1本", "A2本", "B2本", "C1本", "B1本", "D本"],
    },
    {
      id: "fo",
      label: "作业要求",
      options: ["不限", "叉车本", "电工本"],
    },
  ];

  const FILTER_SCROLL_SPOTS = [
    { l: 12, t: 50, w: 76, h: 32, go: "location", title: "定位" },
    { l: 0, t: 88, w: 375, h: 44, go: "search", title: "搜索" },
    { l: 16, t: 140, w: 72, h: 32, act: "sort-latest", title: "最新发布" },
    { l: 96, t: 140, w: 80, h: 32, act: "sort-nearby", title: "距离最近" },
    { l: 227, t: 140, w: 74, h: 32, go: "nearby", title: "附近机会" },
    { l: 300, t: 140, w: 64, h: 32, go: "filter-salary", title: "筛选" },
    { l: 10, t: 184, w: 355, h: 140, go: "detail-logistics", title: "职位", job: "courier" },
    { l: 10, t: 332, w: 355, h: 140, go: "detail-logistics", title: "职位", job: "install" },
    { l: 10, t: 480, w: 355, h: 140, go: "detail-logistics", title: "职位", job: "rider" },
    { l: 10, t: 628, w: 355, h: 100, go: "detail-logistics", title: "职位", job: "rider" },
    ...TAB,
  ];

  const HOTSPOTS = {
    home: [
      /* 上半固定区热区（相对 home-top） */
      { l: 12, t: 50, w: 76, h: 32, go: "location", title: "定位", zone: "top" },
      { l: 0, t: 88, w: 375, h: 44, go: "search", title: "搜索职位", zone: "top" },
      { l: 10, t: 126, w: 88, h: 88, go: "jingang", cat: "仓储拣运", title: "仓储拣运", zone: "top" },
      { l: 98, t: 126, w: 88, h: 88, go: "jingang", cat: "快递员", title: "快递员", zone: "top" },
      { l: 186, t: 126, w: 88, h: 88, go: "jingang", cat: "骑手", title: "骑手", zone: "top" },
      { l: 274, t: 126, w: 88, h: 88, go: "jingang", cat: "司机", title: "司机", zone: "top" },
      { l: 10, t: 214, w: 88, h: 88, go: "jingang", cat: "客服", title: "客服", zone: "top" },
      { l: 98, t: 214, w: 88, h: 88, go: "jingang", cat: "家政维修", title: "家政维修", zone: "top" },
      { l: 186, t: 214, w: 88, h: 88, go: "jingang", cat: "门店服务", title: "门店服务", zone: "top" },
      { l: 274, t: 214, w: 88, h: 88, go: "jingang", cat: "其他", title: "其他", zone: "top" },
      { l: 10, t: 300, w: 90, h: 48, act: "sort-latest", title: "最新发布", zone: "top" },
      { l: 100, t: 300, w: 90, h: 48, act: "sort-nearby", title: "距离最近", zone: "top" },
      { l: 227, t: 310, w: 74, h: 32, go: "nearby", title: "附近机会", zone: "top" },
      { l: 317, t: 310, w: 46, h: 32, go: "filter-salary", title: "筛选", zone: "top" },
      /* 上滑吸顶热区（相对 home-pin，对齐 78:174368；排序/附近/筛选由 .home-pin-sort 承接） */
      { l: 12, t: 50, w: 76, h: 32, go: "location", title: "定位", zone: "pin" },
      { l: 0, t: 88, w: 375, h: 44, go: "search", title: "搜索职位", zone: "pin" },
      /* 列表滚动区热区（相对列表图，卡片约 143px 高含间隙） */
      { l: 10, t: 0, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "courier" },
      { l: 10, t: 143, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "rider" },
      { l: 10, t: 286, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "install" },
      { l: 10, t: 429, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "courier" },
      { l: 10, t: 572, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "rider" },
      { l: 10, t: 715, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "install" },
      { l: 10, t: 858, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", zone: "list", job: "courier" },
      /* 底栏固定（相对 home-tab，原 t:728 → 0） */
      { l: 0, t: 0, w: 94, h: 50, act: "to-home", title: "找工作", zone: "tab" },
      { l: 94, t: 0, w: 94, h: 50, go: "broker", title: "推好友", zone: "tab" },
      { l: 188, t: 0, w: 94, h: 50, go: "onboard", title: "办入职", zone: "tab" },
      { l: 282, t: 0, w: 93, h: 50, go: "mine", title: "我的", zone: "tab" },
    ],
    location: [
      { l: 0, t: 44, w: 56, h: 44, act: "loc-ok", title: "关闭并确定" },
      { l: 0, t: 88, w: 375, h: 40, act: "loc-search-focus", title: "搜索" },
      /* 稿面三列热区：点选后进入可交互列 */
      { l: 0, t: 180, w: 125, h: 460, act: "loc-pick", title: "省" },
      { l: 125, t: 180, w: 125, h: 460, act: "loc-pick", title: "市" },
      { l: 250, t: 180, w: 125, h: 460, act: "loc-pick", title: "区" },
    ],
    "loc-focus": [
      { l: 0, t: 44, w: 56, h: 44, act: "loc-ok", title: "关闭并确定" },
      { l: 328, t: 88, w: 47, h: 44, act: "loc-cancel", title: "取消" },
      { l: 0, t: 180, w: 125, h: 460, act: "loc-pick", title: "省" },
      { l: 125, t: 180, w: 125, h: 460, act: "loc-pick", title: "市" },
      { l: 250, t: 180, w: 125, h: 460, act: "loc-pick", title: "区" },
    ],
    "address-search": [
      { l: 0, t: 44, w: 56, h: 44, act: "addr-ok", title: "关闭并确定" },
      { l: 328, t: 88, w: 47, h: 44, act: "loc-cancel", title: "取消" },
    ],
    "search-empty": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "关闭" },
      { l: 328, t: 88, w: 47, h: 44, act: "loc-cancel", title: "取消" },
    ],
    "filter-salary": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "关闭筛选" },
    ],
    "filter-loading": [
      { l: 0, t: 0, w: 375, h: 812, go: "filter-scroll", title: "加载完成" },
    ],
    "filter-result": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "关闭筛选" },
      { l: 0, t: 0, w: 375, h: 88, go: "back", title: "点遮罩关闭" },
    ],
    "filter-scroll": FILTER_SCROLL_SPOTS,
    "filter-scroll-near": FILTER_SCROLL_SPOTS,
    "filter-full": [
      { l: 0, t: 44, w: 56, h: 44, go: "filter-salary", title: "返回精简筛选" },
    ],
    nearby: [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 290, t: 96, w: 76, h: 32, go: "nearby-loc", title: "修改定位" },
      { l: 300, t: 458, w: 72, h: 32, go: "filter-salary", title: "筛选" },
      { l: 12, t: 494, w: 351, h: 134, go: "detail-logistics", title: "职位", job: "courier" },
      { l: 288, t: 584, w: 72, h: 34, go: "detail-logistics", title: "去报名", job: "courier" },
      { l: 12, t: 636, w: 351, h: 136, go: "detail-logistics", title: "职位", job: "install" },
      { l: 288, t: 728, w: 72, h: 34, go: "detail-logistics", title: "去报名", job: "install" },
      { l: 12, t: 778, w: 351, h: 34, go: "detail-logistics", title: "职位", job: "rider" },
    ],
    "nearby-time": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 290, t: 96, w: 76, h: 32, go: "nearby-loc", title: "修改定位" },
      { l: 300, t: 458, w: 72, h: 32, go: "filter-salary", title: "筛选" },
      { l: 12, t: 494, w: 351, h: 134, go: "detail-logistics", title: "职位", job: "courier" },
      { l: 288, t: 584, w: 72, h: 34, go: "detail-logistics", title: "去报名", job: "courier" },
      { l: 12, t: 636, w: 351, h: 136, go: "detail-logistics", title: "职位", job: "install" },
      { l: 288, t: 728, w: 72, h: 34, go: "detail-logistics", title: "去报名", job: "install" },
      { l: 12, t: 778, w: 351, h: 34, go: "detail-logistics", title: "职位", job: "rider" },
    ],
    "nearby-empty": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 290, t: 96, w: 76, h: 32, go: "nearby-loc", title: "修改定位" },
    ],
    "nearby-loc": [
      { l: 8, t: 48, w: 44, h: 40, go: "back", title: "关闭" },
      { l: 12, t: 718, w: 350, h: 48, act: "near-loc-ok", title: "确定" },
    ],
    search: [
      { l: 0, t: 44, w: 56, h: 44, act: "search-cancel", title: "返回" },
      { l: 311, t: 160, w: 48, h: 20, act: "job-clear-history", title: "清空" },
      ...TAB,
    ],
    "search-miss": [
      { l: 0, t: 44, w: 56, h: 44, act: "search-cancel", title: "返回" },
    ],
    jingang: [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回", zone: "top" },
      { l: 12, t: 92, w: 52, h: 32, go: "location", title: "定位", zone: "top" },
      { l: 68, t: 88, w: 220, h: 40, go: "search", title: "搜索", zone: "top" },
      /* 排序/附近/筛选改由 .jg-sort-bar 承接，避免与自绘条叠热区 */
    ],
    "job-detail": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 289, t: 248, w: 70, h: 40, act: "call-hr", title: "电话" },
      { l: 250, t: 900, w: 110, h: 40, go: "nearby-loc", title: "修改定位" },
    ],
    "job-detail-2": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 289, t: 257, w: 70, h: 36, act: "call-hr", title: "电话" },
      { l: 260, t: 630, w: 90, h: 28, go: "nearby-loc", title: "修改定位" },
    ],
    resume: [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 240, t: 186, w: 100, h: 40, act: "resume-scan", title: "去识别" },
      { l: 16, t: 726, w: 343, h: 44, act: "resume-save", title: "保存简历" },
    ],
    "id-error": [
      { l: 69, t: 455, w: 110, h: 40, go: "resume", title: "返回" },
      { l: 189, t: 455, w: 118, h: 40, go: "resume", title: "重新上传" },
    ],
    broker: [
      { l: 12, t: 50, w: 76, h: 32, go: "location", title: "定位" },
      { l: 0, t: 88, w: 375, h: 44, go: "search", title: "搜索" },
      { l: 10, t: 138, w: 355, h: 142, go: "poster", title: "经纪人 Banner" },
      { l: 16, t: 246, w: 92, h: 34, act: "broker-reg", title: "注册经纪人" },
      { l: 10, t: 286, w: 355, h: 48, act: "broker-reg", title: "注册成为经纪人" },
      /* 排序/附近/筛选改由首页 homeSortBarHtml(.is-broker) 承接 */
      { l: 10, t: 392, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", job: "courier" },
      { l: 10, t: 535, w: 355, h: 135, go: "detail-logistics", title: "职位卡片", job: "install" },
      { l: 10, t: 678, w: 355, h: 50, go: "detail-logistics", title: "职位卡片", job: "rider" },
      ...TAB,
    ],
    poster: [{ l: 0, t: 0, w: 375, h: 724, go: "back", title: "关闭海报" }],
    "detail-group-apply": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 250, t: 448, w: 110, h: 36, act: "group-car", title: "驾驶车型" },
      { l: 250, t: 498, w: 110, h: 36, act: "group-years", title: "驾驶年限" },
      { l: 12, t: 722, w: 351, h: 48, act: "group-submit", title: "确认投递" },
    ],
    "detail-dada-apply": [
      { l: 0, t: 44, w: 56, h: 44, go: "back", title: "返回" },
      { l: 12, t: 718, w: 351, h: 48, act: "dada-apply", title: "确认投递" },
    ],
    onboard: [
      { l: 0, t: 44, w: 56, h: 44, act: "to-home", title: "返回" },
      { l: 16, t: 718, w: 166, h: 48, act: "onboard-refresh", title: "刷新" },
      { l: 194, t: 718, w: 165, h: 48, act: "to-home", title: "返回首页" },
    ],
    mine: [
      { l: 12, t: 184, w: 351, h: 52, go: "broker", title: "经纪人" },
      { l: 12, t: 247, w: 351, h: 52, go: "resume", title: "我的简历" },
      { l: 12, t: 301, w: 351, h: 52, go: "application-progress", title: "应聘记录" },
      ...TAB,
    ],
    "apply-success": [
      { l: 0, t: 44, w: 56, h: 44, act: "to-home", title: "返回" },
      /* 底栏按钮改由 .apply-success-bar 承接 */
    ],
    share: [
      { l: 0, t: 0, w: 375, h: 100, go: "home", title: "关闭" },
      { l: 0, t: 100, w: 40, h: 520, go: "home", title: "关闭" },
      { l: 335, t: 100, w: 40, h: 520, go: "home", title: "关闭" },
    ],
  };

  const state = {
    page: "home",
    index: 0,
    stack: [],
    locQuery: "",
    locSearching: false,
    addrSel: -1,
    /* 对齐稿 78:175060：贵州 / 贵阳 / 云岩区 */
    city: { p: 2, c: 1, d: 2 },
    locLabel: "全国",
    homeSort: "latest",
    homeScrolled: false,
    locAuthed: false,
    authOpen: false,
    jingangCat: "快递员",
    jingangCustom: false,
    filterOn: {},
    /* 首页默认未筛选（不带 ·N） */
    fullFilterOn: {},
    filterSideId: "fc",
    filterSideLock: false,
    nearMode: 0,
    nearDist: 0,
    nearTip: false,
    nearSort: "dist",
    nearEmpty: false,
    nearAddrSel: 0,
    /* 附近机会页「当前定位」，与首页左上角 locLabel 独立 */
    nearLocLabel: "京东总部2号楼B座",
    nearLocQuery: "",
    jobQuery: "",
    /* 最新在前，最多 12 条，超出丢掉最旧的一条 */
    jobSearches: ["快递员", "外卖骑手", "司机", "仓库分拣", "兼职", "客服"],
    resume: { id: "", name: "", gender: "", birthday: "", phone: "18347392994", emPhone: "", emRel: "" },
    focus: "",
    favOn: false,
    shareOpen: false,
    brokerReg: false,
    idSheet: "",
    resumeScan: false,
    resumeCam: false,
    resumeReady: false,
    resumeGate: false,
    groupCar: "",
    groupYears: "",
    jobKey: "",
    detailJob: null,
  };

  function pageById(id) {
    return PAGES.find((p) => p.id === id);
  }

  function matchAddr(q) {
    const s = (q || "").trim();
    if (!s) return [];
    return ALL_CITY.filter((a) => a.value.indexOf(s) > -1);
  }

  function locVisual(q, searching) {
    const query = (q != null ? q : state.locQuery).trim();
    const on = searching != null ? searching : state.locSearching;
    if (!on) return "location";
    if (!query) return "loc-focus";
    return matchAddr(query).length ? "address-search" : "search-empty";
  }

  const LOC_PAGES = { location: 1, "loc-focus": 1, "address-search": 1, "search-empty": 1 };
  const NEAR_PAGES = { nearby: 1, "nearby-time": 1, "nearby-empty": 1 };
  const NEAR_ADDR = [
    { title: "北京亦庄经济技术开发区科创十一街京东大厦4号楼2号门", sub: "北京市通州区经海路京东总部北京2号楼B座", dist: "20m" },
    { title: "北京亦庄经济技术开发区科创十一街京东总部2号楼", sub: "北京市通州区经海路京东总部北京2号楼B座", dist: "28m" },
    { title: "北京市京东大厦4号楼2号门", sub: "北京市通州区经海路京东总部北京2号楼B座", dist: "29m" },
    { title: "北京市北京京东大厦4号楼2号门", sub: "北京市通州区经海路京东总部北京2号楼B座", dist: "30m" },
    { title: "京东集团全球总部", sub: "北京市通州区科创十一街18号院", dist: "50m" },
  ];

  function nearbyVisual() {
    if (state.nearEmpty) return "nearby-empty";
    return state.nearSort === "time" ? "nearby-time" : "nearby";
  }

  function applyNearVisual() {
    apply(nearbyVisual(), { replace: true });
  }

  function applyLocVisual() {
    const id = locVisual();
    if (id === "address-search" && state.locQuery.trim() === "朝阳" && state.addrSel < 0) {
      state.addrSel = 2; /* 对齐稿：北票市-朝阳 勾选 */
    }
    apply(id, { replace: true });
  }

  function currentLocLabel() {
    const p = CITY_DATA[state.city.p];
    if (!p || p.n === "全国") return "全国";
    const c = (p.cities || [])[state.city.c];
    if (!c) return p.n;
    if (!c.dists || !c.dists.length) return c.n || p.n;
    return c.dists[state.city.d] || c.n;
  }

  function confirmLocAndBack() {
    state.locLabel = currentLocLabel();
    state.locQuery = "";
    state.locSearching = false;
    state.addrSel = -1;
    state.focus = "";
    go("back");
  }

  function distText(m) {
    if (m < 1000) return m + "m";
    return (m / 1000).toFixed(m >= 10000 ? 1 : 2) + "km";
  }

  function publishAge(text) {
    const value = text || "";
    if (value.indexOf("1小时内") >= 0) return 0;
    const hours = value.match(/(\d+)小时前/);
    if (hours) return Number(hours[1]);
    if (value.indexOf("三日内") >= 0) return 72;
    if (value.indexOf("一周内") >= 0) return 168;
    if (value.indexOf("一周前") >= 0) return 336;
    return Number.MAX_SAFE_INTEGER;
  }

  function selectedFullOptions(groupId) {
    const group = FULL_FILTER_GROUPS.find((item) => item.id === groupId);
    if (!group) return [];
    return group.options.filter(
      (option, index) => index > 0 && state.fullFilterOn[`${groupId}${index}`]
    );
  }

  function salaryRange(job) {
    const values = String(job.pay || "").match(/\d+(?:\.\d+)?/g) || [];
    const low = Number(values[0] || 0);
    const high = Number(values[1] || values[0] || 0);
    return [low, high];
  }

  function overlapsSalary(job, min, max) {
    const [low, high] = salaryRange(job);
    return high >= min && low <= max;
  }

  function jobMatchesFilters(job) {
    const text = [job.title, job.site].concat(job.tags || []).join(" ");
    const categories = selectedFullOptions("fc");
    if (categories.length && !categories.some((item) => text.includes(item))) return false;

    const types = selectedFullOptions("ft");
    if (types.length && !types.some((item) => text.includes(item))) return false;

    const fullSalary = selectedFullOptions("fs");
    const fullSalaryMatch = {
      "4000元以下": [0, 4000],
      "4000-6000元": [4000, 6000],
      "6000-8000元": [6000, 8000],
      "8000元以上": [8000, Number.MAX_SAFE_INTEGER],
    };
    if (
      fullSalary.length &&
      !fullSalary.some((item) => {
        const range = fullSalaryMatch[item];
        return range && overlapsSalary(job, range[0], range[1]);
      })
    )
      return false;

    const welfare = selectedFullOptions("fw");
    if (welfare.length && !welfare.some((item) => text.includes(item))) return false;

    const qualifications = selectedFullOptions("fq");
    if (
      qualifications.length &&
      !qualifications.some((item) => {
        const normalized = item.replace(/[0-9]/g, "");
        return text.includes(item) || (normalized && text.includes(`要求${normalized}本`));
      })
    )
      return false;

    const simpleSalary = {
      s1: [0, 3000],
      s2: [3000, 5000],
      s3: [5000, 8000],
      s4: [8000, 10000],
      s5: [0, 10000],
      s6: [10000, 15000],
      s7: [15000, 20000],
    };
    const salaryKeys = Object.keys(simpleSalary).filter((key) => state.filterOn[key]);
    if (
      salaryKeys.length &&
      !salaryKeys.some((key) => overlapsSalary(job, simpleSalary[key][0], simpleSalary[key][1]))
    )
      return false;

    const simpleWelfare = FILTER_CHIPS.filter(
      (item) => /^w[1-9]/.test(item.k) && state.filterOn[item.k]
    ).map((item) => item.t);
    if (simpleWelfare.length && !simpleWelfare.some((item) => text.includes(item))) return false;
    return true;
  }

  function jobsForCat(cat) {
    const raw = (cat === "其他" ? JOB_MAP["其他"] : JOB_MAP[cat]) || JOB_MAP["快递员"];
    const list = raw.map((j) => {
      if (cat === "其他") return Object.assign({}, j);
      const rest = (j.tags || []).filter((t) => t !== cat);
      return Object.assign({}, j, { tags: [cat].concat(rest) });
    });
    const filtered = list.filter(jobMatchesFilters);
    if (state.homeSort === "nearby") {
      return filtered.slice().sort((a, b) => (a.dist || 9e5) - (b.dist || 9e5));
    }
    return filtered.slice().sort((a, b) => publishAge(a.fresh) - publishAge(b.fresh));
  }

  function jobKeyFor(job) {
    if (job && job.key && JOB_DETAIL[job.key]) return job.key;
    const t = (job && job.title) || job || "";
    if (t.indexOf("客服") >= 0) return "cs";
    if (t.indexOf("骑手") >= 0) return "rider";
    if (t.indexOf("安装") >= 0 || t.indexOf("家电") >= 0) return "install";
    if (t.indexOf("司机") >= 0 || t.indexOf("运输") >= 0) return "driver";
    if (t.indexOf("仓储") >= 0 || t.indexOf("分拣") >= 0 || t.indexOf("拣运") >= 0) return "warehouse";
    if (t.indexOf("门店") >= 0) return "store";
    if (t.indexOf("快递") >= 0) return "courier";
    return CAT_TO_JOB_KEY[state.jingangCat] || "";
  }

  function resolveJobKey(fallbackCat) {
    const cat = fallbackCat || state.jingangCat;
    return CAT_TO_JOB_KEY[cat] || "courier";
  }

  /* 发布名最长 36 字；列表超 12 字省略；详情最多两行 */
  function publishTitle(title) {
    return Array.from(title || "").slice(0, 36).join("");
  }

  function listTitle(title) {
    const chars = Array.from(publishTitle(title));
    if (chars.length <= 12) return chars.join("");
    return chars.slice(0, 12).join("") + "...";
  }

  function detailTitle(title) {
    return publishTitle(title);
  }

  function homeJobs() {
    const cats = ["快递员", "家政维修", "骑手", "司机", "仓储拣运", "客服"];
    const list = [];
    cats.forEach((cat) => {
      (JOB_MAP[cat] || []).forEach((j) => {
        const rest = (j.tags || []).filter((t) => t !== cat);
        list.push(Object.assign({}, j, { tags: [cat].concat(rest) }));
      });
    });
    const filtered = list.filter(jobMatchesFilters);
    if (state.homeSort === "nearby") {
      return filtered.slice().sort((a, b) => (a.dist || 9e5) - (b.dist || 9e5));
    }
    return filtered.slice().sort((a, b) => publishAge(a.fresh) - publishAge(b.fresh));
  }

  function jobCardsHtml(list, top, layerClass) {
    const latest = state.homeSort === "latest";
    const cls = layerClass ? `job-layer ${layerClass}` : "job-layer";
    const topStyle = layerClass ? "" : ` style="top:${top || 0}px"`;
    return `<div class="${cls}"${topStyle}>${list
      .map((j) => {
        const left = latest
          ? `<span class="job-meta-item is-time">${j.fresh || "刚刚更新"}</span>`
          : `<span class="job-meta-item is-dist">距离 ${distText(j.dist || 0)}</span>`;
        const key = jobKeyFor(j) || resolveJobKey(state.jingangCat);
        const info = encodeURIComponent(JSON.stringify(j));
        return `<div class="job-card" data-go="detail-logistics" data-job="${key}" data-job-info="${info}">
        <div class="job-head">
          <div class="job-row1"><span class="job-title">${listTitle(j.title)}</span><span class="job-pay"><b>${j.pay}</b><i>${j.unit || "元/月"}</i></span></div>
          <div class="job-site">${j.site}</div>
        </div>
        <div class="job-tags">${j.tags.map((t) => `<span>${t}</span>`).join("")}</div>
        <div class="job-row3">
          <span class="job-meta">${left}<span class="job-meta-item is-loc">${j.loc || ""}</span></span>
          <button type="button" class="job-apply" data-go="detail-logistics" data-job="${key}" data-job-info="${info}">去报名</button>
        </div>
      </div>`;
      })
      .join("")}</div>`;
  }

  function markKw(text, q) {
    if (!q) return text;
    const parts = String(text).split(q);
    if (parts.length < 2) return text;
    return parts.join("<em>" + q + "</em>");
  }

  function go(id, fromNav) {
    if (id === "back") {
      const prev = state.stack.pop() || "home";
      enterPage(prev);
      apply(prev);
      return;
    }
    if (!pageById(id)) return;
    if (!fromNav && !(LOC_PAGES[state.page] && LOC_PAGES[id]) && !(NEAR_PAGES[state.page] && NEAR_PAGES[id])) {
      if (state.page !== id) state.stack.push(state.page);
    }
    if (fromNav) state.stack = [];
    enterPage(id, fromNav);
    apply(id);
  }

  let nearTipTimer = null;

  function armNearTip() {
    state.nearTip = true;
    clearTimeout(nearTipTimer);
    nearTipTimer = setTimeout(() => {
      nearTipTimer = null;
      state.nearTip = false;
      if (state.page === "nearby" || state.page === "nearby-time") render();
    }, 3000);
  }

  function dismissNearTip() {
    clearTimeout(nearTipTimer);
    nearTipTimer = null;
    state.nearTip = false;
  }

  function enterPage(id, fromNav) {
    if (id === "nearby" || id === "nearby-time" || id === "nearby-empty") {
      state.nearEmpty = id === "nearby-empty";
      state.nearSort = id === "nearby-time" ? "time" : "dist";
      if (id === "nearby") state.nearEmpty = false;
      if ((id === "nearby" || id === "nearby-time") && !NEAR_PAGES[state.page] && state.nearMode === 0) {
        armNearTip();
      }
    }
    if (id === "nearby-loc") {
      state.focus = "";
      state.nearLocQuery = "";
      if (state.nearAddrSel < 0) state.nearAddrSel = 0;
    }
    if (id === "location") {
      state.locSearching = false;
      state.focus = "";
      if (fromNav) state.locQuery = "";
    }
    if (id === "loc-focus") {
      state.locSearching = true;
      state.focus = "loc";
    }
    if (id === "address-search") {
      state.locSearching = true;
      state.focus = "loc";
      if (!state.locQuery) state.locQuery = "朝阳";
      if (state.addrSel < 0 && matchAddr(state.locQuery).length) state.addrSel = 2;
    }
    if (id === "search-empty") {
      state.locSearching = true;
      state.focus = "loc";
      if (!state.locQuery) state.locQuery = "朝阳";
    }
    if (id === "search") {
      state.focus = "job";
      if (fromNav) state.jobQuery = "";
    }
    if (id === "search-miss") {
      state.focus = "job";
      if (!state.jobQuery) state.jobQuery = "骑手xx";
    }
    if (id === "jingang") {
      /* 始终用数据卡片，避免 PNG 列表与 data-job 错位 */
      state.jingangCustom = true;
      if (!state.jingangCat) state.jingangCat = "快递员";
      /* 从首页金刚位点进来：筛选默认未选（不带 ·N） */
      if (state.page === "home") state.fullFilterOn = {};
    }
    if (
      id === "job-detail" ||
      id === "job-detail-2" ||
      id === "detail-logistics" ||
      id === "detail-group" ||
      id === "detail-dada"
    ) {
      /* 已有合法 key（卡片/热区传入）则保留，否则按金刚位类目回落 */
      if (!state.jobKey || !JOB_DETAIL[state.jobKey]) {
        state.jobKey = resolveJobKey(state.jingangCat);
      }
    }
    if (id === "broker") {
      state.brokerReg = false;
      state.idSheet = "";
    }
    if (id === "detail-logistics") state.resumeGate = false;
    if (id === "detail-group-apply") {
      state.groupCar = "";
      state.groupYears = "";
    }
    if (id === "resume") {
      state.resumeScan = false;
      state.resumeCam = false;
    }
  }

  function mapJobQuery(q) {
    const s = (q || "").trim();
    const map = { 外卖骑手: "骑手", 仓库分拣: "仓储拣运", 兼职: "其他", 骑手: "骑手", 快递员: "快递员", 司机: "司机", 客服: "客服" };
    if (map[s]) return map[s];
    if (JOB_MAP[s]) return s;
    for (const k of Object.keys(JOB_MAP)) {
      if (s && k.indexOf(s) > -1) return k;
    }
    return "";
  }

  function rememberSearch(q) {
    const s = (q || "").trim();
    if (!s) return;
    const next = [s].concat((state.jobSearches || []).filter((x) => x !== s));
    state.jobSearches = next.slice(0, 12);
  }

  function submitJobSearch() {
    const q = (state.jobQuery || "").trim();
    if (q) rememberSearch(q);
    const cat = mapJobQuery(q);
    const jobs = cat && JOB_MAP[cat];
    if (cat && jobs && jobs.length) {
      state.jingangCat = cat;
      state.jingangCustom = true;
      go("jingang");
      return;
    }
    if (q) {
      apply("search-miss");
      return;
    }
    apply("search");
  }

  function apply(id, opts) {
    const i = PAGES.findIndex((p) => p.id === id);
    if (i < 0) return;
    state.page = id;
    state.index = i;
    render();
  }

  function act(name) {
    if (name === "loc-reset") {
      state.locQuery = "";
      state.locSearching = false;
      state.addrSel = -1;
      state.city = { p: 2, c: 1, d: 2 };
      state.focus = "loc";
      apply("location", { replace: true });
      return;
    }
    if (name === "loc-search-focus") {
      state.locSearching = true;
      state.locQuery = "";
      state.focus = "loc";
      applyLocVisual();
      return;
    }
    if (name === "loc-pick") {
      /* 离开稿面默认选中，叠出可滚动交互列 */
      if (state.city.p === 2 && state.city.c === 1 && state.city.d === 2) {
        state.city = { p: 2, c: 1, d: 1 };
      }
      render();
      return;
    }
    if (name === "loc-cancel") {
      state.locQuery = "";
      state.locSearching = false;
      state.addrSel = -1;
      state.focus = "";
      apply("location", { replace: true });
      return;
    }
    if (name === "loc-ok") {
      confirmLocAndBack();
      return;
    }
    if (name === "addr-ok") {
      if (state.addrSel >= 0) {
        const hit = matchAddr(state.locQuery)[state.addrSel];
        state.locLabel = hit ? hit.value.split("-").pop() : currentLocLabel();
      } else {
        state.locLabel = currentLocLabel();
      }
      state.locQuery = "";
      state.locSearching = false;
      state.addrSel = -1;
      state.focus = "";
      go("back");
      return;
    }
    if (name === "call-hr") {
      window.alert("拨打招聘电话");
      return;
    }
    if (name === "fav-toggle") {
      state.favOn = !state.favOn;
      render();
      return;
    }
    if (name === "share-open") {
      state.shareOpen = true;
      render();
      return;
    }
    if (name === "share-close") {
      state.shareOpen = false;
      render();
      return;
    }
    if (name === "near-sort-dist") {
      state.nearSort = "dist";
      state.nearEmpty = false;
      applyNearVisual();
      return;
    }
    if (name === "near-sort-time") {
      state.nearSort = "time";
      state.nearEmpty = false;
      applyNearVisual();
      return;
    }
    if (name === "near-loc-reset") {
      state.nearLocQuery = "";
      state.nearAddrSel = -1;
      state.focus = "nearloc";
      render();
      return;
    }
    if (name === "logistics-apply") {
      if (!state.resumeReady) {
        state.resumeGate = true;
        render();
        return;
      }
      state.resumeGate = false;
      go("apply-success");
      return;
    }
    if (name === "resume-gate-close") {
      state.resumeGate = false;
      render();
      return;
    }
    if (name === "resume-go") {
      state.resumeGate = false;
      go("resume");
      return;
    }
    if (name === "resume-save") {
      state.resumeReady = true;
      /* 从物流报名弹窗进来：保存后回详情，再次报名可直接成功 */
      if (state.stack.length && state.stack[state.stack.length - 1] === "detail-logistics") {
        state.resumeGate = false;
        go("back");
        return;
      }
      go("home");
      return;
    }
    if (name === "group-apply") {
      go("detail-group-apply");
      return;
    }
    if (name === "group-car") {
      state.groupCar = "厢式货车";
      render();
      return;
    }
    if (name === "group-years") {
      state.groupYears = "3-5年";
      render();
      return;
    }
    if (name === "group-submit") {
      if (!state.groupCar || !state.groupYears) return;
      go("apply-success");
      return;
    }
    if (name === "dada-open") {
      go("detail-dada-apply");
      return;
    }
    if (name === "dada-apply") {
      go("apply-success");
      return;
    }
    if (name === "broker-reg") {
      state.brokerReg = true;
      state.idSheet = "";
      render();
      return;
    }
    if (name === "broker-reg-close") {
      state.brokerReg = false;
      state.idSheet = "";
      render();
      return;
    }
    if (name === "id-front" || name === "id-back") {
      state.idSheet = name === "id-front" ? "front" : "back";
      render();
      return;
    }
    if (name === "id-sheet-close") {
      state.idSheet = "";
      render();
      return;
    }
    if (name === "resume-scan") {
      state.resumeScan = true;
      state.resumeCam = false;
      render();
      return;
    }
    if (name === "resume-scan-close") {
      state.resumeScan = false;
      state.resumeCam = false;
      render();
      return;
    }
    if (name === "resume-cam") {
      state.resumeCam = true;
      render();
      return;
    }
    if (name === "resume-cam-close") {
      state.resumeCam = false;
      render();
      return;
    }
    if (name === "to-home") {
      go("home", true);
      return;
    }
    if (name === "onboard-refresh") {
      render();
      return;
    }
    if (name === "near-tip-close") {
      dismissNearTip();
      render();
      return;
    }
    if (name === "near-loc-ok") {
      if (state.nearAddrSel >= 0) {
        const hit = NEAR_ADDR[state.nearAddrSel];
        /* 只更新附近页当前定位，不改首页左上角城市 */
        if (hit) state.nearLocLabel = hit.title;
      }
      state.focus = "";
      go("back");
      return;
    }
    if (name === "sort-latest") {
      state.homeSort = "latest";
      state.authOpen = false;
      if (state.page === "jingang") {
        render();
        return;
      }
      if (NEAR_PAGES[state.page]) {
        state.nearSort = "time";
        state.nearEmpty = false;
        applyNearVisual();
        return;
      }
      if (state.page === "filter-scroll" || state.page === "filter-scroll-near") {
        apply("filter-scroll", { replace: true });
        return;
      }
      render();
      return;
    }
    if (name === "sort-nearby") {
      if (NEAR_PAGES[state.page]) {
        state.nearSort = "dist";
        state.nearEmpty = false;
        applyNearVisual();
        return;
      }
      /* 首页 / 职位列表 / 经纪人：距离最近逻辑一致，未授权先弹窗 */
      if (!state.locAuthed) {
        state.authOpen = true;
        render();
        return;
      }
      state.locLabel = state.locLabel && state.locLabel !== "全国" ? state.locLabel : DETECTED_DISTRICT;
      state.homeSort = "nearby";
      state.authOpen = false;
      if (state.page === "filter-scroll" || state.page === "filter-scroll-near") {
        apply("filter-scroll-near", { replace: true });
        return;
      }
      render();
      return;
    }
    if (name === "auth-ok") {
      state.locAuthed = true;
      state.authOpen = false;
      state.locLabel = DETECTED_DISTRICT;
      state.homeSort = "nearby";
      render();
      return;
    }
    if (name === "auth-cancel") {
      state.authOpen = false;
      render();
      return;
    }
    if (name === "filter-reset") {
      state.filterOn = {};
      if (state.page === "filter-full" || state.page === "filter-salary") state.fullFilterOn = {};
      render();
      return;
    }
    if (name === "filter-ok") {
      const prev = state.stack[state.stack.length - 1];
      if (prev === "jingang") {
        go("back");
        return;
      }
      /* 对齐 78:172835 / 78:174368：确定后回首页展示筛选结果 */
      apply("filter-loading");
      clearTimeout(state._filterTimer);
      state._filterTimer = setTimeout(() => {
        if (state.page === "filter-loading") {
          state.stack = [];
          state.homeScrolled = false;
          apply("home");
        }
      }, 500);
      return;
    }
    if (name === "job-clear-history") {
      state.jobSearches = [];
      state.jobQuery = "";
      if (state.page === "search-miss") apply("search");
      else render();
      return;
    }
    if (name === "job-chip") {
      submitJobSearch();
      return;
    }
    if (name === "search-cancel") {
      state.jobQuery = "";
      if (state.page === "search-miss") {
        apply("search");
        return;
      }
      go("back");
    }
  }

  function escHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function historyHtml() {
    const items = state.jobSearches || [];
    if (!items.length) return `<div class="hist-plate is-empty"></div>`;
    const chips = items
      .map((q) => `<button type="button" class="hist-chip" data-act="job-chip" data-q="${escHtml(q)}">${escHtml(q)}</button>`)
      .join("");
    return `<div class="hist-plate"></div><div class="hist-chips">${chips}</div>`;
  }

  function searchMask(opts) {
    const { l, t, w, h, name, value, ph, showClear, extraClass, active } = opts;
    const safe = String(value || "").replace(/"/g, "&quot;");
    const clear = showClear && value ? `<button type="button" class="fig-clear" data-clear="${name}" aria-label="清除"></button>` : "";
    const filled = value ? "has-value" : "";
    const focused = active || state.focus === name ? "is-active" : "";
    return `<div class="fig-mask ${extraClass || ""} ${filled} ${focused}" style="left:${l}px;top:${t}px;width:${w}px;height:${h || 32}px">
      <span class="fig-icon" aria-hidden="true"></span>
      <input class="fig-input" type="text" autocomplete="off" autocorrect="off" spellcheck="false" data-input="${name}" value="${safe}" placeholder="${ph || ""}" aria-label="${ph || ""}" />
      ${clear}
    </div>`;
  }

  function pickerLabel(name) {
    const chars = Array.from(name || "");
    if (chars.length <= 7) return escHtml(chars.join(""));
    const lines = [];
    for (let i = 0; i < chars.length; i += 7) lines.push(escHtml(chars.slice(i, i + 7).join("")));
    return lines.join("<br>");
  }

  function pickerHtml() {
    const p = CITY_DATA[state.city.p] || CITY_DATA[0];
    const cities = p.cities || [];
    const city = cities[state.city.c];
    const dists = city && city.dists ? city.dists : [];
    const nation = !cities.length;
    const itemCls = (name, on) => `picker-item${on ? " on" : ""}${Array.from(name).length > 7 ? " wrap" : ""}`;
    return `<div class="picker">
      <div class="picker-col c1">${CITY_DATA.map(
        (x, i) => `<button type="button" class="${itemCls(x.n, i === state.city.p)}" data-p="${i}">${pickerLabel(x.n)}</button>`
      ).join("")}</div>
      ${
        nation
          ? `<div class="picker-empty"></div>`
          : `<div class="picker-col c2">${cities
              .map(
                (x, i) =>
                  `<button type="button" class="${itemCls(x.n, i === state.city.c)}" data-c="${i}">${pickerLabel(x.n)}</button>`
              )
              .join("")}</div>
      <div class="picker-col c3">${dists
        .map(
          (x, i) =>
            `<button type="button" class="${itemCls(x, i === state.city.d)}" data-d="${i}">${pickerLabel(x)}</button>`
        )
        .join("")}</div>`
      }
    </div>`;
  }

  function detailFieldsHtml(pageId) {
    const key = state.jobKey && JOB_DETAIL[state.jobKey] ? state.jobKey : resolveJobKey(state.jingangCat);
    state.jobKey = key;
    const base = JOB_DETAIL[key];
    if (!base) return "";
    const picked = pageId === "detail-logistics" ? state.detailJob : null;
    const j =
      picked && jobKeyFor(picked) === key
        ? Object.assign({}, base, {
            title: picked.title || base.title,
            pay: `${picked.pay || base.pay.replace(/元\/月$/, "")}${picked.unit || "元/月"}`,
            tags: Array.from(new Set([base.tags[0]].concat(picked.tags || []))),
            loc: picked.loc || base.loc,
            date: picked.fresh || base.date,
            hrSub: `${picked.site || base.hrSub.replace(/·招聘经理$/, "")}·招聘经理`,
          })
        : base;
    const tags = j.tags.map((t) => `<span>${t}</span>`).join("");
    const duties = j.duties.map((t, i) => `<p>${i + 1}、${t}</p>`).join("");
    const quals = j.quals.map((t, i) => `<p>${i + 1}、${t}</p>`).join("");
    const pay = j.pay.match(/^(.*?)(元\/月)$/);
    const payAmount = pay ? pay[1] : j.pay;
    const payUnit = pay ? pay[2] : "";
    const compact =
      pageId === "job-detail-2" || pageId === "detail-logistics" || pageId === "detail-dada";
    const title = detailTitle(j.title);
    /* 顶部导航：2x chrome + 清晰标题/返回；meta/电话用 SVG 图标 */
    return `<div class="detail-top-chrome">
        <img src="assets/screens/detail-top-chrome.png?v=1015s" width="375" height="88" alt="职位详情顶栏" />
        <h1 class="detail-title">职位详情</h1>
        <button type="button" class="hotspot detail-back" data-go="back" title="返回" aria-label="返回"></button>
      </div>
      <div class="detail-fields is-flow${compact ? " compact" : ""}">
      <div class="df-hero">
        <div class="df-title">${title}</div>
        <div class="df-pay"><b>${payAmount}</b>${payUnit ? `<i>${payUnit}</i>` : ""}</div>
        <div class="df-tags">${tags}</div>
        <div class="df-meta">
          <span class="df-meta-item loc">${j.loc}</span>
          <span class="df-meta-item heads">${j.heads}</span>
          <span class="df-meta-item date">${j.date}</span>
        </div>
      </div>
      <div class="df-hr-row">
        <div class="df-hr-avatar" aria-hidden="true"></div>
        <div class="df-hr-text">
          <div class="df-hr">${j.hr}</div>
          <div class="df-hrsub">${j.hrSub}</div>
        </div>
        <button type="button" class="df-call" data-act="call-hr" aria-label="电话">电话</button>
      </div>
      <div class="df-body">
        <div class="df-separator"></div>
        <section class="df-section">
          <h2>工作内容</h2>
          <div class="df-copy">${duties}</div>
        </section>
        <div class="df-separator"></div>
        <section class="df-section">
          <h2>任职资格</h2>
          <div class="df-copy">${quals}</div>
        </section>
        ${compact ? "" : `<div class="df-separator"></div>
        <img class="df-location-tail" src="assets/screens/detail-location-tail.png?v=1013s" width="375" height="258" alt="位置信息" />`}
      </div>
    </div>`;
  }

  function shotLayer(file, hits) {
    return `<div class="auth-layer">
      <img src="assets/screens/${file}?v=1016j" width="375" height="812" alt="" />
      ${hits}
    </div>`;
  }

  function shotHit(l, t, w, h, act, label) {
    return `<button type="button" class="hotspot auth-hit" style="left:${l}px;top:${t}px;width:${w}px;height:${h}px" data-act="${act}" aria-label="${label}"></button>`;
  }

  /** 已选数量：不含各组「不限」 */
  function fullFilterCount() {
    return Object.keys(state.fullFilterOn).filter((key) => {
      if (!state.fullFilterOn[key]) return false;
      if (key === "hiddenPosition") return true;
      return !/^(fc|ft|fs|fw|fe|fq|fo)0$/.test(key);
    }).length;
  }

  const FILTER_SIDE_ROWS = [
    { label: "职位类别", id: "fc" },
    { label: "职位类型", id: "ft" },
    { label: "薪资范围", id: "fs" },
    { label: "福利待遇", id: "fw" },
    { label: "经验要求", id: "fe" },
    { label: "资质要求", id: "fq" },
    { label: "作业要求", id: "fo" },
  ];

  /** 滚动联动：右侧分区顺序 */
  const FILTER_SCROLL_SECTIONS = [
    { id: "fc", label: "职位类别" },
    { id: "ft", label: "职位类型" },
    { id: "fs", label: "薪资范围" },
    { id: "fw", label: "福利待遇" },
    { id: "fe", label: "经验要求" },
    { id: "fq", label: "资质要求" },
    { id: "fo", label: "作业要求" },
  ];

  /** 左侧 +n：只计具体选项，不含「不限」 */
  function fullFilterSideCount(id) {
    if (id === "hiddenPosition") return state.fullFilterOn.hiddenPosition ? 1 : 0;
    return Object.keys(state.fullFilterOn).filter(
      (key) => key.startsWith(id) && state.fullFilterOn[key] && key.slice(id.length) !== "0"
    ).length;
  }

  function fullFilterSideHtml() {
    const sideId = state.filterSideId || "fc";
    return FILTER_SIDE_ROWS.map((row, index) => {
      const count = fullFilterSideCount(row.id);
      const countText = count ? ` ${count}` : "";
      return `<button type="button" class="full-filter-tab ${sideId === row.id ? "on" : ""}${index === 0 ? " is-first" : ""}"
        data-filter-side="${row.id}" data-filter-anchor="${row.id}">${row.label}${countText}</button>`;
    }).join("");
  }

  function fullFilterPanelsHtml() {
    return FULL_FILTER_GROUPS.map((group) => {
      const chips = group.options
        .map((text, index) => {
          const key = `${group.id}${index}`;
          return `<button type="button" class="full-filter-chip ${state.fullFilterOn[key] ? "on" : ""}"
            data-full-chip="${key}" data-full-group="${group.id}"
            aria-pressed="${state.fullFilterOn[key] ? "true" : "false"}">${text}</button>`;
        })
        .join("");
      return `<section class="filter-panel" data-filter-panel="${group.id}" id="filter-panel-${group.id}">
        <h3 class="filter-panel-title">${group.label}<span>（可多选）</span></h3>
        <div class="filter-panel-chips">${chips}</div>
      </section>`;
    }).join("");
  }

  function syncFilterSideByScroll(scroller) {
    if (!scroller || state.filterSideLock) return;
    /* 岗位分类无独立面板：滚动时不抢回高亮 */
    if (state.filterSideId === "hiddenPosition") return;
    const panels = Array.from(scroller.querySelectorAll("[data-filter-panel]"));
    if (!panels.length) return;
    const top = scroller.scrollTop + 24;
    let current = panels[0].dataset.filterPanel;
    for (let i = 0; i < panels.length; i++) {
      if (panels[i].offsetTop <= top) current = panels[i].dataset.filterPanel;
    }
    if (scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 8) {
      current = panels[panels.length - 1].dataset.filterPanel;
    }
    if (state.filterSideId === current) return;
    state.filterSideId = current;
    const root = document.getElementById("app-root");
    if (!root) return;
    let activeTab = null;
    root.querySelectorAll(".full-filter-tab").forEach((tab) => {
      const on = tab.dataset.filterSide === current;
      tab.classList.toggle("on", on);
      if (on) activeTab = tab;
    });
    if (activeTab && activeTab.scrollIntoView) {
      activeTab.scrollIntoView({ block: "nearest" });
    }
  }

  function scrollFilterToAnchor(scroller, anchorId) {
    if (!scroller || !anchorId) return;
    const panel = scroller.querySelector(`[data-filter-panel="${anchorId}"]`);
    if (!panel) return;
    const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    scroller.scrollTo({ top: Math.min(Math.max(0, panel.offsetTop), max), behavior: "smooth" });
  }

  function renderFilterPage() {
    const prev = document.querySelector("#app-root .filter-shell .filter-scroll");
    const keepTop = prev ? prev.scrollTop : 0;
    const count = fullFilterCount();
    const html = `<div class="filter-shell">
      <div class="filter-topbar">
        <img class="filter-top-chrome" src="assets/screens/filter-top-chrome.png?v=1015j" width="375" height="88" alt="筛选顶栏" />
        <h1 class="filter-title">筛选</h1>
        <button type="button" class="filter-close" data-go="back" aria-label="关闭筛选"></button>
      </div>
      <aside class="filter-side">${fullFilterSideHtml()}</aside>
      <div class="filter-scroll" id="filter-scroll-main">
        <div class="filter-body filter-body-live">
          ${fullFilterPanelsHtml()}
          <div class="filter-body-pad"></div>
        </div>
      </div>
      <div class="filter-sticky full">
        <button type="button" class="filter-reset" data-act="filter-reset" title="重置" aria-label="重置">重置</button>
        <button type="button" class="filter-ok" data-act="filter-ok" title="确定" aria-label="确定">确定（已选${count}）</button>
      </div>
    </div>`;
    return { html, keepTop };
  }

  function applicationProgressHtml() {
    const history = [
      ["面试中", "fail"],
      ["入职失败", "muted"],
      ["入职失败", "muted"],
    ];
    const historyCards = history
      .map(
        ([status, cls]) => `<article class="ap-history-card">
          <h3>北京市-北京摆渡车队-运输司机</h3>
          <span class="ap-history-status ${cls}">${status}</span>
          <p><em>招聘渠道：</em>供应商-日照市越疆智能科技有限公司</p>
          <p><em>报名时间：</em>2022-12-08 12:00:00</p>
        </article>`
      )
      .join("");
    return `<div class="application-progress">
      <header class="ap-status"><b>9:41</b><span></span></header>
      <div class="ap-nav">
        <button type="button" class="ap-back" data-go="back" aria-label="返回"></button>
        <h1>应聘记录</h1>
        <span class="ap-mini" aria-hidden="true"></span>
      </div>
      <main>
        <h2 class="ap-section-title current">当前应聘进度</h2>
        <section class="ap-current-card">
          <h3>北京市-北京摆渡车队-运输司机…</h3>
          <div class="ap-steps">
            <div class="ap-step done"><b></b><strong>报名</strong><span>通过</span></div>
            <i></i>
            <div class="ap-step done"><b></b><strong>HR面试</strong><span>通过</span></div>
            <i></i>
            <div class="ap-step active"><b>3</b><strong>业务面试</strong><span>进行中</span></div>
            <i></i>
            <div class="ap-step"><b>4</b><strong>入职</strong><span>未开始</span></div>
          </div>
          <button type="button" class="ap-interview" data-go="home">开始面试</button>
        </section>
        <h2 class="ap-section-title history">历史报名 <small>· 10</small></h2>
        <section class="ap-history-list">${historyCards}</section>
      </main>
      <div class="ap-home-indicator"></div>
    </div>`;
  }

  /** 授权弹层：半透明罩 + 对话框，背景保留当前页（不用带首页底图的 PNG） */
  function authLayerHtml() {
    if (!state.authOpen) return "";
    return `<div class="auth-layer" role="dialog" aria-modal="true" aria-label="授权地理位置信息">
      <div class="auth-mask" data-act="auth-cancel"></div>
      <div class="auth-dialog">
        <h3 class="auth-dialog-title">授权地理位置信息</h3>
        <p class="auth-dialog-desc">京东直招需要获取你的地理位置，用于推荐附近工作</p>
        <div class="auth-dialog-actions">
          <button type="button" class="auth-btn cancel" data-act="auth-cancel">取消</button>
          <button type="button" class="auth-btn ok" data-act="auth-ok">授权</button>
        </div>
      </div>
    </div>`;
  }

  function overlays(pageId) {
    if (pageId === "application-progress") return applicationProgressHtml();
    if (pageId === "apply-success") {
      /* 底图双按钮叠在一起，自绘底栏覆盖并对齐间距 */
      return `<div class="apply-success-bar">
        <button type="button" class="apply-success-btn ghost" data-act="to-home">返回首页</button>
        <button type="button" class="apply-success-btn primary" data-go="application-progress">报名进度</button>
      </div>`;
    }
    if (pageId === "filter-full" || pageId === "filter-salary") return "";
    if (pageId === "filter-scroll" || pageId === "filter-scroll-near") {
      const n = fullFilterCount();
      return `${authLayerHtml()}<button type="button" class="list-filter-badge" data-go="filter-salary" aria-label="筛选">筛选${n ? `·${n}` : ""}</button>`;
    }

    if (pageId === "location" || pageId === "loc-focus" || pageId === "address-search" || pageId === "search-empty") {
      const searching = pageId !== "location";
      const emptyMiss = pageId === "search-empty";
      /* 三列列表字重以稿面 PNG 为准，不再自绘盖住（避免偏细/不符） */
      /* 3.4 搜索缺省对齐 Figma 85:25788：通栏搜索、无取消 */
      let html = searchMask({
        l: 12,
        t: 94,
        w: emptyMiss || !searching ? 351 : 303,
        h: 32,
        name: "loc",
        value: state.locQuery,
        ph: emptyMiss ? "搜索您感兴趣的职位" : "请输入您要搜索的省/市/县/区",
        showClear: searching && !!state.locQuery,
        active: searching,
      });
      if (searching && !emptyMiss) {
        html += `<button type="button" class="loc-cancel" data-act="loc-cancel" title="取消">取消</button>`;
      }
      /* 切图已有定位针和「当前位置：朝阳区」。只在地名不同时盖住地名，不再整行重画 */
      if (pageId === "location" || pageId === "loc-focus") {
        const label = state.locLabel || "全国";
        if (label !== "朝阳区") html += `<div class="loc-current">${label}</div>`;
        html += pickerHtml();
      }
      if (pageId === "address-search") {
        const q = state.locQuery.trim();
        const rows = matchAddr(q);
        /* 稿 78:175178 默认「朝阳」结果：热区点选，不重绘文字 */
        const useFig = q === "朝阳";
        html += `<div class="addr-list${useFig ? " fig-only" : ""}">${rows
          .map(
            (r, i) =>
              `<button type="button" class="addr-item ${i === state.addrSel ? "on" : ""}" data-addr="${i}" ${useFig ? `style="height:46px"` : ""}>
                <span class="t">${useFig ? "" : markKw(r.value, q)}</span>
              </button>`
          )
          .join("")}</div>`;
      }
      return html;
    }

    if (
      pageId === "job-detail" ||
      pageId === "job-detail-2" ||
      pageId === "detail-logistics" ||
      pageId === "detail-group" ||
      pageId === "detail-dada"
    ) {
      const fav = state.favOn ? " on" : "";
      const applyAttr =
        pageId === "detail-logistics"
          ? `data-act="logistics-apply"`
          : pageId === "detail-group"
          ? `data-act="group-apply"`
          : pageId === "detail-dada"
            ? `data-act="dada-open"`
            : `data-go="resume"`;
      const share = state.shareOpen
        ? `<div class="auth-layer">
            <img src="assets/screens/share-poster.png?v=1013i" width="375" height="812" alt="分享海报" />
            <button type="button" class="hotspot auth-hit" style="left:0px;top:0px;width:375px;height:100px" data-act="share-close" aria-label="关闭"></button>
            <button type="button" class="hotspot auth-hit" style="left:0px;top:100px;width:44px;height:540px" data-act="share-close" aria-label="关闭"></button>
            <button type="button" class="hotspot auth-hit" style="left:330px;top:100px;width:45px;height:540px" data-act="share-close" aria-label="关闭"></button>
            <button type="button" class="hotspot auth-hit" style="left:40px;top:652px;width:84px;height:86px" data-act="share-close" aria-label="发送给好友"></button>
            <button type="button" class="hotspot auth-hit" style="left:140px;top:652px;width:96px;height:86px" data-act="share-close" aria-label="分享到朋友圈"></button>
            <button type="button" class="hotspot auth-hit" style="left:251px;top:652px;width:84px;height:86px" data-act="share-close" aria-label="保存海报"></button>
          </div>`
        : "";
      const resumeGate =
        pageId === "detail-logistics" && state.resumeGate
          ? shotLayer(
              "resume-need.png",
              shotHit(0, 0, 375, 460, "resume-gate-close", "关闭") +
                shotHit(0, 520, 375, 292, "resume-gate-close", "关闭") +
                shotHit(72, 470, 110, 40, "resume-gate-close", "取消") +
                shotHit(194, 470, 114, 40, "resume-go", "去完善")
            )
          : "";
      return `<div class="detail-sticky${fav}">
        <button type="button" class="detail-fav ${state.favOn ? "on" : ""}" data-act="fav-toggle" title="收藏" aria-label="收藏"></button>
        <button type="button" class="detail-share" data-act="share-open" title="分享职位" aria-label="分享职位"></button>
        <button type="button" class="detail-apply" ${applyAttr} title="立即报名" aria-label="立即报名"></button>
      </div>${share}${resumeGate}`;
    }

    if (pageId === "search" || pageId === "search-miss") {
      const mask = searchMask({
        l: 12,
        t: 94,
        w: 351,
        h: 32,
        name: "job",
        value: state.jobQuery,
        ph: pageId === "search-miss" ? "搜索您感兴趣的职位" : "请输入您要搜索的内容",
        showClear: !!state.jobQuery,
        active: true,
      });
      if (pageId !== "search") return mask;
      return mask + historyHtml();
    }

    if (pageId === "jingang") {
      /* 列表与排序完全用稿面 PNG，避免自绘字号/图标偏差 */
      return "";
    }

    if (pageId === "home") {
      /* 始终与定位页「当前位置」同一文案 */
      const label = state.locLabel || "全国";
      if (label === "全国") return "";
      return `<div class="loc-chip">${label}<i class="loc-chip-arrow" aria-hidden="true"></i></div>`;
    }

    if (pageId === "filter-salary" || pageId === "filter-result") {
      /* 78:174196 字号/选中态以稿面 PNG 为准，热区仅承接点击 */
      return FILTER_CHIPS.map(
        (c) =>
          `<button type="button" class="chip ${state.filterOn[c.k] ? "on" : ""}" data-chip="${c.k}" style="left:${c.l}px;top:${c.y}px;width:${c.w}px;height:${c.h}px" title="${c.t}" aria-label="${c.t}"></button>`
      ).join("");
    }

    if (pageId === "nearby" || pageId === "nearby-time" || pageId === "nearby-empty") {
      const modes = ["按距离", "步行", "电动车", "公交车"];
      /* 对齐 78:175951：当前定位条，文案/字号与首页 locLabel 解耦 */
      const nearLabel = state.nearLocLabel || "京东总部2号楼B座";
      const selectedLocation = `<div class="near-loc-bar">
        <div class="near-loc-left">
          <i class="near-loc-pin" aria-hidden="true"></i>
          <span class="near-loc-text">当前位置：${nearLabel}</span>
        </div>
        <button type="button" class="near-loc-edit" data-go="nearby-loc" aria-label="修改定位">
          <i class="near-loc-aim" aria-hidden="true"></i>
          <span>修改定位</span>
        </button>
      </div>`;
      const timeMode = state.nearMode > 0;
      /* 对齐图1/图2：分钟标签单行 10/15/20/30 */
      const dists = timeMode
        ? ["10分钟", "15分钟", "20分钟", "30分钟"]
        : ["500米", "1公里", "2公里", "3公里", "5公里"];
      const countSets = [
        [18, 36, 64, 91, 148],
        [18, 27, 39, 74],
        [31, 48, 72, 135],
        [26, 43, 66, 128],
      ];
      if (state.nearDist >= dists.length) state.nearDist = 0;
      const resultCount = countSets[state.nearMode][state.nearDist] || 18;
      const ratio = dists.length > 1 ? state.nearDist / (dists.length - 1) : 0;
      const mapScale = timeMode
        ? Math.max(1, 1.38 - ratio * 0.28 - (state.nearMode - 1) * 0.05)
        : 1.34 - ratio * 0.34;
      const live = state.nearMode !== 0 || state.nearDist !== 0 ? " live" : "";
      const resultSimulation =
        pageId === "nearby-empty"
          ? ""
          : `<div class="near-map-sim" aria-hidden="true">
              <img src="assets/screens/nearby-map-base.png?v=1014w" alt="" style="--near-map-scale:${mapScale.toFixed(3)}" />
            </div>
            <div class="near-result-count" aria-live="polite">共${resultCount}个职位</div>`;
      const tip =
        state.nearTip && !timeMode && pageId !== "nearby-empty"
          ? `<div class="near-tip" role="status">
              <i class="near-tip-ico" aria-hidden="true"></i>
              <span>当前计算距离为直线距离，仅供参考哦～</span>
              <button type="button" class="near-tip-x" data-act="near-tip-close" aria-label="关闭"></button>
            </div>`
          : "";
      return `${selectedLocation}${resultSimulation}<div class="near-panel${live}${timeMode ? " times" : ""}">
        <div class="near-row modes">${modes
          .map(
            (t, i) =>
              `<button type="button" class="near-mode ${i === state.nearMode ? "on" : ""}" data-nmode="${i}" aria-label="${t}">${t}</button>`
          )
          .join("")}</div>
        <div class="near-row ${timeMode ? "times" : "dists"}">${dists
          .map(
            (t, i) =>
              `<button type="button" class="near-dist ${i === state.nearDist ? "on" : ""}" data-ndist="${i}" aria-label="${t}">${t}</button>`
          )
          .join("")}</div>
      </div>${tip}`;
    }

    if (pageId === "nearby-loc") {
      const q = state.nearLocQuery.trim();
      const rows = NEAR_ADDR.map((item, index) => ({ ...item, index })).filter(
        (item) => !q || item.title.includes(q) || item.sub.includes(q)
      );
      const mask = searchMask({
        l: 12,
        t: 94,
        w: 351,
        h: 32,
        name: "nearloc",
        value: state.nearLocQuery,
        ph: "请输入您要搜索的省/市/县/区",
        showClear: !!state.nearLocQuery,
        active: true,
      });
      const list = rows.length
        ? rows
            .map(
              (item) => `<button type="button" class="near-addr-item ${item.index === state.nearAddrSel ? "on" : ""}" data-naddr="${item.index}">
                <span class="t">${item.title}</span>
                <span class="s">${item.sub}</span>
                <span class="d">${item.dist}</span>
              </button>`
            )
            .join("")
        : `<div class="near-addr-empty"><span>未找到相关位置</span></div>`;
      return `${mask}<div class="near-addr-list${rows.length ? "" : " is-empty"}">${list}</div>`;
    }

    if (pageId === "resume") {
      const r = state.resume;
      let html = `
        <input class="field-input" data-rf="id" placeholder="请输入" value="${r.id}" style="left:180px;top:145px;width:176px;height:22px" />
        <input class="field-input" data-rf="name" placeholder="请输入" value="${r.name}" style="left:180px;top:255px;width:176px;height:22px" />
        <input class="field-input field-auto" data-rf="gender" placeholder="根据身份证自动录入" value="${r.gender}" style="left:160px;top:308px;width:196px;height:22px" />
        <input class="field-input field-auto" data-rf="birthday" placeholder="根据身份证自动录入" value="${r.birthday}" style="left:160px;top:361px;width:196px;height:22px" />
        <input class="field-input" data-rf="phone" placeholder="请输入" value="${r.phone}" style="left:180px;top:415px;width:176px;height:22px" />
        <input class="field-input" data-rf="emPhone" placeholder="请输入" value="${r.emPhone}" style="left:180px;top:468px;width:176px;height:22px" />
      `;
      if (state.resumeScan) {
        html += `<div class="action-sheet" role="dialog" aria-label="选项弹层">
          <button type="button" class="action-sheet-mask" data-act="resume-scan-close" aria-label="关闭"></button>
          <div class="action-sheet-panel">
            <button type="button" class="action-sheet-item" data-act="resume-cam">拍照</button>
            <button type="button" class="action-sheet-item" data-act="resume-scan-close">选择相册</button>
            <button type="button" class="action-sheet-item" data-act="resume-scan-close">取消</button>
          </div>
        </div>`;
      }
      if (state.resumeCam) {
        html += shotLayer(
          "id-camera.png",
          shotHit(8, 720, 88, 80, "resume-cam-close", "关闭") +
            shotHit(145, 635, 90, 75, "resume-cam-close", "快门")
        );
      }
      return html;
    }

    if (pageId === "detail-group-apply") {
      return (
        (state.groupCar
          ? `<div class="pick-value" style="left:286px;top:458px;width:70px">厢式货车</div>`
          : "") +
        (state.groupYears
          ? `<div class="pick-value" style="left:286px;top:508px;width:70px">3-5年</div>`
          : "")
      );
    }

    if (pageId === "broker") {
      /* 排序条与首页同一套 homeSortBarHtml，禁止另写样式 */
      let html = homeSortBarHtml("is-broker");
      html += authLayerHtml();
      if (state.brokerReg) {
        html += shotLayer(
          "broker-reg.png",
          shotHit(0, 44, 56, 44, "broker-reg-close", "返回") +
            shotHit(12, 176, 172, 170, "id-front", "上传身份证人像面") +
            shotHit(191, 176, 172, 170, "id-back", "上传身份证国徽面")
        );
      }
      if (state.idSheet === "front" || state.idSheet === "back") {
        html += shotLayer(
          state.idSheet === "front" ? "id-front.png" : "id-back.png",
          shotHit(0, 0, 375, 812, "id-sheet-close", "关闭") +
            shotHit(13, 622, 349, 52, "id-sheet-close", "拍照上传") +
            shotHit(13, 674, 349, 52, "id-sheet-close", "相册上传") +
            shotHit(13, 734, 349, 52, "id-sheet-close", "取消")
        );
      }
      return html;
    }
    return "";
  }

  function renderNav() {
    const nav = document.getElementById("page-nav");
    nav.innerHTML = NAV.map(
      (p) =>
        `<button type="button" class="${p.id === state.page ? "active" : ""}" data-go="${p.id}">${p.name}</button>`
    ).join("");
    nav.querySelectorAll("button").forEach((btn) => {
      btn.addEventListener("click", () => go(btn.dataset.go, true));
    });
  }

  function bind(root) {
    root.querySelectorAll(".hotspot").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        if (el.dataset.act === "job-chip" && el.dataset.q) {
          state.jobQuery = el.dataset.q;
          submitJobSearch();
          return;
        }
        if (el.dataset.q) {
          state.jobQuery = el.dataset.q;
          const map = { 外卖骑手: "骑手", 仓库分拣: "仓储拣运", 兼职: "其他" };
          state.jingangCat = map[el.dataset.q] || (JOB_MAP[el.dataset.q] ? el.dataset.q : state.jingangCat);
        }
        if (el.dataset.cat) {
          state.jingangCat = el.dataset.cat;
          state.jingangCustom = true;
          state.jobKey = CAT_TO_JOB_KEY[el.dataset.cat] || "";
        }
        if (el.dataset.job) {
          state.jobKey = el.dataset.job;
          state.detailJob = null;
        }
        else if (
          el.dataset.go === "job-detail" ||
          el.dataset.go === "job-detail-2" ||
          el.dataset.go === "detail-logistics"
        ) {
          state.jobKey = resolveJobKey(state.jingangCat);
        }
        if (el.dataset.act) act(el.dataset.act);
        else if (el.dataset.go) go(el.dataset.go);
      });
    });

    const loc = root.querySelector('[data-input="loc"]');
    if (loc) {
      loc.addEventListener("focus", () => {
        state.locSearching = true;
        state.focus = "loc";
        if (state.page === "location") applyLocVisual();
      });
      loc.addEventListener("input", () => {
        state.locQuery = loc.value;
        state.locSearching = true;
        state.addrSel = -1;
        state.focus = "loc";
        applyLocVisual();
      });
    }

    const job = root.querySelector('[data-input="job"]');
    if (job) {
      job.addEventListener("focus", () => {
        state.focus = "job";
      });
      job.addEventListener("input", () => {
        state.jobQuery = job.value;
        state.focus = "job";
        const mask = job.closest(".fig-mask");
        if (mask) mask.classList.toggle("has-value", !!job.value.trim());
        if (state.page === "search-miss" && !state.jobQuery.trim()) apply("search");
        else if (state.page === "search" || state.page === "search-miss") render();
      });
      job.addEventListener("keydown", (e) => {
        if (e.key === "Enter") submitJobSearch();
      });
    }

    root.querySelectorAll(".fig-mask").forEach((mask) => {
      mask.addEventListener("click", (e) => {
        if (e.target.closest("[data-clear]")) return;
        const input = mask.querySelector(".fig-input");
        if (!input) return;
        input.focus();
        state.focus = input.dataset.input || state.focus;
      });
    });

    root.querySelectorAll("[data-clear]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (btn.dataset.clear === "loc") {
          state.locQuery = "";
          state.locSearching = true;
          state.addrSel = -1;
          state.focus = "loc";
          applyLocVisual();
        } else if (btn.dataset.clear === "nearloc") {
          state.nearLocQuery = "";
          state.nearAddrSel = -1;
          state.focus = "nearloc";
          render();
        } else {
          state.jobQuery = "";
          state.focus = "job";
          if (state.page === "search-miss") apply("search");
          else render();
        }
      });
    });

    root.querySelectorAll("[data-p]").forEach((el) => {
      el.addEventListener("click", () => {
        const p = +el.dataset.p;
        state.city = { p, c: 0, d: 0 };
        const node = CITY_DATA[p];
        /* 全国或无下级：点选即更新并返回 */
        if (!node || !node.cities || !node.cities.length) {
          confirmLocAndBack();
          return;
        }
        render();
      });
    });
    root.querySelectorAll("[data-c]").forEach((el) => {
      el.addEventListener("click", () => {
        const c = +el.dataset.c;
        state.city.c = c;
        state.city.d = 0;
        const city = (CITY_DATA[state.city.p].cities || [])[c];
        /* 全xx省等无区县：点选即更新并返回 */
        if (!city || !city.dists || !city.dists.length) {
          confirmLocAndBack();
          return;
        }
        render();
      });
    });
    root.querySelectorAll("[data-d]").forEach((el) => {
      el.addEventListener("click", () => {
        state.city.d = +el.dataset.d;
        confirmLocAndBack();
      });
    });
    root.querySelectorAll("[data-addr]").forEach((el) => {
      el.addEventListener("click", () => {
        state.addrSel = +el.dataset.addr;
        act("addr-ok");
      });
    });
    root.querySelectorAll("[data-chip]").forEach((el) => {
      el.addEventListener("click", () => {
        const k = el.dataset.chip;
        if (state.filterOn[k]) delete state.filterOn[k];
        else state.filterOn[k] = true;
        render();
      });
    });
    root.querySelectorAll("[data-full-chip]").forEach((el) => {
      el.addEventListener("click", () => {
        const key = el.dataset.fullChip;
        const group = el.dataset.fullGroup;
        const index = Number(key.slice(group.length));
        if (index === 0) {
          Object.keys(state.fullFilterOn).forEach((k) => {
            if (k.startsWith(group)) delete state.fullFilterOn[k];
          });
          state.fullFilterOn[key] = true;
        } else {
          delete state.fullFilterOn[`${group}0`];
          if (state.fullFilterOn[key]) delete state.fullFilterOn[key];
          else state.fullFilterOn[key] = true;
        }
        render();
      });
    });
    root.querySelectorAll("[data-filter-side]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const side = el.dataset.filterSide;
        const anchor = el.dataset.filterAnchor || side;
        if (side) state.filterSideId = side;
        root.querySelectorAll(".full-filter-tab").forEach((tab) => {
          tab.classList.toggle("on", tab.dataset.filterSide === state.filterSideId);
        });
        const scroller = root.querySelector(".filter-scroll");
        if (!scroller) return;
        state.filterSideLock = true;
        scrollFilterToAnchor(scroller, anchor);
        clearTimeout(state._filterSideTimer);
        /* 岗位分类无面板：保持选中更久，避免滚动回弹抢走高亮 */
        const hold = side === "hiddenPosition" ? 800 : 480;
        state._filterSideTimer = setTimeout(() => {
          state.filterSideLock = false;
          if (side !== "hiddenPosition") syncFilterSideByScroll(scroller);
        }, hold);
      });
    });
    root.querySelectorAll("[data-nmode]").forEach((el) => {
      el.addEventListener("click", () => {
        const mode = +el.dataset.nmode;
        if (mode === state.nearMode) return;
        state.nearMode = mode;
        state.nearDist = 0;
        state.nearEmpty = false;
        if (mode === 0) armNearTip();
        else dismissNearTip();
        applyNearVisual();
      });
    });
    root.querySelectorAll("[data-ndist]").forEach((el) => {
      el.addEventListener("click", () => {
        state.nearDist = +el.dataset.ndist;
        state.nearEmpty = false;
        applyNearVisual();
      });
    });
    root.querySelectorAll("[data-naddr]").forEach((el) => {
      el.addEventListener("click", () => {
        state.nearAddrSel = +el.dataset.naddr;
        render();
      });
    });
    const nearloc = root.querySelector('[data-input="nearloc"]');
    if (nearloc) {
      nearloc.addEventListener("input", () => {
        state.nearLocQuery = nearloc.value;
        state.focus = "nearloc";
        render();
      });
    }
    root.querySelectorAll("[data-rf]").forEach((el) => {
      el.addEventListener("input", () => {
        state.resume[el.dataset.rf] = el.value;
      });
    });
    root.querySelectorAll(".job-card[data-go], [data-go]:not(.hotspot)").forEach((el) => {
      if (el.classList.contains("hotspot")) return;
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        if (el.dataset.job) state.jobKey = el.dataset.job;
        if (el.dataset.jobInfo) {
          try {
            state.detailJob = JSON.parse(decodeURIComponent(el.dataset.jobInfo));
          } catch (_err) {
            state.detailJob = null;
          }
        }
        if (el.dataset.go) go(el.dataset.go);
      });
    });
    root.querySelectorAll("[data-act]:not(.hotspot)").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        if (el.dataset.q) state.jobQuery = el.dataset.q;
        act(el.dataset.act);
      });
    });
  }

  function hitHtml(h) {
    const key = h.act ? `data-act="${h.act}"` : `data-go="${h.go}"`;
    return `<button type="button" class="hotspot" style="left:${h.l}px;top:${h.t}px;width:${h.w}px;height:${h.h}px" ${key} ${h.q ? `data-q="${h.q}"` : ""} ${h.cat ? `data-cat="${h.cat}"` : ""} ${h.job ? `data-job="${h.job}"` : ""} title="${h.title}"></button>`;
  }

  function homeSortBarHtml(extraClass) {
    const near = state.homeSort === "nearby";
    const filterN = fullFilterCount();
    const filterLabel = filterN ? `筛选·${filterN}` : "筛选";
    const filterOn = filterN ? " on" : "";
    /* 文案对齐 78:177679 / 83:23230：距离最近（金刚位列表另用「距离优先」） */
    return `<div class="home-sort-bar${extraClass ? ` ${extraClass}` : ""}">
      <button type="button" class="home-pin-tab${near ? "" : " on"}" data-act="sort-latest">最新发布</button>
      <button type="button" class="home-pin-tab${near ? " on" : ""}" data-act="sort-nearby">距离最近</button>
      <span class="home-pin-grow"></span>
      <button type="button" class="home-pin-side near" data-go="nearby">附近机会</button>
      <button type="button" class="home-pin-side filter${filterOn}" data-go="filter-salary" aria-label="${filterLabel}">${filterLabel}</button>
    </div>`;
  }

  function renderHome() {
    const isNear = state.homeSort === "nearby";
    const prefix = isNear ? "home-nearby" : "home-latest";
    const pinPrefix = isNear ? "home-scroll-near" : "home-scroll-latest";
    const spots = HOTSPOTS.home || [];
    /* 排序改由自绘条承接，避免与 PNG 热区叠点 */
    const topHits = spots
      .filter((h) => h.zone === "top" && !/sort-|nearby|filter-salary/.test(`${h.act || ""}${h.go || ""}`))
      .map(hitHtml)
      .join("");
    const pinHits = spots.filter((h) => h.zone === "pin").map(hitHtml).join("");
    const tabHits = spots.filter((h) => h.zone === "tab").map(hitHtml).join("");
    const overlay = overlays("home");
    const scrolled = state.homeScrolled ? " is-scrolled" : "";
    const auth = authLayerHtml();
    /* 列表改数据卡片：完整卡片 + 固定 8px 间距，避免 PNG 切割感 */
    const cards = jobCardsHtml(homeJobs(), 0, "home-cards");
    return `<div class="home-shell${scrolled}">
      <div class="home-pin" id="home-pin">
        <img src="assets/screens/${pinPrefix}-top.png?v=1015j" width="375" height="192" alt="首页上滑顶栏" />
        ${pinHits}
        ${homeSortBarHtml("is-pin")}
      </div>
      <div class="home-list" id="home-list">
        <div class="home-chrome">
          <img src="assets/screens/${prefix}-top.png?v=1015j" width="375" height="348" alt="首页顶部" />
          ${topHits}
          ${homeSortBarHtml("is-chrome")}
          ${overlay ? `<div class="home-chrome-overlay">${overlay}</div>` : ""}
        </div>
        <div class="home-list-inner">${cards}</div>
      </div>
      <div class="home-tab">
        <img src="assets/screens/${prefix}-tab.png?v=1015j" width="375" height="84" alt="底部导航" />
        ${tabHits}
      </div>
      ${auth}
    </div>`;
  }

  /** 顶栏 348 与吸顶 192 对齐，列表顶边贴住吸顶底边 */
  const HOME_PIN_ON = 156;
  const HOME_PIN_OFF = 140;

  function bindHomeScroll() {
    const list = document.getElementById("home-list");
    const shell = list && list.closest(".home-shell");
    if (!list || !shell) return;
    const syncPin = () => {
      const y = list.scrollTop;
      const next = state.homeScrolled ? y > HOME_PIN_OFF : y >= HOME_PIN_ON;
      if (next !== state.homeScrolled) {
        state.homeScrolled = next;
        shell.classList.toggle("is-scrolled", next);
      }
    };
    list.addEventListener("scroll", syncPin, { passive: true });
    syncPin();
  }

  function bindFilterScroll(root) {
    const scroller = root.querySelector(".filter-scroll") || root.querySelector(".screen-scroll.pad-filter");
    if (!scroller) return;

    scroller.addEventListener(
      "scroll",
      () => {
        syncFilterSideByScroll(scroller);
      },
      { passive: true }
    );
    syncFilterSideByScroll(scroller);

    /* 原生滚动为主；鼠标拖拽加阈值，避免抢走 chip 点击 */
    let dragging = false;
    let primed = false;
    let startY = 0;
    let startTop = 0;
    const interactive = "button, a, input, [data-full-chip], [data-chip], [data-filter-target], .hotspot, .filter-sticky, .filter-side";

    scroller.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      if (event.target.closest(interactive)) return;
      primed = true;
      dragging = false;
      startY = event.clientY;
      startTop = scroller.scrollTop;
    });
    scroller.addEventListener("pointermove", (event) => {
      if (!primed) return;
      const dy = event.clientY - startY;
      if (!dragging && Math.abs(dy) < 6) return;
      if (!dragging) {
        dragging = true;
        state.filterSideLock = false;
        scroller.classList.add("dragging");
        try {
          scroller.setPointerCapture(event.pointerId);
        } catch (e) {}
      }
      scroller.scrollTop = startTop - dy;
      event.preventDefault();
    });
    const stop = (event) => {
      if (!primed && !dragging) return;
      primed = false;
      if (dragging) {
        dragging = false;
        scroller.classList.remove("dragging");
        try {
          if (scroller.hasPointerCapture(event.pointerId)) scroller.releasePointerCapture(event.pointerId);
        } catch (e) {}
        syncFilterSideByScroll(scroller);
      }
    };
    scroller.addEventListener("pointerup", stop);
    scroller.addEventListener("pointercancel", stop);
  }

  function renderJingang() {
    const near = state.homeSort === "nearby";
    const spots = HOTSPOTS.jingang || [];
    const topHits = spots.filter((h) => h.zone === "top").map(hitHtml).join("");
    const top = near ? "jingang-top-near.png" : "jingang-top-latest.png";
    const label = state.locLabel || "全国";
    const locChip =
      label && label !== "全国"
        ? `<div class="jg-loc-chip">${label === DETECTED_DISTRICT ? "北京" : label}<i class="loc-chip-arrow" aria-hidden="true"></i></div>`
        : "";
    const auth = authLayerHtml();
    const filterN = fullFilterCount();
    const filterLabel = filterN ? `筛选·${filterN}` : "筛选";
    const filterOn = filterN ? " on" : "";
    /* 对齐 Figma 78:176989：胶囊 Tab + 距离优先 + 仅筛选 */
    const sortBar = `<div class="jg-sort-bar">
      <button type="button" class="jg-sort-tab${near ? "" : " on"}" data-act="sort-latest">最新发布</button>
      <button type="button" class="jg-sort-tab${near ? " on" : ""}" data-act="sort-nearby">距离优先</button>
      <span class="jg-sort-grow"></span>
      <button type="button" class="jg-sort-side filter${filterOn}" data-go="filter-salary" aria-label="${filterLabel}">${filterLabel}</button>
    </div>`;
    const cards = jobCardsHtml(jobsForCat(state.jingangCat), 0, "jg-cards");
    return `<div class="list-shell">
      <div class="list-top">
        <img src="assets/screens/${top}?v=1015v" width="375" height="188" alt="职位列表顶栏" />
        <h1 class="jg-page-title">职位列表</h1>
        <button type="button" class="jg-back" data-go="back" aria-label="返回"></button>
        ${topHits}${locChip}${sortBar}
      </div>
      <div class="list-scroll" id="jingang-list">${cards}</div>
      ${auth}
    </div>`;
  }

  function render() {
    const page = PAGES[state.index];
    const root = document.getElementById("app-root");
    if (page.id === "home") {
      const prevList = document.getElementById("home-list");
      const keepList = prevList ? prevList.scrollTop : 0;
      root.innerHTML = renderHome();
      bind(root);
      bindHomeScroll();
      renderNav();
      const list = document.getElementById("home-list");
      if (list && keepList) list.scrollTop = keepList;
      return;
    }
    if (page.id === "jingang") {
      const prevList = document.getElementById("jingang-list");
      const keepList = prevList ? prevList.scrollTop : 0;
      root.innerHTML = renderJingang();
      bind(root);
      renderNav();
      const list = document.getElementById("jingang-list");
      if (list && keepList) list.scrollTop = keepList;
      return;
    }
    if (page.id === "filter-salary" || page.id === "filter-full") {
      const { html, keepTop } = renderFilterPage();
      root.innerHTML = html;
      bind(root);
      bindFilterScroll(root);
      renderNav();
      const sc = root.querySelector(".filter-scroll");
      if (sc && keepTop) sc.scrollTop = keepTop;
      syncFilterSideByScroll(sc);
      return;
    }
    const sticky = page.sticky || 0;
    const dynamicDetail =
      (page.id === "job-detail" || page.id === "detail-group") && !!JOB_DETAIL[state.jobKey];
    const contentH = dynamicDetail ? 1100 : page.contentEnd || (sticky ? page.h - sticky : page.h);
    const hasSticky = !!sticky;
    const prevScroll = document.querySelector("#app-root .screen-scroll");
    const keepTop =
      prevScroll &&
      (page.id === "job-detail" ||
        page.id === "job-detail-2" ||
        page.id === "detail-logistics" ||
        page.id === "detail-group" ||
        page.id === "detail-dada")
        ? prevScroll.scrollTop
        : 0;
    const spots = HOTSPOTS[page.id] || [];
    const hits = spots.map(hitHtml).join("");
    let img = page.img;
    if (page.id === "filter-scroll" || page.id === "filter-scroll-near") {
      img = state.homeSort === "nearby" ? "filter-scroll-near.png" : "filter-scroll.png";
    }
    const overlay = overlays(page.id);
    const filterBar =
      page.id === "filter-result"
        ? `<div class="filter-sticky${page.id === "filter-full" ? " full" : ""}">
            <button type="button" class="filter-reset" data-act="filter-reset" title="重置" aria-label="重置">${
              page.id === "filter-full" ? "重置" : ""
            }</button>
            <button type="button" class="filter-ok" data-act="filter-ok" title="确定" aria-label="确定">${
              page.id === "filter-full" ? `确定（已选${fullFilterCount()}）` : ""
            }</button>
          </div>`
        : page.id === "nearby-loc"
          ? `<div class="filter-sticky nearloc">
            <button type="button" class="filter-reset" data-act="near-loc-reset" title="重置" aria-label="重置"></button>
            <button type="button" class="filter-ok" data-act="near-loc-ok" title="确定" aria-label="确定"></button>
          </div>`
          : "";
    const isDetail =
      page.id === "job-detail" ||
      page.id === "job-detail-2" ||
      page.id === "detail-logistics" ||
      page.id === "detail-group" ||
      page.id === "detail-dada";
    const isFilterBar = !!filterBar;
    const stickyOutside = hasSticky && (isDetail || isFilterBar);
    const inCanvas = isDetail ? detailFieldsHtml(page.id) : overlay;
    const outside = isDetail ? overlay : filterBar;
    const art = img
      ? `<img class="screen-art" src="assets/screens/${img}?v=${
          img === "nearby.png" || img === "nearby-time.png"
            ? "1013j"
            : img === "search-empty.png" || img === "search-miss.png"
              ? "1015e"
              : img === "nearby-map-base.png"
                ? "1014w"
                : img === "onboard.png"
                  ? "1015o"
                  : img === "mine.png"
                    ? "1016l"
                    : img === "detail-dada-apply.png" || img === "detail-group.png"
                      ? "1015y"
                      : img === "resume-need.png"
                        ? "1016j"
                      : img === "detail-logistics.png"
                        ? "1016i"
                        : "1015z"
        }" width="375" height="${contentH}" alt="${page.name}" decoding="sync" style="height:${contentH}px;object-fit:cover;object-position:top" />`
      : "";
    const canvas = `<div class="screen-canvas${hasSticky ? " clip-sticky" : ""}" style="height:${contentH}px">
      ${art}
      ${hits}
      ${inCanvas}
    </div>`;
    if (page.scroll) {
      const pad =
        stickyOutside && isDetail ? " pad-detail" : stickyOutside && isFilterBar ? " pad-filter" : "";
      root.innerHTML = `<div class="screen-scroll${pad}">${canvas}</div>${stickyOutside ? outside : ""}`;
    } else if (stickyOutside) {
      root.innerHTML = `${canvas}${outside}`;
    } else {
      root.innerHTML = canvas;
    }
    bind(root);
    bindFilterScroll(root);
    renderNav();
    if (hasSticky && keepTop) {
      const sc = root.querySelector(".screen-scroll");
      if (sc) sc.scrollTop = keepTop;
    }
    if (state.focus) {
      const el = root.querySelector(`[data-input="${state.focus}"]`);
      if (el) {
        el.focus();
        const v = el.value || "";
        try {
          el.setSelectionRange(v.length, v.length);
        } catch (e) {}
      }
    }
  }

  render();
})();

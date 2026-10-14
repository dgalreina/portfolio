import type { Dictionary } from "./es";

export const zh: Dictionary = {
  meta: {
    title: "Diego Galisteo Reina · 高级全栈开发者",
    description:
      "Diego Galisteo Reina，高级全栈开发者。项目、简历与联系方式。",
  },
  nav: { projects: "项目", cv: "简历", contact: "联系", language: "语言" },
  hero: {
    role: "高级全栈开发者",
    tagline: "我用 React、Angular、Node (NestJS) 或 Python 端到端构建 Web 应用，代码晶莹剔透。",
    seeProjects: "查看项目",
    contactMe: "联系我",
  },
  projects: {
    title: "项目",
    subtitle: "三个应用，各有独立的后端。查看它们的实际运行效果，点击了解详情。",
    demo: "演示",
    repo: "GitHub",
    inProgress: "开发中",
    back: "项目",
    technologies: "技术栈",
    demoAccount: {"title": "使用以下账号体验演示", "email": "邮箱", "password": "密码"},
    items: {
      "zitytraining": {"name": "Zitytraining", "description": "这是为真实客户开发的项目，同时也是前端开发的绝佳范例。日历、客户管理、账务、支付……欢迎进来看看。", "details": ["Zitytraining 是为一家真实健身房打造的完整管理平台，从零开发，目前已在日常运营中服务真实的客户、教练和支付。", "过程中涉及的产品难题：多名客户共享的课程该用什么数据模型、套餐在月中暂停或结束时如何公平计费，以及如何让共享日历在手机上单手也能顺畅使用。"], "gallery": [], "tagline": "", "sections": [{"title": "功能", "items": ["排课 — 支持拖放的日历，每位教练有专属颜色，提供日视图和周视图以及移动端手势（左右滑动切换日期；拖动课程到屏幕边缘即可在拖动过程中跳到下一天）。循环课程在夏令时切换时依然准确，节假日自动显示。", "客户与教练管理 — 个人资料、数字化的健康问卷、带体成分图表的进度跟踪，以及每位客户的课程记录（已上课 / 已取消 / 节假日）。", "训练工具 — 分类的动作库和训练计划编辑器（组数、次数、重量、超级组、rest-pause），可直接分配给日历中的某节课。", "员工考勤 — 教练上下班打卡，管理员可查看整个团队的每周视图。", "套餐与支付 — 管理员可配置的套餐目录（私教/双人/三人、频次、价格），并通过 Stripe Checkout 购买订阅或课时包，由 webhook 驱动套餐激活。", "账务 — 覆盖所有客户的月度表格：已开票、已收款，按天细分，并能处理月中暂停、变更或结束的套餐。", "完全响应式 — 真正用心适配移动端：安全区域、iOS 滚动特性以及接近原生的交互体验。", "自动化测试 — 后端使用 Jest 测试，前端使用 Playwright 进行端到端测试。"]}]},
      "china-history": {"name": "China History", "description": "三个大语言模型相互对话，在任何地点、任何时间重现中国历史，并基于真实史料生成叙述和写实插图。", "details": ["三个大语言模型相互对话，尽可能忠实地在任何地点、任何时间重现中国历史：在地图上随意点击，选择年份，即可实时获得叙述和写实风格的插图，内容以真实史料为依据，而不是模型泛泛的幻觉。"], "gallery": ["首页与卫星地图，以及按朝代划分的时间轴。", "历史节点的文字视图：南阳，公元 25 年，包含生成的叙述和插图。", "AI 流程架构：LangGraph 编排、RAG、Claude、OpenAI 与图片审查。"], "tagline": "能够自我改进的中国历史生成器", "sections": [{"title": "三个大语言模型", "items": ["历史学家 — 借助 RAG 流程、图像数据库和自身知识，撰写某地某时的历史，并为插画师编写提示词。", "插画师 — 负责生成图像的大语言模型，把场景画出来。", "监督者 — 审查结果并纠正前两者的错误，让下一轮迭代更接近历史真实。"]}, {"title": "技术亮点", "items": ["基于 LangGraph 的智能体流程 — 用状态图（NestJS + LangChain）编排地理解析、地标识别、针对背景/建筑/服饰的 RAG、提示词构建和图像生成，并为每个阶段做缓存。", "混合式 RAG，而不只是语义检索 — 我把一本关于中国服饰考古的学术著作索引到 MongoDB Atlas Vector Search 中，但纯向量检索总会返回错误的年代。解决办法是结合结构化过滤（年份、章节、坐标），精确度优先于相似度。", "600 多件真实考古文物 — 提取并自动分类了数百张照片和线图，每一项都标注了年代、章节和出土地点。", "多参考图的图像生成 — 系统按类别和地理远近最多挑选 16 张真实参考照片，输入图像编辑模型，并附明确的指令来避免常见错误：把毫不相干的物品混在一起、错配奢侈品、给所有人复制同一件衣服。", "真实的地理定位 — 集成 CHGIS（哈佛–复旦），按所查询年份所属朝代来解析地名和疆界，而不是用今天的地理。"]}]},
      "historical-documents-reader": {"name": "Historical Documents Reader", "description": "用于阅读和浏览历史文献的应用，目前正在开发中。", "details": ["TODO：项目的详细介绍。"], "gallery": [], "tagline": "", "sections": []},
    },
  },
  cv: {
    title: "简历",
    subtitle: "工作经历、教育背景与技术栈。",
    download: "下载简历（PDF）",
    summary: "拥有 14 年以上经验的高级软件工程师，擅长端到端构建稳健、可扩展的 Web 应用，注重细节。专注于基于大语言模型（LLM）的 AI 解决方案。具备扎实的全栈开发、系统设计与性能优化功底。习惯将项目推进到生产环境并长期稳定维护，指导初级开发者，注重团队协作。",
    experience: "工作经历",
    education: "教育背景",
    skills: "技术栈",
    languages: "语言能力",
    skillLabels: {"frontend": "前端", "backend": "后端", "databases": "数据库", "ai": "AI / 大模型", "testing": "测试", "other": "其他"},
    experienceItems: [
      {"title": "全栈开发工程师", "place": "自由职业 · 马德里", "period": "2026年5月 – 至今", "description": "", "tech": []},
      {"title": "全栈开发工程师", "place": "Scriptum-AI · 马德里", "period": "2025年2月 – 2026年5月", "description": "开发面向法律领域、可投入生产的大语言模型（LLM）应用。", "blocks": [{"heading": "重点项目", "groups": [{"title": "Leonardo – 司法案件分析平台", "items": ["开发基于 AI 的系统，分析真实法庭庭审的视频和音频。", "实现自动转写、摘要和结构化报告生成的处理流程。", "借助 LLM 提取关键要点并整理案件文档。"]}, {"title": "Scriptum Contract – 法律文档比对平台", "items": ["构建智能文档比对工具，用于发现差异、不一致之处和关键变更。"]}]}, {"heading": "主要贡献", "items": ["设计并在生产环境中实现 LLM 集成。", "负责提示词工程与响应优化。", "参与可扩展的 AI 驱动应用的系统架构设计。"]}], "tech": ["React", "Node.js", "Angular", "Python", "LLMs (Claude)"]},
      {"title": "全栈开发工程师", "place": "Nexplore (Dimática) · 马德里 · 客户 Nexplore US 与 Hotchief Germany", "period": "2020年12月 – 2025年2月", "description": "高性能 3D 可视化平台，用于管理点云、3D 模型和正射影像等大规模数据集。", "blocks": [{"heading": "主要贡献", "items": ["设计并实现测量工具、体积计算和高级元素映射等核心功能。", "优化浏览器端（Three.js）大规模 3D 数据集的渲染与性能。", "与美国和德国的国际团队在完全远程的环境中协作。"]}], "tech": ["Angular", "Python", "React", "Three.js", "Node.js", "MongoDB", "WebGL"]},
      {"title": "全栈开发工程师", "place": "Mapfre (Capgemini) · 马德里", "period": "2019年10月 – 2020年12月", "description": "NSEc 车辆管理系统：从需求分析开始从零构建内部应用。主导 Angular 前端开发，集成 REST 与 SOAP 服务，并参与 Java (Spring) 后端开发，采用 Scrum 敏捷流程。", "tech": ["Angular", "Java", "Spring", "REST/SOAP", "JUnit"]},
      {"title": "DSD 中国团队协调员", "place": "DigitalSmileDesign · 马德里", "period": "2018年7月 – 2019年10月", "description": "日常协调上海设计团队的工作，经常前往上海办公室进行培训与管理，并开发工具简化设计工作，在中文环境中工作。", "tech": ["Visual Basic"]},
      {"title": "全栈开发工程师", "place": "Vintegris · 马德里 · 客户 BBVA", "period": "2015年7月 – 2018年7月", "description": "参与 BBVA 核心安全系统的演进与现代化：迁移至微服务架构，为关键安全组件开发新功能，设计并维护 SQL 与 MongoDB 数据库，使用 Vaadin 构建内部配置工具，工作环境要求高安全性与高可用性。", "tech": ["Java", "Spring", "Kubernetes", "MongoDB", "SQL", "Angular"]},
      {"title": "图形开发工程师", "place": "Continex · 马德里 · 客户 Nolve", "period": "2015年3月 – 2015年7月", "description": "开发支持 FreeType 字体的自研图形库以取代 SDL，提升渲染的灵活性与性能。", "tech": ["C/C++", "SDL", "FreeType"]},
      {"title": "Web 开发者", "place": "自由职业 · 马德里与伦敦", "period": "2013年8月 – 2015年3月", "description": "为客户和个人项目开发网站与 Web 应用，负责从开发到部署的全过程。", "tech": ["HTML", "CSS", "JavaScript"]},
      {"title": "Unity 开发者与技术美术", "place": "Topcells · 中国上海", "period": "2012年7月 – 2013年6月", "description": "开发 2D/3D 互动应用：使用 Unity3D 实现游戏系统，制作并集成实时 2D/3D 资源。", "tech": ["Unity3D", "C#"]},
      {"title": "计算机工程师与平面设计师", "place": "西班牙驻上海总领事馆 · 中国上海", "period": "2010年12月 – 2011年10月", "description": "负责 IT 基础设施、服务器、网络与网站，并为会议和活动提供技术支持，工作环境国际化。", "tech": []},
    ],
    educationItems: [
      {"title": "计算机工程学士", "place": "巴利亚多利德大学 (UVA)", "period": "", "description": "毕业论文以优异成绩通过。", "tech": []},
      {"title": "电子游戏开发硕士", "place": "马德里康普顿斯大学 (UCM)", "period": "", "description": "", "tech": []},
    ],
    languageItems: [
      {"name": "西班牙语", "level": "母语"},
      {"name": "英语", "level": "C1"},
      {"name": "中文", "level": "高级 · HSK 4 (B1)，已获 HSK 3 证书"},
    ],
  },
  contact: {
    title: "联系",
    text: "有项目或职位机会？给我发邮件，我会尽快回复。",
    email: "发送邮件",
  },
};

const menu = document.getElementById("menu");
const links = document.getElementById("links");

if (menu && links) {
  menu.addEventListener("click", () => {
    const open = !links.classList.contains("open");
    links.classList.toggle("open", open);
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

const LANGS = ["zh-Hant", "en", "zh-Hans"];
const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
const AIIOT = "AI\u00a0+\u00a0IoT";
const BRAND_LOGOS = {
  "zh-Hant": "assets/funconnect-logo-zh-hant.png",
  "zh-Hans": "assets/funconnect-logo-zh-hans.png",
  en: "assets/funconnect-logo-en.jpeg"
};
const BRAND_NAMES = {
  "zh-Hant": "智趣通物聯",
  en: "Fun Connect AIoT",
  "zh-Hans": "智趣通物联"
};
let currentLang = "zh-Hant";

const rows = {
  "nav.home": ["首頁", "Home", "首页"],
  "nav.products": ["產品與報價", "Products & Pricing", "产品与报价"],
  "nav.project": ["AIoT Project 創作技巧", "AIoT Project Guide", "AIoT Project 创作技巧"],
  "nav.contact": ["聯絡了解", "Contact", "联系了解"],
  "nav.cta": ["了解方案", "Explore plans", "了解方案"],
  "plan.cta": ["了解方案", "Explore plans", "了解方案"],
  "footer.desc": ["面向香港學校與教育機構的 AIoT STEM 學習方案。", "AIoT STEM learning solutions for Hong Kong schools and education organizations.", "面向香港学校与教育机构的 AIoT STEM 学习方案。"],

  "home.title": [`用 ${AIIOT}，把真實世界變成多學科課堂。`, `Turn the real world into multidisciplinary learning with ${AIIOT}.`, `用 ${AIIOT}，把真实世界变成多学科课堂。`],
  "home.lead": ["智趣通物聯 面向香港學校與教育機構，提供 AIoT 學習套件、實機演示與專人到校教學，讓學生用真實設備、環境數據與 AI 回饋完成多學科場景化學習。", "Fun Connect helps Hong Kong schools introduce AIoT learning kits, live demonstrations, and specialist on-campus teaching, turning real devices, environmental data, and AI feedback into cross-subject learning.", "智趣通物联 面向香港学校与教育机构，提供 AIoT 学习套件、实机演示与专人到校教学，让学生用真实设备、环境数据与 AI 反馈完成多学科场景化学习。"],
  "home.pill1": ["專人到校教學", "Specialists teach at school", "专人到校教学"],
  "home.pill2": [`${AIIOT} 場景化學習`, `${AIIOT} scenario learning`, `${AIIOT} 场景化学习`],
  "home.pill3": ["實機演示與影片位", "Live demo and video slot", "实机演示与视频位"],
  "home.primary": ["查看產品方案", "View product plans", "查看产品方案"],
  "home.secondary": ["未來方向", "Future direction", "未来方向"],
  "home.agentSmall": ["AI Agent 回饋", "AI Agent feedback", "AI Agent 反馈"],
  "home.agentText": ["偵測到前方疑似凹陷地形。請降低速度，觀察感測數據。", "Possible uneven terrain detected. Slow down and check the sensor data.", "侦测到前方疑似凹陷地形。请降低速度，观察感测数据。"],
  "home.status": ["WARNING", "WARNING", "WARNING"],
  "home.metrics1n": ["到校", "On-site", "到校"],
  "home.metrics1d": ["專人到校教授產品使用方法、課堂流程與安全操作", "Specialists teach product use, classroom flow, and safe operation at school", "专人到校教授产品使用方法、课堂流程与安全操作"],
  "home.metrics2n": ["跨科", "Cross-subject", "跨科"],
  "home.metrics2d": ["用同一組真實感測數據延伸語文、科學、英文與數學", "Use the same live sensor data across language, science, English, and math", "用同一组真实感测数据延伸语文、科学、英文与数学"],
  "home.metrics3n": ["演示", "Demo", "演示"],
  "home.metrics3d": ["展示硬件、手機控制、AI 回饋和學習成果", "Show hardware, mobile control, AI feedback, and learning output together", "展示硬件、手机控制、AI 反馈和学习成果"],
  "home.metrics4n": ["未來", "Future", "未来"],
  "home.metrics4d": ["Skill 編寫與月球車比賽作為進階方向", "Skill writing and rover challenges become future advanced modules", "Skill 编写与月球车比赛作为进阶方向"],
  "home.valueTitle": ["學校購買的是一套可落地的 AIoT 課堂方案。", "Schools buy an AIoT classroom program.", "学校购买的是一套可落地的 AIoT 课堂方案。"],
  "home.card1t": ["專人到校教學", "On-campus teaching", "专人到校教学"],
  "home.card1d": ["我們可安排專人到學校教授產品使用、課堂組織、設備操作與示範活動。", "We can send specialists to school to teach product use, classroom setup, device operation, and demo activities.", "我们可安排专人到学校教授产品使用、课堂组织、设备操作与示范活动。"],
  "home.card2t": ["多學科場景化學習", "Scenario-based multidisciplinary learning", "多学科场景化学习"],
  "home.card2d": ["AIoT 把溫度、濕度、路徑、異常等真實數據變成語文、科學、英文與數學任務。", "AIoT turns temperature, humidity, paths, and anomalies into language, science, English, and math tasks.", "AIoT 把温度、湿度、路径、异常等真实数据变成语文、科学、英文与数学任务。"],
  "home.card3t": ["購買前實機演示", "Live demo before purchase", "购买前实机演示"],
  "home.card3d": ["用操作片段展示設備、手機指令、月球車行動、AI warning 與學生反思。", "Show device setup, phone commands, rover movement, AI warnings, and student reflection.", "用操作片段展示设备、手机指令、月球车行动、AI warning 与学生反思。"],
  "home.videoTitle": ["展示", "Demonstration", "展示"],
  "home.videoSlot": ["實機演示影片位", "Live demo video slot", "实机演示视频位"],
  "home.videoStart": ["開始播放", "Play video", "开始播放"],
  "home.videoDirect": ["直接開啟影片", "Open video directly", "直接打开视频"],
  "home.learnTitle": ["現階段核心：AIoT 多學科場景化學習。", "Current focus: multidisciplinary scenario learning with AIoT.", "现阶段核心：AIoT 多学科场景化学习。"],
  "home.learnLead": ["重點不是討論 IoT 有哪些功能，而是 AIoT 讓課堂多了什麼能力。討論古詩時，設備取得高溫、高濕度等環境數據，AI 可引導學生生成與環境呼應的詩句、科學解釋、英文詞彙或數學應用題。", "The point is not to list IoT features, but to show what AIoT enables in class. In a poetry lesson, temperature and humidity readings can guide poems, science explanations, English vocabulary, or math questions.", "重点不是讨论 IoT 有哪些功能，而是 AIoT 让课堂多了什么能力。讨论古诗时，设备取得高温、高湿度等环境数据，AI 可引导学生生成与环境呼应的诗句、科学解释、英文词汇或数学应用题。"],
  "home.langScienceT": ["語文 + 科學", "Language + science", "语文 + 科学"],
  "home.langScienceD": ["用真實環境數據啟發詩句、觀察記錄與科學解釋。", "Use live environmental data to inspire poems, observation notes, and science explanations.", "用真实环境数据启发诗句、观察记录与科学解释。"],
  "home.engMathT": ["英文 + 數學", "English + math", "英文 + 数学"],
  "home.engMathD": ["把 AI 生成內容延伸成詞彙、推理題與應用題。", "Extend AI-generated content into vocabulary, reasoning, and applied math tasks.", "把 AI 生成内容延伸成词汇、推理题与应用题。"],
  "home.futureLine": ["未來可發展方向：", "Future direction:", "未来可发展方向："],
  "home.compTitle": ["香港 AIoT 智能月球車比賽", "Hong Kong AIoT lunar rover challenge", "香港 AIoT 智能月球车比赛"],
  "home.compLead": ["下一階段可加入月球車智能比賽：學生控制月球車穿越月球表面迷宮，挑戰完成時間、資源消耗與異常地形處理。", "The next stage can add a lunar rover challenge: students guide rovers through a moon-surface maze and compete on time, resource use, and abnormal-terrain handling.", "下一阶段可加入月球车智能比赛：学生控制月球车穿越月球表面迷宫，挑战完成时间、资源消耗与异常地形处理。"],
  "home.missionT": ["任務設計", "Mission design", "任务设计"],
  "home.missionD": ["學生定義路線策略、觀察條件與任務完成標準。", "Students define route strategy, observation conditions, and completion criteria.", "学生定义路线策略、观察条件与任务完成标准。"],
  "home.skillT": ["Skill 進階", "Skill extension", "Skill 进阶"],
  "home.skillD": ["未來可把自然語言、感測條件與硬件行動整理成可執行的 Agent Skill。", "In the future, students can turn language, sensor conditions, and hardware actions into executable agent skills.", "未来可把自然语言、感测条件与硬件行动整理成可执行的 Agent Skill。"],
  "home.feedbackT": ["知識回饋", "Knowledge feedback", "知识反馈"],
  "home.feedbackD": ["遇到異常數據時，Agent 回饋 warning 與相關學科知識。", "When abnormal data appears, the agent returns warnings and related subject knowledge.", "遇到异常数据时，Agent 反馈 warning 与相关学科知识。"],
  "home.pricingTitle": ["產品方案", "Product plans", "产品方案"],
  "home.asiaTitle": ["未來延伸：連接亞洲中小學。", "Future extension: connecting Asian schools.", "未来延伸：连接亚洲中小学。"],

  "product.title": [`讓 AI\u00a0通過\u00a0IoT 幫助我們學習。`, `AI helps students learn through IoT.`, `让 AI\u00a0通过\u00a0IoT 帮助我们学习。`],
  "product.lead": ["智趣通物聯 提供傳統 IoT 設備採購，也提供整合產品、課程、專人到校教學與實機演示的年度訂閱。現階段聚焦 AIoT 多學科學習，Skill 與比賽作為進階方向。", "Fun Connect offers traditional IoT hardware purchase and annual subscriptions that combine products, courses, on-campus teaching, and live demos. The current focus is multidisciplinary AIoT learning, with skills and challenges as advanced tracks.", "智趣通物联 提供传统 IoT 设备采购，也提供整合产品、课程、专人到校教学与实机演示的年度订阅。现阶段聚焦 AIoT 多学科学习，Skill 与比赛作为进阶方向。"],
  "product.modulesTitle": ["方案包含的不只是硬件。", "The program includes more than hardware.", "方案包含的不只是硬件。"],
  "product.m1t": ["AIoT 學習套件", "AIoT learning kit", "AIoT 学习套件"],
  "product.m1d": ["感測、控制、路徑與雲端資料，支援課堂觀察、作品展示與實機演示。", "Sensors, control, paths, and cloud data support classroom observation, project display, and live demos.", "感测、控制、路径与云端资料，支持课堂观察、作品展示与实机演示。"],
  "product.m2t": ["到校教學服務", "On-campus teaching", "到校教学服务"],
  "product.m2d": ["我們派專人到學校教產品使用、課堂組織，並帶學生完成第一個 AIoT 任務。", "We send specialists to school to teach product use, classroom flow, and how students complete their first AIoT task.", "我们派专人到学校教产品使用、课堂组织，并带学生完成第一个 AIoT 任务。"],
  "product.m3t": ["未來進階：Skill 與智能比賽", "Future extension: skills and challenge", "未来进阶：Skill 与智能比赛"],
  "product.m3d": ["當學校熟悉 AIoT 場景學習後，可逐步加入 Skill 編寫、Agent 任務與月球車比賽。", "After a school adopts AIoT scenario learning, skill writing, agent tasks, and rover challenges can be added gradually.", "当学校熟悉 AIoT 场景学习后，可逐步加入 Skill 编写、Agent 任务与月球车比赛。"],
  "product.pricingTitle": ["方案報價", "Plans", "方案报价"],
  "product.compareTitle": ["方案內容對比", "Plan comparison", "方案内容对比"],

  "project.eyebrow": ["教師與學生創作指南", "A guide for teachers and students", "教师与学生创作指南"],
  "project.title": ["AIoT Project 創作技巧", "AIoT Project Creation Guide", "AIoT Project 创作技巧"],
  "project.lead": ["從真實問題出發，讓感測器收集環境資料，再由 AI 分析、判斷與驅動設備行動。學生學習的不只是技術，而是如何建立一個完整、可測試、可清楚展示的解決方案。", "Start with a real problem. Sensors collect environmental data, while AI analyses the situation and guides device actions. Students learn how to build a complete, testable solution that they can explain clearly.", "从真实问题出发，让传感器收集环境数据，再由 AI 分析、判断与驱动设备行动。学生学习的不只是技术，而是如何建立一个完整、可测试、可清楚展示的解决方案。"],
  "project.primary": ["查看創作方法", "Explore the method", "查看创作方法"],
  "project.courseCta": ["查看 8 小時學習方案", "View the 8-hour learning journey", "查看 8 小时学习方案"],
  "project.definitionEyebrow": ["先理解核心", "Understand the core", "先理解核心"],
  "project.definitionTitle": ["AIoT 讓設備從「連接」走向「判斷與行動」。", "AIoT moves devices from connection to judgement and action.", "AIoT 让设备从“连接”走向“判断与行动”。"],
  "project.iotTitle": ["連接與執行", "Connect and execute", "连接与执行"],
  "project.iotDesc": ["感測器收集資料，系統按照預先設定的條件傳送訊息或控制設備。", "Sensors collect data, and the system sends messages or controls devices according to preset conditions.", "传感器收集数据，系统按照预先设定的条件发送信息或控制设备。"],
  "project.aiotTitle": ["分析、判斷與預測", "Analyse, decide, and predict", "分析、判断与预测"],
  "project.aiotDesc": ["AI 結合即時資料，辨識情況、比較可能方案，並協助設備作出更合適的反應。", "AI combines live data to recognise conditions, compare possible responses, and help devices act more appropriately.", "AI 结合实时数据，识别情况、比较可能方案，并协助设备作出更合适的反应。"],
  "project.methodEyebrow": ["4 步創作方法", "Four-step creation method", "4 步创作方法"],
  "project.methodTitle": ["先找問題，再選技術。", "Find the problem before choosing the technology.", "先找问题，再选技术。"],
  "project.methodLead": ["好的 Project 不是堆疊功能，而是用必要的 AIoT 能力解決一個清楚、值得處理的問題。", "A strong project does not stack features. It uses the AIoT capabilities that are necessary to solve a clear and worthwhile problem.", "好的 Project 不是堆叠功能，而是用必要的 AIoT 能力解决一个清楚、值得处理的问题。"],
  "project.step1Title": ["找出真實痛點", "Identify a real pain point", "找出真实痛点"],
  "project.step1Desc": ["觀察校園、家庭或社區，記錄誰遇到問題、問題何時發生，以及現有方法的限制。", "Observe school, home, or community settings. Record who faces the problem, when it occurs, and where current methods fall short.", "观察校园、家庭或社区，记录谁遇到问题、问题何时发生，以及现有方法的限制。"],
  "project.step2Title": ["證明 AIoT 的必要性", "Show why AIoT is necessary", "证明 AIoT 的必要性"],
  "project.step2Desc": ["說明為何單純定時、遙控或感測不足，需要 AI 辨識、預測或多資料判斷。", "Explain why timers, remote control, or a single sensor are insufficient, and why recognition, prediction, or multi-source judgement is needed.", "说明为何单纯定时、遥控或感测不足，需要 AI 识别、预测或多数据判断。"],
  "project.step3Title": ["快速建立原型", "Build a working prototype", "快速建立原型"],
  "project.step3Desc": ["先完成最小可運作版本，驗證感測、通信、AI 判斷與設備行動能否連接。", "Create the smallest working version first, then verify that sensing, communication, AI judgement, and device action connect correctly.", "先完成最小可运作版本，验证感测、通信、AI 判断与设备行动能否连接。"],
  "project.step4Title": ["測試、記錄與迭代", "Test, record, and improve", "测试、记录与迭代"],
  "project.step4Desc": ["測試不同場景，保留錯誤數據和改進過程，讓展示能說明設計如何逐步變好。", "Test different situations and retain error data and improvement records so the presentation shows how the design developed.", "测试不同场景，保留错误数据和改进过程，让展示能说明设计如何逐步变好。"],
  "project.reviewEyebrow": ["展示與評審重點", "Presentation and review focus", "展示与评审重点"],
  "project.reviewTitle": ["讓觀眾看懂問題、判斷與結果。", "Make the problem, decisions, and results easy to understand.", "让观众看懂问题、判断与结果。"],
  "project.review1Title": ["AI 必要性", "AI necessity", "AI 必要性"],
  "project.review1Desc": ["清楚說明 AI 解決了規則或單一感測器無法處理的部分。", "Show what AI handles that rules or a single sensor cannot.", "清楚说明 AI 解决了规则或单一传感器无法处理的部分。"],
  "project.review2Title": ["社會價值", "Social value", "社会价值"],
  "project.review2Desc": ["問題與安全、健康、環境、學習或生活品質有明確關係。", "Connect the problem clearly to safety, health, the environment, learning, or quality of life.", "问题与安全、健康、环境、学习或生活质量有明确关系。"],
  "project.review3Title": ["系統完整", "Complete system", "系统完整"],
  "project.review3Desc": ["感知、通信、分析和執行形成可運作的閉環。", "Sensing, communication, analysis, and action form a working loop.", "感知、通信、分析和执行形成可运作的闭环。"],
  "project.review4Title": ["資料與迭代", "Data and iteration", "数据与迭代"],
  "project.review4Desc": ["展示測試方法、失敗記錄和具體改進。", "Present the testing method, failure records, and specific improvements.", "展示测试方法、失败记录和具体改进。"],
  "project.review5Title": ["現場表達", "Clear presentation", "现场表达"],
  "project.review5Desc": ["用真實場景、短片或即時操作清楚呈現項目價值。", "Use a real scenario, short video, or live operation to show the project's value.", "用真实场景、短片或即时操作清楚呈现项目价值。"],
  "project.ideasEyebrow": ["選題方向", "Project directions", "选题方向"],
  "project.ideasTitle": ["從身邊可觀察的問題開始。", "Start with problems students can observe.", "从身边可观察的问题开始。"],
  "project.idea1Title": ["校園安全", "School safety", "校园安全"],
  "project.idea1Desc": ["分析聲音、環境或人流異常，在保護私隱的前提下提供提醒。", "Analyse unusual sounds, environmental conditions, or movement while preserving privacy.", "分析声音、环境或人流异常，在保护隐私的前提下提供提醒。"],
  "project.idea2Title": ["長者照護", "Elderly care", "长者照护"],
  "project.idea2Desc": ["結合動作或環境資料，探索跌倒提醒與復康動作輔助。", "Combine movement and environmental data to explore fall alerts or rehabilitation support.", "结合动作或环境数据，探索跌倒提醒与康复动作辅助。"],
  "project.idea3Title": ["智慧種植", "Smart growing", "智慧种植"],
  "project.idea3Desc": ["綜合植物影像與環境數據，判斷生長狀態並調整照明或灌溉。", "Combine plant images and environmental data to assess growth and adjust lighting or irrigation.", "综合植物图像与环境数据，判断生长状态并调整照明或灌溉。"],
  "project.idea4Title": ["學習環境", "Learning environment", "学习环境"],
  "project.idea4Desc": ["觀察光線、坐姿或專注狀態，設計能協助建立良好學習習慣的系統。", "Observe lighting, posture, or attention to design systems that support better study habits.", "观察光线、坐姿或专注状态，设计能协助建立良好学习习惯的系统。"],
  "project.storyEyebrow": ["太空任務故事", "Space mission story", "太空任务故事"],
  "project.storyTitle": ["把技術學習變成一次完整任務。", "Turn technical learning into a complete mission.", "把技术学习变成一次完整任务。"],
  "project.storyLead": ["學生從感測器誤差、通信、警報與 Agent 決策逐步解決問題，最後完成月球探險。故事讓每個技術概念都有清楚的使用原因。", "Students solve sensor error, communication, alerts, and Agent decisions step by step before completing a lunar mission. The story gives every technical concept a clear purpose.", "学生从传感器误差、通信、警报与 Agent 决策逐步解决问题，最后完成月球探险。故事让每个技术概念都有清楚的使用原因。"],

  "tag.hardware": ["硬件採購", "Hardware", "硬件采购"],
  "tag.recommended": ["推薦", "Recommended", "推荐"],
  "tag.long": ["長期導入", "Long-term", "长期导入"],
  "plan.hardware": ["傳統 IoT 設備", "Traditional IoT devices", "传统 IoT 设备"],
  "plan.hardwarePrice": ["按套件報價", "Quoted by kit", "按套件报价"],
  "plan.hardwareSub": ["一次性硬件採購為主", "One-time hardware purchase", "一次性硬件采购为主"],
  "plan.hardwareL1": ["指定硬件套件與基礎使用資料", "Selected hardware kits and basic usage materials", "指定硬件套件与基础使用资料"],
  "plan.hardwareL2": ["適合已有 STEM / ICT 課程的學校", "For schools with existing STEM / ICT courses", "适合已有 STEM / ICT 课程的学校"],
  "plan.hardwareL3": ["基礎培訓與支援選項", "Basic training and support options", "基础培训与支持选项"],
  "plan.one": ["訂閱我們的產品一年", "Subscribe for one year", "订阅我们的产品一年"],
  "plan.onePrice": ["年度方案報價", "Annual proposal", "年度方案报价"],
  "plan.oneSub": ["產品 + 到校教學 + 課程支援", "Product + school training + course support", "产品 + 到校教学 + 课程支持"],
  "plan.oneL1": ["套件使用與年度支援", "Kit usage and annual support", "套件使用与年度支持"],
  "plan.oneL2": ["專人到校教產品使用方法", "Specialists teach product use at school", "专人到校教产品使用方法"],
  "plan.oneL3": [`${AIIOT} 多學科課程示範`, `${AIIOT} multidisciplinary lesson demos`, `${AIIOT} 多学科课程示范`],
  "plan.oneL4": ["適合首次校內導入 AIoT / STEM", "Best for first AIoT / STEM rollout", "适合首次校内导入 AIoT / STEM"],
  "plan.three": ["訂閱我們的產品三年", "Subscribe for three years", "订阅我们的产品三年"],
  "plan.threePrice": ["三年方案報價", "Three-year proposal", "三年方案报价"],
  "plan.threeSub": ["長期課程、比賽與亞洲延伸", "Long-term courses, challenge, and Asia extension", "长期课程、比赛与亚洲延伸"],
  "plan.threeL1": ["逐年深化 STEM / AIoT 課程", "Progressively deepen STEM / AIoT courses", "逐年深化 STEM / AIoT 课程"],
  "plan.threeL2": ["可納入未來 Skill 與智能比賽任務", "Can add future skill and challenge tasks", "可纳入未来 Skill 与智能比赛任务"],
  "plan.threeL3": ["支援多學科課程與校內展示", "Support multidisciplinary lessons and school showcases", "支持多学科课程与校内展示"],

  "compare.item": ["比較項目", "Item", "比较项目"],
  "compare.goal": ["主要目的", "Primary goal", "主要目的"],
  "compare.hwGoal": ["硬件採購", "Hardware purchase", "硬件采购"],
  "compare.oneGoal": ["快速導入", "Fast rollout", "快速导入"],
  "compare.threeGoal": ["長期課程規劃", "Long-term curriculum", "长期课程规划"],
  "compare.training": ["到校教學", "On-campus teaching", "到校教学"],
  "compare.optional": ["按需要另議", "Optional", "按需要另议"],
  "compare.included": ["可包含", "Can include", "可包含"],
  "compare.ongoing": ["可規劃持續支援", "Ongoing support can be planned", "可规划持续支持"],
  "compare.skill": ["Skill 進階", "Skill extension", "Skill 进阶"],
  "compare.basic": ["基礎資料", "Basic materials", "基础资料"],
  "compare.intro": ["未來可加選", "Future add-on", "未来可加选"],
  "compare.curriculum": ["納入進階課程與任務", "Included in advanced courses and tasks", "纳入进阶课程与任务"],

  "contact.title": ["告訴我們學校的課堂與導入需求。", "Tell us about the school, classes, and rollout needs.", "告诉我们学校的课堂与导入需求。"],
  "contact.lead": ["您可以索取香港學校方案、預約實機演示、安排到校教學，或討論一年 / 三年訂閱與多學科 AIoT 學習導入。", "Request a Hong Kong school proposal, book a live demo, arrange on-campus teaching, or discuss subscriptions and multidisciplinary AIoT learning.", "您可以索取香港学校方案、预约实机演示、安排到校教学，或讨论一年 / 三年订阅与多学科 AIoT 学习导入。"],
  "contact.privacyShort": ["聯絡方式說明", "Contact note", "联系方式说明"],
  "contact.privacyLabel": ["作品集版本", "Portfolio copy", "作品集版本"],
  "contact.privacyTitle": ["聯絡資料已隱藏", "Contact details are hidden", "联系信息已隐藏"],
  "contact.privacy": ["為保障私隱，本作品集版本已移除電話及即時通訊聯絡方式。", "Contact phone and messaging links have been removed from this portfolio copy for privacy.", "为保护隐私，本作品集版本已移除电话及即时通讯联系方式。"],
  "contact.role.teacher": ["學校老師", "Teacher", "学校老师"],
  "contact.role.admin": ["行政 / 採購人員", "Admin / procurement", "行政 / 采购人员"],
  "contact.role.org": ["教育機構", "Education organization", "教育机构"],
  "contact.role.partner": ["課程合作夥伴", "Course partner", "课程合作伙伴"],
  "contact.role.other": ["其他", "Other", "其他"],
  "contact.int.demo": ["產品實機演示", "Live product demo", "产品实机演示"],
  "contact.int.hw": ["傳統 IoT 設備報價", "Traditional IoT quote", "传统 IoT 设备报价"],
  "contact.int.one": ["一年訂閱方案", "One-year subscription", "一年订阅方案"],
  "contact.int.three": ["三年訂閱方案", "Three-year subscription", "三年订阅方案"],
  "contact.int.skill": ["未來比賽 / Skill 進階", "Future challenge / skill extension", "未来比赛 / Skill 进阶"],
  "contact.int.multi": ["多學科學習導入", "Multidisciplinary learning rollout", "多学科学习导入"],
  "contact.flowTitle": ["跟進流程", "Follow-up flow", "跟进流程"],
  "contact.f1t": ["了解需求", "Understand needs", "了解需求"],
  "contact.f2t": ["實機演示", "Live demo", "实机演示"],
  "contact.f3t": ["方案報價", "Proposal", "方案报价"]
};

Object.assign(rows, {
  "journey.title": [
    "只需 8 小時，從 AIoT 多學科學習到完成一次月球探險。",
    "Just eight hours from multidisciplinary AIoT learning to a complete lunar mission.",
    "只需 8 小时，从 AIoT 多学科学习到完成一次月球探险。"
  ],
  "journey.lead": [
    "八個循序漸進的課堂單元，把感測、AI、通信與控制連成一個可操作的完整任務。",
    "Eight progressive classroom units connect sensing, AI, communication, and control into one working mission.",
    "八个循序渐进的课堂单元，把感测、AI、通信与控制连成一个可操作的完整任务。"
  ],
  "journey.hour1": ["第 1 小時", "Hour 1", "第 1 小时"],
  "journey.hour2": ["第 2 小時", "Hour 2", "第 2 小时"],
  "journey.hour3": ["第 3 小時", "Hour 3", "第 3 小时"],
  "journey.hour4": ["第 4 小時", "Hour 4", "第 4 小时"],
  "journey.hour5": ["第 5 小時", "Hour 5", "第 5 小时"],
  "journey.hour6": ["第 6 小時", "Hour 6", "第 6 小时"],
  "journey.hour7": ["第 7 小時", "Hour 7", "第 7 小时"],
  "journey.hour8": ["第 8 小時", "Hour 8", "第 8 小时"],
  "journey.h1.short": ["智能終端", "Smart terminal", "智能终端"],
  "journey.h2.short": ["語音控制", "Voice control", "语音控制"],
  "journey.h3.short": ["AI 感測", "AI sensing", "AI 感测"],
  "journey.h4.short": ["智能預警", "Smart alerts", "智能预警"],
  "journey.h5.short": ["MQTT 通信", "MQTT messaging", "MQTT 通信"],
  "journey.h6.short": ["即時通知", "Live messaging", "即时通知"],
  "journey.h7.short": ["Agent 決策", "Agent decisions", "Agent 决策"],
  "journey.h8.short": ["月球探險", "Lunar mission", "月球探险"],
  "journey.h1.title": ["認識智能終端與感測資料", "Discover the smart terminal and sensor data", "认识智能终端与感测数据"],
  "journey.h2.title": ["用自然語言控制設備", "Control devices with natural language", "用自然语言控制设备"],
  "journey.h3.title": ["讓 AI 校正感測器誤差", "Use AI to correct sensor error", "让 AI 校正感测器误差"],
  "journey.h4.title": ["建立環境預警與安全規則", "Build environmental alerts and safety rules", "建立环境预警与安全规则"],
  "journey.h5.title": ["連接設備、指令與警報", "Connect devices, commands, and alerts", "连接设备、指令与警报"],
  "journey.h6.title": ["把設備狀態送到手機", "Send device status to a phone", "把设备状态发送到手机"],
  "journey.h7.title": ["讓 AI Agent 感知、規劃與行動", "Let an AI Agent sense, plan, and act", "让 AI Agent 感知、规划与行动"],
  "journey.h8.title": ["整合系統，完成一次月球探險", "Integrate the system and complete a lunar mission", "整合系统，完成一次月球探险"],
  "journey.h1.desc": ["從 CyberPi 的按鍵、顯示與內建感測器開始，完成第一個程式並記錄真實環境數據。", "Start with CyberPi controls, display, and built-in sensors; write a first program and record real environmental data.", "从 CyberPi 的按键、显示与内建传感器开始，完成第一个程序并记录真实环境数据。"],
  "journey.h2.desc": ["理解語音轉文字、意圖辨識與設備反應，設計可以聽懂指令的互動系統。", "Explore speech-to-text, intent recognition, and device responses to build a system that understands commands.", "理解语音转文字、意图识别与设备反应，设计可以听懂指令的互动系统。"],
  "journey.h3.desc": ["用數據比較與簡單模型改善感測結果，把數學、科學觀察與 AI 應用連在一起。", "Improve sensor readings with data comparison and a simple model, connecting mathematics, scientific observation, and AI.", "用数据比较与简单模型改善感测结果，把数学、科学观察与 AI 应用连接起来。"],
  "journey.h4.desc": ["設定感測閾值、判斷異常狀態，再用 AI 趨勢分析協助設備作出合適反應。", "Set thresholds, identify abnormal states, and use AI trend analysis to guide appropriate device responses.", "设置感测阈值、判断异常状态，再用 AI 趋势分析协助设备作出合适反应。"],
  "journey.h5.desc": ["使用 MQTT 發布與訂閱感測數據、控制指令和警報，理解 AIoT 系統如何交換信息。", "Use MQTT to publish and subscribe to sensor data, commands, and alerts, showing how an AIoT system exchanges information.", "使用 MQTT 发布与订阅感测数据、控制指令和警报，理解 AIoT 系统如何交换信息。"],
  "journey.h6.desc": ["透過消息接口接收通知與發送控制指令，完成手機與實體設備之間的雙向互動。", "Receive notifications and send control commands through a messaging interface, creating two-way interaction with physical devices.", "通过消息接口接收通知与发送控制指令，完成手机与实体设备之间的双向互动。"],
  "journey.h7.desc": ["把環境數據轉成決策規則，讓 Agent 根據情況選擇前進、轉向、停止或發出警報。", "Turn environmental data into decision rules so the Agent can move, turn, stop, or issue an alert.", "把环境数据转成决策规则，让 Agent 根据情况选择前进、转向、停止或发出警报。"],
  "journey.h8.desc": ["整合感測、邊緣運算、MQTT、AI Agent 與手機控制，完成一個可測試、可改進的月球任務。", "Integrate sensing, edge computing, MQTT, an AI Agent, and phone control into a testable lunar mission.", "整合感测、边缘计算、MQTT、AI Agent 与手机控制，完成一个可测试、可改进的月球任务。"],
  "journey.outcome": ["完成八小時後，學生不只理解單一設備，而是能把 AI 與 IoT 組合成一個完整的場景任務。", "After eight hours, students move beyond individual devices and combine AI and IoT into a complete scenario-based mission.", "完成八小时后，学生不只理解单一设备，而是能把 AI 与 IoT 组合成一个完整的场景任务。"],
  "journey.cta": ["了解課程方案", "Explore the course", "了解课程方案"]
});

Object.assign(rows, {
  "projectSection.title": ["AIoT Project 創作技巧", "AIoT Project Creation Guide", "AIoT Project 创作技巧"],
  "projectSection.lead": [
    "從真實問題出發，讓學生把感測、AI 判斷與設備行動組合成一個可展示、可測試、可持續改進的專題。",
    "Start with a real problem, then combine sensing, AI decisions, and device actions into a project that can be demonstrated, tested, and improved.",
    "从真实问题出发，让学生把感测、AI 判断与设备行动组合成一个可展示、可测试、可持续改进的专题。"
  ],
  "projectSection.methodEyebrow": ["四步創作法", "4-step method", "四步创作法"],
  "projectSection.methodTitle": ["四步完成一個有說服力的 AIoT Project", "Four steps to a convincing AIoT project", "四步完成一个有说服力的 AIoT Project"],
  "projectSection.step1t": ["找出真實痛點", "Find a real problem", "找出真实痛点"],
  "projectSection.step1d": ["觀察校園或社區，先定義值得解決的問題。", "Observe the school or community and define a problem worth solving.", "观察校园或社区，先定义值得解决的问题。"],
  "projectSection.step2t": ["證明 AIoT 的必要性", "Prove why AIoT is needed", "证明 AIoT 的必要性"],
  "projectSection.step2d": ["說明為何需要辨識、判斷或預測，而不只是自動開關。", "Show why recognition, judgment, or prediction is needed instead of a simple automated switch.", "说明为何需要识别、判断或预测，而不只是自动开关。"],
  "projectSection.step3t": ["快速完成原型", "Build a working prototype", "快速完成原型"],
  "projectSection.step3d": ["使用低代碼工具與現成模組，先讓核心流程運作。", "Use low-code tools and ready-made modules to get the core flow working first.", "使用低代码工具与现成模块，先让核心流程运作。"],
  "projectSection.step4t": ["測試、記錄、迭代", "Test, record, and iterate", "测试、记录、迭代"],
  "projectSection.step4d": ["保留測試數據與改進過程，讓作品更完整可信。", "Keep test data and improvement records to make the project more complete and credible.", "保留测试数据与改进过程，让作品更完整可信。"],
  "projectSection.judgeTitle": ["評審通常關注五件事", "Five areas judges usually examine", "评审通常关注五件事"],
  "projectSection.j1t": ["AI 必要性", "AI necessity", "AI 必要性"],
  "projectSection.j1d": ["不用 AI 就難以完成的辨識、判斷或預測。", "Recognition, judgment, or prediction that is difficult without AI.", "不用 AI 就难以完成的识别、判断或预测。"],
  "projectSection.j2t": ["社會價值", "Social value", "社会价值"],
  "projectSection.j2d": ["回應安全、照護、環境或學習需要。", "Address safety, care, environmental, or learning needs.", "回应安全、照护、环境或学习需要。"],
  "projectSection.j3t": ["邊緣運算", "Edge computing", "边缘运算"],
  "projectSection.j3d": ["本地處理帶來速度、離線能力與私隱優勢。", "Local processing improves speed, offline use, and privacy.", "本地处理带来速度、离线能力与隐私优势。"],
  "projectSection.j4t": ["完整系統", "Complete system", "完整系统"],
  "projectSection.j4d": ["感知、網絡、平台與應用形成閉環。", "Sensing, network, platform, and application form a complete loop.", "感知、网络、平台与应用形成闭环。"],
  "projectSection.j5t": ["清楚展示", "Clear presentation", "清楚展示"],
  "projectSection.j5d": ["用真實情境、操作演示與測試結果說明作品。", "Explain the work through a real scenario, live operation, and test results.", "用真实情境、操作演示与测试结果说明作品。"],
  "projectSection.ideasEyebrow": ["創作方向", "Project directions", "创作方向"],
  "projectSection.ideasTitle": ["四個適合延伸的創作方向", "Four directions students can develop", "四个适合延伸的创作方向"],
  "projectSection.idea1t": ["校園安全", "School safety", "校园安全"],
  "projectSection.idea1d": ["用聲音、影像或環境數據辨識需要關注的狀況。", "Use sound, images, or environmental data to identify situations that need attention.", "用声音、影像或环境数据识别需要关注的状况。"],
  "projectSection.idea2t": ["長者照護", "Elderly care", "长者照护"],
  "projectSection.idea2d": ["偵測跌倒、活動異常或復康動作，提供及時提醒。", "Detect falls, unusual activity, or rehabilitation movements and provide timely alerts.", "侦测跌倒、活动异常或复康动作，提供及时提醒。"],
  "projectSection.idea3t": ["智慧種植", "Smart growing", "智慧种植"],
  "projectSection.idea3d": ["結合植物影像與環境數據，判斷健康與照護需要。", "Combine plant images and environmental data to assess health and care needs.", "结合植物影像与环境数据，判断健康与照护需要。"],
  "projectSection.idea4t": ["學習環境", "Learning environment", "学习环境"],
  "projectSection.idea4d": ["分析坐姿、光線、專注狀態或課室環境並作出回饋。", "Analyze posture, lighting, attention, or classroom conditions and provide feedback.", "分析坐姿、光线、专注状态或课室环境并作出反馈。"],
  "projectSection.storyEyebrow": ["月球任務故事", "Lunar mission story", "月球任务故事"],
  "projectSection.storyTitle": ["把技術知識放進一個完整的月球任務故事。", "Place technical knowledge inside a complete lunar mission story.", "把技术知识放进一个完整的月球任务故事。"],
  "projectSection.storyText": [
    "學生從接收任務、校正感測器、處理警報到連接 AI Agent，逐步把八小時所學轉化為可操作的月球探險 Project。",
    "Students receive a mission, calibrate sensors, handle alerts, and connect an AI Agent, turning the eight-hour course into a working lunar exploration project.",
    "学生从接收任务、校正传感器、处理警报到连接 AI Agent，逐步把八小时所学转化为可操作的月球探险 Project。"
  ],
  "projectSection.storyCta": ["查看 8 小時學習路徑", "View the 8-hour learning journey", "查看 8 小时学习路径"]
});

const COPY = Object.fromEntries(
  Object.entries(rows).map(([key, values]) => [
    key,
    { "zh-Hant": values[0], en: values[1], "zh-Hans": values[2] }
  ])
);

function getCopy(key, lang) {
  const entry = COPY[key];
  if (!entry) return "";
  return entry[lang] || entry["zh-Hant"] || "";
}

function applyBrand(lang) {
  const logoSrc = BRAND_LOGOS[lang] || BRAND_LOGOS["zh-Hant"];
  const brandName = BRAND_NAMES[lang] || BRAND_NAMES["zh-Hant"];

  document.querySelectorAll(".brand").forEach((brand) => {
    const logo = brand.querySelector(".logo-img");
    const label = brand.querySelector("span");

    brand.classList.add("brand--image");
    brand.classList.toggle("brand--en", lang === "en");

    if (logo) {
      logo.setAttribute("src", logoSrc);
      logo.setAttribute("alt", `${brandName} logo`);
    }

    if (label) label.textContent = brandName;
    brand.setAttribute("aria-label", brandName);
  });
}

function applyLang(lang) {
  const next = LANGS.includes(lang) ? lang : "zh-Hant";
  currentLang = next;
  document.documentElement.lang =
    next === "en" ? "en-HK" : next === "zh-Hans" ? "zh-Hans-HK" : "zh-Hant-HK";

  applyBrand(next);

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = getCopy(node.dataset.i18n, next);
    if (value) node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const value = getCopy(node.dataset.i18nPlaceholder, next);
    if (value) node.setAttribute("placeholder", value);
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === next);
  });

  try { localStorage.setItem("funconnect-lang", next); } catch (_) {}
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => applyLang(button.dataset.lang));
});

let stored = "zh-Hant";
try { stored = localStorage.getItem("funconnect-lang") || "zh-Hant"; } catch (_) {}
applyLang(stored);

document.querySelectorAll("[data-inline-video]").forEach((panel) => {
  const start = panel.querySelector("[data-video-start]");
  const video = panel.querySelector("[data-demo-video]");
  if (!start || !video) return;

  start.addEventListener("click", async () => {
    start.hidden = true;
    video.hidden = false;
    panel.classList.add("is-playing");
    try {
      video.load();
      await video.play();
    } catch (_) {
      video.controls = true;
    }
  });
});

document.querySelectorAll("[data-journey-browser]").forEach((browser) => {
  const tabs = Array.from(browser.querySelectorAll("[data-journey-hour]"));
  const slides = Array.from(browser.querySelectorAll("[data-journey-slide]"));
  const current = browser.querySelector("[data-journey-current]");
  const prev = browser.querySelector("[data-journey-prev]");
  const next = browser.querySelector("[data-journey-next]");
  let index = 0;

  function show(nextIndex) {
    index = (nextIndex + slides.length) % slides.length;
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.classList.toggle("active", active);
      tab.setAttribute("aria-selected", active ? "true" : "false");
    });
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.classList.toggle("active", active);
      slide.hidden = !active;
    });
    if (current) current.textContent = String(index + 1).padStart(2, "0");
    const tab = tabs[index];
    const tabList = tab?.parentElement;
    if (tab && tabList) {
      const left = tab.offsetLeft - (tabList.clientWidth - tab.clientWidth) / 2;
      tabList.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }

  tabs.forEach((tab, i) => tab.addEventListener("click", () => show(i)));
  prev?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));
  show(0);
});

// ===== 配置项 =====
const CONFIG = {
  launchDate: '2025-06-26', // 与_config.yml保持一致
  welcomeMessages: [
    '欢迎来到 ORANGE🍊の小家!',
    'Future is now 🍊🍊🍊',
    '这里是属于你的秘密基地✨'
  ],
  funTips: [
    '检测到「大聪明」访问✨',
    '控制台操作被记录📝',
    '系统正在扫描你的可爱值...'
  ]
};

// 初始化标志位（避免重复输出）
let isInitialized = false;

// ===== 网站存活时间计算 =====
function calculateLiveDays() {
  const now = new Date();
  const launch = new Date(CONFIG.launchDate);
  if (isNaN(launch.getTime())) {
    console.error('日期无效，使用默认值');
    return 0;
  }
  return Math.floor((now - launch) / (1000 * 60 * 60 * 24));
}

// ===== 打印ASCII艺术与欢迎信息 =====
function printWelcomeInfo() {
  const days = calculateLiveDays();
  const asciiArt = `
 🍊🍊🍊   🍊🍊🍊🍊     🍊🍊        🍊🍊   🍊  🍊🍊🍊🍊  🍊🍊🍊🍊  
🍊     🍊  🍊     🍊    🍊  🍊     🍊  🍊  🍊  🍊           🍊  
🍊     🍊  🍊🍊🍊🍊   🍊 🍊🍊   🍊   🍊  🍊  🍊   🍊🍊  🍊🍊🍊🍊  
🍊     🍊  🍊     🍊  🍊      🍊 🍊    🍊 🍊   🍊      🍊  🍊
 🍊🍊🍊   🍊      🍊 🍊       🍊🍊     🍊🍊    🍊🍊🍊🍊  🍊🍊🍊🍊  
  `;

  const originalLog = console.log.bind(console);
  const log = (msg, style) => {
    originalLog(`%c${msg}`, style);
  };

  log(CONFIG.welcomeMessages[0], "color:#39c5bb; font-size:16px; font-weight:bold;");
  log(CONFIG.welcomeMessages[1], "color:#f8b400; font-size:14px;");
  log(asciiArt, "color:#FF7F00; font-family: monospace;"); // 改为橙色更贴合主题
  log(`小站已经存活 ${days} 天啦!`, "color:#39c5bb; font-weight:bold;");
  log(`©${new Date().getFullYear()} By ORANGE`, "color:#39c5bb;");
}

// ===== 趣味交互提示 =====
function printFunTips() {
  const tips = [
    {
      msg: "啊🍊\n调用前置摄像头拍照成功，识别为「大聪明」",
      style: "color:white; background-color:#10bcc0; padding: 5px;"
    },
    {
      msg: "⚡欢迎光临，大聪明",
      style: "color:white; background-color:#23c682; padding: 5px;"
    },
    {
      msg: "诶🍊\n你正在访问 ORANGE🍊の小家",
      style: "color:white; background-color:#f0ad4e; padding: 5px;"
    },
    {
      msg: "嘿🍊\n系统监测到你已打开控制台",
      style: "color:white; background-color:#4f90d9; padding: 5px;"
    },
    {
      msg: "喂🍊\n你现在正处于可爱值监控中",
      style: "color:white; background-color:#d9534f; padding: 5px;"
    }
  ];

  tips.forEach((tip, index) => {
    setTimeout(() => {
      console.log(`%c${tip.msg}`, tip.style);
    }, (index + 1) * 1500);
  });
}

// ===== 键盘快捷键交互 =====
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'l') {
      console.log(`%c 🍊 彩蛋触发!`, "color:#ff6b6b; font-size:18px; font-weight:bold;");
      console.log(`%c 你发现了隐藏功能!`, "color:#4ecdc4;");
    }
  });
}

// ===== 初始化脚本 =====
function initConsoleWelcome() {
  if (isInitialized) return;
  isInitialized = true;
  
  printWelcomeInfo();
  printFunTips();
  setupKeyboardShortcuts();
}

// 执行初始化
initConsoleWelcome();
export default function Home() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
  <style>
    :root {
      --bg: #f4f4f5;
      --card: #ffffff;
      --text: #18181b;
      --muted: #52525b;
      --line: #e4e4e7;
      --soft: #f4f4f5;
      --primary: #18181b;
      --primary-text: #ffffff;
      --radius-xl: 18px;
      --radius-2xl: 24px;
      --radius-3xl: 30px;
      --shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
      --max: 1180px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }

    a { color: inherit; text-decoration: none; }
    img { max-width: 100%; display: block; }
    .container {
      width: min(var(--max), calc(100% - 32px));
      margin: 0 auto;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--line);
    }

    .topbar-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 16px 0;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-mark {
      width: 40px;
      height: 40px;
      border-radius: 16px;
      background: var(--primary);
      color: var(--primary-text);
      display: grid;
      place-items: center;
      font-weight: 700;
    }

    .brand small {
      display: block;
      color: var(--muted);
      font-size: 13px;
    }

    .brand strong {
      font-size: 18px;
    }

    .nav {
      display: flex;
      gap: 18px;
      flex-wrap: wrap;
      color: var(--muted);
      font-size: 14px;
    }

    .nav a:hover { color: var(--text); }

    .hero,
    .card,
    .section-card,
    .mini-card,
    .detail-card {
      background: var(--card);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
    }

    .hero {
      margin-top: 24px;
      border-radius: 32px;
      padding: 36px;
    }

    .pill {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border: 1px solid var(--line);
      border-radius: 999px;
      padding: 10px 14px;
      font-size: 14px;
      color: var(--muted);
      background: #fff;
    }

    h1 {
      font-size: clamp(34px, 5vw, 62px);
      line-height: 1.08;
      margin: 22px 0 0;
      max-width: 860px;
    }

    .lead {
      max-width: 860px;
      font-size: 18px;
      color: var(--muted);
      margin-top: 22px;
      line-height: 1.9;
    }

    .cta-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 28px;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 48px;
      padding: 0 18px;
      border-radius: 16px;
      border: 1px solid var(--line);
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      transition: transform .15s ease, background .15s ease, color .15s ease;
    }

    .btn:hover { transform: translateY(-1px); }
    .btn-primary {
      background: var(--primary);
      color: var(--primary-text);
      border-color: var(--primary);
    }
    .btn-secondary {
      background: #fff;
      color: var(--text);
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 14px;
      margin-top: 28px;
    }

    .mini-card {
      border-radius: var(--radius-2xl);
      padding: 20px;
      background: var(--soft);
      box-shadow: none;
    }

    .mini-card .num {
      font-size: 30px;
      font-weight: 800;
    }

    .mini-card .label {
      margin-top: 8px;
      font-size: 14px;
      color: var(--muted);
    }

    .hero-note {
      margin-top: 28px;
      border-radius: var(--radius-3xl);
      background: var(--soft);
      padding: 18px 20px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.8;
    }

    main section.section {
      margin-top: 44px;
    }

    .section-heading small {
      display: block;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
    }

    .section-heading h2 {
      margin: 10px 0 0;
      font-size: clamp(28px, 3.6vw, 42px);
      line-height: 1.18;
    }

    .section-heading p {
      margin-top: 12px;
      max-width: 860px;
      color: var(--muted);
      font-size: 16px;
      line-height: 1.9;
    }

    .grid-2,
    .grid-3,
    .grid-2-1,
    .grid-1-2 {
      display: grid;
      gap: 20px;
      margin-top: 24px;
    }

    .grid-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .grid-2-1 { grid-template-columns: 1.15fr 0.85fr; }
    .grid-1-2 { grid-template-columns: 1.05fr 0.95fr; }

    .card,
    .section-card,
    .detail-card {
      border-radius: var(--radius-3xl);
      padding: 24px;
    }

    .card h3,
    .section-card h3,
    .detail-card h3 {
      margin: 0;
      font-size: 22px;
    }

    .card p,
    .section-card p,
    .detail-card p {
      margin: 12px 0 0;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.9;
    }

    .item-list {
      display: grid;
      gap: 12px;
      margin-top: 18px;
    }

    .item {
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 14px 16px;
      font-size: 14px;
      color: #3f3f46;
      background: #fff;
    }

    .bullet-list {
      display: grid;
      gap: 12px;
      margin-top: 18px;
    }

    .bullet {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: #3f3f46;
      font-size: 14px;
      line-height: 1.8;
    }

    .bullet::before {
      content: "•";
      color: var(--muted);
      margin-top: 1px;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 16px;
    }

    .tag {
      display: inline-flex;
      align-items: center;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--soft);
      color: #3f3f46;
      font-size: 12px;
    }

    .type-tag {
      display: inline-flex;
      align-items: center;
      padding: 6px 10px;
      border-radius: 999px;
      background: var(--soft);
      color: #3f3f46;
      font-size: 12px;
      margin-bottom: 12px;
    }

    .detail-card h4 {
      margin: 22px 0 0;
      font-size: 18px;
    }

    .cta-box {
      border-radius: var(--radius-3xl);
      background: var(--card);
      border: 1px solid var(--line);
      box-shadow: var(--shadow);
      padding: 24px;
    }

    .cta-box .btn-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      margin-top: 18px;
    }

    footer {
      margin-top: 48px;
      border-top: 1px solid var(--line);
      background: #fff;
    }

    .footer-inner {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 14px;
      padding: 24px 0;
      color: var(--muted);
      font-size: 14px;
    }

    .footer-links {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
    }

    @media (max-width: 1024px) {
      .grid-3,
      .grid-2-1,
      .grid-1-2,
      .grid-2,
      .stats { grid-template-columns: 1fr 1fr; }
    }

    @media (max-width: 760px) {
      .nav { display: none; }
      .hero { padding: 24px; }
      .grid-3,
      .grid-2-1,
      .grid-1-2,
      .grid-2,
      .stats,
      .cta-box .btn-grid { grid-template-columns: 1fr; }
      .topbar-inner { align-items: flex-start; }
    }
  </style>
  <header class="topbar"><div class="container topbar-inner"><div class="brand"><div class="brand-mark">矩</div><div><small>嵌入式工程作品与能力沉淀</small><strong>矩芯工坊</strong></div></div><nav class="nav"><a href="#about">关于我</a><a href="#job-info">求职信息</a><a href="#resume-pack">求职资料</a><a href="#featured-project">照相机项目</a><a href="#featured-iot-project">环境监测项目</a><a href="#featured-esp-project">ESP32 项目</a><a href="#contact">联系我</a></nav></div></header>
  <main class="container">
    <section class="hero"><div class="pill">把真实项目、工程经验与长期成长沉淀成可展示的个人资产</div><h1>矩芯工坊 · 陈兴体的嵌入式工程能力网站</h1><p class="lead">聚焦单片机、ESP32、STM32、嵌入式系统、PCB 与上位机协同开发，持续整理项目实战、常用电路模块、调试经验与成长路线，构建属于自己的个人工程生态。</p><div class="cta-row"><a class="btn btn-primary" href="#featured-project">查看精选项目</a><a class="btn btn-secondary" href="#resume-pack">查看求职资料</a><a class="btn btn-secondary" href="mailto:723507618@qq.com">邮箱联系</a></div><div class="stats"><div class="mini-card"><div class="num">0.5 年</div><div class="label">工程经历</div></div><div class="mini-card"><div class="num">6+</div><div class="label">能力模块</div></div><div class="mini-card"><div class="num">3</div><div class="label">精选项目</div></div><div class="mini-card"><div class="num">多项</div><div class="label">比赛获奖</div></div></div><div class="hero-note">基于个人简历信息整理而来：求职方向为嵌入式软件工程师，具备电子工程相关实践经历，本科毕业于广西百色学院电子信息工程专业，当前以嵌入式开发、系统调试与项目落地为主要积累方向。</div></section>
    <section id="about" class="section"><div class="section-heading"><small>About</small><h2>关于我</h2><p>把简历信息结构化整理成网站内容，既能展示能力，也便于后续继续扩写项目与文章。</p></div><div class="grid-2"><div class="section-card"><h3>陈兴体</h3><p>求职目标聚焦嵌入式软件方向，核心能力覆盖 MCU、ESP32、嵌入式协议、FreeRTOS、硬件调试与项目实现。</p><div class="item-list"><div class="item">求职目标：嵌入式软件工程师</div><div class="item">目前方向：嵌入式软件工程师（MCU）</div><div class="item">工作经验：0.5 年</div><div class="item">学历：本科｜广西百色学院｜电子信息工程</div><div class="item">目前状态：离职，寻找机会</div><div class="item">现居地：广西壮族自治区</div></div></div><div class="section-card"><h3>当前重点方向</h3><div class="bullet-list"><div class="bullet">嵌入式软件开发与驱动实现</div><div class="bullet">STM32 / ESP32 平台项目开发</div><div class="bullet">硬件联调与故障排查</div><div class="bullet">工程项目展示与知识沉淀</div></div></div></div></section>
    <section id="projects" class="section"><div class="section-heading"><small>Projects</small><h2>项目实战总览</h2><p>用 3 个代表性项目，把你的物联网、交互终端、图像采集与外设协同能力展示出来。</p></div><div class="grid-3"><div class="card"><div class="type-tag">STM32 / 物联网 / 小程序</div><h3>环境监测系统</h3><p>实现室内温湿度等环境参数实时监测，并支持远程控制和异常报警。</p></div><div class="card"><div class="type-tag">ESP32-S3 / 交互终端</div><h3>ESP32 智慧桌面玩具</h3><p>集成语音问答、串口助手、2048 游戏、音乐播放、天气日历、电脑性能监测与快捷键控制。</p></div><div class="card"><div class="type-tag">STM32 / 图像采集 / 打印</div><h3>STM32 简易照相机</h3><p>结合摄像头、TFT、热敏打印与锂电池管理，实现照片拍摄、显示、打印与删除。</p></div></div></section>
    <section id="contact" class="section"><div class="section-heading"><small>Contact</small><h2>联系与合作</h2><p>联系方式先以更适合公开展示的形式呈现。</p></div><div class="cta-box"><h3>欢迎交流项目、技术与合作</h3><div class="btn-grid"><a class="btn btn-primary" href="mailto:723507618@qq.com">邮箱联系</a><a class="btn btn-secondary" href="#resume-pack">查看求职资料</a></div></div></section>
  </main>
  <footer><div class="container footer-inner"><div>© 2026 矩芯工坊 · 陈兴体的个人能力网站初版</div><div class="footer-links"><a href="#about">关于我</a><a href="#projects">项目总览</a><a href="#contact">联系我</a></div></div></footer>
        `,
      }}
    />
  );
}

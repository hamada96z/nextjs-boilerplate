
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="سوريا تُبنى من جديد — مبادرة ثقافية وتعليمية من أجل مستقبل موحد وآمن ومستدام." />
  <title>سوريا تُبنى | Syria Reconnect</title>
  
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Reem+Kufi:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    :root {
      --primary: #1e5631;
      --secondary: #a7c957;
      --accent: #f77f00;
      --light: #f8f9fa;
      --dark: #212529;
      --gray: #6c757d;
      --success: #4caf50;
      --border-radius: 12px;
      --shadow: 0 10px 30px -15px rgba(0,0,0,0.15);
      --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    [data-theme="dark"] {
      --primary: #2d7f4c;
      --light: #121826;
      --dark: #e9ecef;
      --gray: #adb5bd;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Tajawal', sans-serif;
      background-color: var(--light);
      color: var(--dark);
      line-height: 1.6;
      overflow-x: hidden;
      transition: var(--transition);
    }

    [data-theme="dark"] body {
      color: var(--light);
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Header */
    header {
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(10px);
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      box-shadow: 0 2px 15px rgba(0,0,0,0.05);
      transition: var(--transition);
    }

    [data-theme="dark"] header {
      background: rgba(18, 24, 38, 0.95);
    }

    .header-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1.2rem 0;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 12px;
      text-decoration: none;
    }

    .logo-icon {
      width: 42px;
      height: 42px;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 800;
      font-size: 1.2rem;
    }

    .logo-text {
      font-family: 'Reem Kufi', sans-serif;
      font-weight: 700;
      font-size: 1.8rem;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    nav ul {
      display: flex;
      list-style: none;
      gap: 2rem;
    }

    nav a {
      text-decoration: none;
      color: var(--dark);
      font-weight: 500;
      font-size: 1.05rem;
      position: relative;
      padding: 0.5rem 0;
      transition: var(--transition);
    }

    [data-theme="dark"] nav a {
      color: var(--light);
    }

    nav a:hover {
      color: var(--primary);
    }

    nav a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: var(--secondary);
      border-radius: 3px;
      transition: var(--transition);
    }

    nav a:hover::after {
      width: 100%;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    .lang-switcher {
      background: none;
      border: none;
      color: var(--gray);
      font-size: 1rem;
      cursor: pointer;
      padding: 0.4rem 0.8rem;
      border-radius: 8px;
      transition: var(--transition);
    }

    .lang-switcher:hover {
      background: var(--secondary);
      color: white;
    }

    .theme-toggle {
      width: 48px;
      height: 26px;
      background: var(--gray);
      border-radius: 50px;
      position: relative;
      cursor: pointer;
      border: none;
      outline: none;
    }

    .theme-toggle::before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      transition: var(--transition);
    }

    [data-theme="dark"] .theme-toggle {
      background: var(--primary);
    }

    [data-theme="dark"] .theme-toggle::before {
      transform: translateX(22px);
    }

    /* Hero Section */
    .hero {
      padding: 12rem 0 6rem;
      background: linear-gradient(120deg, #f0f9f1 0%, #e6f7e8 100%);
      position: relative;
      overflow: hidden;
    }

    [data-theme="dark"] .hero {
      background: linear-gradient(120deg, #0d1b2a 0%, #1b263b 100%);
    }

    .hero::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(167,201,87,0.15) 0%, transparent 70%);
      z-index: -1;
    }

    [data-theme="dark"] .hero::before {
      background: radial-gradient(circle, rgba(167,201,87,0.08) 0%, transparent 70%);
    }

    .hero-content {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: var(--secondary);
      color: white;
      padding: 0.5rem 1.2rem;
      border-radius: 50px;
      font-weight: 600;
      margin-bottom: 1.5rem;
      box-shadow: var(--shadow);
    }

    .hero h1 {
      font-family: 'Reem Kufi', sans-serif;
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      background: linear-gradient(90deg, var(--primary), var(--dark));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    [data-theme="dark"] .hero h1 {
      background: linear-gradient(90deg, var(--secondary), #e0e0e0);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    .hero p {
      font-size: 1.3rem;
      color: var(--gray);
      margin-bottom: 2.5rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-btns {
      display: flex;
      justify-content: center;
      gap: 1.2rem;
      flex-wrap: wrap;
    }

    .btn {
      padding: 1rem 2.2rem;
      border-radius: 50px;
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: none;
      display: inline-block;
      transition: var(--transition);
      box-shadow: var(--shadow);
      border: none;
      cursor: pointer;
    }

    .btn-primary {
      background: var(--primary);
      color: white;
    }

    .btn-primary:hover {
      background: #164a28;
      transform: translateY(-3px);
      box-shadow: 0 12px 30px -10px rgba(30, 86, 49, 0.4);
    }

    .btn-outline {
      background: transparent;
      border: 2px solid var(--primary);
      color: var(--primary);
    }

    .btn-outline:hover {
      background: var(--primary);
      color: white;
      transform: translateY(-3px);
    }

    /* Symbols Section */
    .symbols {
      padding: 5rem 0;
      text-align: center;
    }

    .section-title {
      font-family: 'Reem Kufi', sans-serif;
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }

    .section-subtitle {
      font-size: 1.2rem;
      color: var(--gray);
      max-width: 700px;
      margin: 0 auto 3rem;
    }

    .symbols-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .symbol-card {
      background: white;
      border-radius: var(--border-radius);
      padding: 2rem;
      text-align: center;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }

    [data-theme="dark"] .symbol-card {
      background: #1a2233;
    }

    .symbol-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px -15px rgba(0,0,0,0.2);
    }

    .symbol-icon {
      width: 80px;
      height: 80px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, var(--primary), var(--secondary));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2.2rem;
    }

    .symbol-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--dark);
    }

    [data-theme="dark"] .symbol-card h3 {
      color: var(--light);
    }

    /* Heritage Carousel */
    .heritage {
      padding: 6rem 0;
      background: var(--light);
    }

    [data-theme="dark"] .heritage {
      background: #0f1423;
    }

    .carousel {
      display: flex;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      gap: 1.5rem;
      padding: 1rem 0;
      scrollbar-width: none;
    }

    .carousel::-webkit-scrollbar {
      display: none;
    }

    .carousel-item {
      flex: 0 0 300px;
      scroll-snap-align: start;
      background: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: var(--shadow);
      transition: var(--transition);
    }

    [data-theme="dark"] .carousel-item {
      background: #1a2233;
    }

    .carousel-img {
      height: 200px;
      background: linear-gradient(45deg, #1e5631, #a7c957);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .carousel-content {
      padding: 1.5rem;
    }

    .carousel-content h3 {
      font-size: 1.4rem;
      margin-bottom: 0.75rem;
      color: var(--primary);
    }

    /* Call to Action */
    .cta {
      padding: 6rem 0;
      background: linear-gradient(135deg, var(--primary) 0%, #2d7f4c 100%);
      color: white;
      text-align: center;
    }

    .cta h2 {
      font-family: 'Reem Kufi', sans-serif;
      font-size: 2.8rem;
      margin-bottom: 1.5rem;
    }

    .cta p {
      font-size: 1.3rem;
      max-width: 700px;
      margin: 0 auto 2.5rem;
      opacity: 0.9;
    }

    .btn-light {
      background: white;
      color: var(--primary);
      font-weight: 700;
    }

    .btn-light:hover {
      background: var(--light);
      transform: translateY(-3px);
    }

    /* Footer */
    footer {
      background: var(--dark);
      color: var(--light);
      padding: 4rem 0 2rem;
    }

    [data-theme="dark"] footer {
      background: #0a0f1a;
    }

    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2.5rem;
      margin-bottom: 3rem;
    }

    .footer-col h3 {
      font-size: 1.4rem;
      margin-bottom: 1.5rem;
      position: relative;
      padding-bottom: 0.75rem;
    }

    .footer-col h3::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: var(--secondary);
      border-radius: 3px;
    }

    .footer-links {
      list-style: none;
    }

    .footer-links li {
      margin-bottom: 0.8rem;
    }

    .footer-links a {
      color: #adb5bd;
      text-decoration: none;
      transition: var(--transition);
    }

    .footer-links a:hover {
      color: white;
      padding-right: 0.5rem;
    }

    .copyright {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
      color: #6c757d;
      font-size: 0.95rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .header-container {
        flex-wrap: wrap;
      }
      
      nav ul {
        order: 3;
        width: 100%;
        justify-content: center;
        margin-top: 1rem;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero p {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding: 10rem 0 4rem;
      }
      
      .hero-btns {
        flex-direction: column;
        align-items: center;
      }
      
      .btn {
        width: 100%;
        max-width: 300px;
      }
    }

    /* Animations */
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }

    .floating {
      animation: float 6s ease-in-out infinite;
    }

    .fade-in {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.8s ease, transform 0.8s ease;
    }

    .fade-in.appear {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header>
    <div class="container header-container">
      <a href="#" class="logo">
        <div class="logo-icon">س</div>
        <div class="logo-text">سوريا تُبنى</div>
      </a>
      <nav>
        <ul>
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#symbols">القيم</a></li>
          <li><a href="#heritage">إرثنا</a></li>
          <li><a href="#join">انضم إلينا</a></li>
        </ul>
      </nav>
      <div class="header-actions">
        <select class="lang-switcher" id="langSwitcher">
          <option value="ar">العربية</option>
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>
        <button class="theme-toggle" id="themeToggle" aria-label="تبديل الوضع المظلم"></button>
      </div>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="hero" id="home">
    <div class="container hero-content fade-in">
      <div class="hero-badge">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
        مبادرة مدنية مستقلة
      </div>
      <h1>سوريا تُبنى من جديد<br />بأيدي أبنائها</h1>
      <p>منصة ثقافية وتعليمية تُعيد نسج النسيج الاجتماعي عبر الذاكرة المشتركة، والتعليم الجامع، والعمل التطوعي — من أجل غدٍ سوريٍّ موحد، آمن، ومزدهر.</p>
      <div class="hero-btns">
        <a href="#join" class="btn btn-primary">ابدأ معنا اليوم</a>
        <a href="#heritage" class="btn btn-outline">اكتشف إرثنا</a>
      </div>
    </div>
  </section>

  <!-- Symbols Section -->
  <section class="symbols container fade-in" id="symbols">
    <h2 class="section-title">أركان البناء الجديد</h2>
    <p class="section-subtitle">لا تُبنى الدول بالخرسانة فقط، بل بالقيم التي تُحيي القلوب وتُنير العقول</p>
    
    <div class="symbols-grid">
      <div class="symbol-card floating">
        <div class="symbol-icon">
          🤝
        </div>
        <h3>الوحدة في التنوّع</h3>
        <p>احترام كل المكوّنات: عربي، كردي، سرياني، أرمني، شركسي... فسوريا أقدم من الانقسامات.</p>
      </div>
      
      <div class="symbol-card floating" style="animation-delay: 0.2s">
        <div class="symbol-icon">
          📚
        </div>
        <h3>العلم نور</h3>
        <p>تعليم حديث، مجاني، ومنصف — يُعيد الريادة لجامعات دمشق وحلب والبعث في مجالات العلوم والتكنولوجيا.</p>
      </div>
      
      <div class="symbol-card floating" style="animation-delay: 0.4s">
        <div class="symbol-icon">
          🏗️
        </div>
        <h3>ال rebuilding مسؤولية جماعية</h3>
        <p>مبادرات شبابية لترميم المدارس، المستشفيات، والأسواق التاريخية — بدعم محلي ودولي شفاف.</p>
      </div>
    </div>
  </section>

  <!-- Heritage Section -->
  <section class="heritage fade-in" id="heritage">
    <div class="container">
      <h2 class="section-title">إرثنا الحضاري — جذورنا العميقة</h2>
      <p class="section-subtitle">من أوغاريت إلى حلب... من تدمر إلى دمشق. حكاية 10,000 عام من الحضارة لا تُمحى بالدمار.</p>
      
      <div class="carousel">
        <div class="carousel-item">
          <div class="carousel-img">تدمر — عروس الصحراء</div>
          <div class="carousel-content">
            <h3>مدينة الشمس</h3>
            <p>جاهدونا لتوثيق الآثار وتدريب حرفيين محليين على تقنيات الترميم الأثري المستدام.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-img">جامعو حلب — نبض المدينة</div>
          <div class="carousel-content">
            <h3>قلب حلب النابض</h3>
            <p>مشروع لترميم المكتبات التاريخية وإعادة إحياء تقليد "حلقة العلم" في فناء الجامع.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-img">سوق الحميدية — رائحة التاريخ</div>
          <div class="carousel-content">
            <h3>سوق العطور والبهارات</h3>
            <p>دعم الحرفيين الصغار عبر منصة رقمية لبيع منتجاتهم عالميًا مع حماية الهوية البصرية.</p>
          </div>
        </div>
        <div class="carousel-item">
          <div class="carousel-img">الموسيقى السورية</div>
          <div class="carousel-content">
            <h3>سمّاع الدرويش</h3>
            <p>أرشيف رقمي مفتوح للمقامات، الألحان، والشعر الشعبي — بمشاركة كبار العازفين من كل المناطق.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="cta fade-in" id="join">
    <div class="container">
      <h2>كن جزءًا من البناء</h2>
      <p>سواءً كنت معلمًا، مهندسًا، فنانًا، طبيبًا، أو شابًّا يبحث عن فرصة — مهاراتك ضرورية لغدٍ أفضل.</p>
      <a href="#" class="btn btn-light">سجل كمتطوع</a>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h3>سوريا تُبنى</h3>
          <p>مبادرة مدنية غير ربحية، مستقلة عن أي جهة سياسية أو حزبية. نعمل من أجل سلام عادل، ودولة مدنية، ومستقبل كريم لكل السوريين.</p>
        </div>
        <div class="footer-col">
          <h3>روابط سريعة</h3>
          <ul class="footer-links">
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#symbols">قيمنا</a></li>
            <li><a href="#heritage">إرثنا</a></li>
            <li><a href="#">التعليم الرقمي</a></li>
            <li><a href="#">الدعم النفسي</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h3>اتصل بنا</h3>
          <ul class="footer-links">
            <li>📧 info@suriya-tubna.org</li>
            <li>📱 +964 XXX XXX XXX (عراق)</li>
            <li>📍 مكاتب في: إسطنبول، عمّان، برلين</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; 2025 سوريا تُبنى — جميع الحقوق محفوظة. هذه المنصة مفتوحة المصدر على <a href="#" style="color:#a7c957">GitHub</a>.</p>
        <p style="margin-top:0.5rem; font-size:0.85rem; opacity:0.7">بدعم من منظمات المجتمع المدني السوري والدولي — وفق مبادئ الميثاق العالمي للأمم المتحدة لحقوق الإنسان.</p>
      </div>
    </div>
  </footer>

  <script>
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;
    
    // Check system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
      htmlEl.setAttribute('data-theme', 'dark');
    }
    
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlEl.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        htmlEl.setAttribute('data-theme', 'light');
      } else {
        htmlEl.setAttribute('data-theme', 'dark');
      }
    });

    // Language Switcher (basic)
    document.getElementById('langSwitcher').addEventListener('change', function() {
      const lang = this.value;
      document.documentElement.lang = lang;
      document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
      // In a real app: load translations, adjust layout
    });

    // Scroll animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => observer.observe(el));

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  </script>
</body>
</html>

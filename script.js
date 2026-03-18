const body = document.body;
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

let currentLang = 'en';
let darkMode = true;

const translations = {
  en: {
    logoName: 'Enas Alsolami',
    heroName: 'Enas Alsolami',
    heroTitle: 'UI/UX Designer & Front-End Developer',
    heroDescription:
      'I design and build user-friendly digital experiences with creativity, precision, and a strong problem-solving mindset.',
    heroSideText:
      'Creative, ambitious, and always learning. I love building polished digital experiences that feel thoughtful and complete.',
    aboutText:
      'I am a Computer Science student at the University of Jeddah, passionate about UI/UX design and front-end development. I enjoy turning ideas into real digital experiences that are clean, useful, and visually engaging.',
    footerText: 'Designed and developed by Enas Alsolami.',
  },
  ar: {
    logoName: 'إيناس السلمي',
    heroName: 'إيناس السلمي',
    heroTitle: 'مصممة UI/UX ومطورة واجهات أمامية',
    heroDescription:
      'أصمم وأبني تجارب رقمية سهلة الاستخدام تجمع بين الإبداع والدقة وحل المشكلات بطريقة عملية.',
    heroSideText:
      'مبدعة وطموحة وأحب التعلم المستمر. أستمتع ببناء تجارب رقمية متقنة تبدو مدروسة ومتكاملة.',
    aboutText:
      'أنا طالبة علوم حاسب في جامعة جدة، شغوفة بتصميم واجهات وتجربة المستخدم وتطوير الواجهات الأمامية. أستمتع بتحويل الأفكار إلى تجارب رقمية حقيقية تكون مرتبة ومفيدة وجذابة بصريًا.',
    footerText: 'تم تصميم وتطوير هذا الموقع بواسطة إيناس السلمي.',
  }
};

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  body.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  document.getElementById('logoName').textContent = translations[lang].logoName;
  document.getElementById('heroName').textContent = translations[lang].heroName;
  document.getElementById('heroTitle').textContent = translations[lang].heroTitle;
  document.getElementById('heroDescription').textContent = translations[lang].heroDescription;
  document.getElementById('heroSideText').textContent = translations[lang].heroSideText;
  document.getElementById('aboutText').textContent = translations[lang].aboutText;
  document.getElementById('footerText').textContent = translations[lang].footerText;

  document.querySelectorAll('[data-en][data-ar]').forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
}

function applyTheme() {
  if (darkMode) {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    themeToggle.textContent = '☀';
  } else {
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙';
  }
}

langToggle.addEventListener('click', () => {
  applyLanguage(currentLang === 'en' ? 'ar' : 'en');
});

themeToggle.addEventListener('click', () => {
  darkMode = !darkMode;
  applyTheme();
});

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('active'));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
// document.addEventListener('contextmenu', e => e.preventDefault());
applyLanguage('en');
applyTheme();

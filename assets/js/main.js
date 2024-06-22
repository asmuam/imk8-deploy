(function () {
  "use strict";

  //===== Prealoder
  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
  }

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const logo = document.querySelectorAll(".header-logo");

    if (logo.length) {
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        document.querySelector(".header-logo").src = "assets/images/logoBekasi.png";
      } else {
        document.querySelector(".header-logo").src = "assets/images/logoBekasi.png";
      }
    }

    if (document.documentElement.classList.contains("dark")) {
      if (logo.length) {
        // === logo change
        if (ud_header.classList.contains("sticky")) {
          document.querySelector(".header-logo").src = "assets/images/logoBekasi.png";
        }
      }
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  // ===== responsive navbar
  const navbarToggler = document.getElementById("navbarToggler");
  const navbarCollapse = document.getElementById("navbarCollapse");

  // Hapus event listener sebelumnya jika ada
  navbarToggler.removeEventListener("click", toggleNavbar);

  // Tambahkan event listener baru
  navbarToggler.addEventListener("click", toggleNavbar);

  function toggleNavbar() {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  }

  // Tutup navbar-collapse saat item menu utama diklik
  document.querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a").forEach((link) => {
    link.addEventListener("click", () => {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");
    });
  });

  // Menutup navbarCollapse saat klik di luar area navbarCollapse
  document.addEventListener("click", function (e) {
    if (!navbarCollapse.contains(e.target) && e.target !== navbarToggler) {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");

      // Tutup semua submenu yang terbuka
      document.querySelectorAll(".submenu").forEach((submenu) => {
        submenu.classList.add("hidden");
      });
    }
  });

  // Perilaku submenu
  const submenuItems = document.querySelectorAll(".submenu-item");

  submenuItems.forEach((item) => {
    const submenu = item.querySelector(".submenu");
    const submenuToggle = item.querySelector("a");

    submenuToggle.addEventListener("click", (e) => {
      e.preventDefault();

      // Tutup submenu yang lain sebelum membuka yang baru
      submenuItems.forEach((otherItem) => {
        const otherSubmenu = otherItem.querySelector(".submenu");
        if (otherItem !== item && !otherSubmenu.classList.contains("hidden")) {
          otherSubmenu.classList.add("hidden");
        }
      });

      submenu.classList.toggle("hidden");
    });
  });

  // ===== Faq accordion
  const faqs = document.querySelectorAll(".single-faq");
  faqs.forEach((el) => {
    el.querySelector(".faq-btn").addEventListener("click", () => {
      el.querySelector(".icon").classList.toggle("rotate-180");
      el.querySelector(".faq-content").classList.toggle("hidden");
    });
  });

  // ===== wow js
  new WOW().init();

  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };

  /* ========  themeSwitcher start ========= */

  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      document.documentElement.classList.add('dark');
      return;
    }
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  // call theme switch on clicking buttons
  themeSwitcher.addEventListener('click', () => {
    themeSwitch();
  });

  // invoke theme check on initial load
  themeCheck();
  /* ========  themeSwitcher End ========= */

})();

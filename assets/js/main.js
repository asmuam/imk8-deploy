
(function () {
  "use strict";

  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
}

function fadeout() {
    document.querySelector('.preloader').style.opacity = '0';
    document.querySelector('.preloader').style.display = 'none';
}

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelectorAll(".header-logo");

    if (window.pageYOffset > sticky) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }

    if(logo.length) {
      // === logo change
      if (ud_header.classList.contains("sticky")) {
        document.querySelector(".header-logo").src="assets/images/logoBekasi.png"
      } else {
        document.querySelector(".header-logo").src="assets/images/logoBekasi.png"
      }
    }

    if (document.documentElement.classList.contains("dark")) {
      if(logo.length) {
        // === logo change
        if (ud_header.classList.contains("sticky")) {
          document.querySelector(".header-logo").src="assets/images/logoBekasi.png"
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
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  navbarToggler.addEventListener("click", () => {
    navbarToggler.classList.toggle("navbarTogglerActive");
    navbarCollapse.classList.toggle("hidden");
  });

  //===== close navbar-collapse when a  clicked
  document
    .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
    .forEach((e) =>
      e.addEventListener("click", () => {
        navbarToggler.classList.remove("navbarTogglerActive");
        navbarCollapse.classList.add("hidden");
      })
    );

  // ===== Sub-menu
  const submenuItems = document.querySelectorAll(".submenu-item");
  submenuItems.forEach((el) => {
    el.querySelector("a").addEventListener("click", () => {
      el.querySelector(".submenu").classList.toggle("hidden");
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
  const systemTheme = window.matchMedia('(prefers-color0scheme: dark)').matches;

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
      return;
    }

    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  };

  // call theme switch on clicking buttons
  themeSwitcher.addEventListener('click', () => {
    themeSwitch();
  });

  // invoke theme check on initial load
  themeCheck();
  /* ========  themeSwitcher End ========= */
})();


 function carouselBerita() {
            return {
              slides: beritaData,
        activeSlide: 0, // Starting at 0, since array indices are 0-based
        next() {
            this.activeSlide = (this.activeSlide + 1) % this.slides.length;
            this.scrollToSlide(this.activeSlide);
        },
        prev() {
            this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
            this.scrollToSlide(this.activeSlide);
        },
        goToSlide(index) {
      this.activeSlide = index;
      this.scrollToSlide(this.activeSlide);
    },
        scrollToSlide(index) {
            this.$refs.carousel.scrollTo({
                left: this.$refs.carousel.offsetWidth * index,
                behavior: 'smooth'
            });
        }
            }
          }

tinggiKonten=document.getElementById("konten").offsetHeight
sideContentNum=Math.ceil(tinggiKonten/600)
if(sideContentNum<3) {
  numArticle = sideContentNum*3
  document.getElementById("popular-image").classList.add("hidden") 
  document.getElementById("popular-video").classList.add("hidden") 
  if(numArticle<6){
    numArticle = 5
  }
} else {
  numArticle = sideContentNum
  numVideo = sideContentNum
  numPhoto = sideContentNum
}
function popularArticle(num) {
          popular = beritaData.slice(0, num)
            return {
              slides: popular
            }
          }

function popularVideo(num) {
          popular = galleryVideo.slice(0, num)
            return {
              slides: popular
            }
          }

function popularImage(num) {
          popular = galleryData.slice(0, num)
            return {
              slides: popular
            }
          }


const galleryData = [
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/ffa66a3eb7e59dc9f5125fe43ce0506d.png",
        text: "Penghargaan yang didapat dari top 10 besar dalam ajang kompetisi inovasi Jawa Barat 2020 melalui aplikasi SI TARO"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/14985f7ff4c18ec81736a8ceb4da6cf9.png",
        text: "Penghargaan apresiasi Jawara Ekonomi digital Jawa Barat 2021 sebagai Pemerintah terbaik 1 dalam digitalisasi ekonomi daerah"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/8c91d3415e6737f2148287e32323b90c.png",
        text: "Penghargaan Paritrana atau jaminan sosial ketenagakerjaan Tingkat Jawa Barat Tahun 2020"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/54d082d8eaf8814509f00c60481e5b74.png",
        text: "Penghargaan Prestasi dalam Bidang Pengembangan 150.000 UMKM kepada Wali Kota Bekasi"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/58fed97ffba2dfd1715f0afae112ebe5.png",
        text: "Penghargaan Pembina TOP BUMD Awards 2021"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/a6d569e069e6bcdf8166890edddc8107.jpg",
        text: "Penghargaan Paritrana Award Tahun 2020 di kategori pemerintah kabupaten dan kota"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/c8d2b210468871f562ba8a33af043698.png",
        text: "Penghargaan Sebagai Kota Penerima Anugerah Parahita Ekapraya Tahun 2020"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/db17fe1f306e85975454a18773656892.jpg",
        text: "Pemerintah Daerah Pengelolaan Laporan Terbaik"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/fd0730b9f8ad7f276133e70a0193302e.jpg",
        text: "Penghargaan Kota Layak Anak (KLA) 2021  predikat tingkat Nindya"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/507a32284ffa49727e7a92ca12daca61.jpg",
        text: "Penghargaan Peringkat Pertama Apresiasi Jawara Ekonomi Digital (AJEG) Jawa Barat 2021 Kategori Pemda Terbaik Dalam Digitalisasi Ekonomi Daerah."
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/e1dd6fdedf31290a549a6c2f9eb874bf.png",
        text: "Pemberian Medali Pemuda Hebat 2020 (Pekan Pemuda Nasional)"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/be9f296c92f4ce7c312394172f01adfa.jpg",
        text: "Penilaian Opini Wajar Tanpa Pengecualian (WTP) atas Laporan Keuangan Pemerintah Daerah  Tahun Anggaran 2020"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/324262ee93422f5c57eb81e4d3782dbf.jpg",
        text: "Penghargaan unit Pelayanan Publik Tahun 2020 Kategori sangat Baik dari Kemenpan RB, DPMPTSP Kota Bekasi"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/e2d3cdfda667c7781d81d819cc518653.jpg",
        text: "Penghargaan 10 Kota Toleransi Tahun 2020 Dari Setara Institute"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/f5037807596ac84846a2b410f37bf881.png",
        text: "Peringkat Pertama Kategori Kepatuhan terhadap Norma Standar dan Prosedur Kepegawaian Tahun 2020"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/b5d03842f769a469498aaa69c2015ca5.png",
        text: "Penghargaan Harmoni Award 2020"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/b7b3ca01a4f3af10586da0344eaaf70e.jpg",
        text: "Penghargaan Penyelenggara Pelayanan Publik Kategori \"Pelayanan Prima Tahun 2020\""
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/86f09202bbe9db48ee5444b90201473c.jpg",
        text: "Logo Hut Kota Bekasi ke 24 Tahun 2021"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/f85726038be2281f06e85ae16291296a.jpg",
        text: "Penghargaan Kota Terinovatif \"Innovative Government Award 2020\""
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/3eb9dbdfd0c187b013a31c7d232e1cad.jpg",
        text: "Penghargaan Sebagai Kota Peduli Hak Asasi Manusia Pada Tahun 2019"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/636e0cdaa9a63dd854f5803758b18e44.jpg",
        text: "Penghargaan Badan Publik Informatif Tahun 2020 Tingkat Jawa Barat"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/e4d3f94c74e68e423e324588480c6af5.jpg",
        text: "Logo Hut Kota Bekasi ke 23 Tahun 2020"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/eae62a21e7819a5bb679ebfb2950110d.jpg",
        text: "Logo Kota Bekasi ke- 22 Tahun 2019"
    },
    {
        url: "https://bekasikota.go.id:443//uploads/gallery/20180116075457-2018-01-16gallery075137.jpg",
        text: "Penghargaan Penyelengaraan Manajemen Kepegawaian Kluster II Kabupaten Kota Tingkat Provinsi"
    }
];
const galleryVideo = [
    {
        title: "TAHAPAN PENILAIAN KLARIFIKASI LAPANGAN LOMBA DESA DAN KELURAHAN TINGKAT PROVINSI JABAR 2024",
        url: "https://www.youtube.com/embed/HzwTqRuALJE?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/HzwTqRuALJE/hqdefault.jpg"
    },
    {
        title: "Sinkronisasi Pengumpulan, Pengolahan, Analisis dan Diseminasi Statistik Sektoral",
        url: "https://www.youtube.com/embed/lOvFBT_MlRo?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/lOvFBT_MlRo/hqdefault.jpg"
    },
    {
        title: "Festival Adu Bedug dan Dondang Ke-17 Kota Bekasi",
        url: "https://www.youtube.com/embed/QVlHDfz4akc?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/QVlHDfz4akc/hqdefault.jpg"
    },
    {
        title: "Upacara Hari Ulang Tahun Ke 27 Kota Bekasi",
        url: "https://www.youtube.com/embed/MELBQ7mC0lo?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/MELBQ7mC0lo/hqdefault.jpg"
    },
    {
        title: "Logo Resmi HUT Kota Bekasi Ke-27 Tahun 2024",
        url: "https://www.youtube.com/embed/tHfgQMRci2I?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/tHfgQMRci2I/hqdefault.jpg"
    },
    {
        title: "Pemilu Damai Menuju Indonesia Emas",
        url: "https://www.youtube.com/embed/m0t1MNzappo?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/m0t1MNzappo/hqdefault.jpg"
    },
    {
        title: "LIVE : SAPA WARGA TEMA :  PPDB Kota Bekasi, Semua Bisa Sekolah ., Negeri Dan Swasta Sama",
        url: "https://www.youtube.com/embed/ai0E6z0oHqg?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/ai0E6z0oHqg/hqdefault.jpg"
    },
    {
        title: "Penilaian  Klarifikasi Lapangan Lomba Desa dan Kelurahan Tingkat Provinsi Jawa Barat Tahun 2023",
        url: "https://www.youtube.com/embed/O30VeI_ybIo?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/O30VeI_ybIo/hqdefault.jpg"
    },
    {
        title: "Roadshow Bus KPK &quot;Hajar Serangan Fajar&quot;",
        url: "https://www.youtube.com/embed/RmFq__N-UvI?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/RmFq__N-UvI/hqdefault.jpg"
    },
    {
        title: "LIVE : Sapa Warga Tema :  Qurban Aman, Sehat dan Bebas Zoonosis",
        url: "https://www.youtube.com/embed/-eWEgNORfhU?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/-eWEgNORfhU/hqdefault.jpg"
    },
    {
        title: "Plt Wali Kota Bekasi Tanam Pohon pada Puncak Peringatan Hari Lingkungan Hidup Sedunia",
        url: "https://www.youtube.com/embed/4Cwjhsj-4T0?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/4Cwjhsj-4T0/hqdefault.jpg"
    },
    {
        title: "Verifikasi Lapangan Kunjungan (VLK) Evaluasi Kota Layak Anak (KLA) Tahun 2023",
        url: "https://www.youtube.com/embed/rgeK_W9e5vE?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/rgeK_W9e5vE/hqdefault.jpg"
    },
    {
        title: "Sosialisasi SP4N LAPOR Kec. Jatiasih",
        url: "https://www.youtube.com/embed/XOBqB6WcjjY?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/XOBqB6WcjjY/hqdefault.jpg"
    },
    {
        title: "Sosialisasi SP4N Lapor Kec. Jatisampurna",
        url: "https://www.youtube.com/embed/2D4Xdjr4P6Y?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/2D4Xdjr4P6Y/hqdefault.jpg"
    },
    {
        title: "UJI EMSI AKBAR  DALAM RANGKA  HARI  LINGKUNGAN HIDUP SE-DUNIA",
        url: "https://www.youtube.com/embed/xQgYGw9Wywk?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/xQgYGw9Wywk/hqdefault.jpg"
    },
    {
        title: "UPPKS  KECAMATAN SE- KOTA BEKASI",
        url: "https://www.youtube.com/embed/grWdWXe3cvU?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/grWdWXe3cvU/hqdefault.jpg"
    },
    {
        title: "Diskominfostandi Sosialisasi SPAN LAPOR! di Wilayah Kecamatan Pondokgede",
        url: "https://www.youtube.com/embed/ECN0cIH1b7Y?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/ECN0cIH1b7Y/hqdefault.jpg"
    },
    {
        title: "LIVE SAPA WARGA : Bertani di Kota, Solusi Pangan dan Lingkungan",
        url: "https://www.youtube.com/embed/8m0pFx13D8Y?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/8m0pFx13D8Y/hqdefault.jpg"
    },
    {
        title: "Diskominfostandi Sosialisasi SP4N LAPOR !!! di Wilayah Kec. Bantargebang",
        url: "https://www.youtube.com/embed/OHOJrSoyJO8?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/OHOJrSoyJO8/hqdefault.jpg"
    },
    {
        title: "LIVE : Upacara Peringatan Hari Kebangkitan Nasional ke-115 Tingkat Kota Bekasi Tahun 2023",
        url: "https://www.youtube.com/embed/FjfGQerk3z4?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/FjfGQerk3z4/hqdefault.jpg"
    },
    {
        title: "LIVE : Festival Adu Bedug &amp;  Dondang Ke-16 Mustikajaya 2023",
        url: "https://www.youtube.com/embed/dm8jTlnss_M?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/dm8jTlnss_M/hqdefault.jpg"
    },
    {
        title: "Pemkot Bekasi Menerima  Kunjungan Observasi Lapangan JFPH  Kementerian Kominfo RI",
        url: "https://www.youtube.com/embed/mZVpKOSOC_k?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/mZVpKOSOC_k/hqdefault.jpg"
    },
    {
        title: "Nikah Massal Juara, Persembahan Gubernur Jawa Barat Ridwan Kamil untuk Masyarakat Kota Bekasi",
        url: "https://www.youtube.com/embed/Le03h21-3gs?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/Le03h21-3gs/hqdefault.jpg"
    },
    {
        title: "Upacara Pembukaan TNI Manunggal Membangun Desa (TMMD) ke-116 Tahun 2023 di Kota Bekasi",
        url: "https://www.youtube.com/embed/q0SozIUkOGw?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/q0SozIUkOGw/hqdefault.jpg"
    },
    {
        title: "Sosialisasi SP4N Lapor Kecamatan Pondok Melati",
        url: "https://www.youtube.com/embed/JPAWEX_nvM8?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/JPAWEX_nvM8/hqdefault.jpg"
    },
    {
        title: "LIVE : Peluang Bekasi Keren Go Digital Kota Bekasi # Section 2",
        url: "https://www.youtube.com/embed/MV808vaCaBQ?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/MV808vaCaBQ/hqdefault.jpg"
    },
    {
        title: "LIVE  :  Peluang Bekasi Keren Go Digital Kota Bekasi",
        url: "https://www.youtube.com/embed/QQtKq15FGCI?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/QQtKq15FGCI/hqdefault.jpg"
    },
    {
        title: "LIVE : Khotmil Qur&#39;an Secara Virtual Bersama OPD Se-Kota Bekasi",
        url: "https://www.youtube.com/embed/mp3Wqwb54eA?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/mp3Wqwb54eA/hqdefault.jpg"
    },
    {
        title: "Pembongkaran Bangunan Bening Boutique Hotel  diatas Saluran Air",
        url: "https://www.youtube.com/embed/xkkFrOrXfWU?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/xkkFrOrXfWU/hqdefault.jpg"
    },
    {
        title: "Upacara Hari Pendidikan Nasional Tahun 2023",
        url: "https://www.youtube.com/embed/q8ic_NeTID0?rel=0&enablejsapi=1",
        thumbnail: "https://i.ytimg.com/vi/q8ic_NeTID0/hqdefault.jpg"
    },
];
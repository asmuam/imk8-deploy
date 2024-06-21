const path = window.location.pathname;
const segments = path.split('/');
let judul = segments[segments.length - 1]; // Ambil bagian terakhir dari path

// Hilangkan ekstensi .html jika ada
judul = judul.replace('.html', '');

// Jika judul memiliki spasi yang diencode sebagai %20, ganti dengan spasi biasa
judul = decodeURIComponent(judul);

  function berita(param) {
        // Cari berita berdasarkan judul yang sesuai dengan param
        const selectedBerita = beritaData.find(berita => berita.title === param);
        const tagsArray = selectedBerita ? selectedBerita.tags.split(',').map(tag => tag.trim()) : [];
        const isiBeritaHTML = selectedBerita.isi.replace(/\n\n/g, '<br><br>');
    return {
      berita: selectedBerita || {},
      tagsArray: tagsArray,
      isiBeritaHTML
    };
    }


const judulBreadcrumb = document.getElementById("judul-berita-bc");
const judulBerita = document.getElementById("judul-berita");

if (judulBerita!==null){
    judulBerita.textContent = judul;
} 
if (judulBreadcrumb!==null) {
    judulBreadcrumb.textContent = judul;
}


function carouselBerita() {
    return {
        slides: beritaData.slice(0,4),
        activeSlide: 0,
        interval: null,

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
        },
        autoSlide() {
            this.stopSlide(); // Ensure no multiple intervals are running
            this.interval = setInterval(() => {
                this.next();
            }, 10000); // Change slide every 10 seconds
        },
        stopSlide() {
            clearInterval(this.interval);
        },
        init() {
            this.autoSlide();
        }
    };
}



function popularArticle() {
        let tinggiKonten = document.getElementById("konten").offsetHeight;
        let sideContentNum = Math.ceil(tinggiKonten / 600);
        let numArticle, numVideo, numPhoto;
        if (sideContentNum < 3) {
        numArticle = sideContentNum * 3;
            if (numArticle < 6) {
                numArticle = 5;
            }
        } else {
        numArticle = sideContentNum;
        }
        if (numArticle > 3) {
        document.getElementById("popular-image").classList.add("hidden");
        document.getElementById("popular-video").classList.add("hidden");
        }
        popular = beritaData.slice(5, numArticle+4)
            return {
              slides: popular
            }
          }

function popularVideo() {
        let tinggiKonten = document.getElementById("konten").offsetHeight;
        let sideContentNum = Math.ceil(tinggiKonten / 600);
        let numVideo;

        if (sideContentNum < 3) {
            
        } else {
        numVideo = sideContentNum;
        }
        if (sideContentNum < 3) {
        document.getElementById("popular-video").classList.add("hidden");
        }
          popular = galleryVideo.slice(0, numVideo-1)
            return {
              slides: popular
            }
          }

function popularImage() {
            let tinggiKonten = document.getElementById("konten").offsetHeight;
        let sideContentNum = Math.ceil(tinggiKonten / 600);
        let numVideo;

        if (sideContentNum < 3) {
            
        } else {
        numVideo = sideContentNum;
        }

        if (sideContentNum < 3) {
        document.getElementById("popular-image").classList.add("hidden");
        }
          popular = galleryData.slice(0, numVideo-1)
            return {
              slides: popular
            }
          }
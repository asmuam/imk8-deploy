
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
judulBreadcrumb.textContent = judul;
judulBerita.textContent = judul;

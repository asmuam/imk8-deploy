    $(function () {
      let availableKeyword = [
        "Administrasi Kependudukan",
        "Online",
        "E-Open 2.0",
        "Upgrade",
        "Disdukcapil",
        "Sistem Informasi",
        "Monitoring",
        "Pengendalian",
        "Perindustrian",
        "Perdagangan",
        "Disdagperin",
        "Kejaksaan Negeri",
        "Laksmi Indriyah R",
        "Imran Yusuf",
        "Gani Muhamad",
        "Proyek PLTSa Bantargebang",
        "Konsorsium",
        "Tiongkok",
        "Pembangkit Listrik Tenaga Sampah",
        "PLTSa",
        "Lelang",
        "1,6 Triliun",
        "Bunda Literasi",
        "Yolla Kusuma Gani",
        "Kecamatan",
        "Kelurahan",
        "Tim dan Satgas Paaredi Cekas",
        "Workshop Pencegahan Kekerasan",
        "Dinas Pendidikan",
        "Satuan Pendidikan",
        "Kunjungan Kerja DPR RI Komisi VIII",
        "Gedung Pangudi Luhur",
        "HM Joyo Martono",
        "Margahayu Bekasi Timur",
        "Ketua Komisi VIII DPR RI",
        "Seminar Literasi Digital",
        "DWP Kominfo",
        "OASE Kabinet Indonesia Maju",
        "Balai Sudirman",
        "Jakarta Selatan",
        "Shalat Sunah Idul Adha",
        "Unsur Forkopimda",
        "Masjid Agung Al-Barkah",
        "Shalat Ied",
        "Nabi Ibrahim",
        "Nabi Ismail",
        "Ijtima' Sanawi",
        "LAZ Attaqwa",
        "Pondok Pesantren Putra",
        "Inayatullah",
      ];

      // Initialize autocomplete with max results limited to 6
      $("#searchInput").autocomplete({
        source: function(request, response) {
          const results = $.ui.autocomplete.filter(availableKeyword, request.term);
          response(results.slice(0, 6)); // Limit results to 6
        }
      });
    });

        // Your code here
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');

        searchForm.addEventListener('submit', function(event) {
          event.preventDefault();
          const query = searchInput.value.trim();
          if (query !== '') {
              localStorage.setItem('searchQuery', query);
              localStorage.removeItem('currentPage');
              window.location.href = `search.html?query=${encodeURIComponent(query)}`;
          }
      });

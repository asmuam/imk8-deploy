        // Variabel data JSON
var data = [
    { 
        "no": 1, 
        "walikota": "soedjono.jpg", 
        "namaWalikota": "H. SOEDJONO", 
        "masaJabatanWalikota": "Walikota Administratif Bekasi Periode 1982-1988", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    },
    { 
        "no": 2, 
        "walikota": "andi-sukardi.jpg", 
        "namaWalikota": "Drs. ANDI SUKARDI", 
        "masaJabatanWalikota": "Walikota Administratif Bekasi Periode 1988-1991", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    },
    { 
        "no": 3, 
        "walikota": "kailani.jpg", 
        "namaWalikota": "Drs. H. KAILANI. AR", 
        "masaJabatanWalikota": "Walikota Administratif Bekasi Periode 1991-1997, Walikota Bekasi Periode Maret 1997 - Oktober 1997", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    },
    { 
        "no": 4, 
        "walikota": "sonthanie.jpg", 
        "namaWalikota": "H. N. SONTHANIE", 
        "masaJabatanWalikota": "Walikota Bekasi Periode 1998-2003", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    },
    { 
        "no": 5, 
        "walikota": "akhmad zurfaih.jpg", 
        "namaWalikota": "AKHMAD ZURFAIH", 
        "masaJabatanWalikota": "Walikota Bekasi Periode 2003-2008", 
        "wakilWalikota": "mochtar mohamad.jpg", 
        "namaWakilWalikota": "MOCHTAR MOHAMAD", 
        "masaJabatanWakilWalikota": "Wakil Walikota Bekasi Periode 2003-2008" 
    },
    { 
        "no": 6, 
        "walikota": "mochtar mohamad.jpg", 
        "namaWalikota": "MOCHTAR MOHAMAD", 
        "masaJabatanWalikota": "Walikota Bekasi Periode 2008-2011", 
        "wakilWalikota": "rahmat-effendi.jpg", 
        "namaWakilWalikota": "Dr. RAHMAT EFFENDI", 
        "masaJabatanWakilWalikota": "Wakil Walikota Bekasi Periode 2008-2011" 
    },
    { 
        "no": 7, 
        "walikota": "rahmat-effendi.jpg", 
        "namaWalikota": "Dr. RAHMAT EFFENDI", 
        "masaJabatanWalikota": "Plt. Walikota Bekasi Periode 2011-2012", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    },
    { 
        "no": 8, 
        "walikota": "rahmat-effendi2.jpg", 
        "namaWalikota": "Dr. RAHMAT EFFENDI", 
        "masaJabatanWalikota": "Walikota Bekasi Periode 2012-2013", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    },
    { 
        "no": 9, 
        "walikota": "rahmat-effendi2.jpg", 
        "namaWalikota": "Dr. RAHMAT EFFENDI", 
        "masaJabatanWalikota": "Walikota Bekasi Periode 2013-2018", 
        "wakilWalikota": "ahmad-syaikhu.jpg", 
        "namaWakilWalikota": "AHMAD SYAIKHU", 
        "masaJabatanWakilWalikota": "Wakil Walikota Bekasi Periode 2013-2018" 
    },
    { 
        "no": 10, 
        "walikota": "rahmat-effendi2.jpg", 
        "namaWalikota": "Dr. RAHMAT EFFENDI", 
        "masaJabatanWalikota": "Walikota Bekasi Periode 2018-2022", 
        "wakilWalikota": "tri-adhianto-tjahyono.jpg", 
        "namaWakilWalikota": "Dr. TRI ADHIANTO TJAHYONO", 
        "masaJabatanWakilWalikota": "Wakil Walikota Bekasi Periode 2018-2022" 
    },
    { 
        "no": 11, 
        "walikota": "tri-adhianto-tjahyono.jpg", 
        "namaWalikota": "Dr. TRI ADHIANTO TJAHYONO", 
        "masaJabatanWalikota": "Plt. Walikota Bekasi", 
        "wakilWalikota": "", 
        "namaWakilWalikota": "", 
        "masaJabatanWakilWalikota": "" 
    }
];


      // Function untuk mengisi tabel dengan data
        function populateTable() {
            var tableBody = document.getElementById('daftar-walkot');
            if (tableBody){
                            data.forEach(item => {
                var row = document.createElement('tr');
                row.innerHTML = `
                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">${item.no}</td>
                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium"><div class="max-w-[88px] mx-auto"><img src="assets/images/${item.walikota}" alt="Walikota"></div></td>
                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium"><div class="font-bold">${item.namaWalikota}</div><span>${item.masaJabatanWalikota}</span></td>
                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                        ${item.wakilWalikota ? `<div class="max-w-[88px] mx-auto"><img src="assets/images/${item.wakilWalikota}" alt="Wakil Walikota"></div>` : '-'}
                    </td>
                    <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium">
                        ${item.namaWakilWalikota ? `<div class="font-bold">${item.namaWakilWalikota}</div><span>${item.masaJabatanWakilWalikota}</span>` : '-'}
                    </td>
                `;
                tableBody.appendChild(row);
            });
            }
        }

                    var data_opd = [
    { "nama_opd": "Sekretariat Daerah", "link": "https://k-cloud.bekasikota.go.id/s/SFLxPJTzBLQ8rKc" },
    { "nama_opd": "Sekretariat DPRD", "link": "https://k-cloud.bekasikota.go.id/s/nDWWfeHyLtMEjH4" },
    { "nama_opd": "Inspektorat", "link": "https://k-cloud.bekasikota.go.id/s/sEjzT3g4zTWSFsJ" },
    { "nama_opd": "Dinas Daerah", "link": "https://k-cloud.bekasikota.go.id/s/f9yPDzcETdcC88Z" },
    { "nama_opd": "Badan Daerah", "link": "https://k-cloud.bekasikota.go.id/s/gHeieLLiiMf64LH" },
    { "nama_opd": "RSUD", "link": "https://k-cloud.bekasikota.go.id/s/nWoFYdmZyK9woPf" },
    { "nama_opd": "Satpol PP", "link": "https://k-cloud.bekasikota.go.id/s/zPCcHwBFnQXfAxT" },
    { "nama_opd": "Kecamatan", "link": "https://k-cloud.bekasikota.go.id/s/jzYjgjkDoWZRqKK" },
    { "nama_opd": "Kelurahan", "link": "https://k-cloud.bekasikota.go.id/s/F8nZLFozYZb276L" },
    { "nama_opd": "UPTD", "link": "https://k-cloud.bekasikota.go.id/s/3pJdiynCgEJXT3N" }
];


        function populateTableStruktur() {
            // Ambil elemen <tbody> dari tabel dengan id "daftar-opd"
            var tbody = document.getElementById('daftar-opd');
                if (tbody){
                    // Loop melalui setiap elemen dalam variabel data_opd
            data_opd.forEach(function(item) {
                // Buat sebuah <tr> baru
                var row = document.createElement('tr');

                // Buat sebuah <td> untuk nama OPD dan tambahkan teks nama_opd ke dalamnya
                var namaOpdCell = document.createElement('td');
                namaOpdCell.textContent = item.nama_opd;
                namaOpdCell.className = "mx-8 text-dark border-b dark:bg-dark dark:text-white dark:border-dark dark:text-dark-7 py-5 px-11 text-base font-medium ";
                row.appendChild(namaOpdCell);

                // Buat sebuah <td> untuk link dan tambahkan tombol ke dalamnya
                var linkCell = document.createElement('td');
                linkCell.className = "border-b px-11 mx-8";
                var linkButton = document.createElement('a');
                linkButton.href = item.link;
                linkButton.className = "bg-secondary border-secondary rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5";
                linkButton.innerHTML = `
                    Lihat
                `;
                linkCell.appendChild(linkButton);
                row.appendChild(linkCell);

                // Tambahkan baris ini ke dalam elemen <tbody>
                tbody.appendChild(row);
            });
                }
        }

        // Panggil fungsi untuk mengisi tabel saat halaman dimuat
        document.addEventListener('DOMContentLoaded', populateTableStruktur);
        document.addEventListener('DOMContentLoaded', populateTable);

        
        // Variabel data JSON
        var data = [
            { "no": 1, "walikota": "soedjono.jpg", "namaWalikota": "Nama 1", "masaJabatanWalikota": "Masa Jabatan 1", "wakilWalikota": "andi-sukardi.jpg", "namaWakilWalikota": "Nama Wakil 1", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 1" },
            { "no": 2, "walikota": "andi-sukardi.jpg", "namaWalikota": "Nama 2", "masaJabatanWalikota": "Masa Jabatan 2", "wakilWalikota": "kailani.jpg", "namaWakilWalikota": "Nama Wakil 2", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 2" },
            { "no": 3, "walikota": "kailani.jpg", "namaWalikota": "Nama 3", "masaJabatanWalikota": "Masa Jabatan 3", "wakilWalikota": "soedjono.jpg", "namaWakilWalikota": "Nama Wakil 3", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 3" }
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
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium"><div>${item.namaWalikota}</div><div>${item.masaJabatanWalikota}</div></td>
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium"><div class="max-w-[88px] mx-auto"><img src="assets/images/${item.wakilWalikota}" alt="Wakil Walikota"></div></td>
                        <td class="text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium"><div>${item.namaWakilWalikota}</div><div>${item.masaJabatanWakilWalikota}</div></td>
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

        
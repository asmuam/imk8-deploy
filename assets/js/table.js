        // Variabel data JSON
        var data = [
            { "no": 1, "walikota": "soedjono.jpg", "namaWalikota": "Nama 1", "masaJabatanWalikota": "Masa Jabatan 1", "wakilWalikota": "andi-sukardi.jpg", "namaWakilWalikota": "Nama Wakil 1", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 1" },
            { "no": 2, "walikota": "andi-sukardi.jpg", "namaWalikota": "Nama 2", "masaJabatanWalikota": "Masa Jabatan 2", "wakilWalikota": "kailani.jpg", "namaWakilWalikota": "Nama Wakil 2", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 2" },
            { "no": 3, "walikota": "kailani.jpg", "namaWalikota": "Nama 3", "masaJabatanWalikota": "Masa Jabatan 3", "wakilWalikota": "soedjono.jpg", "namaWakilWalikota": "Nama Wakil 3", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 3" }
        ];

        // Function untuk mengisi tabel dengan data
        function populateTable() {
            var tableBody = document.getElementById('daftar-walkot');
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

        // Panggil fungsi untuk mengisi tabel saat halaman dimuat
        document.addEventListener('DOMContentLoaded', populateTable);

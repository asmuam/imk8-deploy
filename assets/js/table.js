        // Variabel data JSON
        var data = [
            { "no": 1, "walikota": "soedjono.jpg", "namaWalikota": "Nama 1", "masaJabatanWalikota": "Masa Jabatan 1", "wakilWalikota": "andi-sukardi.jpg", "namaWakilWalikota": "Nama Wakil 1", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 1" },
            { "no": 2, "walikota": "andi-sukardi.jpg", "namaWalikota": "Nama 2", "masaJabatanWalikota": "Masa Jabatan 2", "wakilWalikota": "kailani.jpg", "namaWakilWalikota": "Nama Wakil 2", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 2" },
            { "no": 3, "walikota": "kailani.jpg", "namaWalikota": "Nama 3", "masaJabatanWalikota": "Masa Jabatan 3", "wakilWalikota": "soedjono.jpg", "namaWakilWalikota": "Nama Wakil 3", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 3" }
        ];

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
                namaOpdCell.className = "text-dark border-b border-l border-[#E8E8E8] bg-[#F3F6FF] dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-2 text-center text-base font-medium";
                row.appendChild(namaOpdCell);

                // Buat sebuah <td> untuk link dan tambahkan tombol ke dalamnya
                var linkCell = document.createElement('td');
                var linkButton = document.createElement('a');
                linkButton.href = item.link;
                linkButton.className = "bg-secondary border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5";
                linkButton.innerHTML = `
                    <span class="pr-[10px]">
                        <svg 
                            width="20" 
                            height="20" 
                            viewBox="0 0 20 20" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                            class="fill-current"
                        >
                            <g clip-path="url(#clip0_906_8052)">
                                <path 
                                    d="M13.1875 9.28125H10.6875V6.8125C10.6875 6.4375 10.375 6.125 9.96875 6.125C9.59375 6.125 9.28125 6.4375 9.28125 6.84375V9.3125H6.8125C6.4375 9.3125 6.125 9.625 6.125 10.0312C6.125 10.4062 6.4375 10.7187 6.84375 10.7187H9.3125V13.1875C9.3125 13.5625 9.625 13.875 10.0312 13.875C10.4062 13.875 10.7187 13.5625 10.7187 13.1562V10.6875H13.1875C13.5625 10.6875 13.875 10.375 13.875 9.96875C13.875 9.59375 13.5625 9.28125 13.1875 9.28125Z"
                                />
                                <path 
                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.8125 19.4688 10.0312 19.4688C15.25 19.4688 19.5 15.2188 19.5 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.5625 18.0625 10C18.0625 14.4375 14.4375 18.0625 10 18.0625Z" 
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_906_8052">
                                    <rect 
                                        width="20" 
                                        height="20" 
                                        fill="white"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    Button
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

                // Variabel data JSON
        var data = [
            { "no": 1, "walikota": "soedjono.jpg", "namaWalikota": "Nama 1", "masaJabatanWalikota": "Masa Jabatan 1", "wakilWalikota": "andi-sukardi.jpg", "namaWakilWalikota": "Nama Wakil 1", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 1" },
            { "no": 2, "walikota": "andi-sukardi.jpg", "namaWalikota": "Nama 2", "masaJabatanWalikota": "Masa Jabatan 2", "wakilWalikota": "kailani.jpg", "namaWakilWalikota": "Nama Wakil 2", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 2" },
            { "no": 3, "walikota": "kailani.jpg", "namaWalikota": "Nama 3", "masaJabatanWalikota": "Masa Jabatan 3", "wakilWalikota": "soedjono.jpg", "namaWakilWalikota": "Nama Wakil 3", "masaJabatanWakilWalikota": "Masa Jabatan Wakil 3" }
        ];

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
                namaOpdCell.className = "mx-8 text-dark border-b dark:bg-dark-3 dark:border-dark dark:text-dark-7 py-5 px-11 text-base font-medium ";
                row.appendChild(namaOpdCell);

                // Buat sebuah <td> untuk link dan tambahkan tombol ke dalamnya
                var linkCell = document.createElement('td');
                linkCell.className = "border-b px-11 mx-8";
                var linkButton = document.createElement('a');
                linkButton.href = item.link;
                linkButton.className = "bg-secondary border-secondary border rounded-full inline-flex items-center justify-center py-3 px-7 text-center text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5";
                linkButton.innerHTML = `
                    Button
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

        
// Variabel data JSON

var data_opd = [
    {"nama_dokumen": "APBD 2023", "link": "https://bpkad.bekasikota.go.id/pages/ringkasan-apbd"},
    {"nama_dokumen": "Perda 2023", "link": "https://bpkad.bekasikota.go.id/pages/peraturan-daerah"},
    {"nama_dokumen": "APBD 2022", "link": "https://drive.google.com/file/d/1IH3cJw3OQH8NUW-Q-98JTAVnjrzkMUhh/view?usp=sharing"},
    {"nama_dokumen": "APBDP 2022", "link": "https://bpkad.bekasikota.go.id/pages/ringkasan-apbd"},
    {"nama_dokumen": "APBD 2021", "link": "https://drive.google.com/file/d/1KBqERtnUOtPRRkXPHAu5swVYvFmPWWcX/view?usp=sharing"},
    {"nama_dokumen": "APBD P 2021", "link": "https://drive.google.com/file/d/17GgPntyXq8DmtZIESTGCiDkA83Z35z2z/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2021", "link": "https://drive.google.com/file/d/1g8G9_9-6ykPeS98DXqhXwuJb3PCDXrFf/view?usp=sharing"},
    {"nama_dokumen": "Penjabaran APBD 2021", "link": "https://jdih.bekasikota.go.id/peraturan-walikota/view?id=2260"},
    {"nama_dokumen": "Perda 2020", "link": "https://drive.google.com/file/d/1iLNpl8iLa5h_21VXnDIBJ0asCa0AVB4S/view?usp=sharing"},
    {"nama_dokumen": "APBD P 2020", "link": "https://drive.google.com/file/d/1zTEWk0TvFo_V_VMu2jvy32N4BcUzFM7l/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2020", "link": "https://drive.google.com/file/d/1GTiqcOEV2aSp7QR0bbM3PRhfacMglJCc/view?usp=sharing"},
    {"nama_dokumen": "APBD 2019", "link": "https://drive.google.com/file/d/18aDV3iFsQrHI8GHHWhjeU5FyX3HWC40I/view?usp=sharing"},
    {"nama_dokumen": "APBD P 2019", "link": "https://drive.google.com/file/d/17OMZsJe4gPmY-s19qsT4G7LOe8UXHLpm/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2019", "link": "https://drive.google.com/file/d/1QHo9WtzfimVTiw-EnB0RvqHsSl79jQRO/view?usp=sharing"},
    {"nama_dokumen": "APBD 2018", "link": "https://drive.google.com/file/d/1qEYByAs9AA93Bg3gFZLIGA9i4iqwl8tX/view?usp=sharing"},
    {"nama_dokumen": "APBD-P 2018", "link": "https://drive.google.com/file/d/1pfJXFQIpGtv3TlhplrbuWVHGlZD369ep/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2018", "link": "https://drive.google.com/file/d/1CS2NIafMXgs6FKtthJ7Cl74tznWst6kZ/view?usp=sharing"},
    {"nama_dokumen": "APBD 2017", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_WHJ6akt6Y0J2Ym8/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2017", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_QkZndVVBVU1MOWM/view?usp=sharing"},
    {"nama_dokumen": "APBD P 2017", "link": "https://drive.google.com/file/d/1VCFhKRDDFUAOnKDnjhHK6b4yfax4zT92/view?usp=sharing"},
    {"nama_dokumen": "APBD 2016", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_WWFoOXh0a3BzSDQ/view?usp=sharing&resourcekey=0-hztT5jVTl4zUQ_wby1po5Q"},
    {"nama_dokumen": "Perwal 2016", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_NXZDTGJjOUV5Tms/view?usp=sharing"},
    {"nama_dokumen": "APBD P-2016", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_ZkEtX0JVazZFNms/view?usp=sharing"},
    {"nama_dokumen": "Perwal P-2016", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_aEtodDIxMTZGOGM/view?usp=sharing"},
    {"nama_dokumen": "APBD 2015", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_T0p2OTEyTlJzdmc/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2015", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_TWhjb2stX1NRQkE/view?usp=sharing"},
    {"nama_dokumen": "APBD P-2015", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_ek9mSjRXUFZBTk0/view?usp=sharing"},
    {"nama_dokumen": "Perwal P-2015", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_Wkxlb09fSjJJT1k/view?usp=sharing"},
    {"nama_dokumen": "APBD 2014", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_cjBLZjBnb0k3M2s/view?usp=sharing"},
    {"nama_dokumen": "Perwal 2014", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_Y1YwcktpQl84d1U/view?usp=sharing"},
    {"nama_dokumen": "APBD 2013", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_amVqVl9ObzAxVG8/view?usp=sharing"},
    {"nama_dokumen": "APBD 2012", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_Qm9OYkp1X3ZrbUk/view?usp=sharing"},
    {"nama_dokumen": "APBD 2011", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_bWRqellNUk1xMm8/view?usp=sharing"},
    {"nama_dokumen": "Realisasi APBD 2011", "link": "https://drive.google.com/file/d/0B8tADe1uDVg_OTVfUzVkbHJYVGs/view?usp=sharing"},
    {"nama_dokumen": "RKPDP 2022", "link": "https://drive.google.com/file/d/1xqNYn1LNvfz81jO3B0Zh8ynp0iirMA71/view?usp=sharing"},
    {"nama_dokumen": "RKPDP 2021", "link": "https://drive.google.com/file/d/1NMiuMzegsY3YWUO9rNVD8fOol7_EMPR-/view?usp=sharing"},
    {"nama_dokumen": "RKPDP 2020", "link": "https://drive.google.com/file/d/1ip3g_tubl3rjtLWwGUIl9qdSDvWhlZj-/view?usp=sharing"},
    {"nama_dokumen": "RKPDP 2019", "link": "https://drive.google.com/file/d/102NLJxAJ72C_Rkbm7NQBelRIldaosCBF/view?usp=sharing"},
    {"nama_dokumen": "RKPDP 2018", "link": "https://drive.google.com/file/d/1UaJfJc-5HHbiNLVu9bRTcJMyiKUqsQlZ/view?usp=sharing"},
    {"nama_dokumen": "KUA 2018", "link": "https://drive.google.com/file/d/1JONqwljDDRrPBaR6RTeabs0PnKR8OzmN/view?usp=sharing"},
    {"nama_dokumen": "KUA 2019", "link": "https://drive.google.com/file/d/19b7PbdXAb_ZDIwnDX4-70oay54u5r_Ds/view?usp=sharing"},
    {"nama_dokumen": "KUA 2020", "link": "https://drive.google.com/file/d/1vDmSmwC5vw-5ad_Q0Ho0ZfTtH3ES7L0h/view?usp=sharing"}
];


// Fungsi untuk membersihkan string numerik dari pemisah ribuan dan koma
function cleanNumericString(value) {
    return parseFloat(value.replace(/[,.]/g, ''));
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

function populateTableStruktur() {
    // Ambil elemen <tbody> dari tabel dengan id "daftar-opd"
    var tbody = document.getElementById('daftar-opd');
        if (tbody){
            // Loop melalui setiap elemen dalam variabel data_opd
    data_opd.forEach(function(item) {
        // Buat sebuah <tr> baru
        var row = document.createElement('tr');
            row.className = "border-b dark:border-dark h-70px";

        // Buat sebuah <td> untuk nama OPD dan tambahkan teks nama_opd ke dalamnya
        var namaOpdCell = document.createElement('td');
        namaOpdCell.textContent = item.nama_dokumen;
        namaOpdCell.className = " mx-8 text-dark dark:bg-dark dark:text-white dark:border-dark dark:text-dark-7 py-5 px-11 text-base font-medium ";
        row.appendChild(namaOpdCell);

        // Buat sebuah <td> untuk link dan tambahkan tombol ke dalamnya
        var linkCell = document.createElement('td');
        linkCell.className = " px-11  py-5 flex justify-end";
        var linkButton = document.createElement('a');
        linkButton.href = item.link;
        linkButton.className = "bg-secondary -secondaryborder rounded-full inline-flex  py-3 px-7 text-base font-medium text-white hover:bg-[#0BB489] hover:border-[#0BB489] disabled:bg-gray-3 disabled:border-gray-3 disabled:text-dark-5";
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

// Data mentah dalam rupiah
const pendapatan2022 = 5296559850449;
const pendapatan2023 = 5799481642839;
const pendapatan2024 = 6224886445137;

const belanja2022 = 5574687535313;
const belanja2023 = 5933765026438;
const belanja2024 = 6375653318098;

const pembiayaan2022 = 278127684864;
const pembiayaan2023 = 134283383599;
const pembiayaan2024 = 150766872961;

// Faktor untuk membagi dengan 1 triliun Rupiah
const TRILION = 1000000000000;

// Menghitung nilai dalam triliun Rupiah
const data = {
    labels: ["2022", "2023", "2024"],
    datasets: [
        {
            label: "Jumlah Pendapatan (Triliun Rupiah)",
            data: [
                pendapatan2022 / TRILION,
                pendapatan2023 / TRILION,
                pendapatan2024 / TRILION
            ],
            borderColor: "rgba(54, 162, 235, 1)",
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            fill: true,
        },
        {
            label: "Jumlah Belanja (Triliun Rupiah)",
            data: [
                belanja2022 / TRILION,
                belanja2023 / TRILION,
                belanja2024 / TRILION
            ],
            borderColor: "rgba(255, 99, 132, 1)",
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            fill: true,
        },
        {
            label: "Pembiayaan Netto (Triliun Rupiah)",
            data: [
                pembiayaan2022 / TRILION,
                pembiayaan2023 / TRILION,
                pembiayaan2024 / TRILION
            ],
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            fill: true,
        }
    ]
};


document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('apbdChart').getContext('2d');
    var apbdChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Tahun'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Triliun Rupiah'
                    }
                }
            }
        }
    });
});


// sankey
// pakai cleanNumericString jika data ada pemisah ribuan (.)


var theme = localStorage.getItem('theme') || 'light'; // Ambil tema dari localStorage
var textColor = (theme === 'dark') ? '#fff' : '#000'; // Tentukan warna teks berdasarkan tema

// Opsi untuk chart Sankey
const sankeyOptions = {
    scaleFontColor: "#FFFFFF",
    spriteText: true,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                var dataset = tooltipItem.dataset;
                var index = tooltipItem.dataIndex;
                var data = dataset.data[index];
                var flow = data.flow;
                var label = '';

                // Jika dataset adalah pendapatan (gunakan 'from')
                if (dataset.label === 'Pendapatan') {
                  var from = data.from;
                  label = `${from}: ${formatFlow(flow)}`;
                }
                // Jika dataset adalah pengeluaran (gunakan 'to')
                else if (dataset.label === 'Pengeluaran') {
                  var to = data.to;
                  label = `${to}: ${formatFlow(flow)}`;
                }

                return label;
              }
            },
        },
        datalabels: {
          color: '#FFFF5F', // Color of the datalabels
      },
    },
    scales: {},
    layout: {
        padding: {
        },
        align: 'justify' // Atur penyejajaran elemen Sankey (justify, center, atau end)
    },
    sankey: {
        node: {
          label: {
            color: "ffff" // Gunakan warna teks berdasarkan variabel theme
          }
        },
        nodePadding: 15, // Atur padding antar node
        nodeWidth: 30, // Atur lebar node
        iterations: 32 // Jumlah iterasi untuk konvergensi layout Sankey
    }
};


const pendapatanData = [
    { from: "Pajak Daerah", to: "Pendapatan Asli Daerah (PAD)", flow: 2687391884000 },
    { from: "Retribusi Daerah", to: "Pendapatan Asli Daerah (PAD)", flow: 459318088567 },
    { from: "Hasil Pengelolaan Kekayaan Daerah yang Dipisahkan", to: "Pendapatan Asli Daerah (PAD)", flow: 14399150000 },
    { from: "Lain-lain PAD yang Sah", to: "Pendapatan Asli Daerah (PAD)", flow: 42691573000 },
    { from: "Pendapatan Transfer Pemerintah Pusat", to: "Pendapatan Transfer", flow: 2050528079000 },
    { from: "Pendapatan Transfer Antar Daerah", to: "Pendapatan Transfer", flow: 970557670570 },
    { from: "Pendapatan Asli Daerah (PAD)", to: "Pendapatan Daerah", flow: 3203800695567 },
    { from: "Pendapatan Transfer", to: "Pendapatan Daerah", flow: 3021085749570 },
    { from: "Pendapatan Daerah", to: "Jumlah Pendapatan", flow: 6224886445137 },
    { from: "Sisa Lebih Perhitungan Anggaran Tahun Sebelumnya", to: "Penerimaan Pembiayaan", flow: 131294484961 },
    { from: "Pencairan Dana Cadangan", to: "Penerimaan Pembiayaan", flow: 67472388000 },
    { from: "Sisa Lebih Perhitungan Anggaran Tahun Sebelumnya", to: "Penerimaan Pembiayaan", flow: 131294484961 },
    { from: "Penerimaan Pembiayaan", to: "Jumlah Pendapatan", flow: 198766872961 },
];



  var priority = {};

  function getColorByName(name) {
    return  "rgb(135, 206, 250)";
  }


    var labels = {
        'Sisa Lebih Perhitungan Anggaran Tahun Sebelumnya':'SILPA 2023',
    }

      function formatFlow(flow) {
    if (flow >= 1e12) {
      return (flow / 1e12).toFixed(1) + ' TRILIUN'; // Convert to trillion
    } else if (flow >= 1e9) {
      return (flow / 1e9).toFixed(1) + ' MILYAR'; // Convert to billion
    } else if (flow >= 1e6) {
      return (flow / 1e6).toFixed(1) + ' JT'; // Convert to million
    } else {
      return flow.toString(); // Keep as is for smaller numbers
    }
  }


const pengeluaranData = [
    { from: "Belanja Operasi", to: "Belanja Pegawai", flow: 2409198812592 },
    { from: "Belanja Operasi", to: "Belanja Barang dan Jasa", flow: 2559466516509 },
    { from: "Belanja Operasi", to: "Belanja Subsidi", flow: 8215000000 },
    { from: "Belanja Operasi", to: "Belanja Hibah", flow: 311484722700 },
    { from: "Belanja Operasi", to: "Belanja Bantuan Sosial", flow: 1200000000 },
    { from: "Belanja Modal", to: "Belanja Modal Tanah", flow: 114343043000 },
    { from: "Belanja Modal", to: "Belanja Modal Peralatan dan Mesin", flow: 220670537689 },
    { from: "Belanja Modal", to: "Belanja Modal Gedung dan Bangunan", flow: 388721352888 },
    { from: "Belanja Modal", to: "Belanja Modal Jalan, Jaringan, dan Irigasi", flow: 260211608480 },
    { from: "Belanja Modal", to: "Belanja Modal Aset Tetap Lainnya", flow: 4313960663 },
    { from: "Belanja Modal", to: "Belanja Modal Aset Lainnya", flow: 594485000 },
    { from: "Belanja Daerah", to: "Belanja Operasi", flow: 5289565051801 },
    { from: "Belanja Daerah", to: "Belanja Modal", flow: 988854987720 },
    { from: "Belanja Daerah", to: "Belanja Tidak Terduga", flow: 47233278577 },
    { from: "Belanja Daerah", to: "Belanja Transfer", flow: 50000000000 },
    { from: "Pengeluaran Pembiayaan", to: "Penyertaan Modal Daerah", flow: 48000000000 },
    { from: "Jumlah Pengeluaran", to: "Belanja Daerah", flow: 6375653318098 },
    { from: "Jumlah Pengeluaran", to: "Pengeluaran Pembiayaan", flow: 48000000000 },
];


function getColorByNameR(name) {
  return "rgb(255, 182, 193)";
}

    var combinedData = {
  datasets: [
    {
      label: 'Pendapatan',
      labels: labels,
      data: pendapatanData,
      colorFrom: (c) => getColorByName(c.dataset.data[c.dataIndex].from),
      colorTo: (c) => getColorByName(c.dataset.data[c.dataIndex].to),
      priority: priority,
      column: {
        "Penerimaan Pembiayaan": 2,
        "Pencairan Dana Cadangan": 1,
        "Sisa Lebih Perhitungan Anggaran Tahun Sebelumnya": 1,
      },
    },
    {
      label: 'Pengeluaran',
      data: pengeluaranData,
      colorFrom: (c) => getColorByNameR(c.dataset.data[c.dataIndex].from),
      colorTo: (c) => getColorByNameR(c.dataset.data[c.dataIndex].to),
      priority: { // define if you have priorities
        "Belanja Daerah": 1,
      },
      column: {
        "Belanja Tidak Terduga": 1,
        "Belanja Transfer": 1,
        "Sisa Lebih Perhitungan Anggaran Tahun Sebelumnya": 1,
        "Jumlah Pengeluaran": 4,
        "Belanja Daerah": 5,
        "Belanja Operasi": 6,
        "Belanja Modal": 6,
        "Belanja Tidak Terduga": 6,
        "Belanja Transfer": 6,
        "Pengeluaran Pembiayaan": 6,
        "Belanja Pegawai": 7,
        "Belanja Barang dan Jasa": 7,
        "Belanja Subsidi": 7,
        "Belanja Hibah": 7,
        "Belanja Bantuan Sosial": 7,
        "Belanja Modal Tanah": 7,
        "Belanja Modal Peralatan dan Mesin": 7,
        "Belanja Modal Gedung dan Bangunan": 7,
        "Belanja Modal Jalan, Jaringan, dan Irigasi": 7,
        "Belanja Modal Aset Tetap Lainnya": 7,
        "Belanja Modal Aset Lainnya": 7,
        "Penyertaan Modal Daerah": 7,
      },
    },
  ]
};



// Inisialisasi chart Sankey
var ctx = document.getElementById('combinedSankey').getContext('2d');
var combinedSankey = new Chart(ctx, {
  type: 'sankey',
  data: combinedData,
  options: 
    sankeyOptions,
});



// Ambil elemen canvas
var canvas = document.getElementById('combinedSankey');

// Periksa apakah elemen canvas sudah dimuat
if (canvas) {
  // Atur fokus ke tengah elemen canvas setelah dokumen HTML diurai (DOMContentLoaded)
  document.addEventListener('DOMContentLoaded', function() {
    var chartContainer = document.getElementById('chart-container');

    // Atur scroll ke tengah elemen canvas
    chartContainer.scrollTo({
      left: (canvas.offsetWidth - chartContainer.clientWidth) / 2,
      top: (canvas.offsetHeight - chartContainer.clientHeight) / 2,
      behavior: 'auto' // Anda bisa mengatur 'smooth' untuk animasi scroll yang halus
    });
  });
}


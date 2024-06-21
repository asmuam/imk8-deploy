function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
    
var galleryData = [
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

 function fotoPagination() {
            return {
                galleryData: galleryData,
                itemsPerPage: 15,
                currentPage: 1,
                modalOpen: false,
                modalImage: '',
                get totalPages() {
                    return Math.ceil(this.galleryData.length / this.itemsPerPage);
                },
                get paginatedGalleryData() {
                    let paginatedData = [];
                    for (let i = 0; i < this.totalPages; i++) {
                        paginatedData.push(this.galleryData.slice(i * this.itemsPerPage, (i + 1) * this.itemsPerPage));
                    }
                    return paginatedData;
                },
                showPage(page) {
                    this.currentPage = page;
                },
                updatePaginationButtons(page) {
                    document.querySelectorAll('.pageFoto-btn').forEach(button => {
                        if (parseInt(button.id.replace('pageFoto-', '')) === page) {
                            button.classList.add('bg-primary', 'text-white');
                            button.classList.remove('text-dark');
                        } else {
                            button.classList.add('text-dark');
                            button.classList.remove('bg-primary', 'text-white');
                        }
                    });
                },
                prevPage() {
                    if (this.currentPage > 1) {
                        this.currentPage--;
                    }
                    scrollToTop()
                },
                nextPage() {
                    if (this.currentPage < this.totalPages) {
                        this.currentPage++;
                    }
                    scrollToTop()
                },
                goToPage(page) {
                    this.currentPage = page;
                    scrollToTop()
                },
                openModal(imageUrl) {
                    this.modalImage = imageUrl;
                    this.modalOpen = true;
                }
            };
        }

// function fotoPagination() {
// let currentPageFoto = 1;
// const totalPagesFoto = 2; // Update this according to the number of pages you have

// function showPageFoto(page) {
//     document.querySelectorAll('.pageFoto').forEach((pageDiv, index) => {
//         if (index + 1 === page) {
//             pageDiv.classList.remove('hidden');
//         } else {
//             pageDiv.classList.add('hidden');
//         }
//     });
//     updatePaginationButtonsFoto(page);
//     scrollToTop();
// }

// function updatePaginationButtonsFoto(page) {
//     document.querySelectorAll('.pageFoto-btn').forEach(button => {
//         if (parseInt(button.id.replace('pageFoto-', '')) === page) {
//             button.classList.add('bg-primary', 'text-white');
//             button.classList.remove('text-dark', 'hover:bg-primary');
//         } else {
//             button.classList.add('text-dark', 'hover:bg-primary');
//             button.classList.remove('bg-primary', 'text-white');
//         }
//     });
// }

// document.querySelectorAll('.pageFoto-btn').forEach(button => {
//     button.addEventListener('click', function() {
//         const page = parseInt(this.id.replace('pageFoto-', ''));
//         currentPageFoto = page;
//         showPageFoto(page);
//     });
// });

// document.getElementById('prevFoto').addEventListener('click', function() {
//     if (currentPageFoto > 1) {
//         currentPageFoto--;
//         showPageFoto(currentPageFoto);
//     }
// });

// document.getElementById('nextFoto').addEventListener('click', function() {
//     if (currentPageFoto < totalPagesFoto) {
//         currentPageFoto++;
//         showPageFoto(currentPageFoto);
//     }
// });

// // Initialize the first page
// showPageFoto(currentPageFoto);
// }

function videoPagination() {
    let currentPageVideo = 1;
    const totalPagesVideo = 2; // Update this according to the number of pages you have

    function showPageVideo(page) {
        document.querySelectorAll('.pageVideo').forEach((pageDiv, index) => {
            if (index + 1 === page) {
                pageDiv.classList.remove('hidden');
            } else {
                pageDiv.classList.add('hidden');
            }
        });
        updatePaginationButtonsVideo(page);
        scrollToTop();
    }

    function updatePaginationButtonsVideo(page) {
        document.querySelectorAll('.pageVideo-btn').forEach(button => {
            if (parseInt(button.id.replace('pageVideo-', '')) === page) {
                button.classList.add('bg-primary', 'text-white');
                button.classList.remove('text-dark', 'hover:bg-primary');
            } else {
                button.classList.add('text-dark', 'hover:bg-primary');
                button.classList.remove('bg-primary', 'text-white');
            }
        });
    }

    document.querySelectorAll('.pageVideo-btn').forEach(button => {
        button.addEventListener('click', function() {
            const page = parseInt(this.id.replace('pageVideo-', ''));
            currentPageVideo = page;
            showPageVideo(page);
        });
    });

    document.getElementById('prevVideo').addEventListener('click', function() {
        if (currentPageVideo > 1) {
            currentPageVideo--;
            showPageVideo(currentPageVideo);
        }
    });

    document.getElementById('nextVideo').addEventListener('click', function() {
        if (currentPageVideo < totalPagesVideo) {
            currentPageVideo++;
            showPageVideo(currentPageVideo);
        }
    });

    // Initialize the first page
    showPageVideo(currentPageVideo);
}


    function closeModalAndPauseVideo() {
        const modalVideo = document.getElementById('modalVideo');
        if (modalVideo) {
            var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
            iframe.postMessage(
                '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
                "*"
            );
        }
        this.modalOpen = false; // Menutup modal
    }


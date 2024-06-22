function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
    

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
                Openmodal(imageUrl) {
                    this.modalImage = imageUrl;
                    this.modalOpen = true;
                }
            };
        }





 function videoPagination() {
            return {
                galleryVideo: galleryVideo,
                itemsPerPage: 15,
                currentPage: 1,
                modalOpen: false,
                modalVideo: '',
                get totalPages() {
                    return Math.ceil(this.galleryVideo.length / this.itemsPerPage);
                },
                get paginatedGalleryVideo() {
                    let paginatedVideo = [];
                    for (let i = 0; i < this.totalPages; i++) {
                        paginatedVideo.push(this.galleryVideo.slice(i * this.itemsPerPage, (i + 1) * this.itemsPerPage));
                    }
                    return paginatedVideo;
                },
                showPage(page) {
                    this.currentPage = page;
                },
                updatePaginationButtons(page) {
                    document.querySelectorAll('.pageVideo-btn').forEach(button => {
                        if (parseInt(button.id.replace('pageVideo-', '')) === page) {
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
                Openmodal(videoUrl) {
                    this.modalVideo = videoUrl;
                    this.modalOpen = true;
                }
            };
        }

// function videoPagination() {
//     let currentPageVideo = 1;
//     const totalPagesVideo = 2; // Update this according to the number of pages you have

//     function showPageVideo(page) {
//         document.querySelectorAll('.pageVideo').forEach((pageDiv, index) => {
//             if (index + 1 === page) {
//                 pageDiv.classList.remove('hidden');
//             } else {
//                 pageDiv.classList.add('hidden');
//             }
//         });
//         updatePaginationButtonsVideo(page);
//         scrollToTop();
//     }

//     function updatePaginationButtonsVideo(page) {
//         document.querySelectorAll('.pageVideo-btn').forEach(button => {
//             if (parseInt(button.id.replace('pageVideo-', '')) === page) {
//                 button.classList.add('bg-primary', 'text-white');
//                 button.classList.remove('text-dark', 'hover:bg-primary');
//             } else {
//                 button.classList.add('text-dark', 'hover:bg-primary');
//                 button.classList.remove('bg-primary', 'text-white');
//             }
//         });
//     }

//     document.querySelectorAll('.pageVideo-btn').forEach(button => {
//         button.addEventListener('click', function() {
//             const page = parseInt(this.id.replace('pageVideo-', ''));
//             currentPageVideo = page;
//             showPageVideo(page);
//         });
//     });

//     document.getElementById('prevVideo').addEventListener('click', function() {
//         if (currentPageVideo > 1) {
//             currentPageVideo--;
//             showPageVideo(currentPageVideo);
//         }
//     });

//     document.getElementById('nextVideo').addEventListener('click', function() {
//         if (currentPageVideo < totalPagesVideo) {
//             currentPageVideo++;
//             showPageVideo(currentPageVideo);
//         }
//     });

//     // Initialize the first page
//     showPageVideo(currentPageVideo);
// }


function closeModalAndPauseVideo() {
    const modalVideo = document.getElementById('modalVideo');
        if (modalVideo) {
            var iframe = document.getElementsByTagName("iframe")[0].contentWindow;
                iframe.postMessage(
                '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',"*"
            );
        }
    this.modalOpen = false; // Menutup modal
}


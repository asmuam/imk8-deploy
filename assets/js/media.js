    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    function fotoPagination() {
    let currentPageFoto = 1;
    const totalPagesFoto = 2; // Update this according to the number of pages you have

    function showPageFoto(page) {
        document.querySelectorAll('.pageFoto').forEach((pageDiv, index) => {
            if (index + 1 === page) {
                pageDiv.classList.remove('hidden');
            } else {
                pageDiv.classList.add('hidden');
            }
        });
        updatePaginationButtonsFoto(page);
        scrollToTop();
    }

    function updatePaginationButtonsFoto(page) {
        document.querySelectorAll('.pageFoto-btn').forEach(button => {
            if (parseInt(button.id.replace('pageFoto-', '')) === page) {
                button.classList.add('bg-primary', 'text-white');
                button.classList.remove('text-dark', 'hover:bg-primary');
            } else {
                button.classList.add('text-dark', 'hover:bg-primary');
                button.classList.remove('bg-primary', 'text-white');
            }
        });
    }

    document.querySelectorAll('.pageFoto-btn').forEach(button => {
        button.addEventListener('click', function() {
            const page = parseInt(this.id.replace('pageFoto-', ''));
            currentPageFoto = page;
            showPageFoto(page);
        });
    });

    document.getElementById('prevFoto').addEventListener('click', function() {
        if (currentPageFoto > 1) {
            currentPageFoto--;
            showPageFoto(currentPageFoto);
        }
    });

    document.getElementById('nextFoto').addEventListener('click', function() {
        if (currentPageFoto < totalPagesFoto) {
            currentPageFoto++;
            showPageFoto(currentPageFoto);
        }
    });

    // Initialize the first page
    showPageFoto(currentPageFoto);
}

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


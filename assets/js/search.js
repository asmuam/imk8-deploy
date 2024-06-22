   function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

function searchPagination() {
    return {
        result: [],
        totalResult:'',
        itemsPerPage: 6,
        currentPage: 1,
        totalPages: 1,
        paginatedResult: [],
        query: '',
        filterType: 'all', // Default filter type
        sortOption: 'newest', // Default sorting option

        init() {
            this.getFilteredResults();
            this.totalPages = Math.ceil(this.result.length / this.itemsPerPage);
            this.paginatedResult = this.getPaginatedResult();
            this.totalResult = this.result.length;
        },

                changeFilterType(newFilterType) {
                    this.filterType = newFilterType;
                    this.updateFilteredResults(); // Memperbarui hasil setelah perubahan filter
                },

                changeSortOption(newSortOption) {
                    this.sortOption = newSortOption;
                    this.updateFilteredResults(); // Memperbarui hasil setelah perubahan pengurutan
                },

        getFilteredResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query') || '';
    const tag = urlParams.get('tag') || '';
    this.query = query;

    let beritaResults = [];
    let galleryResults = [];
    let videoResults = [];

    if (query === '' && tag !== '') {
        // Search only by tag for news
        beritaResults = beritaData.filter(item => item.tags.includes(tag));
    } else {
        // Search by query for all types or by both query and tag for news
        beritaResults = beritaData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) && (tag === '' || item.tags.includes(tag)));
        galleryResults = galleryData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        videoResults = galleryVideo.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    }

    // Combine and sort the results
    if (this.filterType == "all") {
        this.result = this.combineAndSortResults(beritaResults, galleryResults, videoResults);
    } else if (this.filterType == "foto") {
        this.result = this.combineAndSortResults([], galleryResults, []);
    } else if (this.filterType == "video") {
        this.result = this.combineAndSortResults([], [], videoResults);
    } else if (this.filterType == "berita") {
        this.result = this.combineAndSortResults(beritaResults, [], []);
    }
},

combineAndSortResults(beritaResults = [], galleryResults = [], videoResults = []) {
    const combinedResults = [
        ...beritaResults.map(item => ({
            type: "berita",
            title: item.title,
            link: item.url,
            image: item.img,
            date: item.time,
            excerpt: item.overview,
        })),
        ...galleryResults.map(item => ({
            type: "foto",
            title: item.title,
            link: item.url,
            image: item.url,
            date: item.time,
            excerpt: '', // Assuming no excerpt is available for gallery images
        })),
        ...videoResults.map(item => ({
            type: "video",
            title: item.title,
            link: item.url,
            image: item.thumbnail,
            date: item.time,
            excerpt: '', // Assuming no excerpt is available for videos
        }))
    ];

    // Function to parse date string into Date object
    function parseDateString(dateString) {
        const parts = dateString.trim().split(' ');
        const day = parseInt(parts[0], 10);
        const monthName = parts[1];
        const year = parseInt(parts[2], 10);
        const monthNames = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];
        const month = monthNames.findIndex(name => name.toLowerCase() === monthName.toLowerCase());
        return new Date(year, month, day);
    }

    function sortByDateDescending(a, b) {
        const dateA = parseDateString(a.date);
        const dateB = parseDateString(b.date);
        return dateB - dateA; // Urutkan dari yang terbaru ke yang terlama
    }

    function sortByDateAscending(a, b) {
        const dateA = parseDateString(a.date);
        const dateB = parseDateString(b.date);
        return dateA - dateB; // Urutkan dari yang terlama ke yang terbaru
    }

    // Sorting function to sort by date
    if (this.sortOption == 'newest') {
        combinedResults.sort(sortByDateDescending);
    } else {
        combinedResults.sort(sortByDateAscending);
    }
    return combinedResults;
},

        
        getPaginatedResult() {
            let paginatedSearch = [];
            for (let i = 0; i < this.totalPages; i++) {
                paginatedSearch.push(this.result.slice(i * this.itemsPerPage, (i + 1) * this.itemsPerPage));
            }
            return paginatedSearch;
        },

        showPage(page) {
            this.currentPage = page;
            this.updatePaginationButtons(page);
            this.scrollToTop();
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
                this.showPage(this.currentPage);
            }
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
                this.showPage(this.currentPage);
            }
        },

        goToPage(page) {
            this.showPage(page);
        },

        highlightQuery(title, query) {
            return title.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
        },

        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        },

        hasResults() {
            return this.result.length > 0;
        },
        updateFilteredResults() {
                    this.getFilteredResults();
                    this.totalPages = Math.ceil(this.result.length / this.itemsPerPage);
                    this.currentPage = 1; // Reset to first page after filter/sort change
                    this.updatePaginationButtons(1);
                    this.paginatedResult = this.getPaginatedResult();
                    this.totalResult = this.result.length;
                },

    };
}


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResultsElement = document.getElementById('searchResults');
    const searchQueryElement = document.getElementById('searchQuery');
    const searchTitleElement = document.getElementById('searchTitle');

    // Update search query text and page title
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const tag = urlParams.get('tag');
    // Retrieve search query from localStorage
    const storedQuery = localStorage.getItem('searchQuery');

    // Set the search input value to the stored query if it exists
    if (storedQuery) {
        if (query !== null){

            searchInput.value = storedQuery;
        }
    }
    if (searchQueryElement) {
        searchQueryElement.textContent = query ? `${query}` : (tag ? `${tag}` : '');
    }

    
    if (searchTitleElement) {
        if (query) {
            searchTitleElement.textContent = `Pencarian dengan kata kunci "${query}"`;
        } else if (tag) {
            searchTitleElement.textContent = `Mencari berita berdasarkan tag "${tag}"`;
        } else {
            searchTitleElement.textContent = 'Mencari berita...'; // Default text if both query and tag are empty
        }
    }
});


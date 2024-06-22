   function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

function searchPagination() {
    return {
        result: [],
        itemsPerPage: 6,
        currentPage: 1,
        totalPages: 1,
        paginatedResult: [],
        query: '',

        init() {
            this.result = this.getFilteredResults();
            this.totalPages = Math.ceil(this.result.length / this.itemsPerPage);
            this.paginatedResult = this.getPaginatedResult();
        },

        getFilteredResults() {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('query') || '';
            const tag = urlParams.get('tag') || '';
            this.query = query;
            // Dummy content for search results (replace with actual dynamic data fetching)
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

            // Combine and map the results
            return [
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
        }
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

            if (searchQueryElement) {
                searchQueryElement.textContent = query ? `${query}` : (tag ? `${tag}` : '');
            }

            if (searchTitleElement) {
                if (query) {
                    searchTitleElement.textContent = `Mencari berita dengan kata kunci "${query}"`;
                } else if (tag) {
                    searchTitleElement.textContent = `Mencari berita berdasarkan tag "${tag}"`;
                } else {
                    searchTitleElement.textContent = 'Mencari berita...'; // Default text if both query and tag are empty
                }
            }
        });
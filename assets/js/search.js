   function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
document.addEventListener('DOMContentLoaded', function() {
    // Get search query from URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    if (query) {
        // Set nilai input search
        searchInput.value = query;
    } else {
        // Jika tidak ada query di URL, coba ambil dari localStorage
        const savedQuery = localStorage.getItem('searchQuery');
        if (savedQuery) {
            searchInput.value = savedQuery;
            window.location.href = `search.html?query=${encodeURIComponent(savedQuery)}`;
        }
    }
    // Update search query text
    const searchQueryElement = document.getElementById('searchQuery');
    if (searchQueryElement) {
        searchQueryElement.textContent = query ? `${query}` : '';
    }

    // Update page title with search query
    const searchTitleElement = document.getElementById('searchTitle');
    if (searchTitleElement) {
        searchTitleElement.textContent = `Mencari berita dengan kata kunci ${query ? `"${query}"` : '...'}`;
    }

    // Dummy content for search results (replace with actual dynamic data fetching)
    const searchResultsElement = document.getElementById('searchResults');
    if (searchResultsElement) {
        // Simulated search results (replace with actual dynamic content fetching)
        const dummyResults = [
            { 
                title: 'Penghargaan',
                date: 'Dec 22, 2023',
                image: 'assets/images/blog/blog-02.jpg',
                link: 'berita/judul.html',
                excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            { 
                title: 'Kota Bekasi',
                date: 'Jan 15, 2024',
                image: 'assets/images/blog/blog-03.jpg',
                link: 'berita/judul.html',
                excerpt: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.'
            },
            { 
                title: 'Pekan Raya',
                date: 'Feb 28, 2024',
                image: 'assets/images/blog/blog-01.jpg',
                link: 'berita/judul.html',
                excerpt: 'Duis aute irure dolor in reprehenderit in voluptate.'
            },
            { 
                title: 'Lorem Ipsum',
                date: 'Mar 10, 2024',
                image: 'assets/images/blog/blog-02.jpg',
                link: 'berita/judul.html',
                excerpt: 'Excepteur sint occaecat cupidatat non proident.'
            },
            { 
                title: 'Sit Amet',
                date: 'Apr 5, 2024',
                image: 'assets/images/blog/blog-03.jpg',
                link: 'berita/judul.html',
                excerpt: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
            }
        ];

        // Regular expression to match query in title (case insensitive)
        const regex = new RegExp(query, 'i');

        // Filter results based on query
        const filteredResults = dummyResults.filter(result => regex.test(result.title));

        // Pagination variables
        const resultsPerPage = 3;
        const totalPages = Math.ceil(filteredResults.length / resultsPerPage);
        
        const prevPage = localStorage.getItem('currentPage');
        if (prevPage){
             currentPage = prevPage;
        }
        else{
             currentPage = 1;
        }
        

        // Function to display results for a specific page
        function displayResults(page) {
            // Clear previous results
            searchResultsElement.innerHTML = '';

            // Calculate start and end index for current page
            const startIndex = (page - 1) * resultsPerPage;
            const endIndex = startIndex + resultsPerPage;
            const currentPageResults = filteredResults.slice(startIndex, endIndex);


            // Add current page and total pages info
            const pageInfoHTML = `
                <div class="w-full px-4 text-left mb-4">
                    <p class="text-lg dark:text-white">Menampilkan halaman ${currentPage} dari ${totalPages}</p>
                </div>
            `;
            searchResultsElement.insertAdjacentHTML('beforeend', pageInfoHTML);
            // Generate HTML for each filtered search result item or show no results message
            if (currentPageResults.length > 0) {
                currentPageResults.forEach(result => {
                    const resultHTML = `
                        <div class="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div class="mb-10 wow fadeInUp group" data-wow-delay=".1s">
                                <div class="mb-8 overflow-hidden rounded-[5px]">
                                    <a href="${result.link}" class="block">
                                        <img src="${result.image}" alt="image" class="w-full transition group-hover:rotate-6 group-hover:scale-125" />
                                    </a>
                                </div>
                                <div>
                                    <span class="inline-block px-4 py-0.5 mb-6 text-xs font-medium leading-loose text-center text-white rounded-[5px] bg-primary">
                                        ${result.date}
                                    </span>
                                    <h3>
                                        <a href="${result.link}" class="inline-block mb-4 text-xl font-semibold text-dark dark:text-white hover:text-primary dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl">
                                            ${highlightQuery(result.title, query)}
                                        </a>
                                    </h3>
                                    <p class="max-w-[370px] text-base text-body-color dark:text-dark-6">
                                        ${result.excerpt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    `;
                    searchResultsElement.insertAdjacentHTML('beforeend', resultHTML);
                });
            } else {
                const noResultsHTML = `
                    <div class="w-full px-4 text-center">
                        <p class="text-lg dark:text-white">Tidak ada berita terkait "<strong>${query}</strong>".</p>
                    </div>
                `;
                searchResultsElement.insertAdjacentHTML('beforeend', noResultsHTML);
            }
            scrollToTop();
        }

        // Display initial results
        displayResults(currentPage);

        // Pagination HTML markup
        const paginationContainer = document.createElement('div');
        paginationContainer.className = 'mt-8 text-center wow fadeInUp';
        paginationContainer.setAttribute('data-wow-delay', '.2s');

        // Create ul element for pagination links
        const paginationList = document.createElement('ul');
        paginationList.className = 'flex items-center -mx-1';

        // Create li element for previous page link
        const prevPageListItem = document.createElement('li');
        prevPageListItem.className = 'px-1';
        const prevPageLink = document.createElement('a');
        prevPageLink.id = 'prevSearch';
        prevPageLink.className = 'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white';
        prevPageLink.innerHTML = `
            <span>
                <svg width="8" height="15" viewBox="0 0 8 15" class="fill-current stroke-current">
                    <path d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z" stroke-width="0.3" />
                </svg>
            </span>
        `;
        prevPageLink.addEventListener('click', function() {
            if (currentPage > 1) {
                currentPage--;
                displayResults(currentPage);
                updateActivePageLink();
            }
        });
        prevPageListItem.appendChild(prevPageLink);
        paginationList.appendChild(prevPageListItem);

        // Generate pagination links
        if (filteredResults.length > 0) {
                for (let i = 1; i <= totalPages; i++) {
                const pageListItem = document.createElement('li');
                pageListItem.className = 'px-1';
                const pageLink = document.createElement('a');
                pageLink.id = `pageSearch-${i}`;
                pageLink.className = 'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white';
                pageLink.textContent = i;
                pageLink.addEventListener('click', function() {
                    currentPage = i;
                    displayResults(currentPage);
                    updateActivePageLink();
                });
                pageListItem.appendChild(pageLink);
                paginationList.appendChild(pageListItem);
            }

            // Create li element for next page link
            const nextPageListItem = document.createElement('li');
            nextPageListItem.className = 'px-1';
            const nextPageLink = document.createElement('a');
            nextPageLink.id = 'nextSearch';
            nextPageLink.className = 'flex items-center justify-center text-base bg-transparent border rounded-md hover:border-primary hover:bg-primary h-[34px] w-[34px] border-stroke dark:border-dark-3 text-body-color dark:text-dark-6 hover:text-white dark:hover:border-primary dark:hover:text-white';
            nextPageLink.innerHTML = `
                <span>
                    <svg width="8" height="15" viewBox="0 0 8 15" class="fill-current stroke-current">
                        <path d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z" stroke-width="0.3" />
                    </svg>
                </span>
            `;
            nextPageLink.addEventListener('click', function() {
                if (currentPage < totalPages) {
                    currentPage++;
                    displayResults(currentPage);
                    updateActivePageLink();
                }
            });
            nextPageListItem.appendChild(nextPageLink);
            paginationList.appendChild(nextPageListItem);

            // Append pagination list to container
            paginationContainer.appendChild(paginationList);

            // Add pagination container after search results
            searchResultsElement.insertAdjacentElement('afterend', paginationContainer);

        }

        // Function to highlight query in result title
        function highlightQuery(title, query) {
            // Highlight the matched query in the title
            return title.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
        }

        // Function to update active page link styling
        function updateActivePageLink() {
            const pageLinks = paginationList.querySelectorAll('a');
            pageLinks.forEach(link => {
                const pageNumber = parseInt(link.textContent);
                if (pageNumber == currentPage) {
                    localStorage.setItem('currentPage', pageNumber);
                    link.classList.add('bg-primary', 'text-white');
                    link.classList.remove( 'bg-transparent', 'hover:border-primary', 'hover:text-white', 'dark:border-dark-3', 'dark:hover:border-primary', 'dark:text-dark-6');
                } else {
                    link.classList.remove('bg-primary','text-white', 'bg-transparent');
                    link.classList.add('border-body-color', 'hover:border-primary', 'hover:text-white', 'dark:border-dark-3', 'dark:hover:border-primary', 'dark:text-dark-6');
                }
            });
        }

        // Update active page link after displaying results
        updateActivePageLink();
    }
});


// Function to highlight query in result title
function highlightQuery(title, query) {
    // Highlight the matched query in the title
    return title.replace(new RegExp(query, 'gi'), match => `<mark>${match}</mark>`);
}

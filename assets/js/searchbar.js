          $(function () {
      let availableTitle = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];

      // Initialize autocomplete
      $("#searchInput").autocomplete({
        source: availableTitle,
      });
    });

        // Your code here
        const searchForm = document.getElementById('searchForm');
        const searchInput = document.getElementById('searchInput');

        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const query = searchInput.value.trim();
            if (query !== '') {
                localStorage.setItem('searchQuery', query);
                localStorage.removeItem('currentPage');
                window.location.href = `search.html?query=${encodeURIComponent(query)}`;
            }
        });
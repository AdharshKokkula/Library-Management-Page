let searchInput = document.getElementById("searchInput");
let searchResults = document.getElementById("searchResults");
let spinner = document.getElementById("spinner");


function createAndAppendToSearchResults(result) {
    console.log(result);
    let {
        author,
        imageLink,
        title
    } = result;

    let bookResult = document.createElement("div");
    bookResult.classList.add("col-6", "p-3");
    let imageOfBook = document.createElement("img");
    imageOfBook.src = imageLink;
    bookResult.appendChild(imageOfBook);

    let authorOfBook = document.createElement("p");
    authorOfBook.classList.add("m-3");
    authorOfBook.textContent = author;
    bookResult.appendChild(authorOfBook);

    searchResults.appendChild(bookResult);
}

function showSearchResults(searchedResults) {
    let searchStatus = document.createElement("h1");
    searchStatus.classList.add("col-12");
    searchResults.appendChild(searchStatus);
    if (searchedResults.length === 0) {
        searchStatus.textContent = "No result found";
    } else {
        spinner.classList.add("d-none");
        searchStatus.textContent = "Popular Books";
        for (let result of searchedResults) {
            createAndAppendToSearchResults(result);
        }
    }
}

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {

        spinner.classList.remove("d-none");

        let url = "https://apis.ccbp.in/book-store?title=" + searchInput.value;
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                showSearchResults(jsonData.search_results);
            });
    }
})

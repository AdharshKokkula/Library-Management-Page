# Library-Management-Page

Welcome to the Library Management Page repository! 📚🔍


# About:

This project is a Library Management Page that allows users to search for books and display the results dynamically. 

The application makes an HTTP GET request to https://apis.ccbp.in/book-store with a query parameter "title" based on user input. 

It uses Bootstrap spinners to display loading status and shows search results in the searchResults element.


# Features:


📖 Book Search: Search for books and display results dynamically.

🔄 Loading Spinner: Bootstrap spinner displays loading status during HTTP requests.

📚 Result Display: Display search results or "No results found" in the searchResults element.


# Live Demo:
Check out the live demo [here](https://modelslibrary.ccbp.tech/) to explore the Library Management Page.


# How to Use:

Clone the Repository:

git clone https://github.com/your-username/library-management-page.git

Open index.html:

Open the index.html file in your web browser to start using the Library Management Page.

Search for Books:

# Instructions to build the website:

Add an HTML input element with id searchInput inside an HTML container element.

Add an HTML container element with id searchResults to display search results.

Fetch Books Data:

When a value is provided in the HTML input element with id searchInput and Enter key is pressed:

Make an HTTP GET request to the Books URL https://apis.ccbp.in/book-store with the query parameter "title" as the value of the searchInput element.

Display a Bootstrap spinner while fetching the data.

# Display Results:

After the data is fetched successfully:

If search results are empty, display "No results found" in the searchResults element.

If search results are non-empty, append result items to the HTML container element with id searchResults. Each result item consists of:

An HTML image element with src attribute value as the value of the key imageLink from the HTTP response.

An HTML paragraph element with text content as the value of the key author from the HTTP response.


# Customization:
Feel free to customize the code and styles to match your preferences or add additional features. Contributions and suggestions are welcome!


# Technologies Used:

- HTML

- CSS

- JavaScript

- Bootstrap


# Author:

k adharsh

Email: adarshkokkula@gmail.com

LinkedIn: https://www.linkedin.com/in/adharsh-kokkula



Explore and discover books with ease using the Library Management Page!


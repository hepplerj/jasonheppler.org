// This is a rough but usable node script that handles looking up a book by ISBN or title. 
// It uses the Google Books API to find the book and return the title, author, publisher, 
// publication date, and ISBN. Once the data is returned, it is delivered to a markdown file 
// and uses the Hugo book.md archetype to create a new book log page.
//
// If you're after something specific, your best bet is the ISBN.
//
// Must be run from the root of the project:
// Usage: node scripts/booklook.js "9780007215027"
// Usage: node scripts/booklook.js "The Hobbit"
//

import fetch from 'node-fetch';
import fs from 'fs';

const args = process.argv.slice(2);
const query = args[0];

const bookdata = {
    title: '',
    author: '',
    publisher: '',
    date: '',
    isbn: ''
};

// Look up book metadata using the Google Books API
const getBookData = async (isbn) => {
    // Determine the url query depending on whether the query is an ISBN or a title
    let url = '';
    if (isbn.length === 13) {
        url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    } else {
        url = `https://www.googleapis.com/books/v1/volumes?q=${isbn}`;
    }
    const response = await fetch(url);
    const data = await response.json();
    const book = data.items[0].volumeInfo;
    bookdata.title = book.title;
    bookdata.author = book.authors[0];
    bookdata.publisher = book.publisher;
    bookdata.date = book.publishedDate;
    bookdata.isbn = isbn;
    return bookdata;
};

// Write the bookdata to a markdown file that includes a yaml front matter: 
const writeBookData = (data) => {
    // get the current date as yyyy-mm-dd
    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    const book = `---
title: "${data.title}"
shorttitle: '${data.title}'
author: '${data.author}'
date: ${date}
isbn: "${data.isbn}"
pub_year: "${data.date}"
publisher: "${data.publisher}"
categories:
- books
- unread
---
`;
    // replace spaces with hyphens and make lowercase
    const urltitle = data.title.replace(/ /g, '-').toLowerCase();
    // remove any punctuation from the urltitle
    const urltitle_clean = urltitle.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    fs.writeFile(`./content/books/${date}-${urltitle_clean}.md`, book, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
};

// Get the book data, then write. 
getBookData(query).then(data => writeBookData(data));
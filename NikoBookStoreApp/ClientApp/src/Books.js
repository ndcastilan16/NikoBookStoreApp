import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import BookList from './BookList';
import request from 'superagent';

export default class Books extends Component {

    constructor(props) {

        super(props);
        this.state = {
            searchBy: '',
            books: [],
            searchField: ''
        }

    }

    searchBook = (e) => {
        e.preventDefault();
        request.get("https://www.googleapis.com/books/v1/volumes")
            .query({
                q: this.state.searchBy+':'+ this.state.searchField} )
            .then((data) => {
                console.log(data)
             
                const cleanData = this.cleanData(data)
                this.setState({ books: [...data.body.items]})

            })
    }

    handleSearch = (e) => {
    
        this.setState({ searchField: e.target.value })

    }


    handleSearchBy = (e) => {
        console.log(e.target.value)
        this.setState({ searchBy: e.target.value })
    
    }
    //populate date if there's a missing value
    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {

            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            }
            if (book.volumeInfo.hasOwnProperty('authors') === false) {
                book.volumeInfo['authors'] = 'Author not Specified';
            }

             if (book.volumeInfo.hasOwnProperty('description') === false) {
                book.volumeInfo['description'] = 'No description available';
            }
             if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://image.shutterstock.com/image-vector/no-image-available-sign-internet-600w-261719003.jpg'};
            }
            console.log(book);
            return book;
     

        })

        return cleanedData;
    }

    render() {
        return (
            <div className="alignright">
                <SearchBooks searchBook={this.searchBook} handleSearch={this.handleSearch} handleSearchBy={this.handleSearchBy} />
                <BookList showDetail={this.showDetail} books={this.state.books} />
            </div>
        );
    }
}

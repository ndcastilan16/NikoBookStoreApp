import React, { Component } from 'react';
import SearchBooks from './SearchBooks';
import BookList from './BookList';
import Header from './Header';
import request from 'superagent';

export default class Books extends Component {

    constructor(props) {


        super(props);
        this.state = {

            books: [],
            searchField: ''

        }

    }

    searchBook = (e) => {
        e.preventDefault();

        request.get().query

        request.get("https://www.googleapis.com/books/v1/volumes")
            .query({ q: this.state.searchField })
            .then((data) => {
                this.setState({books: [...data.body.items]})
            })
    }


    handleSearch = (e) => {
    
        this.setState({ searchField: e.target.value })

    }


    showDetail = () => {
        console.log("test");
    }



    render() {
        return (
            <div className="alignright">
                <SearchBooks searchBook={this.searchBook} handleSearch={this.handleSearch} />

                <BookList showDetail={this.showDetail} books={this.state.books} />
            </div>
        );
    }
}

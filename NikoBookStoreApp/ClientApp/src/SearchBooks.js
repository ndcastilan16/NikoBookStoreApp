import React from 'react';
import Modal from 'react-overlays'


const SearchBooks = (props) => {
    return (

   
        <div class="topnav">
            <p>Niko's Book Catalogue</p>
            <div class="search-container">
                <form onSubmit={props.searchBook} action="">
                    <input onChange={props.handleSearch} type="text" />
                    <button id="searchBooks" type="submit">Search</button>
                </form>
            </div>
          </div>
  
            )
}

export default SearchBooks;
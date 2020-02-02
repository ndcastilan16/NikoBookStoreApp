import React from 'react';

const SearchBooks = (props) => {
    return (
        <div class="topnav">
            <p>Niko's Book Catalogue</p>
            <div class="search-container">
                <form onSubmit={props.searchBook} action="">
                    <input onChange={props.handleSearch} type="text" />
                    <select defaultValue="Search" onChange={props.handleSearchBy}>
                        <option disabled value="Search">Search By</option>
                        <option value="intitle">Book Title</option>
                        <option value="inauthor">Book Author</option>
                    </select>

                    <button id="searchBooks" type="submit">Search</button>
  
                </form>
            </div>
          </div>

            )
}

export default SearchBooks;
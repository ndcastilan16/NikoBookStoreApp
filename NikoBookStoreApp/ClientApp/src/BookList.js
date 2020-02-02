import React from 'react';

import BookCard from './BookCard';

const BookList = (props) => {
    return (
         <main>
                <section className="cards">
    
            {
                props.books.map((book, i) => {
                    return <BookCard key={props.i}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        desc={book.volumeInfo.description}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}               
                        publishedDate={book.volumeInfo.publishedDate}
              
                    />
                })

            }
            </section>

            </main>
         

    )
}

export default BookList;
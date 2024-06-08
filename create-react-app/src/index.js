import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const author = 'Author name'
const Book = () => {
  const title = 'Book name'
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg"
        alt={title + ' image'}
      />
      <h2>{title}</h2>
      <h4>{author.toLocaleUpperCase()}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    id: 1,
    author: 'A1uthor',
    title: 'First Book',
    img: 'https://m.media-amazon.com/images/I/81F30JDZU9L._SL1500_.jpg',
  },
  {
    id: 2,
    author: 'A2uthor',
    title: 'Second Book',
    img: 'https://m.media-amazon.com/images/I/51U6lRPzsML._SY445_SX342_.jpg',
  },
  {
    id: 3,
    author: 'A3uthor',
    title: 'Third Book',
    img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
  },
]

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { author, title, img, getBook, id } = props

  return (
    <article className="book">
      <img src={img} alt={title + ' image'} />
      <h2>{title}</h2>
      <button onClick={getBook(id)}>Click me</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

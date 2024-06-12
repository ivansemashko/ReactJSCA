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
  return (
    <section className="bookList">
      {books.map((book) => {
        const { img, title, author, id } = book
        return <Book img={img} author={author} title={title} key={id} />
      })}
      /
    </section>
  )
}

const Book = ({ author, title, img, children }) => {
  return (
    <article className="book">
      <img src={img} alt={title + ' image'} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

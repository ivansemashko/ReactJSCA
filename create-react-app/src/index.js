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
  const someValue = 'shakeAndBake'
  const displayValue = () => {
    console.log(someValue)
  }

  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book {...book} key={book.id} displayValue={displayValue} />
      })}
      /
    </section>
  )
}

const Book = (props) => {
  const { author, title, img, displayValue } = props

  return (
    <article className="book">
      <img src={img} alt={title + ' image'} />
      <h2>{title}</h2>
      <button onClick={displayValue}>Display title</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

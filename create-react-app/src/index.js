import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const firstBook = {
  author: 'A1uthor',
  title: 'First Book',
  img: 'https://m.media-amazon.com/images/I/81F30JDZU9L._SL1500_.jpg',
}
const secondBook = {
  author: 'A2uthor',
  title: 'Second Book',
  img: 'https://m.media-amazon.com/images/I/51U6lRPzsML._SY445_SX342_.jpg',
}
const thirdBook = {
  author: 'A3thor',
  title: 'Third Book',
  img: 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg',
}

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </section>
  )
}

const Book = ({ author, title, img }) => {
  // const { author, title, img } = props
  return (
    <article className="book">
      <img src={img} alt={title + ' image'} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

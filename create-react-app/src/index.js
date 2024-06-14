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
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
      /
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = () => {
    console.log('HANDLE FROM INPUT!')
  }

  const handleButtonClick = () => {
    alert('HANDLE BUTTON CLICK')
  }
  return (
    <section>
      <form action="">
        <h2>typical form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
      </form>
      <button onClick={handleButtonClick}>Click me</button>
    </section>
  )
}

const Book = (props) => {
  const { author, title, img, children } = props
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

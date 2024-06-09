import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const author = 'Author name'
const title = 'Book name'
const img = 'https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg'

const BookList = () => {
  return (
    <section className="bookList">
      <Book
        author="Book №1 Author"
        title="Book №1 title"
        img="https://m.media-amazon.com/images/I/81SIQfF-aGL._SL1500_.jpg"
      />
      <Book
        author="Book №2 Author"
        title="Book №2 title"
        img="https://images.unsplash.com/photo-1617173296245-13e9fc0b68fd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Book
        author="Book №3 Author"
        title="Book №3 title"
        img="https://avatars.githubusercontent.com/u/147409780?v=4"
      />
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  return (
    <article className="book">
      <img src={props.img} alt={title + ' image'} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

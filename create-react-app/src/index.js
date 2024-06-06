import React from 'react'
import ReactDOM from 'react-dom'

const BookList = () => {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/51ZvZFJOsrL._SL1499_.jpg"
    alt=""
  />
)
const Title = () => <h2>Book Title</h2>
const Author = () => <h4>Author</h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

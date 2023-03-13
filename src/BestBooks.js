import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import "./BestBooks.css";
let SERVER = process.env.REACT_APP_SERVER;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    try {
      let results = await axios.get(`${SERVER}/books`);
      this.setState({
        books: results.data
      })
    } catch (error) {
      console.log(error.response.data);
    }

  }

  componentDidMount() {
    this.getBooks();
  }

  render() {

    /* TODO: render all the books in a Carousel */

   let books = this.state.books.map(book => {
    console.log(book.title);
   return <Carousel.Item key = {book._id}>
      <img
        className="d-block"
        src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTX0mvWV40iwuM5P_deNJfg16J-MmUTMQCyVl2KEIkQ&s"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{book.title}</h3>
        <p>{book.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
    })


    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (

          <Carousel> 
            {books}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

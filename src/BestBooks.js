import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import "./BestBooks.css";
import BookForm from './Form';
import Button from 'react-bootstrap/Button';
let SERVER = process.env.REACT_APP_SERVER;


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      isModalOpen: false,
      books: []
    }
  }
  handleOpenModal = () => {
    this.setState ({
      isModalOpen: true,
    })
  }
  handleCloseModal =() => {
    this.setState({
      isModalOpen: false
    })
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  createBook = async (book) => {
    try {
      console.log("Clicked");
      let url = `${SERVER}/books/post-book`
      let createdBook = await axios.post(url,book)
      console.log(createdBook)
      this.setState({
        books: [...this.state.books, createdBook.data]
      })
    } catch (error) {
      console.log(error.response.data);
  
    }
    

  }
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
      return <Carousel.Item key={book._id}>
        <img
          className="d-block"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTX0mvWV40iwuM5P_deNJfg16J-MmUTMQCyVl2KEIkQ&s"
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
          
          <>
          <Carousel> 
            {books}
          </Carousel>
          <Button onClick={this.handleOpenModal}> Add Book </Button>
            <BookForm addBook={this.createBook} 
            show ={this.state.isModalOpen}
            handleClose ={this.handleCloseModal}
            />
          </>

        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;

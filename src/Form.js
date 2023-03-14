import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

class BookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: {}
    }
  }
  handleBookSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.title.value);
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value
    }
    console.log(newBook);
    this.props.addBook(newBook);
    this.props.handleClose();
  }
  render() {
    const show = this.props.show
    const handleClose = this.props.handleClose


    return (
      <>
        <Modal show={show} onHide ={handleClose} >
          <Modal.Header closeButton>
            <Modal.Title>Add A Book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
        <Form onSubmit={this.handleBookSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control name="title" type="text" placeholder="Enter title" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="description">
            <Form.Label>description</Form.Label>
            <Form.Control name="description" type="text" placeholder="Enter description" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Label>status</Form.Label>
            <Form.Control name="status" type="text" placeholder="Enter status" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
          </Modal.Body>
  
        </Modal>
      </>
    )
  }
};

export default BookForm;

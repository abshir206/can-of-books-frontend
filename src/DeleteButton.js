import React from "react";
import Button from 'react-bootstrap/Button';
import "./DeleteButton.css"


class DeleteButton extends React.Component {

  render() {
    return(
      <>
      <Button onClick={() => this.props.deleteBook(this.props.bookId)}> Delete Book </Button>
      
      </>

    )

  }

}
export default DeleteButton;




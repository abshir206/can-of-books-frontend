import { Component } from "react";
import Card from 'react-bootstrap/Card';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */


    return (
<>
<Card style = {{ width: '18rem' } }>
    <Card.Body>
      <Card.Title>Phillip Chaplin</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
      <Card.Text>
      Phillip Chaplin is a software developer with two years experience working with python, django and AWS.  His background in automation and controls informs his logical approach to developing websites that meet customer demands. After two years  His quest for knowledge and adaptability to any situation has contributed to his most recent success working for Practical Computing Solutions.
      </Card.Text>
    </Card.Body>
  </Card >
  <Card style = {{ width: '18rem' } }>
    <Card.Body>
      <Card.Title>Abshir Ibrahim</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Software Developer</Card.Subtitle>
      <Card.Text>
        Abshir Ibrahim is a Software Developer who is also a student at Code Fellows. Abshir is born and raised in Seattle, WA.
      </Card.Text>
    </Card.Body>
  </Card >
</>
    )
  }
};

export default Profile;

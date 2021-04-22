import React from 'react';
import { Container, Header, Button } from 'semantic-ui-react';

class Donations extends React.Component {
  render() {
    return (
      <Container>
        <Header as="h1" textAlign="center" inverted>Donations</Header>
        <Header as="h3" textAlign="center" inverted>Our wonderful patrons sponsor cat feeding stations across campus to make sure our feline friends are able to stay healthy while not decimating the campus bird population.</Header>
        <Button basic>Donate Today</Button>
      </Container>
    );
  }
}

export default Donations;

import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Adopt extends React.Component {
  render() {
    return (
      <Card>
        <Image
          size='large'
          src={this.props.adopt.image}
        />
        <Card.Content>
          <Card.Header>{this.props.adopt.name}</Card.Header>
          <Card.Meta>({this.props.adopt.gender})</Card.Meta>
          <Card.Description>
            {this.props.adopt.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button as={NavLink} activeClassName="active" exact to="/AdoptForm">
              Adopt
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Adopt.propTypes = {
  adopt: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Adopt);

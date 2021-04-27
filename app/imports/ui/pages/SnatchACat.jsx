import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Adopt from '../components/Adopt';
import { Adopts } from '../../api/adopt/Adopts';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class SnatchACat extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    return (
      <div className='snatch-background'>
        <Container>
          <Header as="h2" textAlign="center" inverted>Snatch a Cat</Header>
          <Container>
            <p><div className='snatch-body'> Made a special furry friend on campus or just looking for some company on those long nights of studying? Our volunteers will help you catch your choice!</div></p>
            <p></p>
          </Container>
          <Card.Group>
            {this.props.adopts.map((adopt, index) => <Adopt key={index} adopt={adopt}/>)}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

// Require an array of Stuff documents in the props.
SnatchACat.propTypes = {
  adopts: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Adopts.userPublicationName);
  const subscription2 = Meteor.subscribe(Adopts.adminPublicationName);
  return {
    adopts: Adopts.collection.find({}).fetch(),
    ready: subscription.ready() && subscription2.ready(),
  };
})(SnatchACat);

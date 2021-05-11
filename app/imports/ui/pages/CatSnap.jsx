import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Header, Loader, Card, Button } from 'semantic-ui-react';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';
import Snap from '../components/Snap';
import { Snaps } from '../../api/snap/Snaps';
import { NavLink } from 'react-router-dom';

/** Using ListStuff.jsx as template */
/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class CatSnap extends React.Component {

  // If the subscription(s) have been received, render the page, otherwise show a loading icon.
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  // Render the page once subscriptions have been received.
  renderPage() {
    console.log('snaps', this.props.snaps);
    return (
      <Container>
        <Header as="h2" textAlign="center" inverted>Cat Snaps</Header>
        <Button as={NavLink} activeClassName="active" exact to="/AddSnap" size='medium' inverted>Snap a Cat</Button>
        <Card.Group>
          {this.props.snaps.map((snap, index) => <Snap key={index} snap={snap} />)}
        </Card.Group>
      </Container>
    );
  }
}

// Require an array of Stuff documents in the props.
CatSnap.propTypes = {
  snaps: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe(Snaps.userPublicationName);
  // Get the Stuff documents
  return {
    snaps: Snaps.collection.find({}).fetch(),
    ready: subscription.ready(),
  };
})(CatSnap);

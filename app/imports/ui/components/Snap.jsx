import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Snap extends React.Component {
  render() {
    return (
      <Card>
        <Image src={this.props.snap.image} wrapped ui={false} />
        <Card.Content>
          <Card.Meta>
            <span>{this.props.snap.submittedBy}</span>
            <span className='date'>{this.props.snap.submittedOn}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.snap.caption}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

// Require a document to be passed to this component.
Snap.propTypes = {
  snap: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Snap);

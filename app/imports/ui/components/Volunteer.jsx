import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List person table. See pages/Listperson.jsx. */
class Volunteer extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.volunteer.firstName}</Table.Cell>
        <Table.Cell>{this.props.volunteer.lastName}</Table.Cell>
        <Table.Cell>{this.props.volunteer.email}</Table.Cell>
        <Table.Cell>{this.props.volunteer.phoneNumber}</Table.Cell>
        <Table.Cell>{this.props.volunteer.status}</Table.Cell>
        <Table.Cell>
          <Link to={`/volunteer/edit/${this.props.volunteer._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Volunteer.propTypes = {
  volunteer: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Volunteer);

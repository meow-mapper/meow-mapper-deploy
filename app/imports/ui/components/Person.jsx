import React from 'react';
import { Table } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

/** Renders a single row in the List person table. See pages/Listperson.jsx. */
class Person extends React.Component {
  render() {
    return (
      <Table.Row>
        <Table.Cell>{this.props.person.firstName}</Table.Cell>
        <Table.Cell>{this.props.person.lastName}</Table.Cell>
        <Table.Cell>{this.props.person.email}</Table.Cell>
        <Table.Cell>{this.props.person.catName}</Table.Cell>
        <Table.Cell>{this.props.person.approval}</Table.Cell>
        <Table.Cell>
          <Link to={`/edit/${this.props.person._id}`}>Edit</Link>
        </Table.Cell>
      </Table.Row>
    );
  }
}

// Require a document to be passed to this component.
Person.propTypes = {
  person: PropTypes.object.isRequired,
};

// Wrap this component in withRouter since we use the <Link> React Router element.
export default withRouter(Person);

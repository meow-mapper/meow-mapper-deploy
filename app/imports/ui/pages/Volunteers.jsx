import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class Volunteers extends React.Component {
  render() {
    return (
      <div className='volunteer-background'>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={50}>
            <h1><div className='landing-header'>Volunteer Registration</div></h1>
            <p><div className='landing-body'>Are you interested in helping out the stray cat population on UH Manoa? Sign up today!</div></p>
            <Button as={NavLink} activeClassName="active" exact to="/VolunteerForm">
              Volunteer Now
            </Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Volunteers;

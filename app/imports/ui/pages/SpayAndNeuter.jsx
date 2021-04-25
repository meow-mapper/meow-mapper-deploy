import React from 'react';
import { Menu, Grid, Button } from 'semantic-ui-react';

class SpayAndNeuter extends React.Component {
  render() {
    return (
      <div className='spay-background'>

        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={50}>
            <h1><div className='landing-header'>Spay and Neuter</div></h1>

            <p><div className='landing-body'>Want to neuter a cat? Schedule an appointment at the
              Hawaiian Humane Society Spay Neuter Center, call 356-2255 or click the button below.
              To be eligible for sterialization, kittens must be at least 2 pounds and 8 weeks of age.</div></p>
            <Menu.Item href="https://hawaiianhumane.org/feline-fix/">
              <Button size='massive' inverted>Make an appointment</Button>
            </Menu.Item>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default SpayAndNeuter;

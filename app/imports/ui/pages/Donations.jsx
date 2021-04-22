import React from 'react';
import { Grid, Button } from 'semantic-ui-react';

class Donations extends React.Component {
  render() {
    return (
      <div className='donations-background'>
        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>
          <Grid.Column width={50}>
            <h1><div className='landing-header'>Donations</div></h1>
            <p><div className='landing-body'>Our wonderful patrons sponsor cat feeding stations across campus to make sure our feline friends are able to stay healthy while not decimating the campus bird population.</div></p>
            <Button size='massive' inverted>Donate Today</Button>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Donations;

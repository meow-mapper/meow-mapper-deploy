import React from 'react';
import { Dropdown, Grid, Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

class SpayAndNeuter extends React.Component {
  render() {
    return (
      <div className='spay-background'>

        <Grid id='landing-page' verticalAlign='middle' textAlign='center' container>

          <Grid.Column width={50}>
            <h1><div className='landing-header'>Meow Mapper<Icon name='paw'/></div></h1>

            <p><div className='landing-body'>UH Manoa Cat Map! Come map a cat and find out where others have spotted a cat</div></p>
          </Grid.Column>

        </Grid>
      </div>
    );
  }
}

export default SpayAndNeuter;

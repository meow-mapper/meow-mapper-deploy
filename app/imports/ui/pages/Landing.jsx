import React from 'react';
import { Dropdown, Grid, Icon, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
      <div className='landing-background'>
        <Menu inverted borderless className='login'>
          <Menu.Item position='right'>
            <Dropdown id="login-dropdown" text="Login">
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
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

export default Landing;

import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class MapACat extends React.Component {
  render() {
    return (
      <Grid centered columns={4} className ='catmap-grid' >
        <h1 className ='cat-snaps'>Cat Snaps</h1>
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src = 'images/cat2.png'/>
          </Grid.Column>
          <Grid.Column width={6}>
            <h2 className='cat-snaps-text'>
              Most liked picture of the week
            </h2>
            <h2 className = 'cat-snaps-likes'>
              627 likes
            </h2>
            <h2 className = 'cat-snaps-likes'>
              82 comments
            </h2>
            <h3 className='cat-snaps-text'>
              Cat loves flower too!
            </h3>
            <p className='cat-snaps-text'>Submitted by Nhan Bui</p>
          </Grid.Column>
          <Grid.Column width={3}>
            <h2 className='cat-snaps-text'>
              Have a cat you want to map? Click on this button to share the info!
            </h2>
            <Button size = 'massive' name="ui button">
              Map A Cat
            </Button>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Image src = 'images/cat3.jpg' />
            <h2 className = 'cat-snaps-likes'>
              2 likes
            </h2>
            <h2 className = 'cat-snaps-likes'>
              1 comments
            </h2>
          </Grid.Column>
          <Grid.Column>
            <Image src = 'images/cat1.jpg' />
            <h2 className = 'cat-snaps-likes'>
              2 likes
            </h2>
            <h2 className = 'cat-snaps-likes'>
              1 comments
            </h2>
          </Grid.Column>
          <Grid.Column>
            <Image src = 'images/cat4.jpg' />
            <h2 className = 'cat-snaps-likes'>
              2 likes
            </h2>
            <h2 className = 'cat-snaps-likes'>
              1 comments
            </h2>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MapACat;

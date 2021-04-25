import React from 'react';
import { Grid, Button, Image } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class MapACat extends React.Component {
  render() {
    return (
      <div>
        <h1 className ='cat-snaps'>Cat Snaps</h1>
        <div>
          <Grid centered columns={4} className ='catmap-grid' >
            <div className="ui card">
              <Image src = 'images/cat2.jpg'/>
              <div className="image">
              </div>
              <div className="content">
                <a className="header">Most liked picture of the week</a>
                <div className="meta">
                  <span className="date">Submitted by Nhan Bui</span>
                </div>
                <div className="description">
              This cat loves flowers!
                </div>
              </div>
              <div className="extra content">
                <a>
              628 likes     12 comments
                </a>
              </div>
            </div>
            <Grid.Column textAlign='center'>
              <h2 className='cat-snaps-text'>
              Have a cat you want to map? Click on this button to share the info!
              </h2>
              <Button size = 'massive ui button' name="ui button">
              Map A Cat
              </Button>
            </Grid.Column>
          </Grid>
        </div>
        <Grid centered columns={4} className ='catmap-grid' container>
          <Grid.Row>
            <Grid.Column >
              <div className="ui card">
                <Image src = 'images/cat3.jpg' />
                <div className="image">
                </div>
                <div className="content">
                  <a className="header">Batman</a>
                  <div className="meta">
                    <span className="date">Submitted by Germaine Juan</span>
                  </div>
                  <div className="description">
                    A very timid cat.
                  </div>
                </div>
                <div className="extra content">
                  <a>
                    50 likes     5 comments
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column >
              <div className="ui card">
                <Image src = 'images/cat1.jpg' />
                <div className="image">
                </div>
                <div className="content">
                  <a className="header">Clawzilla</a>
                  <div className="meta">
                    <span className="date">Submitted by Maegan Chow</span>
                  </div>
                  <div className="description">
                    A possible mother of 12 :).
                  </div>
                </div>
                <div className="extra content">
                  <a>
                    45 likes     7 comments
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column >
              <div className="ui card">
                <Image src = 'images/cat4.jpg' />
                <div className="image">
                </div>
                <div className="content">
                  <a className="header">Jennifurr</a>
                  <div className="meta">
                    <span className="date">Submitted by Kha Bui</span>
                  </div>
                  <div className="description">
                    She is a ball of fluff!
                  </div>
                </div>
                <div className="extra content">
                  <a>
                    60 likes     3 comments
                  </a>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column >
              <div className="ui card">
                <Image src = 'images/cat5.jpg' />
                <div className="image">
                </div>
                <div className="content">
                  <a className="header">Breakfast Purrito</a>
                  <div className="meta">
                    <span className="date">Submitted by Kha Bui</span>
                  </div>
                  <div className="description">
                    A possible father of 12 :o.
                  </div>
                </div>
                <div className="extra content">
                  <a>
                    60 likes     3 comments
                  </a>
                </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default MapACat;

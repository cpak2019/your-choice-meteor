import React from 'react';
import { Container, Image, Grid } from 'semantic-ui-react';

export default class Middle extends React.Component {
  render() {
    return (
        <div
            style={{
              backgroundColor: '#1e1e1e',

            }}>
          <Container>
            <Grid>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Image src='./Game3_Banner-poster780.png' fluid />
                </Grid.Column>

              </Grid.Row>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Image src='./LIMBO_game_animated.png' fluid />
                </Grid.Column>
                <Grid.Column>
                  <Image src='./INSIDE_game_animated.png' fluid />
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Container>
        </div>
    );
  }
}

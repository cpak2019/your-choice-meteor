import React from 'react';
import { Container, List, Grid, Input } from 'semantic-ui-react';

export default class FooterP extends React.Component {
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
                  <List>
                    <List.Item>
                      <p3>Sign up for updates:</p3>
                    </List.Item><div
                      style={{
                        backgroundColor: 'black',
                        marginRight: '50px',
                      }}>
                      <List.Item> <Input action={{
                        color: 'black',
                        labelPosition: 'right',
                        icon: '',
                        content: 'Subscribe  ',
                      }} placeholder='your email address' fluid/></List.Item> </div>

                    <List.Item>
                      <p2>© 2020 Playdead. All rights reserved.</p2>
                    </List.Item>
                    <List.Item>
                      <p2>Copenhagen, Denmark - Privacy Policy</p2>
                    </List.Item>

                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </div>

    );
  }
}

import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <div
            style={{
              backgroundColor: 'black',
              height: '60px',
            }}>
          <Container>
            <Menu inverted pointing secondary borderless className="topmenu">
              <Menu.Item fitted>PLAYDEAD</Menu.Item>
              <Menu.Item fitted>ABOUT</Menu.Item>
              <Menu.Item fitted>CONTACT</Menu.Item>
              <Menu.Item fitted>STORE</Menu.Item>
              <Menu.Item fitted>EVENTS</Menu.Item>
              <Menu.Item fitted>NOSTALGIA</Menu.Item>
              <Menu.Item position="right" fitted><Icon name=" twitter "/></Menu.Item>
              <Menu.Item fitted><Icon name=" facebook "/></Menu.Item>
              <Menu.Item fitted><Icon name="linkedin"/></Menu.Item>
              <Menu.Item fitted><Icon name="instagram "/></Menu.Item>

            </Menu>
          </Container>

        </div>

    );
  }
}

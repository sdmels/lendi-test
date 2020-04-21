import React, { Component } from 'react';
import styled from 'styled-components';

// TODO: Fix this container to the top of the page, so that when a user scrolls, it remains at the top.
const Container = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  background-color: lightgray;
  top: 0;
`;

class IO extends Component {
  state = { mouse: { x: 0, y: 0 }, window: { width: 0, height: 0 } };


setMousePosition = e =>
    this.setState({
      mouse: {
        x: e.clientX,
        y: e.clientY
      }
    });

  setWindowDimensions = () =>
    this.setState({
      window: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });

  componentDidMount() {
    // TODO: Listen to window mousemove and window resize.
    window.addEventListener('mousedown', this.setMousePosition);
    window.addEventListener('resize', this.setWindowDimensions);
    // this.setWindowDimensions();
  }

  componentWillUnmount() {
    // TODO: Remove listeners.
    window.removeEventListener('mousedown');
    window.removeEventListener('resize');
  }

  render() {
    const { mouse, window } = this.state;

    return (
      <Container>
        <h1>Input/Output</h1>
        <ul>
          <li>
            Mouse position: ({mouse.x}, {mouse.y})
          </li>
          <li>
            Window dimensions: {window.width}x{window.height}
          </li>
        </ul>
      </Container>
    );
  }
}

export default IO;

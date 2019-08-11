import * as React from 'react';
import App, { Container } from 'next/app';
import './_app.scss';

class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    );
  }
}

export default CustomApp;

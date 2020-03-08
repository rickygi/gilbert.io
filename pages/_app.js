import React from 'react';
import App from 'next/app';
import '../styles/index.css';

class _App extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default _App;

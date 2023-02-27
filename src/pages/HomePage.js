import React, { Component } from 'react';

export default class homePage extends Component {
  render() {
    return (
      <>
        <h1>Trang chủ</h1>
        <h2>
          <a href={'/User'}>User</a>
        </h2>
      </>
    )
  }
}

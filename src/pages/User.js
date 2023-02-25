import React, { Component } from 'react'
import UserContainer from '../container/userContainer'
export default class
  extends Component {
  render() {
    return (
      <div>
        <h1>User</h1>
        <h2>
          <a href={"/"}>Trang chủ</a>
        </h2>
        <UserContainer />
      </div>
    )
  }
}

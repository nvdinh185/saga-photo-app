import React, { Component } from "react";

export default class userComponent extends Component {
  render() {
    let arr = [];
    let listUser = this.props.listUser;

    if (listUser) {
      arr = listUser.map((item, index) => {
        return (
          <ul key={index}>
            <li>{item.name} - {item.address}</li>
          </ul>
        );
      });
    }
    return (
      <>
        <div>{arr}</div>
      </>
    );
  }
}

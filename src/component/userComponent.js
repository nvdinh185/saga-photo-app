import React, { Component } from "react";
import { Container } from 'reactstrap';
import PhotoList from './PhotoList';

export default class userComponent extends Component {
  render() {
    let listUser = this.props.listUser;
    return (
      <Container className="text-center">
        <PhotoList
          photoList={listUser}
        />
      </Container>
    );
  }
}

import React, { Component } from 'react';
import UserComponent from '../component/userComponent';
import { connect } from 'react-redux';
import * as Actions from '../action';


class userContainer extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div>
        <UserComponent {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'day la state');
  return {
    listUser: state.myReducer.listUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(Actions.getRequestUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(userContainer)
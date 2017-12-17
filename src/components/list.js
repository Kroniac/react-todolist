import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class list extends Component {
 
  render() {
    return (
      <div>
        <li>{this.props.name}</li>
        <button onClick={() => this.props.moved(this.props.index)}>Move Up</button>
        <button>Move Down</button>
      </div>
    );
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    moved: ingName => dispatch(actions.moveup(ingName))
  };
};
export default connect(null, mapDispatchtoProps)(list);

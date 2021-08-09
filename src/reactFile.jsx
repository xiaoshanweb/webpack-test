import React, { Component } from 'react';

export default class ReactApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello React"
    }
  }

  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}

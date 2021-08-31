import React, { Component } from 'react';

export default class ReactApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "我是React文件 333"
    }
  }

  render() {
    return (
      <div>{this.state.message}</div>
    )
  }
}

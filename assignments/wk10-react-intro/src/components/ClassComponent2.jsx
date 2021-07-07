import React, { Component } from 'react'

export default class ClassComponent2 extends Component {
constructor(props) {
    super(props);
    this.state = {value: 'Manon '};

    this.handleChange = this.handleChange.bind(this);
    
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  

  render() {
    return (
      <>
        <input type="text" placeholder="Enter your name" onChange={this.handleChange} />
        <h3>Hello  Class {this.state.value}!</h3>
      </>
    );
  }
}



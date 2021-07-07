import React, { Component } from 'react'

export default class ClassComponent3 extends Component {
    constructor(props) {
        super(props);
        this.handleChange2 = this.handleChange2.bind(this);
    }
      
    handleChange2(e){
        this.props.handleChange2(e.target.value);
    }
    
    render() {
        return (
            <>
            <input 
                   value={this.props.textProp}
                   onChange={this.props.handleChange2} />
            <h3>Hello Class {this.props.textProp}!</h3>
            </>
        );
    }
    }
          

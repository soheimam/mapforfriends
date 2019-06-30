import React, { Component } from 'react';
import { inputStyle } from './styles/Text';
import { Button } from './styles/Button'

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: props.value};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
              <input type="text"  name="email" style={inputStyle} value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Password:
              <input type="text"  name="password" style={inputStyle} value={this.state.value} onChange={this.handleChange} />
          </label>
          <Button login> Login </Button>
        </form>
      );
    }
  }

module.exports = Form
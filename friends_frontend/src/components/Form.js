import React, { Component } from 'react';
import { inputStyle } from './styles/Text';
import { Button } from './styles/Button'
const axios = require('axios');

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: null,
        password: null
      };
      
      this.handleEmail = this.handleEmail.bind(this);
      this.handlePassword = this.handlePassword.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleEmail(event) {
      this.setState({ email: event.target.value});
    }
    handlePassword(event) {
      this.setState({ password: event.target.value});
    }

    handleSubmit(event) {
      console.log(event)
      console.log(this.state)
      event.preventDefault();
      axios.post('http://localhost:8000/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
              <input type="text"  name="email" style={inputStyle} value={this.state.email} onChange={this.handleEmail}/>
          </label>
          <label>
            Password:
              <input type="text"  name="password" style={inputStyle} value={this.state.password} onChange={this.handlePassword}/>
          </label>
          <Button login> Login </Button>
        </form>
      );
    }
  }

module.exports = Form
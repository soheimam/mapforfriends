import React, { Component } from 'react';
import { Title } from './components/styles/Text'
import { InputText } from './components/styles/Text'
import Form from './components/Form'
import Dashboard from './components/Dashboard'
import { GlobalStyles } from './components/styles/Global'
import logo from './logo.svg';
import AppRouter from './components/Home'
import './App.scss';

class App extends Component {
  render() {
    return (
      <Form />
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Title } from './components/styles/Text'
import { InputText } from './components/styles/Text'
import Form from './components/Form'
import {GlobalStyles} from './components/styles/Global'
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>FRIENDS</h2>
            <p className="App-intro">
                Maps for and by friends!
            </p>
            <Form>
            </Form> 
            
        </div>
        
      </div>
    );
  }
}

export default App;

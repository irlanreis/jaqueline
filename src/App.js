import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Main />
      </BrowserRouter>
    )
  }
}
export default App;
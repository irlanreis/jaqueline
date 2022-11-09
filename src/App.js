import React, { Component } from 'react'
import { BrowserRouter, Switch } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import '../src/imgs/perfil.png'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Header />
        </Switch>
          <Main />
      </BrowserRouter>
    )
  }
}
export default App;
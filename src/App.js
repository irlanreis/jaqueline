import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import '../src/imgs/perfil.png'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main />
      </>
    )
  }
}
export default App;
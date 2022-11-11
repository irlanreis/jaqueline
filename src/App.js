import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import '../src/imgs/perfil.png'

class App extends Component {

  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}
export default App;
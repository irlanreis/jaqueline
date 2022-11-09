import React, { Component } from 'react'
import perfil from '../imgs/perfil.png'
import '../App.css'

class Header extends Component {
  render() {
    return (
      <header className="container-header">
        <img
          className="perfil-img"
          src={perfil}
          alt="foto de perfil" />
          <h1>Jaqueline Reis | Marketing</h1>
      </header>
    )
  }
}

export default Header;
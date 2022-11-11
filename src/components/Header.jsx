import React, { Component } from 'react'
import perfil from '../imgs/perfil.png'
import '../App.css'

class Header extends Component {
  render() {
    return (
      <header className="container-header">
        <h1>Jaqueline <span>Reis</span> | Marketing</h1>
        <img
          className="perfil-img"
          src={perfil}
          alt="foto de perfil" />
      </header>
    )
  }
}

export default Header;
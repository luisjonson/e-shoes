import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/mini-cart.svg'
import search from '../assets/Search.svg'
import '../css/header.css'

const Header = () => {
  return (
    <>
      <div className='container'>
        <div className='search'>
          <img src={logo} alt="Logo" />
          <div className="input-wrapper">
            <input type="text" placeholder="Pesquisar produto..." />
            <img id='icon-search' src={search} alt="Logo" />
          </div>
          <NavLink to="cadastre">Cadastre-se</NavLink>
          <button>Entrar</button>
          <div className="carrinho">
            <img src={carrinho} alt="Carrinho" />
            <span>0</span>
          </div>
        </div>

        <nav className='navegacao'>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/produtos">Produtos</NavLink></li>
            <li><NavLink to="/categorias">Categorias</NavLink></li>
            <li><NavLink to="/meusPedidos">Meus Pedidos</NavLink></li>
          </ul>
        </nav>
      </div>

    </>
  )
}

export default Header
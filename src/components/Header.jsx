import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/mini-cart.svg'

const Header = () => {

  const HandleContainer = styled.header`
    .container{
      background-color: var(--white);

      padding: 20px;
      height: 20vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      & .search{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 192px;
      gap:20px;
        &.search input{
          width: 80%;
          height: 40px;
          border-radius: 8px;
          opacity: 4%;
        }
        &.search button{
          width: 200px;
          height: 40px;
          background-color: var(--primary);
          color: var(--light-gray-3);
          border-radius: 8px;
          border: none;
          cursor: pointer;
        }
        & img {
          width: 253px;
          height: 44px;
          color: red !important;
        }

        &.search span{
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: var(--primary);
          color: green;
          width: 40px;
          height: 20px;
          border-radius: 50px;
          color: var(--dark-gray-2);
        } 
      }
    }

    & .navegacao{
      gap: 20px;
      height: 20vh;
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: space-between;

      &.navegacao ul {
        gap: 20px;
        display:flex;
        list-style: none;
        align-items: center;
        justify-content: start;
    
        & li a {
          font-size: 16px;
          font-weight: 500;
          text-decoration: none;
          color: var(--dark-gray-2);

          &:hover {
            color: #000000;
            text-decoration: underline;
          }
        }
      }
    }
  `
  return (
    <HandleContainer>
      <div className='container'>
        <div className="search">
          <img src={logo} alt="Logo" />
          <input type="text" placeholder="Pesquisar produto..." />
          {/* <img src={carrinho} alt="Logo" /> */}

          <Link to="cadastre">Cadastre-se</Link>
          <button>Entrar</button>
          <img src={carrinho} alt="Carrinho" />
          <span>0</span>
        </div>
        <nav className='navegacao'>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/meusPedidos">Meus Pedidos</Link></li>
          </ul>
        </nav>
      </div>
    </HandleContainer>
  )
}

export default Header
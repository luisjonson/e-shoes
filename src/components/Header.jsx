import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/logo-header.svg'
import carrinho from '../assets/mini-cart.svg'
import search from '../assets/Search.svg'


const Header = () => {

  const HandleContainer = styled.header`
    .container{
      padding-top: 20px;
      padding-left: 40px;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      background-color: var(--white);
      & .search{
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 30px ;
      position: relative;
       & .input-wrapper {
            position: relative;
            width: 100%;
            max-width: 400px;
            display: flex;
            justify-content: end;
       }
        & input{
          width: 100%;
          height: 40px;
          border-radius: 8px;
          padding-right: 26px; /* espaço para o ícone */
          padding-left: 10px;
          position: relative;
          /* opacity: 4%; */
          &::placeholder{
            color:var(--light-gray-2-rgba);
            font-size: 14px;
            font-style: italic;
          }
        }

        &.search #icon-search{
            width: 20px;
            right: 10px;
            display: flex;
            justify-content: center;
            position: absolute; /* agora podemos posicionar no canto */
            align-items: center;
            pointer-events: none;
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

        &.search .carrinho{
          display: flex;
          position: relative; /* necessário para a bolinha se posicionar relativa a este container */
          align-items: center;
          justify-content: flex-start;
          
          &.carrinho span{
            top: 0px;  /* ajuste conforme necessário */
            right: 97px;  /* ajuste conforme necessário */
            width: 20px;
            height: 20px;
            display: flex;
            cursor: pointer;
            font-size: 12px;
            border-radius: 50%;
            position: absolute; /* agora podemos posicionar no canto */
            color: var(--white);
            align-items: center;
            justify-content: center;
            background-color: var(--primary);
          }
        } 
      }
    }
    & .navegacao{
      height: 15vh;
      padding-left: 88px;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      &.navegacao ul {
        gap: 20px;
        display:flex;
        list-style: none;
        align-items: center;
        justify-content: start;
      }
    }
  `
  return (
    <HandleContainer>
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

    </HandleContainer>
  )
}

export default Header
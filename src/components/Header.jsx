import React from 'react'
import { Link, Links } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>Logo</h1>
        <imput type="text" placeholder="Pesquisar" />
        <button>Pesquisar</button>
        <Link to="cadastre">Cadastre-se</Link>  
        <button>Entrar</button>
        <div className="carrinho">
          <img src="carrinho.png" alt="Carrinho" />
          <span>0</span>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/meusPedidos">Meus Pedidos</Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default Header
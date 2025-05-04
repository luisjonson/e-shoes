import React from 'react'
import { Link } from 'react-router-dom'

const Produtos = () => {
  return (
    <div>
      <h1>Produto</h1>
      <ul>
        <li><Link to="/produto/1" > Produto 1 </Link></li>
        <li><Link to="/produto/2" > Produto 2 </Link></li>
        <li><Link to="/produto/3" > Produto 3 </Link></li>
        <li><Link to="/produto/4" > Produto 4 </Link></li>
        <li><Link to="/produto/5" > Produto 5 </Link></li>
        <li><Link to="/produto/6" > Produto 6 </Link></li>
        <li><Link to="/produto/7" > Produto 7 </Link></li>
        <li><Link to="/produto/8" > Produto 8 </Link></li>
        <li><Link to="/produto/9" > Produto 9 </Link></li>
        <li><Link to="/produto/10" > Produto 10 </Link></li>         

      </ul>
    </div>
  )
}

export default Produtos
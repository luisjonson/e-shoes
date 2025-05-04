import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
    return (
        <div>
            <h3>Pagina não encontrada</h3>
            <Link to={"/"}>Voltar para a Home</Link>
        </div>
    )
}

export default Notfound
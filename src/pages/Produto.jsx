import React from 'react'
import { useParams } from 'react-router-dom'

const Produto = () =>{

  const { id } = useParams();

  return (
    <div>Produto {id}</div>
  )
}

export default Produto
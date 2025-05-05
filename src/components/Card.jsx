import React from 'react'
import styled from 'styled-components';

const CardConteiner = styled.div`
      width: 292px;
      height: auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      margin: 20px;
      font-family: sans-serif;

    & .conteudo {
    padding: 16px;
    background-color: #f44336; // vermelho suave
    color: white;
    font-size: 20px;
    font-weight: bold;
  }
    
  #informacao {
    padding: 16px;
    background-color: #0a77d6;
    color: white;

    h2 {
      margin: 0 0 8px 0;
    }

    h3 {
      margin: 0;
      font-weight: normal;
    }
    }

`

const Card = () => {
  return (
    <CardConteiner>
      <div className="conteudo">
        <h1>Conteudo</h1>
      </div>
      <div id="informacao">
        <h2>Tênis</h2>
        <h3>K-Swiss V8 -</h3>
      </div>

    </CardConteiner>
  )
}

export default Card
import React from 'react'
import logofooter from '../assets/logo-footer.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'
import styled from 'styled-components';

function Footer() {

  const FooterContainer = styled.footer`
    background-color: var(--dark-gray);
    color: var(--white);
    padding: 40px 20px;
    & .conteiner-footer{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      align-items: flex-start;
      max-width: 1300px;
      margin: 0 auto;
      
      & .footerSection{
        flex: 1;
        min-width: 250px;
        margin: 20px;

        & .sectionTitle{
          font-weight: bold;
          size: 18px;
          &.sectionTitle p {
            top: 10px;
          }
        }

        & .parceiro {
          display: flex;
          justify-content: flex-start;
          gap: 30px;
          &.parceiro img{
            width: 10.92px;
            left: 20.53px;
            
          }
        }
      }

      & #referencia{
        color: red;
      }
    }
  `
  return (
    <FooterContainer>
      <div className="conteiner-footer">
        <div className="footerSection">
          <img src={logofooter} alt="Logo Footer" className="sectionTitle" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora dolorem dolor nemo hic eaque repudiandae, doloremque ea sit magnam vitae atque ab expedita esse quas facilis itaque, suscipit velit omnis!</p>
          <div className="parceiro">
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
        <div className="footerSection">
          <label className="sectionTitle">Informação</label>
          <ul>
            <li><p>Sobre DripStyore</p></li>
            <li><p>Segurança</p></li>
            <li><p>Wishist</p></li>
            <li><p>Blog</p></li>
            <li><p>Trabalhe conosco</p></li>
            <li><p>Meu Pedidos</p></li>
          </ul>
        </div>
        <div className="footerSection">
          <label className="sectionTitle">Categoria</label>
          <ul>
            <li><p>Camisetas</p></li>
            <li><p>Calças</p></li>
            <li><p>Bonés</p></li>
            <li><p>Headphones</p></li>
            <li><p>Tênis</p></li>
          </ul>
        </div>
        <div className="footerSection">
          <label className="sectionTitle">Contato</label>
          <ul>
            <li><p>Av.Santos Dumont, 1510-1 andar - Aldeota, Fortaleza - Ce,60150-161</p></li>
            <li><p>(85) 3051-3411</p></li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p id="referencia">@ 2022 Digital College</p>
      </div>
    </FooterContainer>
  )
}

export default Footer
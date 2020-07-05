import React from 'react';
import { Link } from 'react-router-dom';

import { FiSearch, FiMenu, FiPackage, FiShoppingCart, FiMapPin, FiUser, FiBell } from 'react-icons/fi';

import { Container, FirstLine, SecondLine } from './styles';

import Logo from '../../assets/mercado-livre.svg';

import imgCategorias from '../../assets/Camada34.png';

function HeaderDesktop() {
  return (
    <Container>
      <div className="content">
        <FirstLine>
          <div className="searchLogo">
            <Link to="/"><img src={Logo} alt=""/></Link>
            
            <div className="search">
              <input type="text" id="txtBusca" placeholder="Buscar produtos, marcas e muito mais..."/>
              <button><FiSearch size={20} /></button>
            </div>
          </div>
          
          <div className="frete">
            <FiPackage size={20} />
            <span>Frete grátis pelo Mercado Pontos</span>
          </div>
        </FirstLine>

        <SecondLine>
          <div className="locationCategories">
            <FiMapPin />
            <span>Enviar para ANDERSON...</span>

            <img src={imgCategorias} alt=""/>
          </div>
          
          <div className="secondBlock">
            <div className="user">
              <FiUser size={20} />
              <span>Anderson</span>
            </div>

            <span className="compras">Compras</span>

            <span className="favoritos">Favoritos</span>

            <FiBell size={20} className="bell" />

            <FiShoppingCart size={20} />
          </div>
        </SecondLine>
      </div>

    </Container>
  );
}

export default HeaderDesktop;

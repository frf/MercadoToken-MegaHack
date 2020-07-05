import React from 'react';
import { Link } from 'react-router-dom';

import { Container, FirstLine, SecondLine } from './styles';

import Logo from '../../assets/logo-mobile.svg';
import { FiSearch, FiMenu, FiShoppingCart, FiMapPin, FiChevronRight } from 'react-icons/fi';

function Header() {
  return (
    <Container>
      <div className="content">
        <FirstLine>
          <Link to="/"><img src={Logo} alt=""/></Link>
          
          <div className="search">
            <button><FiSearch size={20} /></button>
            <input type="text" id="txtBusca" placeholder="Estou buscando..."/>
          </div>
          <FiMenu size={20} />
          <FiShoppingCart size={20} />
        </FirstLine>

        <SecondLine>
          <FiMapPin />
          <span>Enviar para ANDERSON MELO - Rua...</span>
          <FiChevronRight />
        </SecondLine>
      </div>

    </Container>
  );
}

export default Header;
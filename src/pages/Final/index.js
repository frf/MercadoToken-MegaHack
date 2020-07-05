import React from 'react';
import { FiCheck } from 'react-icons/fi';

import Logo from '../../assets/mercado-pago.svg';
import MercadoToken from '../../assets/mercado token - horizontal.png';

import { Container, Topo } from './styles';

function Final() {
  return (
    <Container>
      <Topo>
        <img src={Logo} alt=""/>
      </Topo>
      
      <FiCheck size={28} />
      <p>Parabéns, sua compra foi efetuada com sucesso e com segurança.</p>

      <span>Token da transação:</span>
      <span className="token">8937497234</span>

      <img src={MercadoToken} alt=""/>
    </Container>
  );
}

export default Final;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiCheck } from 'react-icons/fi';

import Logo from '../../assets/mercado-pago.svg';
import MercadoToken from '../../assets/mercado-tokens-ok.png';

import { Container, Topo } from './styles';

function Final() {
  return (
    <Container>
      <Topo>
        <Link to="vendas"><img src={Logo} alt=""/></Link>
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
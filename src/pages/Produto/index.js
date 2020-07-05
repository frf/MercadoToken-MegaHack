import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Infos, Price, Buy } from './styles';

function Produto() {
  return (
    <>
      <Header />
      <Container>
        <img src="https://http2.mlstatic.com/smart-tv-samsung-led-32-wi-fi-lh32bet-subst-lh32benelga-D_NQ_NP_838313-MLB42283911257_062020-O.webp" alt=""/>
        
        <Infos>
          <span>305 vendidos</span>
          <h1>Smart Tv Samsung Led 32 Wi-fi -lh32bet - Subst. Lh32benelga</h1>
          <p>por <blue>Direto Com Você</blue></p>
          <span className="tag">Enviando normalmente</span>
        </Infos>

        <Price>
          <span className="de">R$ 1.349</span>
          <div className="price-block">
            <span className="price">R$ 1.099</span>
            <span className="off">18% OFF</span>
          </div>
          <span className="parcelas">em <green>12x R$ 91,58 sem juros</green></span>
          <span className="pagamentos">Ver os meios de pagamento</span>
          <span className="estoque">Estoque disponível</span>
        </Price>

        <Buy>
          <Link to="/frete"><button className="buy">Comprar agora</button></Link>
          <button>Adicionar ao carrinho</button>
        </Buy>
      </Container>
    </>
  );
}

export default Produto;
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Topo, Cartão, Boleto, Footer } from './styles';

import Img01 from '../../assets/Frame1.jpg';
import Img02 from '../../assets/Frame2.jpg';

function Pagamento() {
  return (
    <Container>
      <Topo>
        <Link to="/frete"><FiArrowLeft color="#333" /></Link>
        <h2>Como você prefere pagar?</h2>
      </Topo>

      <h3>Com Mercado Pago</h3>

      <Link to="/primeira">
        <Cartão className="first">
          <img src={Img01} alt=""/>

          <div className="normal">
            <span>Visa</span>
            <p>Até 12x sem juros</p>
          </div>

          <div className="link">
            <FiChevronRight />
          </div>
        </Cartão>
      </Link>

      <Link to="/segunda">
        <Cartão className="second">
          <img src={Img01} alt=""/>

          <div className="normal">
            <span>Mastercard</span>
            <p>Até 12x sem juros</p>
          </div>

          <div className="link">
            <FiChevronRight />
          </div>
        </Cartão>
      </Link>

      <h3>Com outros meios de pagamento</h3>

      <Boleto>
        <img src={Img02} alt=""/>

        <div className="normal">
          <span>Boleto</span>
          <p>Será aprovado em 1 ou 2 dias úteis</p>
        </div>

        <div className="link">
          <FiChevronRight />
        </div>
      </Boleto>

      <Footer>
        <span>Você pagará</span>
        <span className="price">R$ 1.099</span>
      </Footer>
    </Container> 
  );
}

export default Pagamento;

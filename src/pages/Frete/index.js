import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Topo, Endereço, Opção, Footer } from './styles';

function Frete() {
  return (
    <Container>
      <Topo>
        <Link to="/produto"><FiArrowLeft color="#333" /></Link>
        <h2>Como você quer receber a sua compra?</h2>
      </Topo>

      <Endereço>
        <span className="title">Endereço</span>
        <p>Rua Doutor Euclides Neiva de Oliveira, 2721.<br />
          João Pessoa, Paraíba - CEP 58057000 - <br />
          ANDERSON MELO
        </p>
        <span className="editar">Editar ou escolher outro</span>
      </Endereço>

      <h3>Opções de envio</h3>

      <Link to="/pagamento">
        <Opção>
          <div className="normal">
            <span>Normal</span>
            <p>Chegará entre 17 e 22 de Julho</p>
          </div>

          <div className="link">
            <span>Grátis</span>
            <FiChevronRight />
          </div>
        </Opção>
      </Link>
      
      <Footer>
        <span>Você pagará</span>
        <span className="price">R$ 1.099</span>
      </Footer>
    </Container> 
  );
}

export default Frete;
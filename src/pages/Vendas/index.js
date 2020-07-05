import React from 'react';

import { FiMoreVertical, FiLock } from 'react-icons/fi';

import HeaderDesktop from '../../components/HeaderDesktop';

import { Container, Content, Infos, Venda, FirstLine, SecondLine } from './styles';

import Fabio from '../../assets/fabio.jpg';

function Vendas() {
  function HideMessage() {
    document
      .querySelector('.mensagem')
      .classList
      .toggle('active')
  }

  return (
    <>
      <HeaderDesktop />
      <Container>
        <Content>
          <h1>Vendas</h1>

          <Infos>
            <div>
              <span>Para preparar</span>
              <p>12 vendas</p>
            </div>

            <div>
              <span>Pronto para enviar</span>
              <p>45 vendas</p>
            </div>

            <div>
              <span>Em trânsito</span>
              <p>5 vendas</p>
            </div>

            <div>
              <span>Concluídas</span>
              <p>53 vendas</p>
            </div>
          </Infos>

          <Venda>
            <FirstLine>
              <div className="status">
                <p>Você está atrasado</p>
                <span>Entregue a encomenda para os Correios o quanto antes para que não afete a sua reputação</span>
              </div>

              <button className="print">Imprimir etiqueta</button>

              <div className="user">
                <img src={Fabio} alt=""/>
                <div>
                  <div className="username-area">
                    <p className="username">Fabio</p>
                    <button><FiLock color="#3cb49d" className="button" onMouseEnter={HideMessage} onMouseLeave={HideMessage} /></button>
                    <span className="mensagem">Transação verificada</span>
                  </div>
                  <span className="contact">Enviar mensagem</span>
                </div>
              </div>

              <FiMoreVertical />
              
            </FirstLine>

            <SecondLine>
              <div className="produto">
                <img src="https://http2.mlstatic.com/D_Q_NP_2X_838313-MLB42283911257_062020-G.webp" alt=""/>
                <span>Smart Tv Samsung Led 32 Wi-fi<br />-lh32bet - Subst. Lh32benelga</span>
              </div>

              <span className="price">R$ 1.099</span>

              <span className="unidade">1 u.</span>
            </SecondLine>
          </Venda>
        </Content>

      </Container>
    </>
  );
}

export default Vendas;

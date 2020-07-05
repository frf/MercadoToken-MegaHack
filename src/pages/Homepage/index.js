import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';

import { Container, Hero, Cards, Product } from './styles';

import { FiChevronRight } from 'react-icons/fi';

import Img01 from '../../assets/img01.jpg';
import Img02 from '../../assets/img02.jpg';

import Produto01 from '../../assets/produto01.jpg';
import Produto02 from '../../assets/produto02.jpg';
import Produto03 from '../../assets/produto03.jpg';
import Produto04 from '../../assets/produto04.jpg';

function Homepage() {
  return (
    <>
      <Header />
      <Container>
        <Hero>
          <img src={Img01} alt=""/>
          <div className="credit-card">
            <img src={Img02} alt=""/>
            <div className="text-block">
              <p>Até 12 vezes sem juros</p>
              <span>Ver mais</span>
            </div>
          </div>
        </Hero>

        <Cards>
          <h2>Ofertas</h2>

          <Product>
            <img src={Produto01} alt=""/>

            <div className="infos">
              <h3>Samsung Galaxy A20s Dual Sim 32 Gb Vermelho 3 Gb Ram</h3>
              <div className="price-line">
                <span className="price">R$ 999</span>
                <span className="percent">33% OFF</span>
              </div>
              <span className="parcelas">12x R$ 83,26 sem juros</span>
            </div>
          </Product>

          <Link to="/produto">
            <Product>
              <img src={Produto02} alt=""/>
              
              <div className="infos">
                <h3>Smart Tv Samsung Led 32 Wi-fi -lh32bet - Subst. Lh32benelga</h3>
                <div className="price-line">
                  <span className="price">R$ 1.099</span>
                  <span className="percent">18% OFF</span>
                </div>
                <span className="parcelas">12x R$ 91,58 sem juros</span>
              </div>
            </Product>
          </Link>

          <Product>
            <img src={Produto03} alt=""/>
            
            <div className="infos">
              <h3>Smart Tv Tcl 50p8m Led 4k 50</h3>
              <div className="price-line">
                <span className="price">R$ 1.969</span>
                <span className="percent">24% OFF</span>
              </div>
              <span className="parcelas">12x R$ 164,08 sem juros</span>
            </div>
          </Product>

          <Product>
            <img src={Produto04} alt=""/>
            
            <div className="infos">
              <h3>Aquecedor De Ar Elétrico Portátil 1500w A-08 Mondial</h3>
              <div className="price-line">
                <span className="price">R$ 129,90</span>

              </div>
              <span className="parcelas">12x R$ 10,82 sem juros</span>
            </div>
          </Product>

          <button>
            <span>Ver todas</span>
            <FiChevronRight />
          </button>
        </Cards>
      </Container>
    </>
  );
}

export default Homepage;
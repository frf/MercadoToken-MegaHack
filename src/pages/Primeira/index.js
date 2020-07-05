import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mercado-pago.svg';

import { Container, Topo, Inputs } from './styles';

class Primeira extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
      file2: null,
    }
    this.handleChangeFile1 = this.handleChangeFile1.bind(this)
    this.handleChangeFile2 = this.handleChangeFile2.bind(this)
  }

  handleChangeFile1(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  handleChangeFile2(event) {
    this.setState({
      file2: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <Container>
        <Topo>
          <img src={Logo} alt=""/>
        </Topo>

        <h1>Tire uma foto sua e do seu RG ou CNH. Isso vai nos ajudar e validar suas próximas compras.</h1>

        <Inputs>
          <p>Foto sua</p>
          <img width={"150px"} src={this.state.file}/>
          <input type="file" accept="image/*" capture="camera" onChange={this.handleChangeFile1}/>

          <p>Foto do seu documento</p>
          <img width={"150px"} src={this.state.file2}/>
          <input type="file" accept="image/*" capture="camera"  onChange={this.handleChangeFile2}/>

          <Link to="/cvc">
            <button>Enviar</button>
          </Link>
        </Inputs>
      </Container>
    );
  }
}

export default Primeira;

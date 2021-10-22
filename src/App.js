import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './components/pages/Home';
import Registration from './components/pages/Registration'
import MeusIngressos from './components/pages/MeusIngressos'
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/meus-ingressos">
          <MeusIngressos />
        </Route>
        <Route path="/criar-evento">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

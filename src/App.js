import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

import Agendamentos from './components/Agendamentos';
import AnamneseCorporal from './components/AnamneseCorporal'
import AnamneseFacial from './components/AnamneseFacial'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Servicos from './components/Servicos';

export default function App() {
  return (
    
    <Router>
    <Navbar/>
     <Switch>
       <Route  path='/' exact component={Home}/>
       <Route  path='/anamnesefacial'  component={AnamneseFacial}/>
       <Route  path='/anamnesecorporal'  component={AnamneseCorporal}/>
       <Route  path='/agendamentos'  component={Agendamentos}/>
       <Route  path='/servicos'  component={Servicos}/>
     </Switch>
    </Router>
  );
}


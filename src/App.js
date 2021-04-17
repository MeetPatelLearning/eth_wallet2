import React from 'react'
import NavbarComponent from './components/Navbar';
import HomeComponent from './components/Home';
import TransactionComponent from './components/Transaction';
import WorkComponent from './components/Work';
import ContactComponent from './components/Contact';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import './components/App.css';

function App() {
  return (
    <BrowserRouter>  
      <div className="App">
        <NavbarComponent />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route exact path="/home">
              <HomeComponent />
            </Route>
            <Route exact path="/about">
              <TransactionComponent />
            </Route>
            <Route exact path="/work">
              <WorkComponent />
            </Route>
            <Route exact path="/contact">
              <ContactComponent />
            </Route> */}
          </Switch>
        </div>
        <hr className="mx-4 mt-5" />
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;

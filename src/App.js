import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/header'
import Home from './routes/home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

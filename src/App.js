import React, {Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Header from './components/header/Header'

const MyLoadingComponent = () => {
  return <div className="loading">Loading...</div>
};

const Home = Loadable({
  loader: () => import('./routes/home'),
  loading: MyLoadingComponent
});

const Work = Loadable({
  loader: () => import('./routes/work'),
  loading: MyLoadingComponent
});

const Services = Loadable({
  loader: () => import('./routes/services'),
  loading: MyLoadingComponent
})

const NoMatch = Loadable({
  loader: () => import('./routes/404.js'),
  loading: MyLoadingComponent
})



function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/work' component={Work}/>
          <Route path='/services' component={Services}/>
          <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

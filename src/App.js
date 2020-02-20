import React, {Component, Fragment} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import intl from 'react-intl-universal';
import Header from './components/header/Header'


const MyLoadingComponent = () => {
  return <div className="loading">Loading...</div>
};

const Home = Loadable({
  loader: () => import ('./routes/home'),
  loading: MyLoadingComponent
});

const Work = Loadable({
  loader: () => import ('./routes/work'),
  loading: MyLoadingComponent
});

const WorkDetail = Loadable({
  loader: () => import ('./routes/work/detail'),
  loading: MyLoadingComponent
});

const Services = Loadable({
  loader: () => import ('./routes/services'),
  loading: MyLoadingComponent
})

const NoMatch = Loadable({
  loader: () => import ('./routes/404.js'),
  loading: MyLoadingComponent
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lang: 'zh'
    }
  }
  changeLang = (lang) => {
    intl.options.currentLocale = lang
    this.setState({
      lang
    })
  }
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header changeLang={this.changeLang}/>
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/work' exact component={Work}/>
            <Route path='/work/detail/:id' exact component={WorkDetail}/>
            <Route path='/services' component={Services}/>
            <Route component={NoMatch}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;

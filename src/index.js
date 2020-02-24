import React from 'react';
import ReactDOM from 'react-dom';
// import intl from 'react-intl-universal';

import intl from './utils/intl'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

const get_zh = () => axios
  .get('/language/zh_CN.json')
  .then(response => {
    return response.data
  });

const get_en = () => axios
  .get('/language/en_US.json')
  .then(response => {
    return response.data
  });

axios.all([get_zh(), get_en()]).then(axios.spread(function (zh, en) {
  // const navigtorLang = (navigator.languages && navigator.languages[0]) || navigator.language
  intl.init({
    currentLocale: 'zh',
    locales: {
      zh,
      en
    }
  })
  ReactDOM.render(
    <App/>, document.getElementById('root'));
    serviceWorker.unregister();
}))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls. Learn
// more about service workers: https://bit.ly/CRA-PWA


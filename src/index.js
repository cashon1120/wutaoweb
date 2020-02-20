import React from 'react';
import ReactDOM from 'react-dom';
import intl from 'react-intl-universal';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import zh from './language/zh_CN';
import en from './language/en_US';

const navigtorLang = (navigator.languages && navigator.languages[0]) || navigator.language
intl.init({
  currentLocale: navigtorLang.split('-')[0],
  locales: {
    zh,
    en
  }
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

import React, {Component, Fragment} from 'react';
import Swiper from './swiper/swiper'
import {Link} from 'react-router-dom';
import intl from '../../utils/intl'
import Footer from '../../components/footer/footer'
import Intrduce from './intrduce/intrduce'

import './style.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="black-bg">
          <Swiper/>
        </div>
        <div className="card-container index-service">
          <div className="card-container_content content-wrapper">
            <h1>{intl.get('index.sevices.title1')}
              <br/> {intl.get('index.sevices.title2')}</h1>
            <div className="container-grid flex-stretch">
              <div className="col-xs-sm">
                <div className="content">

                  <Link to="/services">
                    <h3>{intl.get('index.sevices.mobile.title')}</h3>
                    <div className="flex-container flex-end">
                      <div className="flex-1">
                        {(intl
                          .get('index.sevices.mobile.list')  || [])
                          .map(item => <span key={item}>{item}<br/></span>)}
                      </div>
                      <div>
                        <i className="iconfont">&#xe619;</i>
                      </div>
                    </div>
                  </Link>

                </div>
              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm">
                <div className="content">
                  <Link to="/services">
                    <h3>{intl.get('index.sevices.webapp.title')}</h3>
                    <div className="flex-container flex-start">
                      <div className="flex-1">
                      {(intl
                          .get('index.sevices.webapp.list') || [])
                          .map(item => <span key={item}>{item}<br/></span>)}
                      </div>
                      <div>
                        <i
                          className="iconfont"
                          style={{
                          fontSize: 40
                        }}>&#xe61b;</i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="service-btn">
              <Link to="/services" className="btn btn-lg">{intl.get('global.showmore')}</Link>
            </div>
          </div>

        </div>
        <Intrduce/>
        <Footer/>
      </Fragment>
    );
  }
}

export default Home;
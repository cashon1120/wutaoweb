import React, {Component, Fragment} from 'react';
import Swiper from './swiper/swiper'
import Footer from '../../components/footer/footer'

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
            <h1>We bring ideas from
              <br/>
              conception to completion</h1>
            <div className="container-grid">
              <div className="col-xs-sm">
                <div className="content">

                  <a href="https://www.swensonhe.com/services">
                    <h3>Mobile Applications</h3>
                    <div className="flex-container flex-end">
                      <div className="flex-1">
                        iOS<br/>
                        Android<br/>
                        Hybrid</div>

                      <div>
                        <i className="iconfont">&#xe619;</i>
                      </div>
                    </div>
                  </a>

                </div>
              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm">
                <div className="content">
                  <a href="https://www.swensonhe.com/services">
                    <h3>Web Applications</h3>
                    <div className="flex-container flex-start">
                      <div className="flex-1">
                        Media and Content<br/>
                        Enterprise Back Office<br/>
                        E-Commerce</div>

                      <div>
                        <i
                          className="iconfont"
                          style={{
                          fontSize: 40
                        }}>&#xe61b;</i>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          
            <div className="service-btn">
                <a href="/" className="btn btn-lg">LEARN MORE</a>
            </div>            
          </div>

        </div>

        <Footer />
      </Fragment>
    );
  }
}

export default Home;
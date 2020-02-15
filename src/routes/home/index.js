import React, {Component, Fragment} from 'react';
import Swiper from './swiper/swiper'
import {Link} from 'react-router-dom';
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
            <h1>我们将构想从
              <br/>
              构思带入 完成</h1>
            <div className="container-grid">
              <div className="col-xs-sm">
                <div className="content">

                  <Link to="/services">
                    <h3>移动应用</h3>
                    <div className="flex-container flex-end">
                      <div className="flex-1">
                        iOS<br/>
                        Android<br/>
                        混合开发</div>
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
                    <h3>网络应用</h3>
                    <div className="flex-container flex-start">
                      <div className="flex-1">
                        媒体和内容<br/>
                        企业后台管理<br/>
                        电子商务
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
                <Link to="/services" className="btn btn-lg">查看更多</Link>
            </div>            
          </div>

        </div>
        <Intrduce />
        <Footer />
      </Fragment>
    );
  }
}

export default Home;
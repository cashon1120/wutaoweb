import React, {Component, Fragment} from 'react';
import './style.scss'
import Footer from '../../components/footer/footer'
import Image from '../../assets/images/work-1.jpg'
class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <Fragment>
      <div className="main page-work">
        <div className="main-container">
          <h1>这是我们真正引以为傲的一些工作。</h1>
          <div className="category-list">
            <a className="active" href="https://www.swensonhe.com/work/">All</a>
            <a href="https://www.swensonhe.com/work/e-commerce/">E-commerce</a>
            <a href="https://www.swensonhe.com/work/health-care-technology/">Health Care Technology</a>
            <a href="https://www.swensonhe.com/work/internet-of-things/">Internet of Things</a>
            <a href="https://www.swensonhe.com/work/media/">Media</a>
          </div>

          <div className="work-list-container">

            <div className="container-grid work-item-row">
              <div className="col-xs-sm">
                <div className="work-item">
                  <div className="img-wrapper">
                    <img src={Image} alt=""/>
                  </div>
                  <div className="works-landing__description">
                    <h5>
                      <a href="https://www.swensonhe.com/work/internet-of-things/scotts/">Scotts Miracle-Gro</a>
                    </h5>
                    <div className="hidden-xxs">
                      Android, Bluetooth, Hybrid, Ionic, iOS, IoT, UI/UX
                    </div>
                  </div>
                  <a href="#" className="more">view more123</a>
                </div>
              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm">
              <div className="work-item">
                  <div className="img-wrapper">
                    <img src={Image} alt=""/>
                  </div>
                  <div className="works-landing__description">
                    <h5>
                      <a href="https://www.swensonhe.com/work/internet-of-things/scotts/">Scotts Miracle-Gro</a>
                    </h5>
                    <div className="hidden-xxs">
                      Android, Bluetooth, Hybrid, Ionic, iOS, IoT, UI/UX
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="container-grid work-item-row">
              <div className="col-xs-sm">
                <div className="work-item">
                  <div className="img-wrapper">
                    <img src={Image} alt=""/>
                  </div>
                  <div className="works-landing__description">
                    <h5>
                      <a href="https://www.swensonhe.com/work/internet-of-things/scotts/">Scotts Miracle-Gro</a>
                    </h5>
                    <div className="hidden-xxs">
                      Android, Bluetooth, Hybrid, Ionic, iOS, IoT, UI/UX
                    </div>
                    <a href="#">view more</a>
                  </div>
                </div>
              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm">
              <div className="work-item">
                  <div className="img-wrapper">
                    <img src={Image} alt=""/>
                  </div>
                  <div className="works-landing__description">
                    <h5>
                      <a href="https://www.swensonhe.com/work/internet-of-things/scotts/">Scotts Miracle-Gro</a>
                    </h5>
                    <div className="hidden-xxs">
                      Android, Bluetooth, Hybrid, Ionic, iOS, IoT, UI/UX
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Work;
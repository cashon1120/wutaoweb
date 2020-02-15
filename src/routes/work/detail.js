import React, {Component, Fragment} from 'react'
import './style.scss'

import Scotts_phone_2 from '../../assets/images/Scotts_phone_2.png'
// import Img1 from '../../assets/images/bitmap@3x-2-1.png' import Img2 from
// '../../assets/images/bitmap@3x-3-1.jpg'

import Img3 from '../../assets/images/temp3.png'
import Img4 from '../../assets/images/temp4.png'

import Image from '../../assets/images/work-1.jpg'

class WorkDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="detail page-work">
          <div className="main-container">
            <div className="banner-container">
              <span>在此过程的每个步骤中，我们都与客户紧密合作。</span>
              从设计到开发，我们采取平衡的方法，每个部分都受到同等的关注和关注。
            </div>
          </div>
          <div className="img-banner">
            <div className="img-container">
              <img className="img-phone" src={Scotts_phone_2} alt=""/>
            </div>
          </div>

          <div className="main-container">
            <div className="container-grid">
              <div className="col-xs-sm">
                <div className="content">
                  <h3>Type of business</h3>
                  Scotts Miracle-Gro's portfolio of do-it-yourself lawn, garden, and home
                  protection products are recognized and sold at major retailers throughout North
                  America. In 2016, Scotts acquired Blossom-a manufacturer of Internet-enabled
                  irrigation controllers-and reached out to us to redesign the existing Blossom
                  mobile app to support a new line of in-house smart products under the Gro™
                  brand.
                  <img src={Img3} alt=""/>
                </div>
              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm">
                <div className="content">
                  <h3>Type of business</h3>
                  Scotts Miracle-Gro's portfolio of do-it-yourself lawn, garden, and home
                  protection products are recognized and sold at major retailers throughout North
                  America. In 2016, Scotts acquired Blossom-a manufacturer of Internet-enabled
                  irrigation controllers-and reached out to us to redesign the existing Blossom
                  mobile app to support a new line of in-house smart products under the Gro™
                  brand.
                  <img src={Img4} alt=""/>
                </div>
              </div>
            </div>
            <h1 className="text-align-center process-h1">其它项目</h1>
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
                    <a href="#" className="more">view more</a>
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
                    <a href="#" className="more">view more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default WorkDetail

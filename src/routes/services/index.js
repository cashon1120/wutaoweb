import React, {Component, Fragment} from 'react';
import './style.scss'
import $ from 'jquery'
import Footer from '../../components/footer/footer'
import {throttle} from '../../utils/util'

import ImgPhone from '../../assets/images/img-phone.png'
import swiftLogo from '../../assets/images/swift-logo.png'
import appleLogo from '../../assets/images/apple-logo.png'
import kotlinLogo from '../../assets/images/kotlin-logo.png'
import javaLogo from '../../assets/images/java-logo.png'
import angularLogo from '../../assets/images/apple-logo.png'
import reactLogo from '../../assets/images/react-logo.png'
import javascriptLogo from '../../assets/images/js-logo.png'
import ImgPc from '../../assets/images/img-pc.png'
import magentoLogo from '../../assets/images/magento-logo.png'
import shopifyLogo from '../../assets/images/swift-logo.png'
import videosLogo from '../../assets/images/youtube-logo.png'
import imagesLogo from '../../assets/images/images.png'
import awsLogo from '../../assets/images/apn-logo.png'
import mcLogo from '../../assets/images/microsoft-great-plains-logo.png'




class Services extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProcessIndex: 0,
      domList: null,
      windowHeight: null,
      animateDom: null,
      scrollIndex: 0,
      scrollList: [83, 53, 22]
    };
  }

  componentDidMount() {
    this.setState({
      domList: $('.process-item-container'),
      windowHeight: $(window).height(),
      animateDom: $('.zz')
    })
    $(document).on('scroll', throttle(this.handlerScroll, 200))

  }

  handlerScroll = () => {
    const {domList, windowHeight} = this.state
    if (windowHeight < 1024) {
      $.each(domList, (index, item) => {
        const mTop = item
          .getBoundingClientRect()
          .top;
        if (mTop <= windowHeight / 2) {
          this.setState({
            scrollIndex: index
          })
        }
      })
    }
  }

  handlerShowProcess = index => {
    this.setState({showProcessIndex: index})
  }

  render() {
    const {showProcessIndex, scrollList, scrollIndex} = this.state
    return (
      <Fragment>
        {/** banner **/}
        <div className="black-bg">
          <div className="main-container">
            <div className="services-banner">
              <div className="banner-container">
                <span>在此过程的每个步骤中，我们都与客户紧密合作。</span>
                从设计到开发，我们采取平衡的方法，每个部分都受到同等的关注和关注。
              </div>
            </div>
          </div>
        </div>

        {/** 移动端 **/}
        <div className="main-container page-services mobile">
          <h1 className="text-align-center">我们的专业领域</h1>
          <div className="container-grid container-grid-2 padding-bottom-6">
            <div className="col-xs-sm content">
              <h2>移动应用</h2>
              <div className="flex-container flex-end">
                <div className="flex-1">
                  <p>iOS</p>
                  <p>Android</p>
                  <p>Hybrid</p>
                </div>
                <div>
                  {/* <img src={ImgPhone} alt=""/> */}
                </div>
              </div>
            </div>
            <div className="space-30"></div>
            <div className="col-xs-sm content">
              <h2>移动应用</h2>
              <div className="flex-container">
                <div className="flex-1 flex-end">
                  <p>E-Commerce</p>
                  <p>Media and Content</p>
                  <p>Enterprise Back Office</p>
                </div>
                <div>
                  <img src={ImgPc} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/** PC内容 **/}

        <div className="main-container page-services pc">
          <h1 className="text-align-center">我们的专业领域</h1>
          <div className="container-grid container-grid-2 padding-bottom-6">
            <div className="col-xs-sm">
              <h2>移动应用</h2>
              我们为iOS，Android和混合移动平台开发解决方案，每种解决方案都能满足不同的细分市场和特定的客户需求。
            </div>
            <div className="col-xs-sm service-img-phone">
              <img src={ImgPhone} alt=""/>
            </div>
          </div>
          <div className="padding-bottom-6">
            <div className="container-grid container-grid-3 flex-stretch">
              <div className="col-xs-sm content">

                <h2>iOS</h2>
                <div className="flex-container">
                  <div><img src={swiftLogo} alt=""/></div>
                  <div>Swift</div>
                </div>
                <div className="flex-container">
                  <div><img src={appleLogo} alt=""/></div>
                  <div>Objective C</div>
                </div>

              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm content">

                <h2>Android</h2>
                <div className="flex-container">
                  <div><img src={kotlinLogo} alt=""/></div>
                  <div>Kotlin</div>
                </div>
                <div className="flex-container">
                  <div><img src={javaLogo} alt=""/></div>
                  <div>Java C</div>
                </div>

              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm content">

                <h2>Hybrid</h2>
                <div className="flex-container">
                  <div><img src={angularLogo} alt=""/></div>
                  <div>Angular/Ionic</div>
                </div>
                <div className="flex-container">
                  <div><img src={reactLogo} alt=""/></div>
                  <div>React/React Native</div>
                </div>
                <div className="flex-container">
                  <div><img src={javascriptLogo} alt=""/></div>
                  <div>javascript</div>
                </div>

              </div>
            </div>
          </div>

          <div className="container-grid container-grid-2 padding-bottom-6">
            <div className="col-xs-sm service-img-phone service-img-phone-2">
              <img src={ImgPc} alt=""/>
            </div>
            <div className="col-xs-sm service-img-text">
              <div style={{
                textAlign: 'left'
              }}>
                <h2>网络应用</h2>
                我们在为各种基于Web的应用程序构建方面拥有丰富的经验，并与客户一起确定理想的框架和平台。
              </div>
            </div>
          </div>
          <div className="padding-bottom-6">
            <div className="container-grid container-grid-3 flex-stretch">
              <div className="col-xs-sm content">

                <h2>电子商务</h2>
                <div className="flex-container">
                  <div><img src={magentoLogo} alt=""/></div>
                  <div>Magento</div>
                </div>
                <div className="flex-container">
                  <div><img src={shopifyLogo} alt=""/></div>
                  <div>Shopify C</div>
                </div>

              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm content">

                <h2>媒体与内容</h2>
                <div className="flex-container">
                  <div><img src={videosLogo} alt=""/></div>
                  <div>Videos</div>
                </div>
                <div className="flex-container">
                  <div><img src={imagesLogo} alt=""/></div>
                  <div>Images</div>
                </div>
                <div className="flex-container">
                  <div><img src={awsLogo} alt=""/></div>
                  <div>Aws</div>
                </div>
              </div>
              <div className="space-30"></div>
              <div className="col-xs-sm content">

                <h2>企业后台</h2>
                <div className="flex-container">
                  <div><img src={mcLogo} alt=""/></div>
                  <div>Microsoft Great Plains</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/** 流程 **/}
        <div className="main-container page-services">
          <h1 className="text-align-center process-h1">我们的过程</h1>
          <div className="process-wrapper">
            <div className="process-outer">
              <div className="zz" style={{top: scrollList[scrollIndex]* -1 +'%'}}></div>
              <div className="flex-container flex-end process">
                <div
                  onMouseEnter={() => this.handlerShowProcess(0)}
                  className={showProcessIndex === 0
                  ? "flex-1 process-item-container process-item process-item-1 active"
                  : "flex-1 process-item-container process-item process-item-1"}>
                  <p>战略规划</p>
                  <ul>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe600;</i>
                      </div>
                      <b>了解产品</b>
                      我们与您的设计，产品和工程团队紧密合作。
                    </li>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe649;</i>
                      </div>
                      <b>了解用户</b>
                      我们以客户为原型, 并以体验为核心, 以简单的心态进行开发
                    </li>

                  </ul>
                </div>
                <div
                  onMouseEnter={() => this.handlerShowProcess(1)}
                  className={showProcessIndex === 1
                  ? "flex-1 process-item-container process-item process-item-2 active"
                  : "flex-1 process-item-container process-item process-item-2"}>
                  <p>UI/UX 设计</p>
                  <ul>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe61e;</i>
                      </div>
                      <b>线框图和经验</b>
                      使用每项功能，我们都会反复进行，直到在4次或更短的屏幕点击时间内即可完成任何操作。
                    </li>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe684;</i>
                      </div>
                      <b>设计与品牌匹配</b>
                      根据您的品牌，要格外小心，以确保每个屏幕，动画和按钮都一致，优雅且精致。
                    </li>
                  </ul>
                </div>
                <div
                  onMouseEnter={() => this.handlerShowProcess(2)}
                  className={showProcessIndex === 2
                  ? "flex-1 process-item-container process-item process-item-3 active"
                  : "flex-1 process-item-container process-item process-item-3"}>
                  <p>发展历程</p>
                  <ul>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe619;</i>
                      </div>
                      <b>原型制作</b>
                      在开发之前和开发过程中基于反馈进行迭代可确保应用程序达到并超过期望。
                    </li>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe602;</i>
                      </div>
                      <b>测试中</b>
                      我们花费数百小时来测试多种设备的质量保证。
                    </li>
                    <li>
                      <div className="icon-wrapper">
                        <i className="iconfont">&#xe618;</i>
                      </div>
                      <b>生产和迭代</b>
                      我们采用策略来捕获用户的诚实反馈，而不会对应用商店的评分产生负面影响。
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default Services;
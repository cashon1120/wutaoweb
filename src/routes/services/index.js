import React, {Component, Fragment} from 'react';
import './style.scss'
import $ from 'jquery'
import {Row, Col} from 'antd'
import intl from '../../utils/intl'
import Footer from '../../components/footer/footer'
import {throttle} from '../../utils/util'

import ImgPhone from '../../assets/images/img-phone.png'
import ImgPc from '../../assets/images/img-pc.png'

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
          this.setState({scrollIndex: index})
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
                <span>{intl.get('services.banner.title1')}</span>
                {intl.get('services.banner.title2')}
              </div>
            </div>
          </div>
        </div>

        {/** 移动端 **/}
        <div className="main-container page-services mobile">
          <h1 className="text-align-center">{intl.get('services.territory.title')}</h1>
          <div className="container-grid container-grid-2 padding-bottom-6">
            <div className="col-xs-sm content">
              <h2>{intl.get('services.territory.mobile.title')}</h2>
              <div className="flex-container flex-end">
                <div className="flex-1">
                  {(intl
                    .get('services.territory.mobile.list') || [])
                    .map(item => <p key={item.title}>{item.title}</p>)}

                </div>
                <div>
                  <img src={ImgPhone} alt=""/>
                </div>
              </div>
            </div>
            <div className="space-30"></div>
            <div className="col-xs-sm content">
              <h2>{intl.get('services.territory.webapp.title')}</h2>
              <div className="flex-container">
                <div className="flex-1 flex-end">
                  {(intl
                    .get('services.territory.webapp.list') || [])
                    .map(item => <p key={item.title}>{item.title}</p>)}
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
          <h1 className="text-align-center">{intl.get('services.territory.title')}</h1>
          <div className="container-grid container-grid-2 padding-bottom-6">
            <div className="col-xs-sm">
              <h2>{intl.get('services.territory.mobile.title')}</h2>
              {intl.get('services.territory.mobile.desc')}
            </div>
            <div className="col-xs-sm service-img-phone">
              <img src={ImgPhone} alt=""/>
            </div>
          </div>
          <div className="padding-bottom-6">
            <Row gutter={[30]} className="flex-stretch">
              {(intl
                .get('services.territory.mobile.list') || [])
                .map(item => <Col key={item.title} span={8}>
                  <div className="content">
                    <h2>{item.title}</h2>
                    {(item
                      .item || [])
                      .map(project => <div className="flex-container" key={project.name}>
                        <div><img src={project.imgSrc} alt=""/></div>
                        <div>{project.name}</div>
                      </div>)}
                  </div>
                </Col>)}
            </Row>
          </div>

          <div className="container-grid container-grid-2 padding-bottom-6">
            <div className="col-xs-sm service-img-phone service-img-phone-2">
              <img src={ImgPc} alt=""/>
            </div>
            <div className="col-xs-sm service-img-text">
              <div style={{
                textAlign: 'left'
              }}>
                <h2>{intl.get('services.territory.webapp.title')}</h2>
                {intl.get('services.territory.webapp.desc')}
              </div>
            </div>
          </div>
          <div className="padding-bottom-6">
            <Row gutter={[30]} className="flex-stretch">
              {(intl
                .get('services.territory.webapp.list') || [])
                .map(item => <Col key={item.title} span={8}>
                  <div className="content">
                    <h2>{item.title}</h2>
                    {item
                      .item
                      .map(project => <div className="flex-container" key={project.name}>
                        <div><img src={project.imgSrc} alt=""/></div>
                        <div>{project.name}</div>
                      </div>)}
                  </div>
                </Col>)}
            </Row>
          </div>

        </div>

        {/** 流程 **/}
        <div className="main-container page-services">
          <h1 className="text-align-center process-h1">{intl.get('services.process.title')}</h1>
          <div className="process-wrapper">
            <div className="process-outer">
              <div
                className="zz"
                style={{
                top: scrollList[scrollIndex] * -1 + '%'
              }}></div>
              <div className="flex-container flex-end process">
                {(intl
                  .get('services.process.list') || [])
                  .map((item, index) => <div
                    onMouseEnter={() => this.handlerShowProcess(index)}
                    className={showProcessIndex === index
                    ? `flex-1 process-item-container process-item process-item-${index+1} active`
                    : `flex-1 process-item-container process-item process-item-${index+1}`} key={item.h1}>
                    <p>{item.h1}</p>
                    <ul>
                      {item.item.map(project => <li key={project.title}>
                        <div className="icon-wrapper">
                          <i className="iconfont">{project.icon}</i>
                        </div>
                        <b>{project.title}</b>
                        {project.desc}
                      </li>)}
                    </ul>
                  </div>)}
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
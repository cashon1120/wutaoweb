import React, {Component} from 'react';
import $ from 'jquery'
import {bodyScrollTo, getOs} from '../../../utils/util'
import './swiper.scss'

import Image1 from '../../../assets/images/temp1.png'
import Image2 from '../../../assets/images/temp2.png'
import Phone1 from '../../../assets/images/phone-content.png'
import Iphone from '../../../assets/images/iphone.png'

let isScrolling = false // 当前是否滚动
let scrollDerection = 'down' // 滚动方向
let scrollEle = null // 滚动节点, scrollDom
let isBindScroll = false // 是否为节点绑定滚动事件

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: $(window).width(),
      windowHeight: $(window).height(),
      scrollIndex: -1,
      lastScrollTop: 0,
      scrollEle: null,
      outerFixed: false,
      isEnd: false,
      showPoint: false,
      data: [
        {
          title: 'simplehuman',
          content: `Forward-thinking solutions for forward-thinking clients. A re-imagining of what
        a virtual home assistant can do. App development that automatically purchase
        refills of consumable supplies, control networked appliances... convenience at
        your fingertips.`,
          imgSrc: Image1,
          phoneSrc: Phone1
        }, {
          title: '222',
          content: `Forward-thinking solutions for forward-thinking clients. A re-imagining of what
        a virtual home assistant can do. App development that automatically purchase
        refills of consumable supplies, control networked appliances... convenience at
        your fingertips.`,
          imgSrc: Image1,
          phoneSrc: Phone1
        }, {
          title: '333',
          content: `Forward-thinking solutions for forward-thinking clients. A re-imagining of what
        a virtual home assistant can do. App development that automatically purchase
        refills of consumable supplies, control networked appliances... convenience at
        your fingertips.`,
          imgSrc: Image2,
          phoneSrc: Phone1
        }
      ]
    };
  }

  componentDidMount() {
    scrollEle = document
    window.addEventListener('resize', this.toggleScrollEvent)
    this.toggleScrollEvent()
  }

  toggleScrollEvent = () => {
    const {data, windowHeight, windowWidth} = this.state
    $(document).unbind('scroll')
    if (windowWidth > 768) {
      // 绑定页面滚动事件
      // $(document).on('scroll', () => {

      //   // if ($(document).scrollTop() <= windowHeight * data.length && !isBindScroll) {
      //   //   const {scrollIndex} = this.setState
      //   //   this.handlerUnbindEvent(scrollEle, this.handlerScroll)
      //   //   this.handlerBindEvent(scrollEle, this.handlerScroll, {passive: false})
      //   //   if (scrollIndex > 0) {
      //   //     this.setState({outerFixed: true})
      //   //   }
      //   // }

      //   // 滚出最后一屏
      //   if ($(document).scrollTop() > windowHeight * data.length) {
      //     this.setState({showPoint: false})
      //     this.handlerUnbindEvent(scrollEle, this.handlerScroll)
      //   }
      // })
      // 绑定 swiper 滚动事件
      this.handlerBindEvent(scrollEle, this.handlerScroll, {passive: false})
    } else {
      this.setState({scrollIndex: 0})
    }
  }

  // 绑定滚动事件
  handlerBindEvent(dom, fn, params) {
    this.handlerUnbindEvent(dom, fn)
    const eventName = getOs() === 'Firefox'
      ? 'DOMMouseScroll'
      : 'mousewheel'
    dom.addEventListener(eventName, fn, params)
    isBindScroll = true
  }

  // 接触滚动事件
  handlerUnbindEvent(dom, fn) {
    const eventName = getOs() === 'Firefox'
      ? 'DOMMouseScroll'
      : 'mousewheel'
    dom.removeEventListener(eventName, fn)
    isBindScroll = false
  }

  // 滚动事件
  handlerScroll = (e) => {
    const {data} = this.state
    e.preventDefault();
    e.stopPropagation();
    let {scrollIndex} = this.state
    if (!isScrolling) {
      isScrolling = true
      const deltaY = e.deltaY || e.detail
      if (deltaY > 0) {
        scrollDerection = 'down'
        // 滚动到最后一项目时取消滚动事件
        scrollIndex = Math.min(data.length - 1, scrollIndex + 1)
        if (scrollIndex === data.length - 1) {
          setTimeout(() => {
            this.handlerUnbindEvent(scrollEle, this.handlerScroll)
          }, 1000);
        }
      } else {
        scrollDerection = 'up'
        if (scrollIndex === 0) {
          this.setState({outerFixed: false})
        }
        if (scrollIndex === data.length - 1) {
          this.setState({isEnd: false, outerFixed: true})
        }
        scrollIndex = Math.max(-1, scrollIndex - 1)
      }

      this.setBodyScroll(scrollIndex)

    }
  }

  handlerCallback = () => {
    const {scrollIndex, data} = this.state
    if (scrollIndex === 0 && scrollDerection === 'down') {
      this.setState({outerFixed: true})
    }
    if (scrollIndex === data.length - 1 && scrollDerection === 'down') {
      this.setState({isEnd: true, outerFixed: false})
    }
    isScrolling = false
  }

  setBodyScroll(scrollIndex) {
    const show = scrollIndex > -1
      ? true
      : false
    this.setState({scrollIndex, showPoint: show})
    const {windowHeight} = this.state
    bodyScrollTo((scrollIndex + 1) * windowHeight, this.handlerCallback)
  }

  // 移动端点击按钮切换
  handleSetActiveByArr = type => {
    let {scrollIndex, data} = this.state
    if (type === 'left') {
      scrollIndex = scrollIndex - 1
      if (scrollIndex === -1) {
        scrollIndex = data.length - 1
      }
    } else {
      scrollIndex = scrollIndex + 1
      if (scrollIndex === data.length) {
        scrollIndex = 0
      }
    }
    this.setState({scrollIndex})
  }

  handleSetActive = (index) => {
    this.setState({scrollIndex: index})
  }

  render() {
    const {data, scrollIndex, showPoint, outerFixed, isEnd} = this.state
    let pointClassName = 'swiper-point'
    if (showPoint) {
      pointClassName = 'swiper-point show'
    }
    let outerClassName = 'outer-phone'
    if (outerFixed) {
      outerClassName += ' fixed'
    }
    if (isEnd) {
      outerClassName += ' isEnd'
    }

    return (
      <div id="scrollDom">
        <div className="main main-index first-screen full-screen-container">
          <div className="container full-screen-content">
            <div>
              <h1>数字体验栩栩如生</h1>
              我们是一家软件咨询公司，专门从事IOS,Android,小程序等平台的软件定制化设计和与开发服务
              <div className="arrow-down" onClick={() => this.setBodyScroll(0)}>
                <i className="iconfont">&#xe603;</i>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper container">
          <div className={outerClassName}>
            <img src={Iphone} alt=""/>
          </div>
          {/* swiper */}
          {data.map((item, index) => (
            <div
              className={scrollIndex === index
              ? "screen-container active"
              : "screen-container"}
              key={item.title}>
              <div className="txt-container">
                <h1>{item.title}</h1>
                <section>
                  {item.content}
                </section>
                <a className="btn btn-white" href="@">VIEW PROJECT</a>
              </div>

              <div className="img-container">
                <img src={item.imgSrc} className="bg" alt=""/>
                <img src={item.phoneSrc} className="phone_content" alt=""/>
              </div>
              <div className="txt-container-bottom">
                <h1>{item.title}</h1>
                <section>
                  {item.content}
                </section>
                <a className="btn btn-white" href="@">VIEW PROJECT</a>
              </div>
            </div>
          ))}
        </div>
        {/* 切换 按钮*/}
        <div className="flex-container swiper-switch">
          <div>
            <i className="iconfont" onClick={() => this.handleSetActiveByArr('left')}>&#xe642;</i>
          </div>
          <div className="flex-1">
            <h1>{scrollIndex > -1
                ? data[scrollIndex].title
                : ''}</h1>
          </div>
          <div>
            <i className="iconfont" onClick={() => this.handleSetActiveByArr('right')}>&#xe69c;</i>
          </div>
        </div>
        {/* 切换 标签*/}
        <div className={pointClassName}>
          {data.map((item, index) => (
            <span
              key={item.title}
              onClick={() => this.handleSetActive(index)}
              className={scrollIndex === index
              ? 'active'
              : null}></span>
          ))}
        </div>
      </div>
    );
  }
}

export default Swiper;
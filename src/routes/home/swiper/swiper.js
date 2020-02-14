import React, {Component} from 'react';
import $ from 'jquery'
import {bodyScrollTo, getOs} from '../../../utils/util'
import './swiper.scss'

import Image1 from '../../../assets/images/temp1.png'
import Image2 from '../../../assets/images/temp2.png'
import Phone1 from '../../../assets/images/phone-content.png'
import Iphone from '../../../assets/images/iphone.png'

class Swiper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolling: false, // 当前是否滚动
      isFirstScreen: true, // 当前是否在第一屏
      scrollEle: null, // 滚动节点, scrollDom
      scrollContent: null, // 滚动元素, .swiper-content
      isBindScroll: false, // 是否为节点绑定滚动事件
      lastScrolltop: 0,
      windowWidth: 0,
      windowHeight: 0,
      scrollIndex: 0,
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
    this.setState({
      windowWidth: $(window).width(),
      windowHeight: $(window).height(),
      scrollIndex: 0,
      scrollEle: document.getElementById('scrollDom'),
      scrollContent: $('#scrollContent')
    }, () => {
      window.addEventListener('resize', this.toggleScrollEvent)
       // this.toggleScrollEvent()
      const {windowHeight} = this.state
      if ($(document).scrollTop() >= windowHeight) {
        this.setState({isFirstScreen: false})

      }
    })

  }

  componentWillUnmount = () => {
    this.setState = () => {
      return;
    };
  }

  toggleScrollEvent = () => {
    const {windowWidth, scrollEle} = this.state
    if (windowWidth > 768) {
      // 绑定页面滚动事件
      $(document).unbind('scroll', this.bindDocumentScroll)
      $(document).on('scroll', this.bindDocumentScroll)
      // 绑定 swiper 滚动事件
      this.handlerBindEvent(scrollEle, this.handlerScroll, {passive: false})
    }
  }

  bindDocumentScroll = () => {
    const {windowHeight, isBindScroll, lastScrolltop, scrollEle} = this.state
    if ($(document).scrollTop() < (windowHeight + 50) && !isBindScroll && $(document).scrollTop() < lastScrolltop) {
      this.setBodyScroll('html,body', 1)
      this.handlerBindEvent(scrollEle, this.handlerScroll, {passive: false})
      return
    }

    this.setState({
      lastScrolltop: $(document).scrollTop()
    })
  }

  // 绑定滚动事件
  handlerBindEvent(dom, fn, params) {
    this.handlerUnbindEvent(dom, fn)
    const eventName = getOs() === 'Firefox'
      ? 'DOMMouseScroll'
      : 'mousewheel'
    dom.addEventListener(eventName, fn, params)
    this.setState({isBindScroll: true})
  }

  // 接触滚动事件
  handlerUnbindEvent(dom, fn) {
    const eventName = getOs() === 'Firefox'
      ? 'DOMMouseScroll'
      : 'mousewheel'
    dom.removeEventListener(eventName, fn)
    this.setState({isBindScroll: false})
  }

  // 滚动事件
  handlerScroll = (e) => {
    const {data, isScrolling, isFirstScreen, scrollEle} = this.state

    e.preventDefault();
    e.stopPropagation();
    if (!isScrolling) {
      if (e.detail > 0 || e.wheelDelta < 0) {
        let {scrollIndex} = this.state
        if (isFirstScreen) {
          this.setBodyScroll('html,body', 1)
          return
        }

        // 到最后一屏解除绑定
        if (scrollIndex === data.length - 1) {
          this.handlerUnbindEvent(scrollEle, this.handlerScroll)
          return
        }

        scrollIndex = Math.min(data.length - 1, scrollIndex + 1)
        this.setSwiperScroll(scrollIndex)
      } else {
        let {scrollIndex} = this.state
        // 从 swiper 滚动到 第一屏
        if (scrollIndex === 0 && !isFirstScreen) {
          this.setBodyScroll('html,body', 0)
          return
        }
        scrollIndex = Math.max(0, scrollIndex - 1)
        this.setSwiperScroll(scrollIndex)
      }
    }
  }

  setSwiperScroll = scrollIndex => {
    const {isScrolling, scrollContent} = this.state
    if (!isScrolling) {
      this.setState({isScrolling: true})
      const {windowHeight} = this.state
      scrollContent.animate({
        top: -scrollIndex * windowHeight
      }, 500, 'swing', () => {
        setTimeout(() => {
          this.setState({isScrolling: false})
        }, 500);
      });
      this.setState({scrollIndex})
    }
  }

  setBodyScroll(dom, screenNumber) {
    this.setState({isScrolling: true})
    const {windowHeight} = this.state
    const callback = () => {
      this.setState({
        isFirstScreen: screenNumber === 1
          ? false
          : true
      })
      setTimeout(() => {
        this.setState({isScrolling: false})
      }, 500);
    }
    bodyScrollTo(dom, screenNumber * windowHeight, callback)
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
    const {windowWidth} = this.state
    if (windowWidth > 768) {
      this.setSwiperScroll(index)
      return
    }
    this.setState({scrollIndex: index})
  }

  render() {
    const {data, scrollIndex} = this.state
    return (
      <div id="scrollDom">
        <div className="main main-index first-screen full-screen-container">
          <div className="container full-screen-content">
            <div>
              <h1>数字体验栩栩如生</h1>
              我们是一家软件咨询公司，专门从事IOS,Android,小程序等平台的软件定制化设计和与开发服务
              <div className="arrow-down" onClick={() => this.setBodyScroll('html,body', 1)}>
                <i className="iconfont">&#xe603;</i>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper container">
          <img src={Iphone} className="outer-phone" alt=""/>
          <div className="swiper-content" id="scrollContent">
            {/* swiper */}
            {data.map((item, index) => (
              <div
                className={scrollIndex === index
                ? "screen-container active"
                : "screen-container"}
                key={item.title}>
                <div className="screen-list">
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
          <div className="swiper-point">
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
      </div>
    );
  }
}

export default Swiper;
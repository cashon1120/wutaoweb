import React, {Component} from 'react';
import $ from 'jquery'
import {Link} from 'react-router-dom';
import {bodyScrollTo, getOs, throttle} from '../../../utils/util'
import './swiper.scss'

import Image1 from '../../../assets/images/case-1.png'
import Image2 from '../../../assets/images/case-2.png'
import Image3 from '../../../assets/images/case-3.jpg'

import VideoImage1 from '../../../assets/images/video-img-1.png'
import VideoImage2 from '../../../assets/images/video-img-2.png'
import VideoImage3 from '../../../assets/images/video-img-3.png'

import Mp41 from '../../../assets/images/mp4-1.mp4'
import Mp42 from '../../../assets/images/mp4-2.mp4'
import Mp43 from '../../../assets/images/mp4-3.mp4'

import Iphone from '../../../assets/images/iphonex.png'

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
      isPlayIndex: [false, false, false],
      showPlayBtnState: false,
      data: [
        {
          id: 1,
          title: '急先外卖蜂',
          content: `本土特色美食外卖，急速送达`,
          imgSrc: Image1,
          videoImg: VideoImage1,
          videoSrc: Mp41
        }, {
          id: 2,
          title: '阿闻商城',
          content: `阿闻商城，让养宠物更简单`,
          imgSrc: Image2,
          videoImg: VideoImage2,
          videoSrc: Mp42
        }, {
          id: 3,
          title: '卡片日记',
          content: `随手记录生活点滴 `,
          videoImg: VideoImage3,
          imgSrc: Image3,
          videoSrc: Mp43
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
      scrollContent: $('#scrollContent'),
    }, () => {
      window.addEventListener('resize', throttle(this.toggleScrollEvent, 300))
      this.toggleScrollEvent()
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
    }else{
      $(document).unbind('scroll', this.bindDocumentScroll)
      this.handlerUnbindEvent(scrollEle, this.handlerScroll)
      this.setShowPlayBtnFn(0)
      const videos = document.getElementsByTagName('video')
      for(let i =0; i < videos.length; i ++){
        videos[i].addEventListener("x5videoexitfullscreen", () => {
          const {scrollIndex, isPlayIndex} = this.state
          isPlayIndex[scrollIndex] = false
          this.setState({
            isPlayIndex
          })
        })
      }

    }
  }

  componentWillMount(){
    $(document).unbind('scroll', this.bindDocumentScroll)
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
    this.setShowPlayBtnFn(scrollIndex)
  }

  handleSetActive = (index) => {
    const {windowWidth} = this.state
    if (windowWidth > 768) {
      this.setSwiperScroll(index)
      return
    }
    this.setState({scrollIndex: index})
    this.setShowPlayBtnFn(index)
  }

  setShowPlayBtnFn = index => {
    const {isPlayIndex} = this.state
    const state = !isPlayIndex[index] ? true : false
    this.setState({
      showPlayBtnState: state
    })
  }

  handlerPLayVideo = () => {
    const {isPlayIndex, scrollIndex} = this.state
    const video =  document.getElementById('video' + scrollIndex)
    isPlayIndex[scrollIndex] = true
    if(video.play){
      video.play()
      this.setState({
        isPlayIndex,
        showPlayBtnState: false

      })
    }
  }

  render() {
    const {data, scrollIndex, showPlayBtnState, windowWidth, isPlayIndex} = this.state
    const isMobile = windowWidth < 768 ? true : false
    return (
      <div id="scrollDom">
        <div className="main main-index first-screen full-screen-container">
          <div className="container full-screen-content">
            <div>
              <h1>数字体验栩栩如生</h1>
              <span>我们是一家软件咨询公司，专门从事IOS,Android,小程序等平台的软件定制化设计和与开发服务</span>
              <div className="arrow-down" onClick={() => windowWidth >= 768 ? this.setBodyScroll('html,body', 1) : null}>
                <i className="iconfont">&#xe603;</i>
              </div>
            </div>
          </div>
        </div>
        <div className="swiper container">
          <img src={Iphone} className="outer-phone" alt=""/>
          <div className={showPlayBtnState ? "playVideo show" : "playVideo"} onClick={this.handlerPLayVideo}><i className="iconfont">&#xe610;</i></div>
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
                    <Link className="btn btn-white" to={`/work/detail/${item.id}`}>查看详情</Link>
                  </div>

                  <div className="img-container">
                    <img src={item.imgSrc} className="bg" alt=""/>
                    <img src={item.videoImg} className="phone_content" alt=""  style={{display: isMobile && !isPlayIndex[index] ? 'inline-block' : 'none'}} />
                    <video
                      id={`video${index}`}
                      autoPlay={true}
                      style={{display: isMobile && !isPlayIndex[index] ? 'none' : 'inline-block'}} 
                      playsInline={true}
                      x5playsinline
                      muted
                      loop
                      className="phone_content">
                      <source
                        src={item.videoSrc}
                        type="video/mp4"/>
                    </video>
                  </div>
                  <div className="txt-container-bottom">
                    <h1>{item.title}</h1>
                    <section>
                      {item.content}
                    </section>
                    <Link className="btn btn-white" to={`/work/detail/${item.id}`}>查看详情</Link>
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
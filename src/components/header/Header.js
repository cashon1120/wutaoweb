import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
import Logo from '../../assets/images/xm-logo.png';
import LogoBlack from '../../assets/images/xm-logo-black.png';
import {throttle, getOs, bodyScrollTo} from '../../utils/util'
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windhowHeight: null,
      scrollEle: null,
      isOpen: false,
      isHome: false,
      showHeader: true,
      lastScrollTop: null,
      logo: Logo
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        windhowHeight: $(window).height(),
        scrollEle: document.getElementById('scrollDom')
      }, () => {
        const {scrollEle} = this.state
        if (scrollEle) {
          this.handlerBindEvent(this.state.scrollEle, throttle(this.handlerScroll, 200), {passive: false})
        }
      })
    }, 200);

    this.setIndexHead()
    $(document).on('scroll', throttle(this.headerToggleShow, 200))
  }

  handlerScroll = (e) => {
    const {windhowHeight} = this.state
    if ($(document).scrollTop() < windhowHeight) {
      return
    }
    e.preventDefault();
    e.stopPropagation();
    const direction = (e.detail > 0 || e.wheelDelta < 0)
      ? false
      : false
    this.setState({showHeader: direction})
  }

  headerToggleShow = () => {
    const {lastScrollTop} = this.state
    let direction = $(document).scrollTop() > lastScrollTop
      ? false
      : true
    this.setState({
      showHeader: direction,
      lastScrollTop: $(document).scrollTop()
    })
  }

  // 绑定滚动事件
  handlerBindEvent(dom, fn, params) {
    this.handlerUnbindEvent(dom, fn)
    const eventName = getOs() === 'Firefox'
      ? 'DOMMouseScroll'
      : 'mousewheel'
    dom.addEventListener(eventName, fn, params)
  }

  // 解触滚动事件
  handlerUnbindEvent(dom, fn) {
    const eventName = getOs() === 'Firefox'
      ? 'DOMMouseScroll'
      : 'mousewheel'
    dom.removeEventListener(eventName, fn)
  }

  headerToggleShow = () => {
    const {lastScrollTop, showHeader} = this.state
    if ($(document).scrollTop() < 80 && !showHeader) {
      this.setState({showHeader: true})
      return
    }
    let direction = $(document).scrollTop() > lastScrollTop
      ? false
      : true
    this.setState({
      showHeader: direction,
      lastScrollTop: $(document).scrollTop()
    })
  }

  setIndexHead() {
    const {pathname} = window.location
    const pageState = pathname === '/' || pathname === '/services'
    const isHome = pageState
      ? true
      : false
    const logo = pageState
      ? Logo
      : LogoBlack
    this.setState({isHome, logo})
  }

  handlerOpen() {
    const {isOpen} = this.state
    this.setState({
      isOpen: !isOpen
    }, () => {
      this.setIndexHead()
    })
  }

  handlerShowContact = () => {
    const contactDom = $('#contact')
    bodyScrollTo('html,body', contactDom.offset().top, () => {})
  }

  render() {
    const {isOpen, isHome, showHeader, logo} = this.state
    return (
      <header className={showHeader
        ? 'show'
        : 'hide'}>
        <div
          className={isHome
          ? "container index-header"
          : "container"}>
          <div className="flex-container header-container">
            <div className="flex-1">
              <img src={logo} className="logo" alt="logo"/>
            </div>
            <div>
              <span className="btn nav-contact" onClick={() => this.handlerShowContact()}>联系我们</span>
            </div>
            <div>
              <span
                className={isOpen
                ? 'nav-icon open'
                : 'nav-icon'}
                onClick={() => this.handlerOpen()}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        </div>
        <nav
          className={isOpen
          ? 'open'
          : null}
          onClick={() => this.handlerOpen()}>
          <ul>
            <li>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/work'>案例</Link>
            </li>
            <li>
              <Link to='/services'>服务</Link>
            </li>
            <li>
              <a href='#contact'>联系我们</a>
            </li>
          </ul>
          <div className="address">
            <p>联系电话：13086662830</p>
            <p>微信：dockingtech</p>
            <p>地址：成都新世纪环球中心S1区1638室</p>
          </div>
        </nav>
      </header>

    );
  }
}

export default Header;
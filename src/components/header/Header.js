import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
import Logo from '../../assets/images/xm-logo.png';
import {throttle, getOs} from '../../utils/util'
import './header.scss';

let scrollEle = null // 滚动节点, scrollDom

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHome: false,
      showHeader: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      scrollEle = document.getElementById('scrollDom')
      this.handlerBindEvent(scrollEle, throttle(this.handlerScroll, 200), {passive: false})
    }, 200);

    this.setIndexHead()
    $(document).on('scroll', throttle(this.headerToggleShow, 200))
  }

  handlerScroll = e => {
    const deltaY = getOs() === 'Firefox'
      ? e.detail
      : e.wheelDelta
    const direction = deltaY > 0
      ? true
      : false
    this.setState({showHeader: direction})
  }

  componentWillUnmount = () => {
    this.setState = (state, callback) => {
      return;
    };
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

  headerToggleShow = (e) => {
    const deltaY = getOs() === 'Firefox'
    ? e.detail
    : e.wheelDelta
  const direction = deltaY > 0
    ? true
    : false
    this.setState({
      showHeader: direction
    })
  }

  setIndexHead() {
    const {pathname} = window.location
    const isHome = pathname === '/'
      ? true
      : false
    this.setState({isHome})
  }

  handlerOpen() {
    const {isOpen} = this.state
    this.setState({
      isOpen: !isOpen
    }, () => {
      this.setIndexHead()
    })
  }

  render() {
    const {isOpen, isHome, showHeader} = this.state
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
              <img src={Logo} className="logo" alt="logo"/>
            </div>
            <div>
              <span className="btn nav-contact">联系我们</span>
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
        </nav>
      </header>
    );
  }
}

export default Header;
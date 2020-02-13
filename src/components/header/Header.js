import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
import Logo from '../../assets/images/xm-logo.png';
import {throttle} from '../../utils/util'
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isHome: false,
      lastScrollTop: 0,
      showHeader: true
    };
  }

  componentDidMount() {
    this.setIndexHead()
    $(document).on('scroll', throttle(this.headerToggleShow, 100))
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
      <header className={showHeader ? 'show' : 'hide'}>
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
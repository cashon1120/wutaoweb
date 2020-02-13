import React, {Component, Fragment} from 'react';
import Swiper from './swiper/swiper'

import './style.scss'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <div className="black-bg">
          <Swiper/>
        </div>
        <div style={{
          height: 500
        }}>234</div>
      </Fragment>
    );
  }
}

export default Home;
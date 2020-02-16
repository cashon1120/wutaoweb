import React, {Component} from 'react';
import './footer.scss';
import Image from '../../assets/images/code.jpg'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <footer>
        <div className="card-container" id="contact">
          <h1 className="title">我们在硅海滩。 <br/>来和我们打个招呼，聊聊吧！ <br/>有兴趣开发下一代移动应用程序吗？</h1>
          <div className="footer-container">
            <section>扫码关注我们, 了解详情</section>

            <div className="container-grid flex-center">
              <div className="col-xs-sm address">
              联系电话：13086662830
                <br/>
                微信：dockingtech
                <br/>
                地址：成都新世纪环球中心S1区1638室
              </div>
              <div className="col-xs-sm code">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
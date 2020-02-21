import React, {Component} from 'react';
import './footer.scss';
import intl from '../../utils/intl'

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        title1: '',
        title2: '',
        content: [],
        img: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      data: intl.get('contact')
    })
  }

  render() {
    const {data} = this.state
    return (
      <footer>
        <div className="card-container" id="contact">
          <h1 className="title">{data.title1} <br/>{data.title2}</h1>
          <div className="footer-container">
            <section>扫码关注我们, 了解详情</section>

            <div className="container-grid flex-center">
              <div className="col-xs-sm address">
                {(data.content || []).map(item => 
                  <span key={item}>{item}<br/></span>
                )}
              </div>
              <div className="col-xs-sm code">
                <img src={data.img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>

    );
  }
}

export default Footer;
import React, {Component} from 'react';
import './footer.scss';
import Image from '../../assets/images/code.png'

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
          <div className="card-container_content">
            <h1>Interested in developing a next level mobile app?</h1>
            <section>Give us a few details about your company and we’ll have someone contact
              you shortly.</section>

            <div className="container-grid">
              <div className="col-xs-sm address">
                600 Corporate Pointe
                <br/>
                Suite 1200
                <br/>
                Culver City, CA 90230 17250 Dallas Pkwy
                <br/>
                Dallas, TX 75248 info@swensonhe.com
                <br/>
                424-465-2525
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
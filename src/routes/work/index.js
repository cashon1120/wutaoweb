import React, {Component, Fragment} from 'react';
import './style.scss'
import intl from '../../utils/intl'
import {Row, Col} from 'antd'
import Footer from '../../components/footer/footer'

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      type: []
    };
  }

  componentDidMount() {
    this.setState({
      data: intl.get('case.data'),
      type: intl.get('case.type')
    })
  }

  render() {
    const {type, data} = this.state
    return (
      <Fragment>
        <div className="main page-work">
          <div className="main-container">
            <h1>{intl.get('work.title')}</h1>
            <div className="category-list">
              {(type || []).map(item => <div key={item.value}>
                <a href="/work">{item.value}</a>
              </div>)}
            </div>

            <div className="work-list-container">

              <Row gutter={[30, 50]}>
                {(data || []).map(item => <Col sm={24} md={12} key={item.title}>
                  <div className="work-item">
                    <div className="img-wrapper">
                      <a href="#work">{item.content}</a>
                      <img src={item.listImgSrc} alt=""/>
                    </div>
                    <div className="works-landing__description">
                      <h5>
                        <a href="#work">{item.title}</a>
                      </h5>
                      <div className="hidden-xxs">
                        {item.content}
                      </div>
                    </div>

                  </div>
                </Col>)}

              </Row>

            </div>
          </div>
        </div>
        <Footer/>
      </Fragment>
    );
  }
}

export default Work;
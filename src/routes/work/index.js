import React, {Component, Fragment} from 'react';
import './style.scss'
import intl from 'react-intl-universal';
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

  componentDidMount(){
    this.setState({
      data: intl.get('case.data'),
      type:intl.get('case.type')
    })
  }

  render() {
    const {type, data} = this.state
    return (
      <Fragment>
        <div className="main page-work">
          <div className="main-container">
            <h1>这是我们真正引以为傲的一些工作。</h1>
            <div className="category-list">
              {type.map(item => <div key={item.id}>
                <a href="#">{item.value}</a>
              </div>)}
            </div>

            <div className="work-list-container">

              <Row gutter={[30, 50]}>
                {data.map(item => <Col sm={24} md={12}>
                  <div className="work-item">
                    <div className="img-wrapper">
                      <a href="#">{item.content}</a>
                      <img src={item.listImgSrc} alt=""/>
                    </div>
                    <div className="works-landing__description">
                      <h5>
                        <a href="#">{item.title}</a>
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
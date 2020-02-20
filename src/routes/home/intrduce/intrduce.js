import React, {Component, Fragment} from 'react';
import {Row, Col} from 'antd'
import $ from 'jquery'
import intl from 'react-intl-universal';
import {throttle} from '../../../utils/util'

import './intrduce.scss'

class Intrduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemHeight: 'auto',
      data1: {
        title: '',
        list: []
    },
      data2: {
        title: '',
        list: []
      }
    }

  }

  componentDidMount() {
    window.addEventListener('resize', throttle(this.handlerSetHight, 300))
    this.handlerSetHight()
    this.setState({
      data1: intl.get('index.weDo'),
      data2: intl.get('index.scheme')
    })
  }

  handlerSetHight = () => {
    this.setState({
      itemHeight: 'auto'
    }, () => {
      setTimeout(() => {
        let itemHeight = 0
        $.each($('.item-list'), (index, item) => {
          if (item.offsetHeight > itemHeight) {
            itemHeight = item.offsetHeight
          }
        })
        this.setState({itemHeight})
      }, 0);
    })

  }

  render() {
    const {data1, data2, itemHeight} = this.state
    return (
      <Fragment>
        <div className="black-bg intrduce">
          <div className="main-container">
    <h1 className="process-h1 text-align-center">{data1.title}</h1>
            <Row gutter={[80, 50]}>
              {data1.list.map(item => (
                <Col
                  sm={24}
                  md={12}
                  lg={8}
                  className="item-list"
                  key={item.title}
                  style={{
                  height: itemHeight
                }}>
                  <img src={item.imgSrc} alt={item.titme}/>
                  <h2>{item.title}</h2>
                  {item.text}
                </Col>
              ))}
            </Row>
            <h1 className="process-h1 text-align-center">{data2.title}</h1>
            <Row gutter={[80, 50]}>
              {data2.list.map(item => (
                <Col
                  sm={24}
                  md={12}
                  lg={8}
                  className="item-list"
                  key={item.title}
                  style={{
                  height: itemHeight
                }}>
                  <img src={item.imgSrc} alt={item.titme}/>
                  <h2>{item.title}</h2>
                  {item.text}
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Intrduce;
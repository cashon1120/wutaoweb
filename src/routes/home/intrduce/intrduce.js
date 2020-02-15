import React, {Component, Fragment} from 'react';
import {Row, Col} from 'antd'
import $ from 'jquery'
import {throttle} from '../../../utils/util'
import Image1 from '../../../assets/images/Icon_24.png'
import Image2 from '../../../assets/images/Icon_64.png'
import Image3 from '../../../assets/images/Icon_63.png'

import Image4 from '../../../assets/images/Icon_31.png'
import Image5 from '../../../assets/images/Icon_32.png'
import Image6 from '../../../assets/images/Icon_34.png'
import Image7 from '../../../assets/images/Icon_43.png'
import Image8 from '../../../assets/images/Icon_35.png'
import Image9 from '../../../assets/images/Icon_37.png'
import Image10 from '../../../assets/images/Icon_36.png'
import Image11 from '../../../assets/images/Icon_39.png'
import Image12 from '../../../assets/images/Icon_38.png'
import Image13 from '../../../assets/images/Icon_44.png'

import './intrduce.scss'

class Intrduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemHeight: 'auto',
      data1: [
        {
          title: '简单易用',
          imgSrc: Image1,
          text: '我们不会使事情复杂化。我们创建经过精心设计的智能软件解决方案，旨在为客户和最终用户简化生活。一切都与体验有关。'
        }, {
          title: '功能强大且可扩展',
          imgSrc: Image2,
          text: '首先，我们分析问题。然后，我们计划，设计和构建一个灵活且完全可扩展的高性能定制软件解决方案。因此，您的软件与您的成功同步增长。'
        }, {
          title: '安全可靠',
          imgSrc: Image3,
          text: '安全从未如此重要。我们的专业软件工程师创建了高度安全，强大和可靠的解决方案，我们对其进行了测试以防破坏并不断提高其安全性。'
        }
      ],
      data2: [
        {
          title: '定制开发',
          imgSrc: Image4,
          text: '我们的软件开发人员会创建专门为您的项目编写的代码。没有懒惰的现成东西。'
        }, {
          title: '锁，库存和桶',
          imgSrc: Image5,
          text: '您获得我们为您开发的任何软件的完整知识产权。完全的IP自由。'
        }, {
          title: '不断发展的战略',
          imgSrc: Image6,
          text: '我们与您一起制定有效的技术战略，随着您的市场变化而发展。'
        }, {
          title: '敏捷工作',
          imgSrc: Image7,
          text: '通过在sprint和迭代中开发软件解决方案，它不断适应成功。'
        }, {
          title: '破解团队',
          imgSrc: Image8,
          text: '我们是一支经验丰富的专家团队。每个人都是专家，专注于他们的事情，但要一起工作。'
        }, {
          title: '伦敦专业知识',
          imgSrc: Image9,
          text: '我们建造的所有东西都是由我们伦敦办事处的专家建造的。我们不需要或不想外包。'
        }, {
          title: '微软金牌合作伙伴',
          imgSrc: Image10,
          text: '经过Microsoft认证，我们的开发人员使用最好的技术来构建完整的软件解决方案。'
        }, {
          title: 'ISO认证',
          imgSrc: Image11,
          text: '我们已通过ISO9001和ISO27001认证。我们符合质量和信息安全管理标准。'
        }, {
          title: '3个月免费维护',
          imgSrc: Image12,
          text: '我们坚持所做的事情。发布后我们将提供3个月的免费维护支持。'
        }, {
          title: '免费报价',
          imgSrc: Image13,
          text: '经过面对面的聊天并完全了解您的视野之后，我们将提供免费的零义务报价。'
        }
      ]
    }

  }

  componentDidMount() {
    window.addEventListener('resize', throttle(this.handlerSetHight, 300))
    this.handlerSetHight()
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
            <h1 className="process-h1 text-align-center">我们所做的一切都是</h1>
            <Row gutter={[80, 50]}>
              {data1.map(item => (
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
            <h1 className="process-h1 text-align-center">精美而简单的软件解决方案，可应对极为复杂的挑战。</h1>
            <Row gutter={[80, 50]}>
              {data2.map(item => (
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
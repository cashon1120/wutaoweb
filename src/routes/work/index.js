import React, {Component, Fragment} from 'react';
import './style.scss'
import {Row, Col} from 'antd'
import Footer from '../../components/footer/footer'

import Image1 from '../../assets/images/case-1.png'
import Image2 from '../../assets/images/case-2.png'
import Image3 from '../../assets/images/case-3.jpg'

import VideoImage1 from '../../assets/images/video-img-1.png'
import VideoImage2 from '../../assets/images/video-img-2.png'
import VideoImage3 from '../../assets/images/video-img-3.png'

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: '急先外卖蜂',
          content: `本土特色美食外卖，急速送达`,
          imgSrc: Image1,
          videoImg: VideoImage1
        }, {
          id: 2,
          title: '阿闻商城',
          content: `阿闻商城，让养宠物更简单`,
          imgSrc: Image2,
          videoImg: VideoImage2
        }, {
          id: 3,
          title: '卡片日记',
          content: `随手记录生活点滴 `,
          videoImg: VideoImage3,
          imgSrc: Image3
        }
      ],
      type: [
        {
          id: 1,
          value: '金融'
        }, {
          id: 2,
          value: '电商'
        }, {
          id: 3,
          value: 'O2O'
        }, {
          id: 4,
          value: '政务'
        }, {
          id: 5,
          value: 'OA'
        }, {
          id: 6,
          value: '物联网'
        }, {
          id: 7,
          value: '大数据'
        }, {
          id: 8,
          value: '人工智能'
        }
      ]
    };
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

              <Row gutter={[30, 40]}>
                {data.map(item => <Col sm={24} md={12}>
                  <div className="work-item">
                    <div className="img-wrapper">
                      <a href="#">{item.content}</a>
                      <img src={item.imgSrc} alt=""/>
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
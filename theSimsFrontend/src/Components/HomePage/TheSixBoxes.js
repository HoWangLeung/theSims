import React, { Component } from 'react'
import classes from './HomePage.less'
import { Row, Col, Image } from 'antd';
import hover_1 from '../assests/Image/hover_1.jpg'
import hover_2 from '../assests/Image/hover_2.jpg'
import hover_3 from '../assests/Image/hover_3.jpg'
import hover_4 from '../assests/Image/hover_4.jpg'
import hover_5 from '../assests/Image/hover_5.jpg'
import hover_6 from '../assests/Image/hover_6.jpg'
import intl from 'react-intl-universal';
import {
    ArrowRightOutlined
} from '@ant-design/icons';
import QueueAnim from 'rc-queue-anim';
import { wordsOnBoxesList } from './constant'

export default class Thesixboxes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initateHoverAction_0: false,
            initateHoverAction_1: false,
            initateHoverAction_2: false,
            initateHoverAction_3: false,
            initateHoverAction_4: false,
            initateHoverAction_5: false,

        }


    }

    showOverlay = (e) => {
        let imageId = e.currentTarget.id
        console.log(imageId);

        this.setState({
            [`initateHoverAction_${imageId}`]: true

        })

        this.props.showBackgroundImage(`initateHoverAction_${imageId}`, imageId)
    }

    hideOverlay = (e) => {
        let imageId = e.currentTarget.id
        console.log('leave');

        this.setState({
            [`initateHoverAction_${imageId}`]: false,
        })
        this.props.hideBackgroundImage(`initateHoverAction_${imageId}`, imageId)
    }




    getTextIcon = () => (<div className={classes.textIcon} ><p>LEARN MORE</p><ArrowRightOutlined className={classes.arrowIcon} /></div>)

    getInnerText = (id) => {

        const { [`initateHoverAction_${id}`]: isActive } = this.state
        switch (id) {
            case 0:
                return <p>{isActive ? this.getTextIcon() : intl.get('dashboard')}</p>
            case 1:
                return <p>{isActive ? this.getTextIcon() : intl.get('management')}</p>
            case 2:
                return <p>{isActive ? this.getTextIcon() : intl.get('payment')}</p>
            case 3:
                return <p>{isActive ? this.getTextIcon() : intl.get('dashboard')}</p>
            case 4:
                return <p>{isActive ? this.getTextIcon() : intl.get('dashboard')}</p>
            case 5:
                return <p>{isActive ? this.getTextIcon() : intl.get('dashboard')}</p>
            default:
                return
        }
    }
    getHoverText = (id) => (<div className={classes.overlay}>
        <div className={classes.textOverlay}>{this.getInnerText(id)}</div>
    </div>)

    getImage = (item) => (<div
        className={classes.imageContainer}>
        <img
            className={classes.image}
            src={item} />
    </div>)
    render() {
        const imageArray_1 = [hover_1, hover_2, hover_3, hover_4, hover_5, hover_6]
        return (

      
                <div className={classes.sixBoxesContainer}>
                    <Row gutter={[12, 12]}   >
                 
                            {imageArray_1.map((item, index) => {
                                return (

                                    <Col id={index} span={8} onMouseOver={this.showOverlay}
                                        onMouseLeave={this.hideOverlay} >
                                        {this.state[`initateHoverAction_${index}`] == false ?
                                            this.getImage(item)
                                            : null}
                                        {this.getHoverText(index)}
                                    </Col>


                                )
                            })}
                  
                    </Row>
                </div>

        )
    }
}

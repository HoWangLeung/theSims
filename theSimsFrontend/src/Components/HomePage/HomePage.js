import React, { Component } from 'react'
import LoginCard from '../Authentication/MainPageLogin/LoginCard'
import Header from '../../Header'
import Locale from '../../Locale'
import classes from './HomePage.less'
import Thesixboxes from './TheSixBoxes'
import { Row, Col } from 'antd';
import Initialdescription from './InitialDescription'
import Animate from 'rc-animate';
import Hoverslide from './HoverSlide/HoverSlide'


class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initiateHoverAction: false,
            showAnimation: false,
            imageNumber:0
        }
    }
 
    showBackgroundImage = (initiateHoverAction,imageNumber) => {
        console.log(typeof imageNumber);
        let number = parseInt(imageNumber)
        console.log(number);
     
        this.setState({
            initiateHoverAction: true,
            showAnimation: true,
            imageNumber:number
        })
 
     
    }

    hideBackgroundImage = (initiateHoverAction,imageId) => {
        this.setState({
            initiateHoverAction: false,
            showAnimation: false
        })

    }

    render() {
        const { initiateHoverAction, showAnimation } = this.state
        return (
            <div key="background" className={initiateHoverAction ? 
            classes[`backgroundImageContainer_show_${this.state.imageNumber}`] : 
            classes.backgroundImageContainer_hide          
            } >
                <Row
                    xs={24} sm={24} md={24} lg={12} justify="end">

                    <Col xs={24} sm={24} md={24} lg={24} xl={9} >
                        <Thesixboxes
                            showBackgroundImage={this.showBackgroundImage}
                            hideBackgroundImage={this.hideBackgroundImage}
                        />
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={12} span={12}>
                        {/* <Initialdescription /> */}
                        <Hoverslide/>
                    </Col>

                </Row>
            </div>

        )
    }
}

export default HomePage

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
import styles from './Animation.less'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            initiateHoverAction: false,
            showAnimation: false,
            activeNumber: 0,
            showInitialDescription:true
        }
    }

    showBackgroundImage = (initiateHoverAction, activeNumber) => {
        
        let number = parseInt(activeNumber)
        

        this.setState({
            initiateHoverAction: true,
            showAnimation: true,
            activeNumber: number,
            showAnimation: true,
            showInitialDescription:false
        })


    }

    hideBackgroundImage = (initiateHoverAction, imageId) => {
        this.setState({
            initiateHoverAction: false,

        })
    }

    hideHoverSlider = () => {

        this.setState({
            showAnimation: false,
            showInitialDescription:true
        })

        // setTimeout(() => {

        //     this.setState({
        //         showInitialDescription:true
               
        //     })
          
        // }, 10);
        


    }



    getSixBoxes = () => {
        return (<Thesixboxes
            showBackgroundImage={this.showBackgroundImage}
            hideBackgroundImage={this.hideBackgroundImage}
            hideHoverSlider={this.hideHoverSlider}
            getActiveBox={this.getActiveBox}
        />)
    }



    render() {
        const { initiateHoverAction, showAnimation, activeNumber,showInitialDescription } = this.state
        return (
            <div key="background" className={initiateHoverAction ?
                classes[`backgroundImageContainer_show_${activeNumber}`] :
                classes.backgroundImageContainer_hide
            } >
                <Row xs={24} sm={24} md={24} lg={12} justify="end" className={classes.homePageRow}>

                    <Col xs={24} sm={24} md={24} lg={24} xl={9} >
                        {this.getSixBoxes()}
                    </Col>

                    <Col xs={24} sm={24} md={24} lg={24} xl={12} span={12}>
                        <Animate
                            transitionName={{
                                enter: styles['fade-enter'],
                                enterActive: styles['fade-enter-active'],
                                leave: styles['fade-leave'],
                                leaveActive: styles['fade-leave-active'],
                                appear: styles['fade-appear'],
                                appearActive: styles['fade-appear-active']
                            }}
                            transitionAppear
                        >
                            {showAnimation ? 
                            
                            <Hoverslide  key="hoverSlide" activeNumber={activeNumber} /> : null}

                        </Animate>
                        {showInitialDescription  && <Initialdescription />}
                    </Col>

                </Row>
            </div>

        )
    }
}

export default HomePage

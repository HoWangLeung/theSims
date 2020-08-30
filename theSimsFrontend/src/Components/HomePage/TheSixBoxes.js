import React, { Component } from 'react'
import classes from './HomePage.less'
import { Row, Col, Image } from 'antd';
import hover_1 from '../assests/Image/hover_1.jpg'
import hover_2 from '../assests/Image/hover_2.jpg'
import hover_3 from '../assests/Image/hover_3.jpg'
import hover_4 from '../assests/Image/hover_4.jpg'
import hover_5 from '../assests/Image/hover_5.jpg'
import hover_6 from '../assests/Image/hover_6.jpg'

export default class Thesixboxes extends Component {
    constructor(props) {
        super(props)

        this.state = {
            removeBackgroundImage: false
        }


    }

    showOverlay = () => {
        this.setState({ removeBackgroundImage: true })
    }

    hideOverlay = () => {
        console.log('leave');
        this.setState({ removeBackgroundImage: false })
    }

    render() {

        return (
            <>
                <div className={classes.sixBoxesContainer}>
                    <Row gutter={[16, 16]}   >
                        <Col  span={8} onMouseOver={this.showOverlay}
                            onMouseOut={this.hideOverlay} >
                            {this.state.removeBackgroundImage == false ?
                                <div
                                    className={classes.imageContainer}>
                                    <img
                                        className={classes.image}
                                        src={hover_1} />
                                </div>
                                : null}
                            <div className={classes.overlay}>
                                <div className={classes.textOverlay}>Learn More</div>
                            </div>
                        </Col>
                        <Col span={8}>
                            <img src={hover_2} className={classes.image} />

                        </Col>
                        <Col span={8} >
                            <img src={hover_3} className={classes.image} />
                        </Col>
                    </Row>

                    <Row gutter={[16, 16]}  >
                        <Col span={8}>
                            <img src={hover_4} className={classes.image} />
                        </Col>
                        <Col span={8}>
                            <img src={hover_5} className={classes.image} />
                        </Col>
                        <Col span={8}>
                            <img src={hover_6} className={classes.image} />
                        </Col>
                    </Row>
                </div>
            </>
        )
    }
}

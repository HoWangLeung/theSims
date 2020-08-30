import React, { Component } from 'react'
import LoginCard from '../Authentication/MainPageLogin/LoginCard'
import Header from '../../Header'
import Locale from '../../Locale'
import classes from './HomePage.less'
import Thesixboxes from './TheSixBoxes'
import { Row, Col } from 'antd';
import Initialdescription from './InitialDescription'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div  >
                <Row className={classes.backgroundImageContainer} xs={24} sm={24} md={24} lg={12}  justify="end">

                    <Col xs={24} sm={24} md={24} lg={24} xl={9} >
                        <Thesixboxes />
   
                    </Col>

                    <Col xs={24} sm={24}  md={24} lg={24} xl={12} span={12}>
                        <Initialdescription />
                    </Col>

                </Row>
            </div>
        )
    }
}

export default HomePage

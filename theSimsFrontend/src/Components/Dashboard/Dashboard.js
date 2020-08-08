import React, { Component } from 'react'

import classes from './Dashboard.less'
import LineChart1 from './LineChart1'
import { Row, Col } from 'antd'
import { Card } from 'antd';
import BarChart1 from './BarChart1';
import PieChart1 from './PieChart1';
import RadarChart1 from './RadarChart1';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {


        return (

            <Row gutter={1} className={classes.dashboardContainer}>
                <Col xs={24} md={24} lg={24} xl={12} span={12}>
                    <Card title="Products sold by month">
                        <div className={classes.cardDiv}>
                            <LineChart1 />
                        </div>
                    </Card>
                </Col  >
                <Col xs={24} md={24} lg={24} xl={12} span={12}>
                    <Card title="Card title">
                        <div className={classes.cardDiv}>
                            <BarChart1 />
                        </div>
                    </Card>
                </Col>

                <Col xs={24} md={24} lg={24} xl={12} span={12}>
                    <Card title="Card title">
                        <div className={classes.cardDiv}>
                            <PieChart1 />
                        </div>
                    </Card>
                </Col  >
                <Col xs={24} md={24} lg={24} xl={12} span={12}>
                    <Card title="Card title">
                        <div className={classes.cardDiv}>
                            <RadarChart1 />
                        </div>
                    </Card>
                </Col  >

            </Row>

        )
    }
}

export default Dashboard
// className={classes.pie}
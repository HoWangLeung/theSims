import React, { Component, useEffect } from 'react'

import classes from './Dashboard.less'
import LineChart1 from './LineChart1'
import { Row, Col } from 'antd'
import { Card } from 'antd';
import BarChart1 from './BarChart1';
import PieChart1 from './PieChart1';
import RadarChart1 from './RadarChart1';
import { withRouter } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navigationmenu from '../../Common/NavigationMenu/NavigationMenu';
import Banner from '../../Common/Banner';

function StatisticPage(props) {

    useEffect(()=>{

            console.log('sdf');
          
    },[])
    const variants = {
        hidden: {
            opacity: 0

        },
        visible: {
            opacity: 1,
            transition: {
                duration: .5
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .5
            }
        }


    }
    console.log(props);
    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={classes.dashboardContainer}
        >
            <Banner />
            <Navigationmenu />
            <Row gutter={1}>
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
        </motion.div>
    )
}


export default withRouter(StatisticPage)

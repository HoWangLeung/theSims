
import { Breadcrumb, Col, Row } from 'antd'
import { motion } from 'framer-motion'
import React, { Component } from 'react'
import reactLogo from '../../Common/assests/Image/reactLogo.png'
import springBootLogo from '../../Common/assests/Image/springBootLogo.png'
import mysqlLogo from '../../Common/assests/Image/mysqlLogo.png'
import classes from './HomePage.less'
import Text from 'antd/lib/typography/Text'
import { Link, withRouter } from 'react-router-dom'
import CommonBreadcrumb from '../BreadCrumb/CommonBreadCrumb'

function AboutPage(props) {
    const { location: { pathname } } = props
    const data = [
        {
            logo: reactLogo,
            side: "Frontend",
            dependencies: <>
                <p>UI - Ant Design</p>
                <p>Animation - Framer Motion</p>
                <p>Routing - React Router</p>
                <p>state Management - Redux</p>
                <p>Async Handling - Redux-Thunk</p>
                <p>Internationalization - React-intl-universal</p>
                <p>Requesting API - Axios</p>
                <p>Charts - Recharts</p>
                <p>Styling - CSS Modules</p>
          
                </>
        },
        {
            logo: springBootLogo,
            side: "Backend",
            dependencies: <>
                <p>Authentication - JWT Authentication & Spring Security</p>
                <p>Architecture - Controller-Service-Repository-Model-Database</p>
                <p>Query - Criteria Query, Entity Manager</p>
                <p>Excel generation - Apache Poi</p>
                <p>PDF generation - Itext</p>

            </>
        },
        {
            logo: mysqlLogo,
            side: "Database/Others",
            dependencies: <>
                <p>Database - MySQL</p>
                <p>Frontend Deployment - AWS S3</p>
                <p>Backend Deployment - AWS Elastic BeanStalk</p>
                <p>Database Deployment - AWS RDS</p>
                <p>Payment Integration - Stripe</p>
            </>
        },
    ]

    const variants = {
        hidden: {


        },
        visible: {

        },
        exit: {

        }

    }

    console.log(props);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit">

            <Row>
                <CommonBreadcrumb pathname={pathname}/>
            </Row>


            {data.map((item, i) => {
                if (i % 2 === 0)
                    return (<Row>
                        <Col>
                            <img className={classes.logoImg} src={item.logo} />
                        </Col>

                        <Col>
                            <motion.div>
                                <h1> {item.side}</h1>
                                {item.dependencies}
                            </motion.div>
                        </Col>
                    </Row>)
                else
                    return (<Row>
                        <Col>
                            <motion.div>
                                <h1> {item.side}</h1>
                                {item.dependencies}
                            </motion.div>
                        </Col>
                        <Col>
                            <img className={classes.logoImg} src={item.logo} />
                        </Col>
                    </Row>)

            })}





        </motion.div>
    )
}
export default withRouter(AboutPage)
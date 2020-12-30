
import { Breadcrumb, Button, Col, Image, Row } from 'antd'
import { motion, useAnimation } from 'framer-motion'
import React, { Component, useEffect } from 'react'
import reactLogo from '../../Common/assests/Image/reactLogo.png'
import springBootLogo from '../../Common/assests/Image/springBootLogo.png'
import mysqlLogo from '../../Common/assests/Image/mysqlLogo.png'
import classes from './HomePage.less'
import Text from 'antd/lib/typography/Text'
import { Link, withRouter } from 'react-router-dom'
import CommonBreadcrumb from '../BreadCrumb/CommonBreadCrumb'

function AboutPage(props) {
    const { location: { pathname } } = props
    const logo = useAnimation()
    const header = useAnimation()
    const text = useAnimation()
    useEffect(() => {
        sequence()
    }, [])

    const sequence = async () => {
        logo.start({
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.5
            }
        })









    }
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
                <p>Query -JPA , Hibernate , Criteria Query, Entity Manager</p>
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
                <p>Image Upload/Storage - Firebase</p>
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

    const itemRender = (route, params, routes, paths) => {
        console.log('hello104');
        console.log(paths);
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        ) : (
                <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
            );
    }

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"

        >

            <Link to="/products" >
                <Button className={classes.backButton} >Back</Button>
            </Link>
         

            {data.map((item, i) => {
                return (
                    <Row className={classes.aboutPageContainerRow} >
                        <Col span={12} className={classes.aboutPageContainerCol}  >
                            <motion.div
                                animate={logo}
                                initial={{ opacity: 0, x: "-100vw" }}


                            >
                                <Image className={classes.logoImg} src={item.logo} />
                            </motion.div>
                        </Col>

                        <Col span={12} className={classes.aboutPageContainerCol}>
                            <motion.div
                                animate={logo}
                                initial={{ opacity: 0, x: "100vw" }}


                            >
                                <motion.h1
                                >
                                    {item.side}
                                </motion.h1>
                                <motion.div  >
                                    {item.dependencies}
                                </motion.div>
                            </motion.div>
                        </Col>




                    </Row>)

            })}





        </motion.div>
    )
}
export default withRouter(AboutPage)
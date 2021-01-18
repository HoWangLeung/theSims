import { Button, Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import LandingNav from '../../Common/NavigationBar/LandingNav'
import wavy from '../../Common/assests/Image/wavy.svg'
import shopArt from '../../Common/assests/Image/shopArt.svg';

import classes from './HomePage.less'

export default function Firstpage(props) {
    const {width} = props

    return (
        <Row className={classes.firstPage} >

            <Row className={classes.navRow}>
                <Col span={24} className={classes.navCol}>
                    <LandingNav width={width} />
                </Col>
                <Col span={24} className={classes.imgsCol1}>


                    <img src={wavy} alt="wavy" className={classes.wavyImg} />
                </Col>
            </Row>

            <Row className={classes.imgRow2}>
                <Col xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 12 }} className={classes.textCol} >
                    <h1>A Healthy Food</h1>
                    <h1>For A Wealthy Mood ! </h1>

                    {width > 425 && <>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                   tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                   enim ad minim veniam.
               </p>

                        <p>
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
           deserunt mollit anim id est laborum.
               </p>
                    </>}

                    <Button className={classes.styledButton} shape="round" >
                        <Link to="/products">
                            GET STARTED
                          </Link>
                    </Button>
                </Col>
                <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 12 }} className={classes.imgsShopArtCol2} >
                    <img src={shopArt} alt="shopArt" />
                </Col>
            </Row>
        </Row>
    )
}

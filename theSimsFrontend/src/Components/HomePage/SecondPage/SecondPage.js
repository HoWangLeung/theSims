import React, { useEffect } from 'react'


import { Col, Row } from 'antd'
import classes from '../HomePage.less'
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import confirmOrderSVG from '../../../Common/assests/Image/confirmOrderSVG.svg'
import deliverySVG from '../../../Common/assests/Image/deliverySVG.svg'
import enjoySVG from '../../../Common/assests/Image/enjoySVG.svg'

export default function Secondpage(props) {
    const controls = useAnimation()
    const controls2 = useAnimation()
    const enjoyFruit = useAnimation()
    const onIntersection = (entries) => {
        console.log(entries);
        for (const entry of entries) {
           let id = entry.target.id
            if (id === "makeAnOrder" && entry.isIntersecting) {
                controls.start("visible")
            }  

            if (id === "makeAnOrder" && !entry.isIntersecting) {
                controls.start("hidden")
            } 


            if (id === "waitForDelivery" && entry.isIntersecting) {
                controls2.start("visible")
            } 

            if (id === "waitForDelivery" && !entry.isIntersecting) {
                controls2.start("hidden")
            } 



             if (id === "enjoyFruit" && entry.isIntersecting) {
                enjoyFruit.start("visible")
            } 

            
            if (id === "enjoyFruit" && !entry.isIntersecting) {
                enjoyFruit.start("hidden")
            } 


        }
    };
    useEffect(() => {



        const observer = new IntersectionObserver(onIntersection);
        observer.observe(document.querySelector('#makeAnOrder'));
        observer.observe(document.querySelector('#waitForDelivery'));
        observer.observe(document.querySelector('#enjoyFruit'));
       
    },[onIntersection])

    // const startAnimation = () => {
    //     controls.start("visible")
    // }

    // useEffect(() => {

    //     console.log("entry = ", entry);
    //     if (inView) {


    //         startAnimation()
    //     } else { controls.start("hidden") }



    // }, [inView])
    return (
        <Row justify="center" >


            <Row justify="center" className={classes.howItWorksTitle}  >

                <h1   >How It Works</h1>

            </Row>

            <Row   >
                <Row id="makeAnOrder">
                    <Col xs={{ order: 2, span: 24 }} lg={12} className={classes.howItWorksPlaceOrderText} >

                        <motion.div

                            animate={controls}
                            initial="hidden"
                            variants={{
                                visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                                hidden: { x: 1000, opacity: 0, }
                            }}
                            lg={12} className={classes.howItWorksPlaceOrderTextInner} >
                            <h2 >Place an Order</h2>
                            <p   >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                          </p>
                        </motion.div>
                    </Col>

                    <Col xs={{ order: 1, span: 24 }} lg={12} className={classes.howItWorkSvgContainer}>
                        <motion.img

                            animate={controls}
                            initial="hidden"
                            variants={{
                                visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                                hidden: { x: -1000, opacity: 0, }
                            }}
                            src={confirmOrderSVG}
                            alt="confirmOrderSVG" className={classes.confirmOrderSVG} />
                    </Col>

                </Row>


                <Row  id="waitForDelivery"  >
                    <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 12 }} className={classes.howItWorkSvgContainer}>
                        <motion.img 
                           animate={controls2}
                           initial="hidden"
                           variants={{
                               visible: { x: 0, opacity: 1, transition: { duration: 1} },
                               hidden: { x: 1000, opacity: 0, }
                           }}
                        src={deliverySVG} alt="deliverySVG" className={classes.deliverySVG} />
                    </Col>

                    <Col  xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 12 }} className={classes.howItWorksPlaceOrderText} >
                        <motion.div lg={12} className={classes.howItWorksPlaceOrderTextInner} 
                           animate={controls2}
                           initial="hidden"
                           variants={{
                               visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                               hidden: { x: -1000, opacity: 0, }
                           }}
                        
                        >
                            <h2  >Wait for Delivery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
</p>
                        </motion.div>
                    </Col>
                </Row>

                <Row  id="enjoyFruit">
                    <Col xs={{ order: 2, span: 24 }} lg={12} className={classes.howItWorksPlaceOrderText} >
                        <motion.div 
                          animate={enjoyFruit}
                          initial="hidden"
                          variants={{
                              visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                              hidden: { x: 1000, opacity: 0, }
                          }}
                        lg={12} className={classes.howItWorksPlaceOrderTextInner} >
                            <h2>Enjoy Your Fruits</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
</p>
                        </motion.div>
                    </Col>

                    <Col xs={{ order: 1, span: 24 }} lg={12} className={classes.howItWorkSvgContainer} >
                        <motion.img 
                          animate={enjoyFruit}
                          initial="hidden"
                          variants={{
                              visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                              hidden: { x: -1000, opacity: 0, }
                          }}
                        src={enjoySVG} alt="enjoySVG" className={classes.enjoySVG} />
                    </Col>
                </Row>

            </Row>

        </Row>

    )
}


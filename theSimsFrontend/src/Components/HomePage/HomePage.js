import { Button, Col, Row } from 'antd'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homePageVariants, homePageVariantsImg } from './HomPageAnimation'
import shopArt from '../../Common/assests/Image/shopArt.svg';
import classes from './HomePage.less'
import Nav from '../../Common/NavigationBar'
import { fadeOutVariants, fadeInVariant } from '../../Animation'
import fadeOutVariantsLandingNav from '../../Common/NavigationBar/LandingNav'
import LandingNav from '../../Common/NavigationBar/LandingNav'
import wavy from '../../Common/assests/Image/wavy.svg'
import confirmOrderSVG from '../../Common/assests/Image/confirmOrderSVG.svg'
import deliverySVG from '../../Common/assests/Image/deliverySVG.svg'
import enjoySVG from '../../Common/assests/Image/enjoySVG.svg'
import { useInView } from "react-intersection-observer";
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}



export default function Homepage(props) {
    const [width, height] = useWindowSize();
    const controls = useAnimation()
    const [ref, inView, entry] = useInView();
    useEffect(() => {
        console.log("inView = ", inView);
         console.log("ref ", ref);
         console.log("entry ", entry);


    }, [controls, inView]);
    // useEffect(() => {
    //     sequence()
    // }, [])
    // const sequence = async () => {
    //     await controls.start(
    //         {

    //             transition: {
    //                 duration: 1.5,
    //                 ease: "easeInOut"
    //             }
    //         }
    //     )


    // }


    return (
        <motion.div


            className={classes.outerMostContainer}

        >
            <Row>
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

            <Row justify="center" className={classes.howItWorksTitle}  >

                <h1>How It Works</h1>

            </Row>

            <Row >
                <Row >
                    <Col xs={{ order: 2, span: 24 }} lg={12} className={classes.howItWorksPlaceOrderText} >

                        <motion.div
                            // ref={ref}
                            // animate={controls}
                            // initial="hidden"
                            // variants={{
                            //     visible: { x: 0, opacity: 1,transition: { duration: 1.5 } },
                            //     hidden: {x:1000, opacity: 0, }
                            // }}
                            lg={12} className={classes.howItWorksPlaceOrderTextInner} >
                            <h2>Place an Order</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                    </p>
                        </motion.div>
                    </Col>

                    <Col xs={{ order: 1, span: 24 }} lg={12} className={classes.howItWorkSvgContainer}>
                        <motion.img

                            // animate={controls}
                            // initial="hidden"
                            // variants={{
                            //     visible: { opacity: 1, transition: { duration: 3.5 } },
                            //     hidden: { opacity: 0, }
                            // }}
                            src={confirmOrderSVG}
                            alt="confirmOrderSVG" className={classes.confirmOrderSVG} />
                    </Col>

                </Row>


                <Row >
                    <Col xs={{ order: 1, span: 24 }} lg={{ order: 2, span: 12 }} className={classes.howItWorkSvgContainer}>
                        <img src={deliverySVG} alt="deliverySVG" className={classes.deliverySVG} />
                    </Col>

                    <Col xs={{ order: 2, span: 24 }} lg={{ order: 1, span: 12 }} className={classes.howItWorksPlaceOrderText} >
                        <motion.div  lg={12} className={classes.howItWorksPlaceOrderTextInner} >
                            <h2>Wait for Delivery</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                    </p>
                        </motion.div>
                    </Col>
                </Row>

                <Row >
                    <Col xs={{ order: 2, span: 24 }} lg={12} className={classes.howItWorksPlaceOrderText} >
                        <div lg={12} className={classes.howItWorksPlaceOrderTextInner} >
                            <h2>Enjoy Your Food</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam.
                    </p>
                        </div>
                    </Col>

                    <Col xs={{ order: 1, span: 24 }} lg={12} className={classes.howItWorkSvgContainer} >
                        <img src={enjoySVG} alt="enjoySVG" className={classes.enjoySVG} />
                    </Col>
                </Row>

            </Row>







        </motion.div>


    )


















    //=======OLD=====
    // console.log(width, height);
    // const controls = useAnimation()
    // const slider = useAnimation()

    // const homePageButton = useAnimation()
    // useEffect(() => {
    //     //sequence()
    // }, [])
    // // const sequence = async () => {
    // //     await controls.start(
    // //         {
    // //             borderRadius: "2px",
    // //             height: "65vh",
    // //             width: "100%",

    // //             objectFit: "cover",
    // //             transition: {
    // //                 duration: .5,
    // //                 ease: "easeInOut"
    // //             }
    // //         }

    // //     )
    // //     slider.start({

    // //         backgroundImage: "linear-gradient(to right,#0F2027, #203A43, #2C5364 100%, transparent 0%)",
    // //         transition: " background-position 1s",
    // //         transition: {
    // //             duration: 1,


    // //         }


    // //     })
    // //     await controls.start({

    // //         height: "65vh",
    // //         width: "80%",

    // //         objectFit: "cover",
    // //         borderRadius: "2px",
    // //         transition: {
    // //             duration: .5,
    // //             ease: "easeInOut",

    // //         }
    // //     })
    // //     homePageButton.start({
    // //         opacity: 1,
    // //         transition: {
    // //             duration: 1,
    // //             ease: "easeInOut"
    // //         }
    // //     })
    // //     await controls.start({
    // //         height: "65vh",
    // //         width: "80%",
    // //         objectFit: "cover",

    // //         borderRadius: "2px",
    // //         transition: {
    // //             duration: .5,
    // //             ease: "easeInOut"
    // //         }
    // //     })

    // //     props.history.push("/products")



    // // }
    // const renderLandingNav = () => {
    //     console.log(width);

    //     // if (width >= 320 && width < 768) {
    //     //     return (
    //     //         <MobileLandNav />
    //     //     )
    //     // } else if (width > 768) {
    //     //     return (
    //     //         <LandingNav />
    //     //     )
    //     // }

    //     return (<LandingNav width={width} />)
    // }
    // return (
    //     // <motion.div
    //     //     variants={fadeOutVariants}
    //     //     initial="hidden"
    //     //     animate="visible"
    //     //     exit="exit"

    //     //     className={classes.homePageContainerMotion}


    //     // >
    //         <div className={classes.homePageContainer}>
    //             {renderLandingNav()}

    //             <Row className={classes.landingPageTextContainer} >

    //                 <Col span={24} className={classes.landingPageText}>
    //                     <h1>A Healthy Food</h1>
    //                     <h1>For A Wealthy Mood ! </h1>

    //                     <p>
    //                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
    //                       tempor incididunt ut labore et dolore magna aliqua. Ut<br />
    //                       enim ad minim veniam.
    //                   </p>



    //                     <p>
    //                         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
    //               deserunt mollit anim id est laborum.
    //                   </p>

    //                     <Button className={classes.styledButton} shape="round" >
    //                         <Link to="/products">
    //                             GET STARTED
    //                              </Link>


    //                     </Button>
    //                 </Col>
    //             </Row>
    //             <div className={classes.backgroundContainer}>
    //                 <motion.img
    //                     initial={{

    //                     }}
    //                     //  animate="visible"
    //                     animate={controls}
    //                     src={shopArt}
    //                     alt="shopArt"
    //                     className={classes.shopArt}
    //                 />
    //             </div>

    //         </div>

    //     // </motion.div>



    //     // <h1>
    //     //     <motion.div
    //     //         animate={slider}
    //     //         initial={{ height: "100vh"
    //     //         // ,zIndex:"1" 

    //     //     }}
    //     //         exit={{
    //     //             opacity: 0,
    //     //             transition: { duration: .5 }
    //     //         }}
    //     //         className={classes.homePageContainer}

    //     //     >

    //     //         {/* <Nav
    //     //           //  className={classes.nav}
    //     //             // handleChangeLocale={handleChangeLocale}
    //     //             // currentLocale={antdLang}
    //     //         /> */}

    //     //         {/* <motion.img
    //     //             initial={{
    //     //                 height: "10vh",
    //     //                 width: "100%",

    //     //             }}
    //     //             //  animate="visible"
    //     //             animate={controls}
    //     //             src={hero}
    //     //             alt="hero"
    //     //             className={classes.heroImg}
    //     //         /> */}

    //     //         <motion.div initial={{ opacity: 0 }} animate={homePageButton} className={classes.homePageheadline}>
    //     //             <motion.p className={classes.homePageheadlineText}  >Eat Fresh</motion.p>
    //     //             {/* <Link to="/products" > <Button  >Explore</Button></Link> */}
    //     //         </motion.div>


    //     //     </motion.div>


    //     // </h1>


    // )
}


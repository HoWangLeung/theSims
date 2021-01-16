import { Button, Row } from 'antd'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { homePageVariants, homePageVariantsImg } from './HomPageAnimation'
import shopArt from '../../Common/assests/Image/shopArt.svg';
import classes from './HomePage.less'
import Nav from '../../Common/NavigationBar'
import { fadeOutVariants } from '../../Animation'
import fadeOutVariantsLandingNav from '../../Common/NavigationBar/LandingNav'
import LandingNav from '../../Common/NavigationBar/LandingNav'
import MobileLandNav from '../../Common/NavigationBar/MobileLandingNav'


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
    console.log(width, height);
    const controls = useAnimation()
    const slider = useAnimation()

    const homePageButton = useAnimation()
    useEffect(() => {
        //sequence()
    }, [])
    // const sequence = async () => {
    //     await controls.start(
    //         {
    //             borderRadius: "2px",
    //             height: "65vh",
    //             width: "100%",

    //             objectFit: "cover",
    //             transition: {
    //                 duration: .5,
    //                 ease: "easeInOut"
    //             }
    //         }

    //     )
    //     slider.start({

    //         backgroundImage: "linear-gradient(to right,#0F2027, #203A43, #2C5364 100%, transparent 0%)",
    //         transition: " background-position 1s",
    //         transition: {
    //             duration: 1,


    //         }


    //     })
    //     await controls.start({

    //         height: "65vh",
    //         width: "80%",

    //         objectFit: "cover",
    //         borderRadius: "2px",
    //         transition: {
    //             duration: .5,
    //             ease: "easeInOut",

    //         }
    //     })
    //     homePageButton.start({
    //         opacity: 1,
    //         transition: {
    //             duration: 1,
    //             ease: "easeInOut"
    //         }
    //     })
    //     await controls.start({
    //         height: "65vh",
    //         width: "80%",
    //         objectFit: "cover",

    //         borderRadius: "2px",
    //         transition: {
    //             duration: .5,
    //             ease: "easeInOut"
    //         }
    //     })

    //     props.history.push("/products")



    // }
    const renderLandingNav = () => {
        console.log(width);

        if (width >= 320 && width < 768) {
            return (
                <MobileLandNav />
            )
        } else if (width > 768) {
            return (
                <LandingNav />
            )
        }
    }
        return (
            <motion.div
                variants={fadeOutVariants}
                initial="hidden"
                animate="visible"
                exit="exit"

                className={classes.homePageContainerMotion}


            >
                <div className={classes.homePageContainer}>
                    {renderLandingNav()}

                    <Row className={classes.landingPageTextContainer} >

                        <div className={classes.landingPageText}>
                            <h1>A Healthy Food</h1>
                            <h1>For A Wealthy Mood ! </h1>
                            <Row>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
                          tempor incididunt ut labore et dolore magna aliqua. Ut<br />
                          enim ad minim veniam.
                      </p>
                            </Row>

                            <Row>
                                <p>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia<br />
                  deserunt mollit anim id est laborum.
                      </p>
                            </Row>
                            <Button className={classes.styledButton} shape="round" >
                                <Link to="/products"> 
                                 GET STARTED
                                 </Link>


                            </Button>
                        </div>
                    </Row>
                    <div className={classes.backgroundContainer}>
                        <motion.img
                            initial={{

                            }}
                            //  animate="visible"
                            animate={controls}
                            src={shopArt}
                            alt="shopArt"
                            className={classes.shopArt}
                        />
                    </div>

                </div>

            </motion.div>



            // <h1>
            //     <motion.div
            //         animate={slider}
            //         initial={{ height: "100vh"
            //         // ,zIndex:"1" 

            //     }}
            //         exit={{
            //             opacity: 0,
            //             transition: { duration: .5 }
            //         }}
            //         className={classes.homePageContainer}

            //     >

            //         {/* <Nav
            //           //  className={classes.nav}
            //             // handleChangeLocale={handleChangeLocale}
            //             // currentLocale={antdLang}
            //         /> */}

            //         {/* <motion.img
            //             initial={{
            //                 height: "10vh",
            //                 width: "100%",

            //             }}
            //             //  animate="visible"
            //             animate={controls}
            //             src={hero}
            //             alt="hero"
            //             className={classes.heroImg}
            //         /> */}

            //         <motion.div initial={{ opacity: 0 }} animate={homePageButton} className={classes.homePageheadline}>
            //             <motion.p className={classes.homePageheadlineText}  >Eat Fresh</motion.p>
            //             {/* <Link to="/products" > <Button  >Explore</Button></Link> */}
            //         </motion.div>


            //     </motion.div>


            // </h1>


        )
    }


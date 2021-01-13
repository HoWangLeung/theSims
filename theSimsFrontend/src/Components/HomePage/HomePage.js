import { Button } from 'antd'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { homePageVariants, homePageVariantsImg } from './HomPageAnimation'
import hero from '../../Common/assests/Image/hero.jpg';
import classes from './HomePage.less'
import Nav from '../../Common/NavigationBar'
export default function Homepage(props) {

    const controls = useAnimation()
    const slider = useAnimation()

    const homePageButton = useAnimation()
    useEffect(() => {
        sequence()
    }, [])
    const sequence = async () => {
        await controls.start(
            {
                borderRadius: "2px",
                height: "65vh",
                width: "100%",

                objectFit: "cover",
                transition: {
                    duration: .5,
                    ease: "easeInOut"
                }
            }

        )
        slider.start({

            backgroundImage: "linear-gradient(to right,#0F2027, #203A43, #2C5364 100%, transparent 0%)",
            transition: " background-position 1s",
            transition: {
                duration: 1,


            }


        })
        await controls.start({

            height: "65vh",
            width: "80%",

            objectFit: "cover",
            borderRadius: "2px",
            transition: {
                duration: .5,
                ease: "easeInOut",

            }
        })
        homePageButton.start({
            opacity: 1,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        })
        await controls.start({
            height: "65vh",
            width: "80%",
            objectFit: "cover",

            borderRadius: "2px",
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        })

        props.history.push("/products")



    }
    return (
        <>
            <motion.div
                animate={slider}
                initial={{ height: "100vh"
                // ,zIndex:"1" 
            
            }}
                exit={{
                    opacity: 0,
                    transition: { duration: .5 }
                }}
                className={classes.homePageContainer}

            >

                {/* <Nav
                  //  className={classes.nav}
                    // handleChangeLocale={handleChangeLocale}
                    // currentLocale={antdLang}
                /> */}

                <motion.img
                    initial={{
                        height: "20vh",
                        width: "100%",

                    }}
                    //  animate="visible"
                    animate={controls}
                    src={hero}
                    alt="hero"
                    className={classes.heroImg}
                />

                <motion.div initial={{ opacity: 0 }} animate={homePageButton} className={classes.homePageheadline}>
                    <motion.p className={classes.homePageheadlineText}  >Eat Fresh</motion.p>
                    {/* <Link to="/products" > <Button  >Explore</Button></Link> */}
                </motion.div>


            </motion.div>


        </>


    )
}

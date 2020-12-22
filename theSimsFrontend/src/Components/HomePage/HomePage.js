import { Button } from 'antd'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { homePageVariants, homePageVariantsImg } from './HomPageAnimation'
import hero from '../../Common/assests/Image/hero.jpg';
import classes from './HomePage.less'
export default function Homepage(props) {

    const controls = useAnimation()
    const slider = useAnimation()

    const  homePageButton = useAnimation()
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
                    duration: .6,
                    ease: "easeInOut"
                }
            }

        )
        slider.start({

            backgroundImage: "linear-gradient(to right, rgb(32, 35, 49) 100%, transparent 0%)",
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
                ease: "easeInOut"
            }
        })
        homePageButton.start({
            opacity:1,
            transition:{duration:1,
                ease:"easeInOut"
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
        await controls.start({
            height: "90vh",
            width: "100%",
            objectFit: "cover",
            borderRadius: "2px",
            transition: {
                duration: .5,
                ease: "easeInOut"
            }
        })



    }
    return (
        <>
            <motion.div
                animate={slider}
                exit={{
                    opacity:0,
                    transition:{duration:.5}
                }}
                className={classes.homePageContainer}

            >
         
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
        
                <motion.div initial={{opacity:0}}   animate={homePageButton} className={classes.homePageheadline}>
                    <motion.p>Eat Fresh</motion.p>
                   <Link to="/products" > <Button  >Explore</Button></Link>
                </motion.div>


            </motion.div>
          

        </>


    )
}

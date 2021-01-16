import { MenuOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion'
import React from 'react'
import { baseVariants, fadeOutVariants, fadeOutVariantsLandingNav } from '../../Animation'

import classes from './Nav.less'

export default function MobileLandNav(props) {


    const handleMenuClick=()=>{
        alert("clicked")
    }


    return (
        
        <motion.nav
         variants={fadeOutVariants}
        // initial="hidden"
        // animate="visible"
        // exit="exit"
        className={classes.landingNav}>
            <ul className={classes.landingNavLinksMobile} >
                <li> <header  className={classes.landingNavHeaderMobile}  >DEREK</header> </li>

                <div className={classes.landingNavLinksRightMobile}>
                    <li> <MenuOutlined onClick={handleMenuClick} className={classes.MenuOutlined} /> </li>
                </div>

            </ul>
        </motion.nav>


    )
}

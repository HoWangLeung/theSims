import { motion } from 'framer-motion'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import bannerImg from '../assests/Image/webBanner.png'

import classes from './Banner.less'
class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    componentDidMount() {
        const { location } = this.props


    }

    renderBanner = () => {
        const { location: { pathname } } = this.props
       
        // let id = pathname.substring(pathname.lastIndexOf('/') + 1)
        // if (['/', '/signup-customer', '/signup', '/login', '/signup-success'
        //     , `/product/${id}`, '/checkout', '/userProfile/**',
        //     '/checkout-success',
        //     //  `/userProfile/${sessionStorage.getItem("authenticatedUser")}`,

        // ].includes(pathname))
        //     return null

        return (

            <img className={classes.banner} src={bannerImg} alt="banner" />

        )
    }

    render() {
        const variants = {
            hidden: {


            },
            visible: {

            },
            exit: {

            }

        }
        return (

            <motion.div
              variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                { this.renderBanner()}
            </motion.div>
        )
    }
}

export default withRouter(Banner)

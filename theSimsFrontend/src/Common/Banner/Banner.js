import React, { Component } from 'react'
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
    
        let id=pathname.substring(pathname.lastIndexOf('/') + 1)
        if (['/','/signup-customer','/signup','/login','/signup-success'
        ,`/product/${id}`, '/checkout',
         '/checkout-success',
       //  `/userProfile/${sessionStorage.getItem("authenticatedUser")}`,
        
        ].includes(pathname))
            return null

        return (
            <img className={classes.banner} src={bannerImg} alt="banner" />
        )
    }

    render() {

        return (
            <div>
                {this.renderBanner()}
            </div>
        )
    }
}

export default Banner

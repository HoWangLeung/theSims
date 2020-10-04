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
        console.log(location);

    }

    renderBanner = () => {
        const { location: { pathname } } = this.props
       
        if (['/','/signup-customer','/signup','/login','/signup-success'].includes(pathname))
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

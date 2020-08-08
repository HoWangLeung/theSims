import React, { Component } from 'react'
import bannerImg from '../assests/Image/webBanner.png'

import classes from './Banner.less'
class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <img className={classes.banner} src={bannerImg} alt="banner"  />
            </div>
        )
    }
}

export default Banner

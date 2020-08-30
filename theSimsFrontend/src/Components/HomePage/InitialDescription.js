import React, { Component } from 'react'
import classes from './HomePage.less'
export default class Initialdescription extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }


    }



    render() {
        return (
            <div className={classes.descriptionContainer}>
                <h1 className={classes.descriptionTitle}>Explore the website</h1>

                <p>
                    PCCW Solutions helps service providers grow their business, boost operational efficiencies and reduce cost by tailoring solutions to customer needs, riding on its industry expertise plus an impressive track record of innovation.</p>
            </div>
        )
    }
}

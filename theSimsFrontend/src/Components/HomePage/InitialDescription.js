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
    Integer sapien magna, consequat sed sagittis et, sagittis sed lacus. Maecenas hendrerit erat dolor, ut dictum nulla elementum a.Fusce id euismod felis, sed viverra felis. Pellentesque placerat feugiat metus, ut vestibulum erat tempus ac. Nullam venenatis diam posuere ultrices dictum. Pellentesque at risus nec nisi vehicula euismod quis sit amet mauris. Aenean malesuada rhoncus orci quis semper. Curabitur lobortis odio in leo pharetra cursus.</p>
            </div>
        )
    }
}

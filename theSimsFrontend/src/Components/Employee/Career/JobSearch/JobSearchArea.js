import React from 'react'
import classes from './JobSearchArea.less'
import JobSearchBoxes from './JobSearchBoxes'
export default function JobSearchArea(props) {
    
    


    return (
        <div  className={classes.jobSearchAreaContainer} >
            <JobSearchBoxes/>
        </div>
    )
}

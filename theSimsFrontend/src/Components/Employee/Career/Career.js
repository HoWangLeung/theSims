import React from 'react'
import PropTypes from 'prop-types'
import { Row } from 'antd'
import { baseVariants } from '../../../Animation'
import { motion } from 'framer-motion'
import JobSearchArea from './JobSearch/JobSearchArea'
import classes from './Career.less'
import JobsArea from './JobsArea/JobsArea'
function Career(props) {
    return (
        <motion.div
            animate="visible"
            initial="hidden"
            exit="exit"
            variants={baseVariants}>
            <Row>
                <JobSearchArea />
            </Row>

            <Row className={classes.careerJobsAreaContainer} justify="center">
                <JobsArea />

            </Row>


        </motion.div>
    )
}

Career.propTypes = {

}

export default Career

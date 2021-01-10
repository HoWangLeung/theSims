import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { baseVariants } from '../../../../Animation'

function Signupsuccess(props) {
    return (
        <motion.div variants={baseVariants}
            initial="hidden"
            animate="visible"
            exit="exit">
            <Result
                status="success"
                title="EMAIL VERIFCATION"
                subTitle="An verification email has been sent to your email address, please check your email to complete the registration."
                extra={[
                    <Link to="/" ><Button type="primary" key="console">
                        Back to HomePage
  </Button></Link>,
                
                ]}
            />
        </motion.div>
    )
}

Signupsuccess.propTypes = {

}

export default Signupsuccess

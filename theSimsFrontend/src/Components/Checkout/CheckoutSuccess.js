import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function Checkoutsuccess(props) {
    const variants = {
        hidden: {


        },
        visible: {

        },
        exit: {

        }

    }
    return (
        <>
            <motion.div
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
             
            >

                <Result
                    status="success"
                    title="Transaction is succesful"
                    subTitle="You can review the orders and invoices in your user profile."
                    extra={[
                        <Link to={`/userProfile/${sessionStorage.getItem("authenticatedUser")}`}>
                            <Button type="primary" >
                                User Profile
                  </Button>
                        </Link>

                    ]}
                />
            </motion.div>
        </>
    )
}

Checkoutsuccess.propTypes = {

}

export default Checkoutsuccess

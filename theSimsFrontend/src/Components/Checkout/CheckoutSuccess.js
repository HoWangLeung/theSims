import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

function Checkoutsuccess(props) {
    return (
        <>
            <Result
                status="success"
                title="Successfully Purchased Cloud Server ECS!"
                subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
                extra={[
                    <Link to="/">
                        <Button type="primary" >
                            Back To HomePage
                  </Button>
                    </Link>

                ]}
            />
        </>
    )
}

Checkoutsuccess.propTypes = {

}

export default Checkoutsuccess

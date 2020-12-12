import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

function Checkoutsuccess(props) {
    return (
        <>
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
        </>
    )
}

Checkoutsuccess.propTypes = {

}

export default Checkoutsuccess

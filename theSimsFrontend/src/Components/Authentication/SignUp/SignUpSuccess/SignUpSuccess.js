import React from 'react'
import PropTypes from 'prop-types'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

function Signupsuccess(props) {
    return (
        <>
            <Result
                status="success"
                title="Successfully Registered"
                subTitle="An email has been sent to your email account (fake)"
                extra={[
                    <Link to="/" ><Button type="primary" key="console">
                    Go to HomePage
  </Button></Link>,
                   <Link to="/login" > <Button key="buy">Sign in</Button></Link>,
                ]}
            />
        </>
    )
}

Signupsuccess.propTypes = {

}

export default Signupsuccess

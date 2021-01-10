import React from 'react'
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';
import { baseVariants } from '../../../../Animation';
import { motion } from 'framer-motion';
export default function VerifySignUpSuccess(props) {


    return (
        <motion.div 
        variants={baseVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        
        >
            <Result
                status="success"
                title="Email Verified"
                subTitle="Your email address was successfully verified"
                extra={[
                    <Link to="/login">
                        <Button type="primary" key="console">
                            Sign In
                         </Button>
                    </Link>,
                   
                ]}
            />
        </motion.div>
    )
}

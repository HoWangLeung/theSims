import { Card, Row, Col, Button } from 'antd';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseVariants } from '../../../../Animation';
import Banner from '../../../../Common/Banner';
import ApplyEmployeeForm from '../../../forms/Application/ApplyEmployee/ApplyEmployeeForm';
import classes from '../SignUp.less'
import { cardContent } from './CardContent'



const renderCards = () => (
  cardContent.map((content, index) => (
    <Col span={12}>
      <Card className={classes.signUpMainCard} title={content.title} extra={<a href="#">More</a>}  >
        {content.intro}
        <Link to={content.linkTo}>
          <Button disabled={content.title==="Apply For a Job"?true:false} >{content.button}</Button>
        </Link>
      </Card>
    </Col>
  ))
)

function SignUpMainPage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={baseVariants}
    >
 
      <div className={classes.signUpMainPageContainer}>

        <Row gutter={24}>
          {renderCards()}
        </Row>
      </div>
    </motion.div>
  );
}

export default SignUpMainPage
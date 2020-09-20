import { Card, Row, Col, Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Button>{content.button}</Button>
        </Link>
      </Card>
    </Col>
  ))
)

function SignUpMainPage() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <>
 
      <div className={classes.signUpMainPageContainer}>

        <Row gutter={24}>
          {renderCards()}
        </Row>
      </div>
    </>
  );
}

export default SignUpMainPage
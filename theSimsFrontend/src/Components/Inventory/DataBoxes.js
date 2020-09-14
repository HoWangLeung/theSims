import React, { Component } from 'react'
import { List, Card, Col, Row } from 'antd';


class DataBoxes extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        const gridStyle = {
            width: '100%',
            height: 150,
            textAlign: 'center',

        };

        return (
            <div>
            
                    <Card   >
                        <Row>
                            <Col xs={24} sm={24} xl={6} >
                                <Card.Grid  style={gridStyle}><h1>1</h1> <p>Category</p></Card.Grid>
                            </Col>
                            <Col xs={24} sm={24} xl={6}   >
                                <Card.Grid style={gridStyle}><h1>5</h1> <p>Products</p></Card.Grid>
                            </Col>
                            <Col xs={24} sm={24} xl={6}  >
                                <Card.Grid style={gridStyle}><h1>0</h1> <p>Sold</p></Card.Grid>
                            </Col>
                            <Col xs={24} sm={24} xl={6}  >
                                <Card.Grid style={gridStyle}><h1>0</h1> <p>Remain</p></Card.Grid>
                            </Col>
                        </Row>
                    </Card>
             
            </div>
        )
    }
}

export default DataBoxes

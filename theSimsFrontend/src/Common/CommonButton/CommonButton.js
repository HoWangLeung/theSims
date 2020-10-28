import React, { Component } from 'react'
import { Button } from 'antd'
// import classes from './CommonButton.less'
import intl from 'react-intl-universal';
import { withRouter } from 'react-router-dom';

class CommonButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            backgroundColor:'rgb(55, 85, 115)',
            color:'#FFFFFF'
        }
    }

    componentWillMount() {
        this.checkStyle()
    }

    checkStyle = () => {
        const { style } = this.props
        if(style == 'primary'){
            this.setState({backgroundColor:'rgb(55, 85, 115)',color:'#FFFFFF'})
        }else if(style == 'secondary'){
            this.setState({backgroundColor:'red'})
        }

    }

    render() {
        const { style,value} = this.props
        const {backgroundColor,color} = this.state
        const divStyle = {
            backgroundColor,
            color
        };
        
        return (
            <div>
                <Button onClick={this.props.onClick} style={divStyle} >
                    {value}
                </Button>
            </div>
        )
    }
}

export default withRouter(CommonButton) 

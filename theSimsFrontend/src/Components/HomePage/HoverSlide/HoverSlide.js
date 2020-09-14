import React, { Component } from 'react'
import classes from './HoverSlide.less'
import { Typography, Divider } from 'antd';
import {article_1, article_2, article_3, article_4, article_5, article_6} from './Articles'
const { Title, Paragraph, Text } = Typography;

export default class Hoverslide extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rows: 1
        }


    }


    renderText = () => {
        const { activeNumber } = this.props
        switch (activeNumber) {
            case 0:
                return <h3 className={classes.title}>Dashboard</h3>
                break;
            case 1:
                return <h3 className={classes.title}>Payment</h3>
            case 2:
                return <h3 className={classes.title}>Bank</h3>
            case 3:
                return <h3 className={classes.title}>React</h3>
            case 4:
                return <h3 className={classes.title}>SpringBoot</h3>
            case 5:
                return <h3 className={classes.title}>Oracle</h3>

            default:
                break;
        }
    }

    renderParagraph = () => {
        const { activeNumber } = this.props
        switch (activeNumber) {
            case 0:
                return <p className={classes.paragraph} >{article_1}</p>
                break;
            case 1:
                return <p className={classes.paragraph} >{article_2}</p>
            case 2:
                return <p className={classes.paragraph} >{article_3}</p>
            case 3:
                return <p className={classes.paragraph} >{article_4}</p>
            case 4:
                return <p className={classes.paragraph} >{article_5}</p>
            case 5:
                return <p className={classes.paragraph} >{article_6}</p>
            default:
                break;
        }
    }

    render() {

        return (
            <div  className={classes.hoverSlide}>
                {this.renderText()}
                {this.renderParagraph()}
            </div>
        )
    }
}

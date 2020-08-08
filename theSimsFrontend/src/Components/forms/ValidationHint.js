import React, { Component } from 'react'
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'
import styles from './form.less'
class ValidationHint extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {

        const {
            pwValidateChar,
            pwValidateLength,
            pwValidateSpecialChar
        } = this.props


        const {
            valid,
            invalid,
            validationHint
        } = styles
        

        return (
            <div className={validationHint}>
                <ul>

                    <li className={pwValidateChar ? valid : invalid} >
                        {pwValidateChar ? <CheckCircleOutlined /> : <CloseCircleOutlined />} At least 1 upper case letter, 1 lower case letter and 1 number
                </li>
                    <li className={pwValidateLength ? valid : invalid}>
                        {pwValidateLength ? <CheckCircleOutlined /> : <CloseCircleOutlined />} Password must contain 8 to 128 characters
                </li>
                    <li className={pwValidateSpecialChar ? valid : invalid}>
                        {pwValidateSpecialChar ? <CheckCircleOutlined /> : <CloseCircleOutlined />} Can only contain the following special characters !@#$%^&*()
                </li>
                    <li className={valid} >
                        <CheckCircleOutlined /> Cannot use your username
                </li>
                    <li className={valid}>
                        <CheckCircleOutlined /> Cannot in common password list
                </li>
                </ul>
            </div>
        )
    }
}

export default ValidationHint

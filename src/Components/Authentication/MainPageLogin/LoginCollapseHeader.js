import React from 'react';
import classes from '../Authentication.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const LoginCollapsePanelHeader = (props) => {

    const { title, icon } = props;
    return (
        <div className={classes.loginContainer}>
            <p className={classes.title}>{props.title}</p>
            <FontAwesomeIcon icon={props.icon} />
        </div>
    )
}

export default LoginCollapsePanelHeader;

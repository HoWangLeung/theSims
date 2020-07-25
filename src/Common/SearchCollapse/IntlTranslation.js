import React, { Component } from 'react';
import intl from 'react-intl-universal';
class IntlTranslation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        
        return ( 
            <span>{intl.get(this.props.intlKey)}</span>
         );
    }
}
 
export default IntlTranslation;

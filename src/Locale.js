import React from 'react';
import intl from 'react-intl-universal';
class Locale extends React.Component {
    render() {
        return (
            <div className='locale'>
                <p>國際化測試: {intl.get('key1')}</p>
            </div>
        );
    }
    componentDidMount() {
    }
}
export default Locale;
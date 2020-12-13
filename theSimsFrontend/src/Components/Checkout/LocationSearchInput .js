import { Input, Spin,Select  } from 'antd';
import React from 'react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
const { Option } = Select;
export default class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

 

    handleChange = address => {
        
        this.setState({ address });
    };

    handleSelect = address => {
        
        
        this.setState({ address });
        this.props.onSelectAddress(address)
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
                    
                    return (
                        <div>
                            <Input
                    
                                {...getInputProps()}
                                placeholder="e.g. abc Building, xxx road, Hong Kong"
                               
                            />
                            <div >
                                {/* {loading && <div>Loading...</div>} */}
                                {suggestions.map(suggestion => {

                                    //   const className = suggestion.active
                                    //     ? 'suggestion-item--active'
                                    //     : 'suggestion-item';
                                    //   // inline style for demonstration purpose
                                    //   const style = suggestion.active
                                    //     ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    //     : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                    return (
                                        <div
                                            {...getSuggestionItemProps(suggestion, {
                                                // className,
                                                // style,
                                            })}
                                        >
                                            <Spin spinning={loading}>
                                                <Input size="large"  placeholder={suggestion.description} />
                                            </Spin>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                }}
            </PlacesAutocomplete>
        );
    }
}
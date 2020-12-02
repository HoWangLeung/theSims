import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
 
export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: '' };
  }
 
  handleChange = address => {
      console.log(address);
    this.setState({ address });
  };
 
  handleSelect = address => {
      console.log('getting here');
      console.log(address);
      this.setState({ address});
    // geocodeByAddress(address)
    //   .then(results =>{
    //     console.log(results);
    //     this.setState({ address:results });
    //     // getLatLng(results[0])
    //   })
    // //   .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
  };
 
  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
            console.log(suggestions);
            return (
                <div>
                  <input
                    {...getInputProps({
                      placeholder: 'Search Places ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Loading...</div>}
                    {suggestions.map(suggestion => {
                 
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                        : { backgroundColor: '#ffffff', cursor: 'pointer' };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <div>{suggestion.description}</div>
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
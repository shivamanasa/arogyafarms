import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';

// Sample data
const data = [
  { id: 1, name: 'apple' },
  { id: 2, name: 'banana' },
  { id: 3, name: 'orange' },
  { id: 4, name: 'pineapple' },
  { id: 5, name: 'grape' },
  { id: 6, name: 'pear' },
  { id: 7, name: 'kiwi' },
  { id: 8, name: 'strawberry' },
];

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const onChange = (event, { newValue }) => {
    setSearchQuery(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : data.filter((item) => item.name.toLowerCase().includes(inputValue));
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedItem(suggestion);
  };

  const inputProps = {
    placeholder: 'Type a fruit name',
    value: searchQuery,
    onChange: onChange,
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion.name}
        renderSuggestion={(suggestion) => <div>{suggestion.name}</div>}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
      {selectedItem && (
        <div>
          <h2>{selectedItem.name}</h2>
          <p>Details about {selectedItem.name}...</p>
        </div>
      )}
    </div>
  );
}

export default SearchBar;

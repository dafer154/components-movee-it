import React, { Component } from "react";
import './style/Autocomplete.css';

class Autocomplete extends Component {

    constructor(props) {
        super(props);

        this.state = {
            suggestions: props.suggestions,
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: ""
        };
    }

    onChange = e => {
        const userInput = e.currentTarget.value;
        const filteredSuggestions = this.state.suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        this.setState({
            activeSuggestion: 0,
            filteredSuggestions,
            showSuggestions: true,
            userInput: e.currentTarget.value
        });
    };

    onClick = e => {
        this.setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            userInput: e.currentTarget.innerText
        });
    };

    onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = this.state;
        if (e.keyCode === 13) {
            this.setState({
                activeSuggestion: 0,
                showSuggestions: false,
                userInput: filteredSuggestions[activeSuggestion]
            });
        }
    };

    render() {
        const {
            onChange,
            onClick,
            onKeyDown,
            state: {
                filteredSuggestions,
                showSuggestions,
                userInput
            }
        } = this;

        let suggestionsListComponent;

        if (showSuggestions && userInput) {
            if (filteredSuggestions.length) {
                suggestionsListComponent = (
                    <ul className="suggestions">
                        {filteredSuggestions.map((suggestion, index) => {

                            return (
                                <li
                                    key={suggestion}
                                    onClick={onClick}
                                >
                                    {suggestion}
                                </li>
                            );
                        })}
                    </ul>
                );
            } else {
                suggestionsListComponent = (
                    <div className="no-suggestions">
                        <em>No suggestions, you're on your own!</em>
                    </div>
                );
            }
        }

        return (
            <div className="wrappAutocomplete">
                <div className="titleComponent">Autocomplete</div>
                <div className="description">Autocomplete with a array of cars</div>
                <div className="container wrappAutocomplete">
                    <input className="autocompleteStyle"
                        type="text"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        value={userInput}
                        placeholder={"Search Cars"}
                    />
                    {suggestionsListComponent}
                </div>
            </div>

        );
    }
}

export default Autocomplete;
import React, { Component } from "react";
import InputNumber from "./InputNumber";

class WrapperInputNumber extends Component {

    state = {
        treeTextButton: [{
            option: 'types',
            title: 'Input Text types',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            style: {
                fontSize: '0.875rem',
                backgroundColor: "#e3165b",
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "12%",
                borderColor: 'transparent',
                color: '#fff',
                borderRadius: '4px',
                fontWeight: 'bold',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase'
            },

            options: [
                {
                    name: 'Standard',
                    option: '#e3165b'
                },
                {
                    name: 'Filled',
                    option: '#4d841d'
                },
                {
                    name: 'Outlined',
                    option: '#0378d5'
                },
            ]
        },

        {
            option: 'color',
            title: 'Color Input Text',
            description: 'loremIpsum',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            style: {
                fontSize: '0.875rem',
                backgroundColor: "transparent",
                border: '0',
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "12%",
                borderColor: 'transparent',
                color: '#e3165b',
                borderRadius: '4px',
                fontWeight: 'bold',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase'
            },

            options: [
                {
                    name: 'Primary',
                    option: '#e3165b'
                },
                {
                    name: 'Success',
                    option: '#4d841d'
                },
                {
                    name: 'Info',
                    option: '#0378d5'
                },
                {
                    name: 'Warning',
                    option: '#c15700'
                },
                {
                    name: 'Danger',
                    option: '#d64113'
                },
            ]
        },

        {
            option: 'size',
            title: 'Size Input Text',
            description: 'loremIpsum',
            valueLabel: 'Standard',
            style: {
                fontSize: '0.875rem',
                backgroundColor: "transparent",
                border: "3px solid rgb(227, 22, 91)",
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "12%",
                color: '#e3165b',
                borderRadius: '4px',
                fontWeight: 'bold',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase'
            },

            options: [
                {
                    name: 'Normal',
                    option: '50%',
                },
                {
                    name: 'Small',
                    option: '30%',
                },
                {
                    name: 'Medium',
                    option: '70%',
                },
                {
                    name: 'Large',
                    option: '100%',
                }
            ]
        }
        ]
    }

    render() {
        return (
            <div>
                <div>Component Text Input</div>
                {this.state.treeTextButton.map((inputText, i) => (
                    <InputNumber
                        key={i}
                        {...inputText}
                    />
                ))}
            </div>

        );
    }
}

export default WrapperInputNumber;
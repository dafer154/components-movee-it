import React, { Component } from "react";
import InputText from "./InputText";

class WrapperInputText extends Component {

    state = {
        treeTextButton: [{
            option: 'types',
            title: 'Input Text types',
            component: 'inputText',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '30%',
                padding: '6px 11px 7px',
                background: 'none',
                outline: 'none',
                borderBottom: '1px solid black',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0px'
            },

            options: [
                {
                    name: 'Standard',
                    option: '#e3165b'
                },
                {
                    name: 'Filled',
                    option: '#e8e8e8'
                },
                {
                    name: 'Outlined',
                    option: 'black'
                },
            ]
        },
        {
            option: 'disabled',
            title: 'Input Text Disabled',
            component: 'inputText',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '30%',
                padding: '6px 11px 7px',
                background: 'none',
                outline: 'none',
                borderBottom: '1px solid black',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0px'
            },

            options: [
                {
                    name: 'Available',
                    option: false
                },
                {
                    name: 'Disabled',
                    option: true
                },
            ]
        },
        {
            option: 'color',
            title: 'Input Text color',
            component: 'inputText',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '30%',
                padding: '6px 11px 7px',
                background: 'none',
                outline: 'none',
                borderBottom: '1px solid black',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0px'
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
            title: 'Input Text size',
            component: 'inputText',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '30%',
                padding: '6px 11px 7px',
                background: 'none',
                outline: 'none',
                borderBottom: '1px solid black',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0px'
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
                <div className="titleComponent">Component Text Input</div>
                {this.state.treeTextButton.map((inputText, i) => (
                    <InputText
                        key={i}
                        {...inputText}
                    />
                ))}
            </div>

        );
    }
}

export default WrapperInputText;
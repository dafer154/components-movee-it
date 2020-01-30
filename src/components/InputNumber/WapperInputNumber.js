import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";

class WrapperInputNumber extends Component {

    state = {
        treeTextButton: [{
            option: 'types',
            title: 'Input Number Types',
            component: 'inputNumber',
            typeInput: 'number',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            maxLength: '10',
            step: '1',
            precision: '1',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '25%',
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
                    option: '#DFD3D3'
                },
                {
                    name: 'Outlined',
                    option: 'black'
                },
            ]
        },
        {
            option: 'disabled',
            title: 'Input Number Disabled',
            component: 'inputNumber',
            typeInput: 'number',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            maxLength: '10',
            step: '1',
            precision: '1',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '25%',
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
            title: 'Input Number Color',
            component: 'inputNumber',
            typeInput: 'number',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            maxLength: '10',
            step: '1',
            precision: '1',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '25%',
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
            title: 'Input Number Size',
            component: 'inputNumber',
            typeInput: 'number',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            maxLength: '10',
            step: '1',
            precision: '1',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '25%',
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
                    option: '25%',
                },
                {
                    name: 'Small',
                    option: '12%',
                },
                {
                    name: 'Medium',
                    option: '75%',
                },
                {
                    name: 'Large',
                    option: '100%',
                }
            ]
        },
        {
            option: 'maxLength',
            title: 'Input Number MaxLength',
            component: 'inputNumber',
            typeInput: 'number',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            maxLength: '10',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '25%',
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
                    name: 'Max length 10',
                    option: '10',
                },
                {
                    name: 'Max length 5',
                    option: '5',
                },
                {
                    name: 'Max length 2',
                    option: '2',
                }
            ]
        },
        {
            option: 'float',
            title: 'Input Number Float',
            component: 'inputNumber',
            typeInput: 'number',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            placeholder: 'Standard',
            valueLabel: 'Standard',
            maxLength: '10',
            step: '0.1',
            precision: '2',
            disabled: false,
            style: {
                font: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                color: 'none',
                width: '25%',
                padding: '6px 11px 7px',
                background: 'none',
                outline: 'none',
                borderBottom: '1px solid black',
                borderLeft: 'none',
                borderRight: 'none',
                borderTop: 'none',
                borderRadius: '0px'
            }
        }
        ]
    }

    render() {
        return (
            <div>
                <div className="titleComponent">Component Input Number</div>
                {this.state.treeTextButton.map((inputText, i) => (
                    <CustomInput
                        key={i}
                        {...inputText}
                    />
                ))}
            </div>

        );
    }
}

export default WrapperInputNumber;
import React, { Component } from "react";
import CustomInput from "../CustomInput/CustomInput";

class WrapperInputText extends Component {

    state = {
        treeInputText: [{
            option: 'types',
            title: 'Input Text Types',
            component: 'inputText',
            description: 'Change the different styles of a Input text',
            placeholder: 'Standard',
            valueLabel: 'Standard',
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
            description: 'Enable or disable an input text',
            placeholder: 'Standard',
            valueLabel: 'Standard',
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
                    option: 'Available'
                },
                {
                    name: 'Disabled',
                    option: 'Disabled'
                },
            ]
        },
        {
            option: 'color',
            title: 'Input Text Color',
            component: 'inputText',
            description: 'Change the labels and colors of a input text, without background',
            placeholder: 'Standard',
            valueLabel: 'Standard',
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
            title: 'Input Text Size',
            component: 'inputText',
            description: 'Allows you to change the different sizes to a input text',
            placeholder: 'Standard',
            valueLabel: 'Standard',
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
        }
        ]
    }

    render() {
        return (
            <div>
                <div className="titleComponent">Component Input Text</div>
                {this.state.treeInputText.map((inputText, i) => (
                    <CustomInput
                        key={i}
                        {...inputText}
                    />
                ))}
            </div>

        );
    }
}

export default WrapperInputText;
import React, { Component } from "react";
import Button from "./Button";
import './style/WrapperButton.css'

class WrapperButtons extends Component {

    state = {
        treeButton: [{
            option: 'color',
            typeComponent: 'button',
            title: 'Button styles',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
            valueLabel: 'Primary',
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
            option: 'textButton',
            title: 'Text Button',
            typeComponent: 'button',
            description: 'loremIpsum',
            valueLabel: 'Primary',
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
            option: 'outlineButton',
            title: 'Outline Button',
            typeComponent: 'button',
            description: 'loremIpsum',
            valueLabel: 'Primary',
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
            title: 'Size button',
            typeComponent: 'button',
            description: 'loremIpsum',
            valueLabel: 'Normal',
            style: {
                fontSize: '0.875rem',
                color: "white",
                backgroundColor: "DodgerBlue",
                borderColor: 'transparent',
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "12%",
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
                <div className="titleComponent">Component Button</div>
                {this.state.treeButton.map((button, i) => (
                    <Button
                        key={i}
                        {...button}
                    />
                ))}
            </div>
        );
    }
}

export default WrapperButtons;
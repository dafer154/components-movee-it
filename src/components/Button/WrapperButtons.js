import React, { Component } from "react";
import Button from "./Button";
import './style/WrapperButton.css'

class WrapperButtons extends Component {

    state = {
        treeButton: [{
            option: 'color',
            typeComponent: 'button',
            title: 'Button styles',
            description: 'Change the different styles of a button',
            valueLabel: 'Primary',
            style: {
                fontSize: '0.875rem',
                backgroundColor: "#e3165b",
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "25%",
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
            description: 'Change the labels and colors of a button, without background',
            valueLabel: 'Primary',
            style: {
                fontSize: '0.875rem',
                backgroundColor: "transparent",
                border: '0',
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "25%",
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
            description: 'Change the borders and colors of a button, without background',
            valueLabel: 'Primary',
            style: {
                fontSize: '0.875rem',
                backgroundColor: "transparent",
                border: "3px solid rgb(227, 22, 91)",
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "25%",
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
            title: 'Size Button',
            typeComponent: 'button',
            description: 'Allows you to change the different sizes to a button',
            valueLabel: 'Normal',
            style: {
                fontSize: '0.875rem',
                color: "white",
                backgroundColor: "DodgerBlue",
                borderColor: 'transparent',
                padding: '5px 15px',
                fontFamily: 'font-family: "Roboto", "Helvetica", "Arial", sans-serif',
                width: "25%",
                borderRadius: '4px',
                fontWeight: 'bold',
                letterSpacing: '0.02857em',
                textTransform: 'uppercase'
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
                <div className="titleComponent">Component Button</div>
                {this.state.treeButton.map((button, i) => (
                    <Button
                        key={i}
                        style={button.style}
                        {...button}
                    />
                ))}
            </div>
        );
    }
}

export default WrapperButtons;
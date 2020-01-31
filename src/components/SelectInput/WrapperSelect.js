import React, { Component } from "react";
import SelectInput from "./SelectInput";
import './style/WrapperSelect.css'

class WrapperSelect extends Component {

    state = {
        treeSelect: [{
            option: 'color',
            typeComponent: 'select',
            title: 'Styles Select Input',
            description: 'Contained buttons are high-emphasis, distinguished by their use of elevation and fill. They contain actions that are primary to your app.',
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
                textTransform: 'uppercase',
                outline: 'none',
                cursor: 'pointer'
            },
            optionsSelect: ['Bmw', 'Audi', 'Ferrari', 'Volskwagen', 'Mazda', 'Toyota', 'Nissan', 'Porshe'],
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
            title: 'Size Select Input',
            typeComponent: 'select',
            description: 'loremIpsum',
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
                textTransform: 'uppercase',
                outline: 'none',
                cursor: 'pointer'
            },
            optionsSelect: ['Bmw', 'Audi', 'Ferrari', 'Volskwagen', 'Mazda', 'Toyota', 'Nissan', 'Porshe'],
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
                <div className="titleComponent">Component SelectInput</div>
                {this.state.treeSelect.map((select, i) => (
                    <SelectInput
                        key={i}
                        {...select}
                    />
                ))}
            </div>
        );
    }
}

export default WrapperSelect;
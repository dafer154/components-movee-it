import React, { Component } from "react";
import './style/SelectInput.css';

class SelectInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            properties: props,
            styleButton: {
                fontSize: props.style.fontSize,
                color: props.style.color,
                backgroundColor: props.style.backgroundColor,
                padding: props.style.padding,
                fontFamily: props.style.fontFamily,
                width: props.style.width,
                borderColor: props.style.borderColor,
                borderRadius: props.style.borderRadius,
                border: props.style.border,
                fontWeight: props.style.fontWeight,
                letterSpacing: props.style.letterSpacing,
                textTransform: props.style.textTransform
            },
            valueLabel: props.valueLabel,
            optionsSelect: props.optionsSelect
        };
    }


    renderOptions() {
        this.state.optionsSelect.map((option, i) => {
            console.log("Car", option)
            return <option key={i} value={option}>{option}</option>
        })
    }

    render() {
        return (
            <div>
                <div>Select Input</div>
                <select>
                    {this.renderOptions}
                </select>
            </div>

        );
    }
}

export default SelectInput;
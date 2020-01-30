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

    render() {

        const mystyle = {
            fontSize: `${this.state.styleButton.fontSize}`,
            color: `${this.state.styleButton.color}`,
            backgroundColor: `${this.state.styleButton.backgroundColor}`,
            border: `${this.state.styleButton.border}`,
            padding: "10px",
            fontFamily: `${this.state.styleButton.fontFamily}`,
            width: `${this.state.styleButton.width}`,
            borderColor: `${this.state.styleButton.borderColor}`,
            borderRadius: `${this.state.styleButton.borderRadius}`,
            fontWeight: `${this.state.styleButton.fontWeight}`,
            letterSpacing: `${this.state.styleButton.letterSpacing}`,
            textTransform: `${this.state.styleButton.textTransform}`,
        }

        const { optionsSelect } = this.state
        const { title, description, option, options, typeComponent } = this.state.properties

        return (
            <div>
                <div className="container">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <div className="wrappButton">
                        <select style={mystyle}>
                            {optionsSelect.map((option, i) => {
                                return <option key={i} value={option}>{option}</option>
                            })}
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default SelectInput;
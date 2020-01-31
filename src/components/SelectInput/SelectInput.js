import React, { Component } from "react";
import './style/SelectInput.css';
import RadioButtons from '../Options/RadioButton';
import { convertColorBorder } from '../Utils';

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
                textTransform: props.style.textTransform,
                outline: props.style.outline,
                cursor: props.style.cursor
            },
            valueLabel: props.valueLabel,
            optionsSelect: props.optionsSelect,
            disabled: props.disabled
        };
    }

    callBackFunction = (childData, type, label) => {
        switch (type) {
            case 'color':
                return this.setState({
                    styleButton: { ...this.state.styleButton, backgroundColor: childData },
                    valueLabel: label
                })
            case 'size':
                return this.setState({
                    styleButton: { ...this.state.styleButton, width: childData },
                    valueLabel: label
                });
            case 'disabled':
                if (childData === "Available") {
                    return this.setState({ disabled: false });
                } else {
                    return this.setState({ disabled: true });
                }
            default:
                break;
        }
    }

    render() {

        const mystyle = {
            fontSize: `${this.state.styleButton.fontSize}`,
            color: `${this.state.styleButton.color}`,
            backgroundColor: `${this.state.styleButton.backgroundColor}`,
            border: `${this.state.styleButton.border}`,
            padding: `${this.state.styleButton.padding}`,
            fontFamily: `${this.state.styleButton.fontFamily}`,
            width: `${this.state.styleButton.width}`,
            borderColor: `${this.state.styleButton.borderColor}`,
            borderRadius: `${this.state.styleButton.borderRadius}`,
            fontWeight: `${this.state.styleButton.fontWeight}`,
            letterSpacing: `${this.state.styleButton.letterSpacing}`,
            textTransform: `${this.state.styleButton.textTransform}`,
            outline: `${this.state.styleButton.outline}`,
            cursor: `${this.state.styleButton.cursor}`
        }

        const { optionsSelect, disabled } = this.state
        const { title, description, option, options, typeComponent } = this.state.properties
        const { callBackFunction } = this

        return (
            <div>
                <div className="container">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                    <div className="wrappButton">
                        <select style={mystyle} disabled={disabled}>
                            {optionsSelect.map((option, i) => {
                                return <option key={i} value={option}>{option}</option>
                            })}
                        </select>
                    </div>
                    <RadioButtons
                        key={option}
                        options={options}
                        type={option}
                        changeOption={callBackFunction}
                        typeComponent={typeComponent}
                    />
                </div>
            </div>
        );
    }
}

export default SelectInput;
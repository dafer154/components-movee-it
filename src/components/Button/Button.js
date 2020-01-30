import React, { Component } from "react";
import RadioButtons from "../Options/RadioButton";
import "./style/Button.css";
import { convertColorBorder } from '../Utils';

class Button extends Component {
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
            valueLabel: props.valueLabel
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
            case 'textButton':
                return this.setState({
                    styleButton: { ...this.state.styleButton, color: childData },
                    valueLabel: label
                });
            case 'outlineButton':
                return this.setState({
                    styleButton: { ...this.state.styleButton, border: convertColorBorder(childData), color: childData },
                    valueLabel: label
                });
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
            padding: "10px",
            fontFamily: `${this.state.styleButton.fontFamily}`,
            width: `${this.state.styleButton.width}`,
            borderColor: `${this.state.styleButton.borderColor}`,
            borderRadius: `${this.state.styleButton.borderRadius}`,
            fontWeight: `${this.state.styleButton.fontWeight}`,
            letterSpacing: `${this.state.styleButton.letterSpacing}`,
            textTransform: `${this.state.styleButton.textTransform}`,
        }

        const { callBackFunction } = this
        const { title, description, option, options, typeComponent } = this.state.properties
        const { valueLabel } = this.state

        return (
            <div className="container">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="wrappButton">
                    <button value="Hello" style={mystyle}>{valueLabel}</button>
                </div>
                <RadioButtons
                    key={option}
                    options={options}
                    type={option}
                    changeOption={callBackFunction}
                    typeComponent={typeComponent}
                />
            </div>
        );
    }
}

export default Button;
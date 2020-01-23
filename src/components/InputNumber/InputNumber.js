import React, { Component } from "react";
import RadioButtons from "../Options/RadioButton";

class InputNumber extends Component {

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

    onChange = e => {
        this.setState({
            valueLabel: e.target.value
        })
    }

    callBackFunction = (childData, type, label) => {
        switch (type) {
            case 'color':
                this.setState({
                    styleButton: { ...this.state.styleButton, backgroundColor: childData },
                    valueLabel: label
                })
                break;
            case 'size':
                return this.setState({
                    styleButton: { ...this.state.styleButton, width: childData },
                    valueLabel: label
                });
                break;
            case 'textButton':
                return this.setState({
                    styleButton: { ...this.state.styleButton, color: childData },
                    valueLabel: label
                });
            case 'outlineButton':
                console.log("holi", childData);
                return this.setState({
                    styleButton: { ...this.state.styleButton, border: this.convertColorBorder(childData), color: childData },
                    // styleButton: { ...this.state.styleButton, border: childData },
                    valueLabel: label
                });
            default:
                break;
        }

        this.setState({
            styleChanged: { optionSelect: childData, type: type }
        })
    }

    render() {

        const {
            onChange,
        } = this;

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
        return (
            <div>
                <div>{this.state.properties.title}</div>
                <div>{this.state.properties.description}</div>
                <input value={this.state.valueLabel} style={mystyle} onChange={onChange}></input>
                <RadioButtons
                    key={this.state.properties.option}
                    options={this.state.properties.options}
                    type={this.state.properties.option}
                    changeOption={this.callBackFunction}
                />
            </div>

        );
    }
}

export default InputNumber;
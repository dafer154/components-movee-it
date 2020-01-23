import React, { Component } from "react";
import RadioButtons from "../Options/RadioButton";

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

    // convertColorBorder(color) {
    //     switch (color) {
    //         case '#e3165b':
    //             return '3px solid rgb(227, 27, 91)'
    //             break;
    //         case '#4d841d':
    //             return '3px solid  rgb(77, 132, 29)'
    //             break;
    //         case '#0378d5':
    //             return '3px solid rgb(3, 120, 213)'
    //             break;
    //         case '#c15700':
    //             return '3px solid rgb(193, 87, 0)'
    //             break;
    //         case '#d64113':
    //             return '3px solid rgb(214, 65, 19)'
    //             break;
    //         default:
    //             break;
    //     }
    // }

    convertColorBorder(color) {
        const borderType = `3px solid`
        const colorByContext = {
            '#e3165b': `${borderType} rgb(227, 27, 91)`,
            '#4d841d': `${borderType} rgb(77, 132, 29)`,
            '#0378d5': `${borderType} rgb(3, 120, 213)`,
            '#c15700': `${borderType} rgb(193, 87, 0)`,
            '#d64113': `${borderType} rgb(214, 65, 19)`,
            'default': `${borderType} rgb(227, 27, 91)`,
        }
        return !!colorByContext[color] ? colorByContext[color] : colorByContext['default']
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
                <button value="Hello" style={mystyle}>{this.state.valueLabel}</button>
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

export default Button;
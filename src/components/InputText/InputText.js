import React, { Component } from "react";
import RadioButtons from "../Options/RadioButton";

class InputText extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: props,
            styleInput: {
                font: props.style.font,
                color: props.style.color,
                width: props.style.width,
                padding: props.style.padding,
                background: props.style.background,
                borderLeft: props.style.borderLeft,
                borderRight: props.style.borderRight,
                borderTop: props.style.borderTop,
                borderBottom: props.style.borderBottom,
                outline: props.style.outline,
                borderRadius: props.style.borderRadius
            },
            valueLabel: props.valueLabel,
            disabled: props.disabled
        };
    }

    onChange = e => {
        this.setState({
            valueLabel: e.target.value
        })
    }


    convertColorBorder(color) {
        const borderType = `1px solid`
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
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: this.convertColorBorder(childData), color: childData },
                    valueLabel: label
                })
            case 'size':
                return this.setState({
                    styleInput: { ...this.state.styleInput, width: childData },
                    valueLabel: label
                });
            case 'textButton':
                return this.setState({
                    styleInput: { ...this.state.styleInput, color: childData },
                    valueLabel: label
                });
            case 'outlineButton':
                return this.setState({
                    styleInput: { ...this.state.styleInput, border: this.convertColorBorder(childData), color: childData },
                    valueLabel: label
                });
            case 'types':
                return this.changeTypeInputText(label);
            case 'disabled':
                const boolValue = JSON.parse(childData);
                return this.setState({ disabled: boolValue });
            default:
                break;
        }

        this.setState({
            styleChanged: { optionSelect: childData, type: type }
        })
    }

    changeTypeInputText(labelOption) {
        switch (labelOption) {
            case 'Standard':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: 'none', borderRight: 'none', borderTop: 'none', background: 'none', borderRadius: '0px' },
                    valueLabel: labelOption
                });
            case 'Filled':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: 'none', borderRight: 'none', borderTop: 'none', background: '#e8e8e8', borderRadius: '0px' },
                    valueLabel: labelOption
                });
            case 'Outlined':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black', background: 'none', borderRadius: '6px' },
                    valueLabel: labelOption
                });
            default:
                break;
        }
    }

    render() {

        const {
            onChange,
        } = this;

        const mystyle = {
            font: `${this.state.styleInput.font}`,
            color: `${this.state.styleInput.color}`,
            width: `${this.state.styleInput.width}`,
            padding: `${this.state.styleInput.padding}`,
            background: `${this.state.styleInput.background}`,
            borderLeft: `${this.state.styleInput.borderLeft}`,
            borderRight: `${this.state.styleInput.borderRight}`,
            borderTop: `${this.state.styleInput.borderTop}`,
            borderBottom: `${this.state.styleInput.borderBottom}`,
            outline: `${this.state.styleInput.outline}`,
            borderRadius: `${this.state.styleInput.borderRadius}`,
        }
        return (
            <div className="container">
                <div className="title">{this.state.properties.title}</div>
                <div className="description">{this.state.properties.description}</div>
                <div className="wrappInputText">
                    <input disabled={this.state.disabled} style={mystyle} onChange={onChange} placeholder={this.state.valueLabel}></input>
                </div>
                <RadioButtons
                    key={this.state.properties.option}
                    options={this.state.properties.options}
                    type={this.state.properties.option}
                    changeOption={this.callBackFunction}
                    typeComponent={this.state.properties.component}
                />
            </div>

        );
    }
}

export default InputText;
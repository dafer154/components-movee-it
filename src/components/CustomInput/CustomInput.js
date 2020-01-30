import React, { Component } from "react";
import RadioButtons from "../Options/RadioButton";
import './style/CustomInput.css';
import { convertColorBorder } from '../Utils';

class CustomInput extends Component {

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
            disabled: props.disabled,
            maxLength: props.maxLength,
            step: props.step,
            precision: props.precision,
            typeInput: props.typeInput
        };
    }

    onChange = event => {
        const { value, maxLength } = event.target;
        const message = value.slice(0, maxLength);
        this.setState({
            valueLabel: message
        });
    }

    callBackFunction = (childData, type, label) => {
        switch (type) {
            case 'color':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: convertColorBorder(childData), color: childData },
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
                return this.changeTypeInputNumber(label);
            case 'disabled':
                const boolValue = JSON.parse(childData);
                return this.setState({ disabled: boolValue });
            case 'maxLength':
                return this.setState({
                    maxLength: childData,
                    valueLabel: label
                });
            default:
                break;
        }

        this.setState({
            styleChanged: { optionSelect: childData, type: type }
        })
    }

    changeTypeInputNumber(labelOption) {
        switch (labelOption) {
            case 'Standard':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: 'none', borderRight: 'none', borderTop: 'none', background: 'none', borderRadius: '0px' },
                    valueLabel: labelOption
                });
            case 'Filled':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: 'none', borderRight: 'none', borderTop: 'none', background: '#DFD3D3', borderRadius: '0px' },
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
            callBackFunction
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
        const { title, description, options, option, component } = this.state.properties
        const { disabled, valueLabel, step, precision, maxLength, typeInput } = this.state
        return (

            <div>
                {this.state.typeInput === 'number' ?
                    <div className="container">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                        <div className="wrappInputNumber">
                            <input disabled={disabled} type={typeInput} style={mystyle} onChange={onChange} placeholder={valueLabel} step={step} precision={precision} value={valueLabel} maxLength={maxLength}></input>
                        </div>
                        {!!options ? <RadioButtons
                            key={option}
                            options={options}
                            type={option}
                            changeOption={callBackFunction}
                            typeComponent={component}
                        /> : ''}

                    </div> :
                    <div className="container">
                        <div className="title">{title}</div>
                        <div className="description">{description}</div>
                        <div className="wrappInputText">
                            <input disabled={disabled} type={typeInput} style={mystyle} onChange={onChange} placeholder={valueLabel}></input>
                        </div>
                        <RadioButtons
                            key={option}
                            options={options}
                            type={option}
                            changeOption={callBackFunction}
                            typeComponent={component}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default CustomInput;
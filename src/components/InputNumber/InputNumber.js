import React, { Component } from "react";
import RadioButtons from "../Options/RadioButton";
import './style/InputNumber.css';

class InputNumber extends Component {

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
            precision: props.precision
        };
    }

    onChange = event => {

        const { value, maxLength } = event.target;
        console.log(maxLength);
        const message = value.slice(0, maxLength);

        // let val = event.target.value;
        // val = val.replace(/ /gm, '');
        // console.log(val);

        // let num = `${val.substring(0, 3)} ${val.substring(3, 6)} ${val.substring(6, val.length)}`;


        this.setState({
            valueLabel: message
        });

        // this.setState({
        //     valueLabel: e.target.value
        // })
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
                this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: this.convertColorBorder(childData), color: childData },
                    valueLabel: label
                })
                break;
            case 'size':
                return this.setState({
                    styleInput: { ...this.state.styleInput, width: childData },
                    valueLabel: label
                });
                break;
            case 'textButton':
                return this.setState({
                    styleInput: { ...this.state.styleInput, color: childData },
                    valueLabel: label
                });
                break;
            case 'outlineButton':
                return this.setState({
                    styleInput: { ...this.state.styleInput, border: this.convertColorBorder(childData), color: childData },
                    valueLabel: label
                });
                break;
            case 'types':
                this.changeTypeInputNumber(label);
                break;
            case 'disabled':
                const boolValue = JSON.parse(childData);
                return this.setState({ disabled: boolValue });
                break;
            case 'maxLength':
                return this.setState({
                    maxLength: childData,
                    valueLabel: label
                });
                break;
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
                break;
            case 'Filled':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: 'none', borderRight: 'none', borderTop: 'none', background: '#DFD3D3', borderRadius: '0px' },
                    valueLabel: labelOption
                });
                break;
            case 'Outlined':
                return this.setState({
                    styleInput: { ...this.state.styleInput, borderBottom: '1px solid black', borderLeft: '1px solid black', borderRight: '1px solid black', borderTop: '1px solid black', background: 'none', borderRadius: '6px' },
                    valueLabel: labelOption
                });
                break;
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
                <div className="wrappInputNumber">
                    <input disabled={this.state.disabled} type="number" format={'$'} style={mystyle} onChange={onChange} placeholder={this.state.valueLabel} step={this.state.step} precision={this.state.precision} value={this.state.valueLabel} maxLength={this.state.maxLength}></input>
                </div>
                {!!this.state.properties.options ? <RadioButtons
                    key={this.state.properties.option}
                    options={this.state.properties.options}
                    type={this.state.properties.option}
                    changeOption={this.callBackFunction}
                    typeComponent={this.state.properties.component}
                /> : ''}

            </div>
        );
    }
}

export default InputNumber;
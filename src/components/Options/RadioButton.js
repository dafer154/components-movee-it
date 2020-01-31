import React, { Component } from "react";
import './RadioButton.css';

class RadioButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.options[0].option,
            typeComponent: props.typeComponent
        };
    }

    sendOption = (event, label) => {
        this.setState({
            selectedOption: event.target.value
        })
        this.props.changeOption(event.target.value, this.props.type, label);
    }

    render() {
        const { typeComponent, selectedOption } = this.state
        const { sendOption } = this

        return (
            <div>
                <div className="titleRadio">
                    Options
                </div>
                <div className="wrapperRadio">
                    {typeComponent === 'button' ?

                        this.props.options.map((option, i) => (
                            <div key={i} className="radioStyle">
                                <div>
                                    <input type="radio" onChange={(evt) => sendOption(evt, option.name)} value={option.option} checked={selectedOption === option.option} />
                                    {option.name}
                                </div>
                            </div>
                        )) : typeComponent === 'inputText' ?
                            this.props.options.map((option, i) => (
                                <div key={i} className="radioStyle">
                                    <div>
                                        <input type="radio" onChange={(evt) => sendOption(evt, option.name)} value={option.option} checked={selectedOption === option.option} />
                                        {option.name}
                                    </div>
                                </div>
                            )) : this.state.typeComponent === 'inputNumber' ?
                                this.props.options.map((option, i) => (
                                    <div key={i} className="radioStyle">
                                        <div>
                                            <input type="radio" onChange={(evt) => sendOption(evt, option.name)} value={option.option} checked={selectedOption === option.option} />
                                            {option.name}
                                        </div>
                                    </div>
                                )) : this.state.typeComponent === 'select' ?
                                    this.props.options.map((option, i) => (
                                        <div key={i} className="radioStyle">
                                            <div>
                                                <input type="radio" onChange={(evt) => sendOption(evt, option.name)} value={option.option} checked={selectedOption === option.option} />
                                                {option.name}
                                            </div>
                                        </div>
                                    )) : ''
                    }
                </div>
            </div>

        )
    }
}

export default RadioButton;

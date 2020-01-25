import React, { Component } from "react";

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


    optionSize(options) {
        switch (options) {
            case '50%':
                return 'Normal'
            case '30%':
                return 'Small'
            case '70%':
                return 'Medium'
            case '100%':
                return 'Large'
            default:
                break;
        }
    }

    render() {


        return (
            <div>
                <div>
                    Just clicked
                </div>
                <div>
                    {this.state.typeComponent === 'button' ?

                        this.props.options.map((option, i) => (
                            <div key={i}>
                                <div>
                                    <input type="radio" onChange={(evt) => this.sendOption(evt, option.name)} value={option.option} checked={this.state.selectedOption === option.option} />
                                    {option.name}
                                </div>
                            </div>
                        )) : this.state.typeComponent === 'inputText' ?
                            this.props.options.map((option, i) => (
                                <div key={i}>
                                    <div>
                                        <input type="radio" onChange={(evt) => this.sendOption(evt, option.name)} value={option.option} checked={this.state.selectedOption === option.option} />
                                        {option.name}
                                    </div>
                                </div>
                            )) : this.state.typeComponent === 'inputNumber' ?
                                this.props.options.map((option, i) => (
                                    <div key={i}>
                                        <div>
                                            <input type="radio" onChange={(evt) => this.sendOption(evt, option.name)} value={option.option} checked={this.state.selectedOption === option.option} />
                                            {option.name}
                                        </div>
                                    </div>
                                )) : 'jeje'
                    }
                </div>
            </div>

        )
    }
}

export default RadioButton;

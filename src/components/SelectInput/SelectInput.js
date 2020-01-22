import React, { Component } from "react";

class SelectInput extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>Select Input</div>
                <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>

        );
    }
}

export default SelectInput;
import React, { Component } from "react";

class SelectInput extends Component {
    state = {}
    render() {
        return (
            <div>
                <div>Select Input</div>
                <select size={2}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    <option value="david">David</option>
                    <option value="ana">Ana</option>
                    <option value="andres">Andres</option>
                </select>
            </div>

        );
    }
}

export default SelectInput;
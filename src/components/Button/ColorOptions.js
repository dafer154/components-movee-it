import React, { Component } from "react";

class ColorOption extends Component {
    state = {}
    render() {
        let colors = ['blue', 'red', 'black', 'yellow'];
        return (
            <div>
                Just clicked: {this.state.justClicked}
                <ul>
                    {colors.map(color =>
                        <li key={color} onClick={() => this.handleClick(color)}>
                            {color}
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}

export default ColorOption;

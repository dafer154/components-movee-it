import React, { Component } from "react";
import ColorOption from "./ColorOptions";

class Button extends Component {
    state = {
        color: 'red',
        text: 'Default',
        size: '50%'
    }

    handleClickColor(color) {
        this.setState({ color: color });
    }

    handleClickSize(size) {
        this.setState({ size: size.size });
    }

    colorOption() {
        let colors = ['blue', 'red', 'black', 'yellow'];
        return (
            <div>
                Just clicked Color
                <ul>
                    {colors.map(color =>
                        <li key={color} style={{ color: color }} onClick={() => this.handleClickColor(color)}>
                            {color}
                        </li>
                    )}
                </ul>
            </div>
        )
    }

    sizeOptions() {
        let sizes = [{ size: '25%', label: 'Small' }, { size: '60%', label: 'Medium' }, { size: '100%', label: 'Large' }];
        return (
            <div>
                Just clicked sized
        <ul>
                    {sizes.map(size =>
                        <li key={size} onClick={() => this.handleClickSize(size)}>
                            {size.label}
                        </li>
                    )}
                </ul>
            </div>
        );
    }


    render() {
        const style = {
            color: this.state.color,
            width: this.state.size
        }
        return (
            <div>
                {this.colorOption()}
                <button style={style}>Custom</button>
                {this.sizeOptions()}
                <button style={style}>Custom</button>

            </div>
        );
    }
}

export default Button;
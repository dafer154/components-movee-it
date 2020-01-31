import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/Header.css";

class Header extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <Link to="/button"><li>Button</li></Link>
                    <Link to="/autocomplete"><li>Autocomplete</li></Link>
                    <Link to="/input-number"><li>Input Number</li></Link>
                    <Link to="/input-text"><li>Input Text</li></Link>
                    <Link to="/select-input"><li>Select Input</li></Link>
                </ul>
            </div>
        );
    }
}

export default Header;
import React, { Component } from "react";
import Logo from '../../assets/img/moove-it.png';


class Home extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="titleComponent">Project Components Movee-it</div>
                <div>
                    <img src={Logo} alt={"logo"} />
                </div>
            </div>
        );
    }
}

export default Home;
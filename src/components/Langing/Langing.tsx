import React from 'react';
import svgProvider from "../../helpers/svgProvider";

import './langing.scss';

function Langing() {
    return (
        <div className={"container"}>
            <div className={"welcome__text"}>
                <h1>Welcome Rocketeer !</h1>
            </div>
            <div className={"buttons"}>
                <button className={"btn__start"}>Start Questionnaire</button>
                <span className={"submitted__applications"}>Submitted Applications</span>
            </div>

            <div className={"rocketMan"}>
                {svgProvider("rocketMan")}
            </div>
        </div>
    );
}

export default Langing;
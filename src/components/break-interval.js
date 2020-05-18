import React from "react";

function BreakInterval(props) {
    function decreaseCounter() {
        if (props.BreakInterval === 1) {
            return;
        }
        props.decreaseBreak();
    }

    function increaseCounter() {
        if (props.BreakInterval === 60) {
            return;
        }

        props.increaseBreak();
    }

    return (
        <section>
            <h4>Break Length</h4>
            <section className="interval-container">
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseCounter}>
                    Down
                </button>
                <p className="interval-length">{props.BreakInterval}</p>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseCounter}>
                    Up
                </button>
            </section>
        </section>
    );
}

export default BreakInterval;

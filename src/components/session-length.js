import React from "react";

function SessionLength(props) {
    function increaseSession() {
        if (props.SessionLength === 60) {
            return;
        }

        props.increaseSession();
    }

    function decreaseSession() {
        if (props.SessionLength === 1) {
            return;
        }

        props.decreaseSession();
    }

    return (
        <section>
            <h4>Session Length</h4>
            <section className="interval-container">
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={decreaseSession}>
                    Down
                </button>
                <p className="interval-length">{props.SessionLength}</p>
                <button
                    disabled={props.isPlay === true ? "disabled" : ""}
                    onClick={increaseSession}>
                    Up
                </button>
            </section>
        </section>
    );
}

export default SessionLength;

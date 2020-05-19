import React from "react";

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            intervalId: 0,
        };

        this.playTimer = this.playTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.decreaseTimer = this.decreaseTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
    }

    playTimer() {
        let intervalId = setInterval(this.decreaseTimer, 1000);
        this.props.handlePlayStopTimer(true);
        this.setState({
            intervalId: intervalId,
        });
    }

    decreaseTimer() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false,
                        });
                        this.props.toggleInterval(this.state.isSession);
                    } else {
                        this.setState({
                            isSession: true,
                        });
                        this.props.toggleInterval(this.state.isSession);
                    }
                } else {
                    this.props.updateTimerMinute();
                    this.setState({
                        timerSecond: 59,
                    });
                }
                break;
            default:
                this.setState((prevState) => {
                    return {
                        timerSecond: prevState.timerSecond - 1,
                    };
                });

                break;
        }
    }

    stopTimer() {
        clearInterval(this.state.intervalId);
        this.props.handlePlayStopTimer(false);
    }

    resetTimer() {
        this.stopTimer();
        this.props.resetTimer();
        this.props.handlePlayStopTimer(false);
        this.setState({
            timerSecond: 0,
            isSession: true,
        });
    }

    render() {
        const play = "Play";
        const stop = "Stop";
        const refresh = "Refresh";
        const timerMiddle = ":";
        const button = "button";
        return (
            <section>
                <section className="timer-container">
                    <h4>
                        {this.state.isSession === true
                            ? "Session"
                            : "Break Time"}
                    </h4>
                    <span className="timer">{this.props.timerMinute}</span>
                    <span className="timer">{timerMiddle}</span>
                    <span className="timer">
                        {this.state.timerSecond === 0
                            ? "00"
                            : this.state.timerSecond < 10
                            ? "0" + this.state.timerSecond
                            : this.state.timerSecond}
                    </span>
                </section>
                <section className="timer-actions">
                    <button type={button} onClick={this.playTimer}>
                        {play}
                    </button>
                    <button type={button} onClick={this.stopTimer}>
                        {stop}
                    </button>
                    <button type={button} onClick={this.resetTimer}>
                        {refresh}
                    </button>
                </section>
            </section>
        );
    }
}

export default Timer;

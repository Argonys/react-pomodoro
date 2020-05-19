import React from "react";
import BreakInterval from "./break-interval";
import SessionLength from "./session-length";
import Timer from "./timer";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            breakLength: 5,
            sessionLength: 25,
            timerMinute: 25,
            isPlay: false,
        };

        this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
        this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);

        this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
        this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);

        this.onToggleInterval = this.onToggleInterval.bind(this);
        this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
        this.handlePlayStopTimer = this.handlePlayStopTimer.bind(this);
        this.onResetTimer = this.onResetTimer.bind(this);
    }

    onIncreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength + 1,
            };
        });
    }

    onDecreaseBreakLength() {
        this.setState((prevState) => {
            return {
                breakLength: prevState.breakLength - 1,
            };
        });
    }

    onIncreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength + 1,
                timerMinute: prevState.sessionLength + 1,
            };
        });
    }

    onDecreaseSessionLength() {
        this.setState((prevState) => {
            return {
                sessionLength: prevState.sessionLength - 1,
                timerMinute: prevState.sessionLength - 1,
            };
        });
    }

    onUpdateTimerMinute() {
        this.setState((prevState) => {
            return {
                timerMinute: prevState.timerMinute - 1,
            };
        });
    }

    onToggleInterval(isSession) {
        if (isSession) {
            this.setState({
                timerMinute: this.state.sessionLength,
            });
        } else {
            this.setState({
                timerMinute: this.state.breakLength,
            });
        }
    }

    onResetTimer() {
        // this.stopTimer();
        // this.props.resetTimer();
        this.setState({
            timerMinute: this.state.sessionLength,
        });
    }

    handlePlayStopTimer(isPlay) {
        this.setState({
            isPlay: isPlay,
        });
    }

    render() {
        const title = "My Pomodoro Clock";
        return (
            <main>
                <h1>{title}</h1>
                <section className="interval-length-container">
                    <BreakInterval
                        isPlay={this.state.isPlay}
                        BreakInterval={this.state.breakLength}
                        increaseBreak={this.onIncreaseBreakLength}
                        decreaseBreak={this.onDecreaseBreakLength}
                    />
                    <SessionLength
                        isPlay={this.state.isPlay}
                        SessionLength={this.state.sessionLength}
                        increaseSession={this.onIncreaseSessionLength}
                        decreaseSession={this.onDecreaseSessionLength}
                    />
                </section>
                <Timer
                    timerMinute={this.state.timerMinute}
                    breakTimer={this.state.breakLength}
                    updateTimerMinute={this.onUpdateTimerMinute}
                    toggleInterval={this.onToggleInterval}
                    resetTimer={this.onResetTimer}
                    handlePlayStopTimer={this.handlePlayStopTimer}
                />
            </main>
        );
    }
}

export default App;

import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.props.time,
      isRunning: this.props.autostart || false,
    };
    this.interval = null;
  }

  componentDidMount() {
    if (this.state.isRunning) {
      this.startTimer();
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  startTimer = () => {
    this.setState({ isRunning: true });
    this.interval = setInterval(this.tick, this.props.step);
  };

  pauseTimer = () => {
    this.setState({ isRunning: false });
    clearInterval(this.interval);
  };

  tick = () => {
    if (this.state.time > 0) {
      this.setState((prevState) => ({
        time: prevState.time - this.props.step,
      }));
      this.props.onTick(this.state.time);
    } else {
      this.pauseTimer();
    }
  };

  formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(2);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>{this.formatTime(time)}</h2>
        {this.state.isRunning ? (
          <button onClick={this.pauseTimer}>Pause</button>
        ) : (
          <button onClick={this.startTimer}>Start</button>
        )}
      </div>
    );
  }
}

export default Timer;

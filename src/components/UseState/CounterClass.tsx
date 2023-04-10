import React, { Component } from "react";

type Props = {};

type State = { count: number };

export default class CounterClass extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div className="text-center bg-slate-400 py-4 rounded border border-neutral-900">
        <p className="text-2xl font-bold mb-4">Count: {this.state.count}</p>
        <button className="default-button mr-3" onClick={this.increment}>Increment</button>
        <button className="default-button" onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

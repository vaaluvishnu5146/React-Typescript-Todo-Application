import { Component } from "react";

interface CounterState {
  count: number;
}

class CounterClass extends Component<{}, CounterState> {
  // Constructor method is used to initialize state and bind event handlers
  constructor(props: {}) {
    super(props);
    // Initialize state here
    this.state = {
      count: 0,
    };
  }

  // Event handlers
  handleCountChange: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // State
    this.setState((prevState: CounterState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount(): void {
    console.log("Component did mount");
  }

  componentWillMount(): void {
    console.log("Component will mount");
  }

  componentWillUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<CounterState>,
    nextContext: any
  ): void {
    console.log("Component will update");
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<CounterState>,
    snapshot?: any
  ): void {
    console.log("Component did update");
  }

  static getDerivedStateFromProps(
    props: Readonly<{}>,
    state: Readonly<CounterState>
  ): Partial<CounterState> | null {
    console.log("Get derived state from props");
    return null;
  }

  shouldComponentUpdate(
    nextProps: Readonly<{}>,
    nextState: Readonly<CounterState>,
    nextContext: any
  ): boolean {
    console.log("Should component update");
    return true;
  }

  // Render method
  render() {
    // Return method should return JavascriptXML (JSX)
    return (
      <button className="counter" onClick={this.handleCountChange}>
        Count is {this.state.count}
      </button>
    );
  }
}

export default CounterClass;

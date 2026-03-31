import { Component } from "react";

interface GreetProps {
  message: string;
}

export default class Greet extends Component<GreetProps, {}> {
  constructor(props: GreetProps) {
    super(props);
    console.log("Class component ", props);
  }

  render() {
    return <p>{this.props.message}</p>;
  }
}

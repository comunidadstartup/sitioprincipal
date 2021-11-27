import React, { Component, ReactNode } from "react";
import Round from "./round/round";

type Props = {
  variant?: "Round" | "Rectangular";
};

type State = {};

export default class Button extends Component<Props, State> {
  variant() {
    const { variant, children } = this.props;
    switch (variant) {
      case "Round":
        return <Round>{children}</Round>;
      case "Rectangular":
        return;
      default:
        return <Round>{children}</Round>;
    }
  }

  render() {
    return this.variant();
  }
}

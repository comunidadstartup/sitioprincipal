import React, { Component } from "react";

import styles from "./main.module.scss";

import Button from "../../button/button";

import { MdMenu as Menu } from "react-icons/md";
import Logo from "../../../public/logo-light.svg";

type Props = {
  variant?: "solid" | "transparent";
};

type State = {};

export default class MNVB extends Component<Props, State> {
  render() {
    return (
      <div className={styles.main}>
        <div className={styles.icon}>
          <Logo />
        </div>
        <Button variant="Round">
          <Menu />
        </Button>
      </div>
    );
  }
}

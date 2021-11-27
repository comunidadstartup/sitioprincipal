import React, { Component } from "react";
import styles from "./content.module.scss";

import CaminoCard from "../../../../components/cards/camino/camino";
import Section from "../../../../components/sections/section";
import Text from "../../../../components/text/text";
import magicScroll from "../../../../functions/magicScroll/magicScroll";

import DecStep from "./steps/dec.tsx/dec";
import NovStep from "./steps/nov.tsx/nov";
import Step2QXII from "./steps/iiqxii.tsx/iiqxii";
import Step3QXII from "./steps/iiiqxii.tsx/iiiqxii";
import Step4QXII from "./steps/iiiiqxii.tsx/iiiiqxii";
import Step1QXII from "./steps/iqxii.tsx/iqxii";

type Props = {};

type State = {};

export default class CaminoContent extends Component<Props, State> {
	render() {
		return (
			<div className={styles.content}>
				<NovStep id="nov2021" nextId="dec2021" />
				<DecStep id="dec2021" nextId="1QXII" />
				<Step1QXII id="1QXII" nextId="2QXII" />
				<Step2QXII id="2QXII" nextId="3QXII" />
				<Step3QXII id="3QXII" nextId="4QXII" />
				<Step4QXII id="4QXII" nextId="equipo" />
			</div>
		);
	}
}

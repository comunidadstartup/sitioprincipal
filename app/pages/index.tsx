import React, { useEffect, useReducer, useState } from "react";
import NavBar from "../components/navbar/navbar";
import Section from "../components/sections/section";
import Text from "../components/text/text";
import colorContext from "../contexts/color/colorContext";
import CaminoContent from "./sections/camino/content/content";
import CaminoTitle from "./sections/camino/title/title";
import ConceptoContent from "./sections/concepto/content/content";
import ConceptoTitle from "./sections/concepto/title/title";

import ContactoContent from "./sections/contact/content/content";
import ContactoTitle from "./sections/contact/title/title";
import CreciendoContent from "./sections/creciendo/content/content";
import CreciendoTitle from "./sections/creciendo/title/title";
import Cultura from "./sections/cultura/cultura";
import Academia from "./sections/dinamica/academia/academia";
import Grupos from "./sections/dinamica/grupos/grupos";
import Nota from "./sections/dinamica/nota/nota";
import Plataforma from "./sections/dinamica/plataforma/plataforma";
import Dinamica from "./sections/dinamica/title/dinamica";
import EquipoContent from "./sections/equipo/content/content";

import EquipoTitle from "./sections/equipo/title/title";
import Header from "./sections/header/header";
import MotivacionContentV from "./sections/motivacion/content/content-c";

import MotivacionContentI from "./sections/motivacion/content/content-f";
import MotivacionContentIV from "./sections/motivacion/content/content-q";
import MotivacionContentII from "./sections/motivacion/content/content-s";
import MotivacionContentIII from "./sections/motivacion/content/content-t";

import MotivacionTitle from "./sections/motivacion/title/title";
import Mutualismo from "./sections/mutualismo/mutualismo";
import NosotrosContent from "./sections/nosotros/content/content";
import NosotrosTitle from "./sections/nosotros/title/title";
import TestContent from "./sections/test/content/content";
import TestContent2 from "./sections/test/content/content-2";
import TestTitle from "./sections/test/title/title";

type Mode = {
	mode: "Light" | "Dark";
};

export default function Home() {
	const [color, setColor] = useState<Mode>({ mode: "Light" });

	useEffect(() => {
		document.body.style.overflow = "hidden";
		setTimeout(() => {
			document.body.style.overflow = "auto";
		}, 3000);
	});

	return (
		<>
			<colorContext.Provider value={{ get: color, set: setColor }}>
				<NavBar variant="Main" type="fixed" />

				<Header id="header" nextId="nosotros" color={color.mode} />

				<NosotrosTitle id="nosotros" nextId="nosotros-content" />

				<NosotrosContent id="nosotros-content" nextId="concepto" />

				<ConceptoTitle id="concepto" nextId="concepto-content" />

				<ConceptoContent id="concepto-content" nextId="mutualismo" />
				<Mutualismo id="mutualismo" nextId="cultura" />
				<Cultura id="cultura" nextId="dinamica" />

				<Dinamica id="dinamica" nextId="grupos" />

				<Grupos id="grupos" nextId="academia" />
				<Academia id="academia" nextId="plataforma" />
				<Plataforma id="plataforma" nextId="nota" />
				<Nota id="nota" nextId="camino" />

				<CaminoTitle id="camino" nextId="nov2021" />

				<CaminoContent />

				<EquipoTitle id="equipo" nextId="andy" />

				<EquipoContent id="equipo-content" nextId="creciendo" />

				<CreciendoTitle id="creciendo" nextId="creciendo-content" />

				<CreciendoContent id="creciendo-content" nextId="motivacion" />

				<MotivacionTitle id="motivacion" nextId="motivacion-content-I" />

				<MotivacionContentI
					id="motivacion-content-I"
					nextId="motivacion-content-II"
				/>

				<MotivacionContentII
					id="motivacion-content-II"
					nextId="motivacion-content-III"
				/>

				<MotivacionContentIII
					id="motivacion-content-III"
					nextId="motivacion-content-IV"
				/>

				<MotivacionContentIV
					id="motivacion-content-IV"
					nextId="motivacion-content-V"
				/>

				<MotivacionContentV id="motivacion-content-V" nextId="contacto" />

				<ContactoTitle id="contacto" nextId="contacto-content" />

				<ContactoContent id="contacto-content" nextId="end" />
				<div id="end"></div>
			</colorContext.Provider>
		</>
	);
}

import React from "react";

type Mode = {
	mode: "Light" | "Dark";
};

type modeContext = {
	get: Mode;
	set: React.Dispatch<React.SetStateAction<Mode>>;
};

const colorContext = React.createContext<modeContext>({
	get: { mode: "Light" },
	set: () => {},
});

export default colorContext;

module.exports = {
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});
		config.experiments = { topLevelAwait: true, layers: true };
		return config;
	},
};

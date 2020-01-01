module.exports = {
	overrideCracoConfig({ cracoConfig, pluginOptions }) {
		const {
			sass = true,
		} = pluginOptions;
		if (!cracoConfig.babel) {
			cracoConfig.babel = {};
		}
		if (!cracoConfig.babel.plugins) {
			cracoConfig.babel.plugins = [];
		}
		cracoConfig.babel.plugins.push(
			[
				'styled-jsx/babel',
				sass && { 'plugins': ['styled-jsx-plugin-sass'] },
			].filter(Boolean),
		);
		return cracoConfig;
	},
	overrideWebpackConfig: ({ webpackConfig, pluginOptions, context: { env } }) => {
		const {
			cssFileSupport = true,
			cssFileTest = /\.styled\.(s)css$/,
		} = pluginOptions;
		if (!cssFileSupport) {
			return webpackConfig;
		}
		const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
		if (!oneOfRule) {
			return console.log(
				`Can't find a 'oneOf' rule under module.rules in the ${env} webpack config!`,
				'webpack+rules+oneOf',
			);
		}
		// Insert this rule right before the last rule
		oneOfRule.oneOf.splice(oneOfRule.oneOf.length - 1, 0, {
			test: cssFileTest,
			use: [
				{
					loader: require('styled-jsx/webpack').loader,
					options: {
						type: 'scoped',
					},
				},
			],
		});
		return webpackConfig;
	},
};
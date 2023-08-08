import { Configuration } from "webpack";

const config: Configuration = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								mode: "local",
								localIdentName: "[name]__[local]__[hash:base64:5]",
								exportOnlyLocals: true,
							},
						},
					},
				],
			},
		],
	},
};

export default config;

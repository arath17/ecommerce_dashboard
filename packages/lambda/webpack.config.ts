import { Configuration, NormalModuleReplacementPlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { resolve } from "path";

export default {
	mode: "production",
	target: "node",
	module: {
		rules: [{ test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }],
	},
	externals: ["express", "aws-sdk", "knex", "pg"],
	resolve: {
		extensions: [".tsx", ".ts", ".js", ".jsx"],
	},
	output: {
		filename: "index.js",
		libraryTarget: "commonjs2",
		path: resolve(__dirname, "../../dist/lambda"),
	},
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: "static",
			openAnalyzer: false,
		}),
		new NormalModuleReplacementPlugin(
			/m[sy]sql2?|oracle(db)?|sqlite3/,
			"noop2"
		),
	],
	optimization: {
		minimize: false,
		nodeEnv: false,
	},
} as Configuration;

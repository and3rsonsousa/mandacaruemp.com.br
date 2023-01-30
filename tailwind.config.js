/** @type {import('tailwindcss').Config} */
var colors = require("tailwindcss/colors");

module.exports = {
	content: ["./app/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {},
		colors: {
			white: "white",
			black: "black",
			transparent: "transparent",
			gray: colors.gray,
			brand: { DEFAULT: colors.green[900], ...colors.green },
			accent: { DEFAULT: colors.orange[600], ...colors.orange },
		},
	},
	plugins: [],
};

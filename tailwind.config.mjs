/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				col_white: "#f8f8f8",
				col_black: "#222222",
				col_accent: "#7fa32b",
			},
			fontFamily: {
				Orbitron: ["Orbitron, sans-serif"],
				Inter: ["Inter, sans-serif"],
			  },
		},
	},
	plugins: [],
}

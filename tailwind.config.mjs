/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				primary: "#f8f8f8",
				secondary: "#222222",
				accent: "#ff0000",
				divider:"#8c8c8c",
			},
			fontFamily: {
				Orbitron: ["Orbitron, sans-serif"],
				Inter: ["Inter, sans-serif"],
			  },
		},
	},
	plugins: [],
}

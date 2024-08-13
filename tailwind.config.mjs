/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', 
	theme: {
		extend: {
		  colors: {
			coffee: '#F6EBDA',
			coffeeOrange: '#ff902a',
			coffeeBrown: '#2f2105',
			coffeeCream: '#f9d9aa',
		  },
		},
	
		
	},
	plugins: [],
}

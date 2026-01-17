import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	experimental: {
		fonts: [
			{
				provider: fontProviders.google(),
				name: "Teko",
				cssVariable: "--font-teko"
			},
			{
				provider: fontProviders.google(),
				name: "Inter",
				cssVariable: "--font-inter"
			}
		]
	}
});

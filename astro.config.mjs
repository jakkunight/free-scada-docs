import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://jakkunight.github.io',
  base: '/free-scada-docs',
  integrations: [  
		starlight({
			title: 'Free SCADA Docs',
			social: {
				github: 'https://github.com/jakkunight/free-scada',
			},
			sidebar: [
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

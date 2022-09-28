import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	projects: [
		{
			name: 'Desktop',
			use: {
				browserName: 'chromium',
				viewport: { width: 1280, height: 720 }
			}
		}
	]
};

export default config;

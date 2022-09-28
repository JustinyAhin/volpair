import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('Volpair');
});

test('returns a 400 error for an incorrect contract address', async ({ page }) => {
	page.on('request', async request => {
		if (request.url().includes('incorrect-contract-address')) {
			const response = await request.response();
			expect(response?.status()).toBe(400);
		}
	});

	await page.goto('/incorrect-contract-address');
	expect(await page.textContent('h1')).toBe('400: Invalid pair address');
});

test('returns a 404 error for a contract address with no volume data', async ({ page }) => {
	page.on('request', async request => {
		if (request.url().includes('0x0000000000000000000000000000000000000000')) {
			const response = await request.response();
			expect(response?.status()).toBe(404);
		}
	});

	await page.goto('/0x0000000000000000000000000000000000000000');
	expect(await page.textContent('h1')).toBe('404: This contract address does not have any volume data');
});

test('return a 404 not found error for a non-existent page', async ({ page }) => {
	page.on('request', async request => {
		if (request.url().includes('new/non-existent-page')) {
			const response = await request.response();
			expect(response?.status()).toBe(404);
		}
	});

	await page.goto('/new/non-existent-page');
	expect(await page.textContent('h1')).toBe('404: Not Found');
});

import {test, expect} from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax');
    await page.getByText('Button Triggering AJAX Request').click()
})

test('Wait for text', async({page}) => {
const successButton = page.locator('.bg-success')
//await successButton.waitFor({state: 'attached'})
//await successButton.click()
//const successMessage = await successButton.allTextContents()
//expect(successMessage).toContain('Data loaded with AJAX get request.')
await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
    
})

test('Wait for alternatives', async({page}) => {
const successButton = page.locator('.bg-success')
//await page.waitForSelector('.bg-success')
//await page.waitForResponse('http://uitestingplayground.com/ajaxdata')
await page.waitForLoadState('networkidle')
//await successButton.waitFor({state: 'attached'})
//await successButton.click()
const successMessage = await successButton.allTextContents()
expect(successMessage).toContain('Data loaded with AJAX get request.')
//await expect(successButton).toHaveText('Data loaded with AJAX get request.', {timeout: 20000})
    
})
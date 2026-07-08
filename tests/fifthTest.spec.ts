import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('Get text', async ({page}) => {
const basicform = page.locator('nb-card').filter({hasText: 'Basic form'})
const buttonText = await basicform.locator('button').textContent()
expect(buttonText).toEqual('Submit')
})

test('Get all text', async ({page}) => {
const usingthegridForm = page.locator('nb-card').filter({hasText: 'Using the Grid'})
const allradiobuttonText = await usingthegridForm.locator('nb-radio').allTextContents()
expect(allradiobuttonText).toContain('Option 1')
})
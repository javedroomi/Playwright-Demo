import {test} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
})


test('Get by Child element', async ({page}) => {
await page.locator('nb-card nb-radio :text-is("Option 1")').click()
await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 2")').click()
await page.locator('nb-card').getByTestId('si-button').click()
await page.locator('nb-card').nth(3).getByRole('button').click()
})

test('Get by parent element', async ({page}) => {
await page.locator('nb-card', {hasText :"Block Form"}).getByPlaceholder('First Name').click()
await page.locator('nb-card', {has: page.locator('.custom-checkbox')}).getByText('Remember me').nth(1).check()
//await page.locator('nb-card', {has: page.locator('.custom-checkbox')}).getByRole('textbox', {id: 'email'})
await page.locator('nb-card').filter({has: page.locator('.status-warning')}).getByRole('button').click()
await page.locator('nb-card').filter({has: page.locator('nb-checkbox')}).filter({hasText: 'Sign in'}).getByRole('textbox', {name: 'Email'}).click()
await page.locator(':text-is("Using the Grid")').locator('..').getByRole('textbox', {name: 'Email'}).click()
})
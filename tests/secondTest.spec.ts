import {test} from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/');
  await page.getByText('Forms').click();
  await page.getByText('Form Layouts').click();
})

//test ('Learn locators', async ({page}) => {
 //await page.locator('input').click();

 //await page.locator('#inputEmail1').fill('test@gmail.com')
 //await page.locator('.shape-rectangle').click()
 //await page.locator('[placeholder="Email"]').fill('tttt')
 //await page.locator('input[placeholder="Email"].shape-rectangle#inputEmail1').fill('tttt')
//})

test('Get by Role', async ({page}) => {
//await page.getByRole('radio', {name: 'Option 1'}).setChecked(true)
await page.getByRole('button', {name: 'Submit'}).first().click()
await page.getByLabel('Email').first().fill('tttt')
await page.getByPlaceholder('Jane Doe').click()
await page.getByTestId('si-button').click()

})
import {test, expect} from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('uiComponents', async ({page}) => {
    const UsingthegridForm = await page.locator('nb-card').filter({hasText: 'Using the Grid'})
    const email1 = UsingthegridForm.getByRole('textbox', {name: 'Email'})
    await email1.fill('test@test.com')
    await email1.clear()
    await email1.pressSequentially('test1@test.com', {delay: 500})
    //const inputValue = await email1.inputValue()
    //expect(inputValue).toEqual('test1@test.com')
    await expect(email1).toHaveValue('test1@test.com')
})

test('radioButtons', async ({page}) => {
    const usingthegridForm = await page.locator('nb-card').filter({hasText: 'Using the Grid'})
    const radio1 = await usingthegridForm.locator('nb-radio').getByLabel('Option 1')
    await radio1.check({force: true}) 
    const radio1status = await radio1.isChecked()
    expect(radio1status).toBeTruthy()
    await usingthegridForm.locator('nb-radio').getByRole('radio', {name: 'Option 2'}).check({force: true})
    expect (usingthegridForm.locator('nb-radio').getByRole('radio', {name: 'Option 2'})).toBeChecked()
    expect(await radio1.isChecked()).toBeFalsy()
})


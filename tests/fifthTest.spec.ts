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

test('inputText', async({page}) => {
const basicform1 = page.locator('nb-card').filter({hasText: 'Basic form'})
const email1 = basicform1.getByRole('textbox', {name: 'Email'})
await email1.fill('test@test.com')
const emailInputValue = await email1.inputValue()
expect(emailInputValue).toEqual('test@test.com')

})

test('Attribute Value', async({page}) => {
const basicform1 = page.locator('nb-card').filter({hasText: 'Basic form'})
const email1 = basicform1.getByRole('textbox', {name: 'Email'})
const PlaceholderValue = await email1.getAttribute('placeholder')
expect(PlaceholderValue).toEqual('Email')


})

test('Assertion', async({page}) => {
const value = 5
expect(value).toEqual(5)

const basicform1 = page.locator('nb-card').filter({hasText: 'Basic form'}).locator('button')
const buttonText = await basicform1.textContent()
expect(buttonText).toEqual('Submit')

expect(basicform1).toHaveText('Submit')

expect(basicform1).toHaveText('Submit1')
basicform1.click()


})
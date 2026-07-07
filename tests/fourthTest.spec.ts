import {test, expect} from "playwright/test";

test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('Reusing Locators', async ({page}) => {

    const basicform = page.locator('nb-card').filter({hasText: 'Basic form'})
    const emailfield = basicform.getByRole('textbox', {name: 'Email'})
    const passwordfield = basicform.getByRole('textbox', {name: 'Password'})

    await emailfield.fill('RJtest.gmail.com')
    await passwordfield.fill('WelcomeRJ')
    await basicform.locator('nb-checkbox').click()
    await basicform.getByRole('button', {name: 'Submit'}).click()

    await expect(emailfield).toHaveValue('RJtest.gmail.com')


})





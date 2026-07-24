import {test, expect} from '@playwright/test';

test('datepicker', async({page}) => {
await page.goto('http://localhost:4200/')
await page.getByText('Forms').click()
await page.getByText('Datepicker').click()

const datepickerfield = page.locator('nb-card-body').getByPlaceholder('Form Picker')
await datepickerfield.click()
await page.locator('[class="day-cell ng-star-inserted"]').getByText('1', {exact: true}).click()
await expect(datepickerfield).toHaveValue('Jul 1, 2026')

})
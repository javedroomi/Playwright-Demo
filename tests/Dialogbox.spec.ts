import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
})

test('dialogbox', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()

      page.on('dialog', dialog => {
        expect(dialog.message()).toEqual('Are you sure you want to delete?')
        dialog.accept()
    })
    await page.getByRole("table").locator('tr', {hasText: 'fat@yandex.ru'}).locator('.nb-trash').click()
    expect(page.getByRole("table").locator('tr', {hasText: 'fat@yandex.ru'})).not.toBeVisible()

    //Following method is not recommended as table data can change but works fine for current application
    //await expect(page.locator('tbody tr').nth(1).locator('td').nth(5)).not.toHaveText('fat@yandex.ru')

})

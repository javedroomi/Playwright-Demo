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

test('webtable1', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()
    const targetrow =  page.getByRole("row", {name: 'twitter@outlook.com'})
    await targetrow.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('Age').clear()
    await page.locator('input-editor').getByPlaceholder('Age').fill('18')
    await page.locator('.nb-checkmark').click()
})

test ('webtablebyId', async({page}) => {
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()
    await page.locator('.ng2-smart-pagination-nav').getByText('2').click()
    const targetrowbyId = page.getByRole('row', {name: '11'}).filter({has: page.locator('td').nth(1).getByText('11')})
    await targetrowbyId.locator('.nb-edit').click()
    await page.locator('input-editor').getByPlaceholder('E-mail').clear()
    await page.locator('input-editor').getByPlaceholder('E-mail').fill('test@test.com')
    await page.locator('.nb-checkmark').click()
    expect(targetrowbyId.locator('td').nth(5)).toHaveText('test@test.com')

})

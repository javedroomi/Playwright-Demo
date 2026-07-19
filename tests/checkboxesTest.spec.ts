import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('checkboxSelection', async() => {
    test.beforeEach(async({page}) => {
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Toastr').click()
    })

    test('checkboxSelection', async({page}) => {
        
        //await page.getByRole('checkbox', {name: 'Hide on click'}).uncheck({force: true})
        
        //await page.getByRole('checkbox', {name: 'Hide on click'}).check({force: true})
        //await page.getByRole('checkbox', {name: 'Prevent arising of duplicate toast'}).click({force: true})
        
        const allcheckboxes = page.getByRole('checkbox')
        await expect(allcheckboxes.first()).toBeVisible();

        for (const box of await allcheckboxes.all()){
            await box.check({force: true})
            await expect(box).toBeChecked();
        }
    })
})
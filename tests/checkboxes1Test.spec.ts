import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
})

test.describe('checkboxSelection', async() => {
    test.beforeEach(async({page}) => {
        await page.getByText('Modal & Overlays').click()
        await page.getByText('Toastr').click()
    })

    test('dropdown', async({page}) => {
        const dropdownList = page.locator('ngx-header nb-select')
        await dropdownList.click()

        const alldropdownList = page.locator('nb-option-list nb-option')
        await expect(alldropdownList).toHaveText(["Light", "Dark", "Cosmic", "Corporate"])
        await alldropdownList.filter({hasText: "Cosmic"}).click()
        const header = page.locator('nb-layout-header')
        expect(header).toHaveCSS('background-color', 'rgb(50, 50, 89)')
        //await dropdownList.click()

        //await alldropdownList.filter({hasText: 'Light'}).click()
        //await expect(header).toHaveCSS('background-color', 'rgb(255, 255, 255)')

        const colours: {[key: string]: string} = {
            Light: "rgb(255, 255, 255)",
            Dark: "rgb(34, 43, 69)",
            Cosmic: "rgb(50, 50, 89)",
            Corporate: "rgb(255, 255, 255)"
        }
        
        await dropdownList.click()
        for (const colour in colours) {
            await expect(dropdownList).toBeVisible();
            //console.log(await alldropdownList.allTextContents());
            await alldropdownList.filter({hasText: colour}).click()
            await expect(header).toHaveCSS('background-color', colours[colour])
            if (colour != "Corporate"){
            await dropdownList.click()
            }

        }
           
        })


})
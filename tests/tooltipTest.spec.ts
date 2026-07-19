import {test, expect} from '@playwright/test';

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/')
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()
})

test ('tooltip', async({page}) => {
    const tooltipcard = page.locator('nb-card', {hasText: 'Tooltip Placements'})
    await tooltipcard.getByRole('button', {name: 'Top'}).hover()
    await page.pause();
    //const tooltip = await tooltipcard.locator(
  //'button[nbtooltip="This is a tooltip"][nbtooltipplacement="top"]').hover()

    const tooltip = await page.locator('nb-tooltip').textContent()
    expect(tooltip).toEqual('This is a tooltip')

})
    
    test('tool tip',async({page})=>{
   //await page.getByText('Tooltip').click()
  const topbutton =page.getByRole('button',{name:'TOP'})
  await topbutton.hover()
 await expect(
    page.getByText('This is a tooltip', { exact: true })
  ).toBeVisible();
 
})
 
 


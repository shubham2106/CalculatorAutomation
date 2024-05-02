const { test, expect } = require('@playwright/test');
import { clickOnElement, validateValueWithLocator } from '../src/utils/actions';
import { obj } from './../src/pages/calculatorPath';

test.beforeEach('Open browser', async({page})=> {
    await page.goto('https://www.calculator.net/');
})

test('has title', async ({ page }) => {
    
    await expect(page).toHaveTitle("Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science");
});

test('Add operation', async ({page}) => {
    await clickOnElement(page, obj.numberPath(1));
    await clickOnElement(page, obj.addSymbol);
    await clickOnElement(page, obj.numberPath(2));
    await validateValueWithLocator(page.locator(obj.outputPath),"3");
})

test('Trignometric operation', async ({page}) => {
    await clickOnElement(page, obj.operation("sin"));
    await clickOnElement(page, obj.numberPath(3));
    await clickOnElement(page, obj.numberPath(0));
    await validateValueWithLocator(page.locator(obj.outputPath),"0.5");
})

test('Power and root operation', async ({page}) => {
    
    await clickOnElement(page, obj.numberPath(3));
    await clickOnElement(page, obj.operation("pow"));
    await clickOnElement(page, obj.numberPath(3));
    await validateValueWithLocator(page.locator(obj.outputPath),"27");
    
})

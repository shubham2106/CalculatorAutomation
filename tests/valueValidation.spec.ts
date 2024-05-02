import {test, expect} from '@playwright/test';
import {obj} from "../src/pages/calculatorPath";
import { clickOnElement, validateValueWithLocator } from '../src/utils/actions';

test.beforeEach('Open browser', async({page})=> {
    await page.goto('https://www.calculator.net/');
})

test('has title', async ({ page }) => {
    
    await expect(page).toHaveTitle("Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science");
});

test('Verify keys entered are displayed correctly', async ({page}) => {
    await clickOnElement(page, obj.numberPath(1));
    await validateValueWithLocator(page.locator(obj.inputPath),"1");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.numberPath(2));
    await validateValueWithLocator(page.locator(obj.inputPath),"2");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.numberPath(3));
    await validateValueWithLocator(page.locator(obj.inputPath),"3");
    await clickOnElement(page, obj.clear);
    await validateValueWithLocator(page.locator(obj.inputPath),"");
    await clickOnElement(page, obj.operation("sin"));
    await validateValueWithLocator(page.locator(obj.inputPath),"sin()");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.operation("cos"));
    await validateValueWithLocator(page.locator(obj.inputPath),"cos()");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.operation("tan"));
    await validateValueWithLocator(page.locator(obj.inputPath),"tan()");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.operation("asin"));
    await validateValueWithLocator(page.locator(obj.inputPath),"arcsin()");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.operation("acos"));
    await validateValueWithLocator(page.locator(obj.inputPath),"arccos()");
    await clickOnElement(page, obj.back);
    await clickOnElement(page, obj.operation("atan"));
    await validateValueWithLocator(page.locator(obj.inputPath),"arctan()");
    await clickOnElement(page, obj.clear);
})
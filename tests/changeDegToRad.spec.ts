const { test, expect } = require('@playwright/test');
import { clickOnElement, validateValueWithLocator, validateValue } from '../src/utils/actions';
import { obj } from './../src/pages/calculatorPath';
import {calculateDegreeValue} from './../src/pages/operations'

test.beforeEach('Open browser', async({page})=> {
    await page.goto('https://www.calculator.net/');
})

test('Trignometric operation in degree', async ({page}) => {
    await clickOnElement(page, obj.operation("sin"));
    await clickOnElement(page, obj.numberPath(6));
    await clickOnElement(page, obj.numberPath(0));
    await expect.soft(page.locator(obj.outputPath)).toHaveText(calculateDegreeValue(60));
})

test('Trignometric operation in radian', async ({page}) => {
    await clickOnElement(page, obj.radian);
    await clickOnElement(page, obj.operation("sin"));
    await clickOnElement(page, obj.numberPath(3));
    await clickOnElement(page, obj.numberPath(0));
    await validateValueWithLocator(page.locator(obj.outputPath), Math.sin(30).toFixed(10));
})
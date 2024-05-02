import {test, expect} from '@playwright/test';
import {obj} from '../src/pages/calculatorPath';
import { clickOnElement, validateValueWithLocator } from '../src/utils/actions';

test.beforeEach('Open browser', async({page})=> {
    await page.goto('https://www.calculator.net/');
})

test('Validate message is added in the list when any invalid calculation is performed', async ({page}) => {

    await clickOnElement(page, obj.operation("1/x"));
    await clickOnElement(page, obj.operation("="));
    await clickOnElement(page, obj.operation("sin"));
    await clickOnElement(page, obj.numberPath(0));
    await clickOnElement(page, obj.operation("="));
    const texts: string[] = await page.locator(obj.history).allInnerTexts();
    console.log(texts);
    expect.soft(texts[0].toString()).toContain('sin(0) = 0');
    expect.soft(texts[1].toString()).toContain("(1/0) = Error");
})


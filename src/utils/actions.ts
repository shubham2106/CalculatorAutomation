import { Locator, Page } from "@playwright/test";
import {expect} from '@playwright/test';

export const clickOnElement = async (page: Page, locator: string) => {

    await page.locator(locator).click();

}

export const validateValueWithLocator = async (locator: Locator, actual: string) => {

    await expect.soft(locator).toHaveText(actual);

}

export const validateValue = async (expected: string, actual: string ) => {
    await expect.soft(expected).toBe(actual);
}
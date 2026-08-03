import { test, expect } from "@playwright/test";
import { PracticePage } from "../pages/PracticePage";

test("TC001 - Validate page heading", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.validateHeading();
});

test("TC002 - Select first radio button", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.chooseFirstRadio();

    await expect(practice.firstRadioBtn).toBeChecked();
});

test("TC003 - Select second radio button", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.chooseSecondRadio();

    await expect(practice.secondRadioBtn).toBeChecked();
});

test("TC004 - Verify first radio button gets deselected", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();

    await practice.chooseFirstRadio();
    await practice.chooseSecondRadio();

    await expect(practice.firstRadioBtn).not.toBeChecked();
    await expect(practice.secondRadioBtn).toBeChecked();
});

test("TC005 - Validate autocomplete field", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.enterSuggestion("India");

    await expect(practice.autoCompleteField).toHaveValue("India");
});

test("TC006 - Validate dropdown option", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.chooseDropdownItem("option2");

    await expect(practice.courseDropdown).toHaveValue("option2");
});

test("TC007 - Validate checkbox selection", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.markCheckbox();

    await expect(practice.optionCheckbox).toBeChecked();
});

test("TC008 - Validate name textbox", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();
    await practice.inputName("Aditya");

    await expect(practice.nameField).toHaveValue("Aditya");
});

test("TC009 - Validate alert popup", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();

    page.on("dialog", async (popup) => {
        expect(popup.message()).toBe(
            "Hello , share this practice page and share your knowledge"
        );
        await popup.accept();
    });

    await practice.triggerAlert();
});

test("TC010 - Validate confirmation popup", async ({ page }) => {
    const practice = new PracticePage(page);

    await practice.openWebsite();

    page.on("dialog", async (popup) => {
        expect(popup.message()).toBe(
            "Hello , Are you sure you want to confirm?"
        );
        await popup.accept();
    });

    await practice.triggerConfirmation();
});
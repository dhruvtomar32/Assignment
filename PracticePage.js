import { CorePage } from "./CorePage";
import { expect } from "@playwright/test";

export class PracticePage extends CorePage {

    constructor(browserPage) {
        super(browserPage);

        this.pageHeading = browserPage.getByText("Practice Page");
        this.firstRadioBtn = browserPage.locator("input[value='radio1']");
        this.secondRadioBtn = browserPage.locator("input[value='radio2']");
        this.autoCompleteField = browserPage.locator("#autocomplete");
        this.courseDropdown = browserPage.locator("#dropdown-class-example");
        this.optionCheckbox = browserPage.locator("#checkBoxOption1");
        this.nameField = browserPage.locator("#name");
        this.alertTrigger = browserPage.locator("#alertbtn");
        this.confirmTrigger = browserPage.locator("#confirmbtn");
    }

    async validateHeading() {
        await expect(this.pageHeading).toBeVisible();
    }

    async chooseFirstRadio() {
        await this.press(this.firstRadioBtn);
    }

    async chooseSecondRadio() {
        await this.press(this.secondRadioBtn);
    }

    async enterSuggestion(value) {
        await this.typeText(this.autoCompleteField, value);
    }

    async chooseDropdownItem(value) {
        await this.courseDropdown.selectOption(value);
    }

    async markCheckbox() {
        await this.press(this.optionCheckbox);
    }

    async inputName(value) {
        await this.typeText(this.nameField, value);
    }

    async triggerAlert() {
        await this.press(this.alertTrigger);
    }

    async triggerConfirmation() {
        await this.press(this.confirmTrigger);
    }
}
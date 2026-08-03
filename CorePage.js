export class CorePage {
    constructor(browserPage) {
        this.browserPage = browserPage;
    }

    async openWebsite(url = "https://rahulshettyacademy.com/AutomationPractice/") {
        await this.browserPage.goto(url, { waitUntil: "domcontentloaded" });
    }

    async press(element) {
        await element.click();
    }

    async typeText(element, value) {
        await element.fill(value);
    }

    async fetchInputValue(element) {
        return await element.inputValue();
    }
}
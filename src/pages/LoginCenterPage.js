const { expect } = require('@playwright/test');

class MenuPage {
    constructor(page) {
        this.page = page;
        this.menuItem = this.page.locator('li[role="menuitem"][data-menu-id="rc-menu-uuid-13443-3-13"]');
        this.menuIcon = this.menuItem.locator('span[role="img"][aria-label="cloud-sync"]');
        this.menuTitle = this.menuItem.locator('.ant-menu-title-content');
    }
    async navigate() {
        await this.page.goto('https://central.zetta-system.com/acoount/login');
      }
    
      async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
      }
    async clickMenuItem() {
        await this.menuItem.click();
    }

    async isMenuItemVisible() {
        return await this.menuItem.isVisible();
    }

    async getMenuTitleText() {
        return await this.menuTitle.textContent();
    }

    async isMenuIconVisible() {
        return await this.menuIcon.isVisible();
    }
}


module.exports = MenuPage;
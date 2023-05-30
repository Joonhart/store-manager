export default class Manager {
    constructor(menuClient) {
        this.menuClient = menuClient;
    }

    async getMenu() {
        return this.menuClient.getMenu();
    }

    async addMenu(menu) {
        return this.menuClient.addMenu();
    }
}
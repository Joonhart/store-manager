export default class Manager {
    constructor(revenueClient, menuClient) {
        this.revenueClient = revenueClient;
        this.menuClient = menuClient;
    }


    async getDateRevenue(date) {
        return this.revenueClient.getDateRevenue(date);
    }

    async addRevenues(revenue) {
        return this.revenueClient.addRevenues();
    }

    async getMenu() {
        return this.menuClient.getMenu();
    }

    async addMenu(menu) {
        return this.menuClient.addMenu();
    }
    
}
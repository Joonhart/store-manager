import axios from "axios";

export default class MenuClient {
    async getMenu() {
        console.log("getMenu!");
        return axios.get("/data/menu.json");
    }

    async addMenu(menu) {
        return axios.get("/data/menu.json");
    }
}
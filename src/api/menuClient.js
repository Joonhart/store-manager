import axios from "axios";

export default class menuClient {
    async getMenu() {
        return axios.get("/data/menu.json");
    }
}

export function getMenu() {
    return axios.get("/data/menu.json");
}
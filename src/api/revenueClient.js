import axios from "axios";

export default class RevenueClient {
  async getDateRevenue(date) {
    console.log(date);
    return (await axios.get("/data/revenue.json")).data.filter(d => d.date === date);
  }

  async addRevenues(revenue) {
    return axios.get("/data/menu.json");
  }
}

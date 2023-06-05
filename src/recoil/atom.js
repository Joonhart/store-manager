import { atom } from "recoil";
import axios from "axios";


export const recoilMenuState = atom({
    key: 'recoilMenuState',
    default: axios.get("/data/menu.json")
})

export const recoilRevenuState = atom({
    key: 'recoilRevenuState',
    default: axios.get("/data/revenue.json")
})
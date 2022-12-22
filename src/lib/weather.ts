import apiRequest from "./request";
import { API_KEY } from "../lib/key";
import type { Current, Forecast, Location } from "../types/weather";

export function getCurrent(lat: number, lon: number) {
    return apiRequest(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br`, "GET") as Promise<Current>;
}

export function getForecast(lat: number, lon: number) {
    return apiRequest(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br&cnt=16`, "GET") as Promise<Forecast>;
}

export function getLocation(searchTerm: string) {
    return apiRequest(`http://api.openweathermap.org/geo/1.0/direct?q=${searchTerm}&appid=${API_KEY}&lang=pt_br&limit=5`, "GET") as Promise<Location[]>;
}

export function getIcon(iconCode: string) {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}

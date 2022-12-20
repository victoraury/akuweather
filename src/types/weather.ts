export interface LatLng {
    lat: number
    lng: number
}

export interface Current {
    coord: Coord
    weather: Weather[]
    base: string
    main: Main
    visibility: number
    wind: Wind
    clouds: Clouds
    dt: number
    sys: Sys
    timezone: number
    id: number
    name: string
    cod: number
}

interface Coord {
    lon: number
    lat: number
}

interface Weather {
    id: number
    main: string
    description: string
    icon: string
}

interface Main {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
}

interface Wind {
    speed: number
    deg: number
    gust: number
}

interface Clouds {
    all: number
}

interface Sys {
    type: number
    id: number
    country: string
    sunrise: number
    sunset: number
}

export interface Forecast {
    cod: string
    message: number
    cnt: number
    list: List[]
    city: City
}

interface List {
    dt: number
    main: Main2
    weather: Weather2[]
    clouds: Clouds2
    wind: Wind2
    visibility: number
    pop: number
    rain?: Rain
    sys: Sys2
    dt_txt: string
}

interface Main2 {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    sea_level: number
    grnd_level: number
    humidity: number
    temp_kf: number
}

interface Weather2 {
    id: number
    main: string
    description: string
    icon: string
}

interface Clouds2 {
    all: number
}

interface Wind2 {
    speed: number
    deg: number
    gust: number
}

interface Rain {
    "3h": number
}

interface Sys2 {
    pod: string
}

interface City {
    id: number
    name: string
    coord: Coord2
    country: string
    population: number
    timezone: number
    sunrise: number
    sunset: number
}

interface Coord2 {
    lat: number
    lon: number
}

export interface Location {
    name: string
    local_names?: LocalNames
    lat: number
    lon: number
    country: string
    state: string
}

interface LocalNames {
    es?: string
    el?: string
    en?: string
    lt?: string
    ru?: string
    zh?: string
    pt?: string
}

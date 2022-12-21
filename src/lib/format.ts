export function toCelsius(deg: number) {
    return (deg - 273.15).toFixed(0);
}

export function twoPlaces(n: number) {
    return (n < 10) ? `0${n}` : `${n}`;
}

export function capitalize(str: string) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

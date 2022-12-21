import { writable } from 'svelte-local-storage-store';
import type { Writable } from 'svelte/store';
import type { LatLng } from '../types/weather';

export const recent: Writable<LatLng[]> = writable('recent-searches', [
    { lat: 51.5072, lng: -0.1275 },
    { lat: 52.2322, lng: 21.0083 },
    { lat: -32, lng: -52 }
]);
import { writable } from 'svelte-local-storage-store';
import type { Writable } from 'svelte/store';
import type { LatLng } from '../types/weather';
import { get } from 'svelte/store';

export const recent: Writable<LatLng[]> = writable('recent-searches', [
    { lat: 51.5072, lng: -0.1275 },
    { lat: 52.2322, lng: 21.0083 },
    { lat: -32, lng: -52 }
]);

export function addRecent(location: LatLng) {
    if (location === null) return;
    
    let rec = get(recent);
    for (let i = 0; i < rec.length; i++) {
        const loc = rec[i];
        if( loc.lat === location.lat && loc.lng === location.lng) {
            rec.splice(i, 1);
            break;
        }
    }

    recent.set([location, ...rec].slice(0, 3));
}
import { writable } from 'svelte-local-storage-store';
import type { Writable } from 'svelte/store';
import type { LatLng } from '../types/weather';
import { get } from 'svelte/store';

export const recent: Writable<LatLng[]> = writable('recent-searches', [
    { lat: -30.54, lng: -52.522 },
    { lat: -32.0334, lng: -52.0991 },
    { lat: -31.7699, lng: -52.341 },
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
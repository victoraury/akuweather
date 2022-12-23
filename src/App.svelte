<script lang="ts">
    import type { LatLng } from './types/weather';
    import Header from "./components/Header.svelte";
    import Searchbar from "./components/Searchbar.svelte";
    import RecentLocations from "./components/RecentLocations.svelte";
    import LocationWeather from "./components/LocationWeather.svelte";
    import LocationForecast from "./components/LocationForecast.svelte";

    let location: LatLng | null = null;
</script>

<Header/>
<main>
    <div class="upper">
        <Searchbar bind:location/>
        <RecentLocations bind:location/>
    </div>
    <div class="lower">
        <LocationWeather {location}/>
        <LocationForecast {location}/>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 2rem 0;
    }
    div {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    div.upper {
        align-items: center;
        min-height: 2rem;
    }
</style>

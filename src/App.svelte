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
        <RecentLocations/>
    </div>
    <div class="lower">
        <LocationWeather/>
        <LocationForecast {location}/>
    </div>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 2rem;
    }
    div {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    div.upper {
        min-height: 2rem;
        /* flex: 0.25; */
    }

    div.lower {
        flex: 0.75;
    }
</style>

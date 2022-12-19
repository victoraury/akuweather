<script lang="ts">
    import { onMount } from "svelte";
    import Header from "./components/Header.svelte";
    import Searchbar from "./components/Searchbar.svelte";
    import type { Current, Forecast, Location } from './types/weather';
    import { getCurrent, getForecast, getIcon, getLocation } from "./lib/weather";

    let current: Promise<Current> | null = null;
    let forecast: Promise<Forecast[]> | null = null;
    let location: Promise<Location> | null = null;

    onMount( () => {
        // getCurrent(-32.04, -52.117).then( v => console.log(JSON.stringify(v)));;
        // getForecast(-32.04, -52.117).then( v => console.log(JSON.stringify(v)));;
        // getLocation("rio grande").then( v => console.log(JSON.stringify(v)));
    });
</script>

<Header/>
<Searchbar/>
<main>
    {#if current !== null}
        {#await current}
            <p>Carregando...</p>
        {:then data} 
            <img class="weather-icon" src={getIcon(data.weather[0].icon)} alt={data.weather[0].description}/>
        {/await}
    {/if}
</main>

<style>
    img.weather-icon {
        height: 30px;
        width: 30px;
    }
</style>

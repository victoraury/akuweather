<script lang="ts">
    import Fa from "svelte-fa";
    import ForecastItem from "./ForecastItem.svelte";
    import { getForecast } from "../lib/weather";
    import { faSpinner } from "@fortawesome/free-solid-svg-icons";
    import type { LatLng } from "../types/weather";
    import { slide } from 'svelte/transition'
    import { addRecent } from "../stores/weather";
    
    export let location: LatLng | null;
    $: addRecent(location);

</script>

<section>
    {#if location !== null}
        {#await getForecast(location.lat, location.lng)}
            <Fa icon={faSpinner} spin={true} size="2x"/>
        {:then forecast} 
            <div class="forecasts" transition:slide >
                {#each forecast.list as info}
                    <ForecastItem {info}/>
                {/each}
            </div>
        {/await}
    {/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        padding: 0rem 1rem;
        width: clamp(16rem, 100%, 32rem);
    }

    div.forecasts {
        display: flex;
        flex-direction: column;
        gap: .6rem;
        height: 100%;
        width: 100%;
    }
</style>
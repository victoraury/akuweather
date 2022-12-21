<script lang="ts">
    import { onMount } from "svelte";
    import Fa from "svelte-fa";
    import { faSpinner } from "@fortawesome/free-solid-svg-icons";
    import { getCurrent, getIcon } from "../lib/weather";
    import { toCelsius } from "../lib/format";
    import { recent } from "../stores/weather";
    import type { LatLng } from "../types/weather";

    export let location: LatLng | null;

</script>

<section>
    {#each $recent as loc}
        <div class="card" on:click={ () => {location = loc} } on:keypress={ () => {} }>
            {#await getCurrent(loc.lat, loc.lng)}
                <Fa icon={faSpinner} spin={true} size={"2x"}/>
            {:then curr}
                <span class="name">{curr.name}</span>
                <span class="country">{curr.sys.country}</span>
                <img class="icon" src={getIcon(curr.weather[0].icon)} alt="">
                <div class="temp">
                    <span class="temp-now">
                        {toCelsius(curr.main.temp)} 
                        <span class="degree-now">ºC</span>
                    </span>
                    <span class="temp-feel">
                        {toCelsius(curr.main.temp)} 
                        <span class="degree-feel">ºC</span>
                    </span>
                </div>
            {/await}
        </div>
    {/each}

</section>

<style>
    section {
        display: flex;
        flex-direction:row;
        flex-wrap: wrap;
        justify-content: center;
        padding: 2rem;
        gap: 2rem;
        height: 100%;
    }

    div.card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        background: rgba(27, 26, 34, 0.5);
        padding: 0.7rem 1rem;
        backdrop-filter: blur(10px);
        min-width: 9rem;
        max-width: 10rem;
        cursor: pointer;
    }
    div.card:hover {
        filter: brightness(1.5);
    }

    .name {
        font-weight: 600;
    }

    .country {
        align-self: flex-start;
        margin-top: -0.4rem;
        font-size: 0.75rem;
    }
    
    .temp {
        display: flex;
    }

    .temp-now {
        display:flex;
        flex-direction: row;
        font-size: 1.2rem;
        font-weight: 500;
    }

    .degree-now {
        margin-top: -0.2rem;
        margin-left: 0.05rem;
        font-size: 0.8rem;
    }

    .temp-feel {
        color: rgb(172, 169, 169);
        display:flex;
        flex-direction: row;
        margin-left: 0.5rem;
        font-size: 0.9rem;
        font-weight: 600;
    }
    
    .degree-feel {
        margin-top: -0.2rem;
        margin-left: 0.05rem;
        font-size: 0.7rem;
    }
    
    .icon {
        width: 3.5rem;
        height: 3.5rem;
        aspect-ratio: 1 / 1;
    }
</style>
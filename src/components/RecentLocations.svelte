<script lang="ts">
    import { onMount } from "svelte";
    import Fa from "svelte-fa";
    import { faSpinner } from "@fortawesome/free-solid-svg-icons";
    import { getCurrent, toCelsius } from "../lib/weather";
    import type { LatLng } from "../types/weather";

    let locations: LatLng[] = [{
        lat: -32,
        lng: -52
    },
    {
        lat: -32,
        lng: -52
    },{
        lat: -32,
        lng: -52
    }
    ];
</script>

<section>
    {#each locations as loc}
        <div class="card">
            {#await getCurrent(loc.lat, loc.lng)}
                <Fa icon={faSpinner} spin={true} size={"2x"}/>
            {:then curr}
                <p class="temp">{toCelsius(curr.main.temp)} <span class="feels">{toCelsius(curr.main.feels_like)}</span></p>
                <p class="name">{curr.name}</p>
                <!-- <p class="desc">{curr.main.feels_like}</p> -->
            {/await}
        </div>
    {/each}

</section>

<style>
    section {
        display: flex;
        padding: 2rem;
        gap: 2rem;
        height: 100%;
    }

    div.card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background: rgba(0, 0, 0, 0.25);
        padding: 1.2rem;
        backdrop-filter: blur(20px);
    }
</style>
<script lang="ts">
    import { getIcon } from "../lib/weather";
    import { getCurrent } from "../lib/weather";
    import type { LatLng } from "../types/weather";
    import dayjs from 'dayjs';
    import utc from 'dayjs/plugin/utc';
    import timezone from 'dayjs/plugin/timezone';

    dayjs.extend(utc);
    dayjs.extend(timezone);
    
    import Fa from "svelte-fa";

    import { faCloud, faDroplet, faMoon, faSpinner, faSun, faWind } from "@fortawesome/free-solid-svg-icons";
    import { toCelsius } from "../lib/format";
    
    export let location: LatLng;

</script>

{#if location != null}
<section>
        {#await getCurrent(location.lat, location.lng)}
            <Fa icon={faSpinner} spin={true} size={"2x"}/>
        {:then curr}
            <div class="title">
                {curr.name}
            </div>
            <div class="current-temp">
                <img class="icon" src={getIcon(curr.weather[0].icon)} alt="">
                <div class="temp-now">
                    {toCelsius(curr.main.temp)} <div class="degree-now">°C</div>
                </div>
                <span class="temp-feel">
                    {toCelsius(curr.main.feels_like)} 
                    <span class="degree-feel">ºC</span>
                </span>
            </div>
            <div class="info">
                <div>
                    <Fa icon={faWind}/> {curr.wind.speed} m/s
                </div>
                <div>
                    <Fa icon={faDroplet} rotate={-15}/> {curr.main.humidity}%
                </div>
                <div>
                    <Fa icon={faCloud}/> {curr.clouds.all}%
                </div>
                <div class="sunrise">
                    <Fa icon={faSun}/> {dayjs(curr.sys.sunrise * 1000).utcOffset(curr.timezone/60).format('HH:mm')} 
                    <span class="tz">{curr.timezone >= 0 ? '+' : ''}{curr.timezone/3600}</span>
                </div>
                <div class="sunset">
                    <Fa icon={faMoon}/> {dayjs(curr.sys.sunset * 1000).utcOffset(curr.timezone/60).format('HH:mm')} 
                    <span class="tz">{curr.timezone >= 0 ? '+' : ''}{curr.timezone/3600}</span>
                </div>
            </div>
        {/await}
</section>
{/if}

<style>
    section {
        display: flex;
        flex-direction: column;
        flex: 0.5;
        min-width: clamp(300px, 500px, 90%);
        background-color: rgba(28, 27, 34, 0.95);
        backdrop-filter: blur(5px);
        border: 1px solid var(--aku-red);
        border-radius: 4px;
        height: 100%;
        padding: 2rem 0rem;
        margin-bottom: 1rem;
    }
    
    .title {
        font-size: 1.5rem;
    }

    .current-temp {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .temp-now {
        display:flex;
        flex-direction: row;
        font-size: 2.4rem;
        font-weight: 500;
    }

    .degree-now {
        margin-top: -0.2rem;
        margin-left: 0.05rem;
        font-size: 0.8rem;
    }

    .icon {
        width: 6rem;
        height: 6rem;
        aspect-ratio: 1 / 1;
    }

    .temp-feel {
        color: rgb(172, 169, 169);
        display:flex;
        flex-direction: row;
        margin-left: 0.5rem;
        font-size: 1.3rem;
        font-weight: 600;
    }
    
    .degree-feel {
        margin-top: -0.2rem;
        margin-left: 0.05rem;
        font-size: 0.8rem;
    }

    .info {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 1rem;
        gap: 1.2rem;
        justify-content: center;
        flex-direction: row;
    }

    .sunrise, .sunset {
        position: relative;
        padding: 0rem 0.25rem;
    }
    
    .tz {
        position:absolute;
        font-size:0.7rem;
        right: -0.25rem;
        top: -0.75rem;
        font-weight:700;
    }
</style>
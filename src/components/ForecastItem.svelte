<script lang="ts">
    import type { ForecastInfo } from "../types/weather";
    import { getIcon } from "../lib/weather";
    import { twoPlaces, capitalize, toCelsius } from "../lib/format";
    import { faDroplet } from '@fortawesome/free-solid-svg-icons'
    import Fa from "svelte-fa";

    export let info: ForecastInfo;

    const when = new Date(info.dt * 1000);

    const hour = when.getHours();
    const day = when.getDay();
    const month = when.getMonth();

</script>

<div class="forecast">
    <span class="when">{twoPlaces(hour)}h</span><span class="date">{twoPlaces(day)}/{twoPlaces(month)}</span>
    <img src={getIcon(info.weather[0].icon)} alt={info.weather[0].description}/>
    <span class="temp">{ toCelsius(info.main.temp) }°</span><span class="feels">{toCelsius(info.main.feels_like)}°</span>
    <span class="desc">{ capitalize(info.weather[0].description) }</span>
    <span class="prob">{(info.pop * 100).toFixed(0)}%</span><Fa icon={faDroplet}/>
</div>

<style>
    div.forecast {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        gap: .4rem;
        padding: .4rem 1rem;
        border-radius: 5px;
        background-color: rgba(28, 27, 34, 0.95);
        backdrop-filter: blur(5px);
        border: 1px solid var(--aku-red);
    }
    div.forecast:hover {
        filter: brightness(1.5);
    }
    span {
        display: inline-flex;
        vertical-align: middle;
    }
    img {
        height: 4rem;
        aspect-ratio: 1 / 1;
    }
    span.when {
        font-size: 1.2rem;
    }
    span.date {
        font-size: 0.8rem;
    }
    span.temp {
        font-size: 1.6rem;
    }
    span.feels {
        font-size: .8rem;
    }
    span.desc {
        margin-left: auto;
        margin-right: auto;
    }
    span.prob {
        margin-left: auto;
        font-size: .8rem;
    }
</style>
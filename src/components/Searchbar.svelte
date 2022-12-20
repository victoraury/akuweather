<script lang="ts">
    import Fa from 'svelte-fa';
    import { faSearch, faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
    import { getLocation } from '../lib/weather';
    import type { Location, LatLng } from '../types/weather';

    export let location: LatLng | null = null;

    let searchTerm: string = "";
    let searchInput;

    let showSugg = false;

    let search: Promise<Location[]> | null = null;
    let searchTimeout: NodeJS.Timeout | null = null;

    function updateSearch(term: string) {
        if( searchTimeout != null ) {
            clearTimeout(searchTimeout);
            searchTimeout = null;
        }
        if( term !== "" ) {
            searchTimeout = setTimeout( () => {
                search = getLocation(term);
            }, 500);
        }
    }

    $: updateSearch(searchTerm);

</script>


<section>
    <div class="searchbar" class:searching={showSugg} on:click={searchInput.focus()} on:keypress={ () => {} } >
        <Fa icon={faSearch} color={"var(--aku-red)"}/>
        <input type="text" bind:this={searchInput} bind:value={searchTerm} placeholder="Busque um local" on:focus={ () => {showSugg = true;} } >
    </div>
    {#if showSugg && (search !== null)}
        <div class="sugger">
            {#await search}
                <div class="spin">
                    <Fa icon={faCircleNotch} spin={true}/>
                    <p>Carregando...</p>
                </div>
            {:then results} 
                <div class="suggs" on:click={ () => { showSugg = false; } } on:keypress={ () => {}  } >
                    {#if results.length !== 0}
                        {#each results as r}
                            <div class="sugg" on:click={ () => {location = {lat: r.lat, lng: r.lon}; searchTerm = ""; }} on:keypress={ () => {} } >
                                {r.name}{ r.state === undefined ? " - " : `, ${r.state}, ` }{r.country}
                            </div>
                        {/each}
                    {:else}
                        <div class="spin">Nenhum resultado encontrado</div>
                    {/if}

                </div>
            {/await}
        </div>
    {/if}
</section>


<style>
    section {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-items: center;
        padding: 2rem;
    }

    div.searchbar {
        display: flex;
        align-items: center;
        background: var(--aku-gray);
        width: clamp(16rem, 90vw, 24rem);
        padding: .8rem;
        gap: .8rem;
        border-top: 1px solid var(--aku-red);
        border-bottom: 1px solid var(--aku-red);
    }

    div.spin {
        display: flex;
        position: absolute;
        padding: .8rem .4rem;
        gap: .4rem;
    }

    div.sugger {
        display: flex;
        width: clamp(16rem, 90vw, 24rem);
        justify-content: center;
    }
    
    div.suggs {
        display: flex;
        flex-direction: column;
        width: clamp(16rem, 90vw, 24rem);
        position: absolute;
        border-bottom: 1px solid var(--aku-red);
        background: var(--aku-gray);
    }

    div.sugg {
        display: flex;
        padding: .4rem 2rem;
        align-items: center;
        width: 100%;
        text-align: center;
        box-sizing: border-box;
    }

    div.sugg:hover {
        color: var(--aku-red);
        filter: brightness(1.8);
        background-color: var(--aku-gray);
    }

    input {
        display: flex;
        flex-grow: 1;
        border-radius: .3rem;
        padding: 0;
        height: 100%;
        background: var(--aku-gray);
        color: #d4d4d4;
        text-align: left;
    }
    input:focus {
        outline: 0;
    }


</style>
<script lang="ts">
    import Fa from 'svelte-fa';
    import { faSearch, faSpinner, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
    import { getLocation } from '../lib/weather';
    import type { Location } from '../types/weather';

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
                            <div class="sugg">
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
        padding: 2rem;
    }

    div.searchbar {
        display: flex;
        align-items: center;
        background: var(--aku-gray);
        width: 22rem;
        height: 2rem;
        padding: .8rem;
        /* border-radius: .4rem; */
        border-radius: .4rem .4rem .4rem .4rem;
        gap: .8rem;
        border: 1px solid #d4d4d4;
    }

    div.spin {
        display: flex;
        padding: .8rem .4rem;
        gap: .4rem;
    }

    div.searching {
        border-radius: .4rem .4rem 0 0;
    }

    div.sugger {
        display: flex;
    }
    
    div.suggs {
        display: flex;
        flex-direction: column;
        width: 23.6rem;
        flex-grow: 1;
        position: absolute;
        border-radius: 0 0 .4rem .4rem;
        border-left: 1px solid #d4d4d4;
        border-right: 1px solid #d4d4d4;
        border-bottom: 1px solid #d4d4d4;
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
        filter: brightness(1.4);
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
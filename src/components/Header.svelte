<script lang="ts">
    import logo from '/logo.png';
</script>

<header>
    <div class="content">
        <div class="logo">
            <img src={logo} alt="Logo AkuWeather"/>
            <p class="red">
                AKU
            </p>
            <p class="green">
                WEATHER
            </p>
        </div>
    </div>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        gap: 1.4rem;
        width: 100%;
        background: #030303;
        filter: drop-shadow(0 0 .4rem var(--aku-red));
    }

    div.content {
        display: flex;
        width: min(100%, 1200px);
        height: 100%;
    }

    div.logo {
        justify-self: flex-start;
        display: flex;
        align-self: center;
        justify-content: center;
        align-items: center;
        height: 100%;
        font-family: "SamuraiBob";
        font-size: 4rem;
        font-weight: bold;
    }
    p.red {
        color: var(--aku-red);
        font-size: 4.6rem;
    }
    
    p.green {
        color: var(--aku-green);
    }

    img {
        height: 10vh;
        padding: .4rem 2rem;
        will-change: filter;
    }
    img:hover {
        filter: drop-shadow(0 0 2rem var(--aku-red));
    }
</style>

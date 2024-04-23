<script lang="ts">
    export let selection: string;
    export let index: number = -1;
    const choices = {
        0: "about",
        1: "projects",
        2: "code",
    };
</script>

<div class="navbar-container">
    <div class="navbar">
        {#each Object.entries(choices) as [i, choice]}
            <button
                on:click={() => { selection = choice; index = parseInt(i); }}
                class:active={selection === choice}
                class="nostylebutton"
            >
            {choice}
            </button>
            {#if parseInt(i) < Object.keys(choices).length - 1}
                <div class="divider"></div>
            {/if} 
        {/each}
    </div>
</div>

<style>
    .navbar-container {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 4rem;

    }
    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;

        border-bottom: 0.5px solid color-mix(in srgb, var(--main-color) 50%, transparent);
    }
    .divider {
        border: 0.5px solid color-mix(in srgb, var(--main-color) 50%, transparent);
        height: 1.8rem;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
    }

    .nostylebutton {
        border: none;
        background-color: transparent;
        color: color-mix(in srgb, var(--main-color) 50%, transparent);
        font-size: 2rem;
        font-weight: bold;
        padding: 0.5rem 1rem;
        cursor: pointer;
        transition: 0.2s;
    }
    .nostylebutton:hover {
        color: color-mix(in srgb, var(--main-color) 80%, transparent);
    }
    .nostylebutton.active {
        color: var(--main-color);
    }
</style>
<script lang="ts">
    export let shell_title: null | string;

    if (!shell_title) {
        shell_title = "/home/pillow";
    }
</script>

<div class="shell-container">
    <div class="shell-navbar">
        <div class="shell-icons"></div>
        <div class="shell-title">
            <h3>{shell_title}</h3>
        </div>
        <div class="shell-icons">
            <img src="/icons/minimize.svg" alt="mini" />
            <img src="/icons/maximize.svg" alt="max" />
            <img src="/icons/x.svg" alt="x" />
        </div>
    </div>
    <slot />
</div>

<style>
    .shell-container {
        --shell-outlines: color-mix(in srgb, var(--main-color) 70%, transparent);
        --shell-lighter-bg: color-mix(in srgb, var(--shell-outlines) 13%, black);
        --shell-darker-bg: color-mix(in srgb, var(--main-color) 12.5%, black);
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-left: 5%;
        min-width: 90%;
        min-height: 20rem;

        background-color: var(--shell-darker-bg);
        border-radius: 1rem;
        border: 0.2rem solid var(--shell-outlines);
        font-family: "Martian Mono", monospace;
    }
    .shell-navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-bottom: 0.2rem solid var(--shell-outlines);
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        width: 100%;
        background-color: var(--shell-lighter-bg);
    }
    .shell-icons {
        display: flex;
        align-items: center;
        justify-content: space-between;
        justify-self: flex-end;

        padding-right: 1rem;
        width: 7.5rem;
    }
    .shell-icons>img {
        height: 2rem;
        aspect-ratio: 1/1;
        -webkit-filter: invert(.7);
        filter: invert(.7);
    }
</style>
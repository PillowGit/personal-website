<script lang="ts">
    import { onMount } from "svelte";

    export let selection: string;
    export let index: number = -1;

    interface NavElements {
        left: {
            [key: string]: {
                name: string;
                img_url: string;
                alt: string;
                href: null | string;
                target: null | string;
                func: null | (() => void);
            }
        };
        main: {
            [key: string]: string;
        };
        right: {
            [key: string]: {
                name: string;
                img_url: string;
                alt: string;
                href: string;
                target: string;
                func: null | (() => void);
            }
        }
    }

    // Storage for all navbar elements
    // Site used for icons: https://www.svgrepo.com/collection/zest-interface-icons/1
    const nav_elements: NavElements = {
        left: {
            0: {
                name: "Home",
                img_url: "/icons/home.svg",
                alt: "Home",
                href: "/",
                target: "_self",
                func: null,
            },            
            1: {
                name: "Duck",
                img_url: "/icons/duck.svg",
                alt: "Duck",
                href: null,
                target: null,
                func: () => { alert("\nquack"); },
            },
            2: {
                name: "Cat",
                img_url: "/icons/cat.svg",
                alt: "Cat",
                href: null,
                target: null,
                func: () => { alert("\nmeow"); },
            },
            3: {
                name: "100",
                img_url: "/icons/one-hundred.svg",
                alt: "100",
                href: null,
                target: null,
                func: () => { alert("\n💯"); },
            }
        }, 
        main: {
            0: "about",
            1: "projects",
            2: "nothing",
        },
        right: {
            0: {
                name: "Code",
                img_url: "/icons/code.svg",
                alt: "Code Repo",
                href: "https://github.com/PillowGit/personal-website",
                target: "_blank",
                func: null,
            },
        },
    };

    onMount(() => {
        // Get Left and Right Navbar widths
        const left_nav = document.querySelector(".left-nav");
        const right_nav = document.querySelector(".right-nav");
        const width = Math.max(left_nav?.clientWidth ?? 0, right_nav?.clientWidth ?? 0);
        // Set their widths to the same value
        left_nav?.setAttribute("style", `width: ${width}px`);
        right_nav?.setAttribute("style", `width: ${width}px`);
    })
</script>

<div class="spacer"></div>
<div class="navbar-container">
    <!-- Left Nav -->
    <div class="left-nav">
        {#each Object.entries(nav_elements.left) as [i, icon]}
            {#if icon.func !== null}
                <div
                    on:click={icon.func}
                    on:keydown={icon.func}
                    role="button"
                    aria-pressed="false"
                    tabindex="0"
                >
                    <img class="navicon" src={icon.img_url} alt={icon.alt} />
                </div>
            {:else}
                <a href={icon.href} target={icon.target}>
                    <img class="navicon" src={icon.img_url} alt={icon.alt} />
                </a>
            {/if}
            {#if parseInt(i) < Object.keys(nav_elements.left).length - 1}
                <div class="divider"></div>
            {/if}
        {/each}
    </div>
    <!-- Main Nav -->
    <div class="navbar">
        {#each Object.entries(nav_elements.main) as [i, choice]}
            <button
                on:click={() => { selection = choice; index = parseInt(i); }}
                class:active={selection === choice}
                class="nostylebutton"
            >
            {choice}
            </button>
            {#if parseInt(i) < Object.keys(nav_elements.main).length - 1}
                <div class="divider"></div>
            {/if} 
        {/each}
    </div>
    <!-- Right Nav -->
    <div class="right-nav">
        {#each Object.entries(nav_elements.right) as [i, icon]}
            {#if icon.func !== null}
                <div
                    on:click={icon.func}
                    on:keydown={icon.func}
                    role="button"
                    aria-pressed="false"
                    tabindex="0"
                >
                    <img class="navicon" src={icon.img_url} alt={icon.alt} />
                </div>
            {:else}
                <a href={icon.href} target={icon.target}>
                    <img class="navicon" src={icon.img_url} alt={icon.alt} />
                </a>
            {/if}
            {#if parseInt(i) < Object.keys(nav_elements.right).length - 1}
                <div class="divider"></div>
            {/if}
        {/each}
    </div>
</div>

<style>
    .spacer {
        margin-bottom: 4rem;
    }
    /* Navar Container */
    .navbar-container {
        display: flex;
        align-items: center;

        margin-bottom: 4rem;
        justify-content: center;

        width: 100%;
        min-height: 5rem;
        margin-top: -0.5rem;

        background-color: var(--complement);
        position: fixed;
        top: 0.25rem;
        left: -1px;
        z-index: 5;
    }

    /* Main Center Navbar */
    .navbar {
        display: flex;
        flex-direction: row;
        align-items: center;

        border-bottom: 0.5px solid color-mix(in srgb, var(--main-color) 50%, transparent);
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
        transform: scale(1.1);
    }
    .nostylebutton.active {
        color: var(--main-color);
        transform: scale(1.05);
    }

    /* Side Navbar Displays */
    .left-nav {
        margin-left: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-right: auto;
    }
    .right-nav {
        margin-right: 0.5rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-left: auto;
    }

    /* General Nav Element Styling */
    .navicon {
        height: 3rem;
        aspect-ratio: 1/1;

        -webkit-filter: invert(0.65);
        filter: invert(0.65);
        transition: 0.1s;
    }
    .navicon:hover {
        -webkit-filter: invert(0.9);
        filter: invert(0.9);
        transform: scale(1.1);
    }
    .divider {
        border: 0.5px solid color-mix(in srgb, var(--main-color) 50%, transparent);
        height: 1.8rem;
        margin-left: 0.4rem;
        margin-right: 0.4rem;
    }
</style>

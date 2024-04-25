<script lang="ts">
    // Import basic page components (navbar, page background)
    import PageBg from "$lib/components/pagebg.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    // Store the current choice in the navbar
    let navbar_choice: string = "";
    let navbar_index: number = -1;

    // Import shell container to display page content
    import Shell from "$lib/components/shell.svelte";

    // Import content to laod in the shells
    import AboutMe from "$lib/components/shelldisplays/aboutme.svelte";
    let type_about_me: boolean = false;
    $: type_about_me = type_about_me || (navbar_choice === "about");

    import ProjectDisplay from "$lib/components/projectgrid.svelte";
    import Projects from "$lib/components/shelldisplays/projects.svelte";
    let type_projects: boolean = false;
    let display_project_gui: boolean = false;
    $: type_projects = type_projects || (navbar_choice === "projects");


</script>

<div class="mobile-message">This site does not support mobile.</div>
<PageBg />
<Navbar bind:selection={navbar_choice} bind:index={navbar_index}/>
<div class="page">
    <h1 class="page-title" class:active={navbar_index === -1}>
        Pillow
    </h1>

    <div class="content-focus-container" class:active={navbar_index === 0}>
        <Shell shell_title="/home/pillow/about/">
            <AboutMe allow_typing={type_about_me}/>
        </Shell>
    </div>
    <div class="content-focus-container" class:active={navbar_index === 1}>
        {#if !display_project_gui}
            <Shell shell_title="/home/pillow/git-repos/projects/">
                <Projects allow_typing={type_projects} bind:project_open_complete={display_project_gui}/>
            </Shell>
        {:else}
            <ProjectDisplay />
        {/if}
    </div>
</div>

<style>
    .page {
        min-height: 70vh;
        width: 100%;
        margin-top: 6rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .page-title {
        text-align: center;
        font-size: 8rem;
        min-height: 3.25rem;
        min-width: 30rem;
        max-width: 80%;
        opacity: 0;
        transform: translateY(-3rem);
        visibility: hidden;
        transition: 0.4s;
    }
    .page-title.active {
        opacity: 1;
        visibility: visible;
        transform: translateY(1rem);
    }
    .content-focus-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        position: absolute;
        top: 16rem;
        width: 60%;

        opacity: 0;
        visibility: hidden;
        transition: 0.4s;
        transform: translateY(-2rem);
    }
    .content-focus-container.active {
        opacity: 1;
        visibility: visible;
        transform: none;
    }
    .mobile-message {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        width: 100%;
        height: 100%;
        background-color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--main-color);
        font-size: 2em;
        text-align: center;
        text-wrap: balance;
        opacity: 0;
        visibility: hidden;
    }
    @media (pointer:none), (pointer:coarse) {
        .mobile-message {
            opacity: 1;
            visibility: visible;
        }
    }
</style>
<script lang="ts">
    import PageBg from "$lib/components/pagebg.svelte";
    import Navbar from "$lib/components/navbar.svelte";
    import Shell from "$lib/components/shell.svelte";

    let navbar_choice: string = "";
    let navbar_index: number = -1;
</script>

<PageBg />
<Navbar bind:selection={navbar_choice} bind:index={navbar_index}/>
<div class="page">
    <h1 class="page-title">
        Pillow
    </h1>

    <div class="about-me-container">
        <h2 class="about-me-title">
            About Me:
        </h2>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
        <Shell shell_title="/home/pillow/about/"/>
    </div>

</div>

<style>
    .page {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .page-title {
        text-align: center;
        font-size: 4rem;

        min-height: 3.25rem;
        min-width: 16rem;
    }

    .about-me-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        width: 60%;
        height: 100%;
    }
    .about-me-title {
        font-size: 2rem;
        margin-left: 15%;
    }
</style>
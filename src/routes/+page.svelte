<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";

    let navbar_choice: string = "";
</script>

<Navbar bind:selection={navbar_choice}/>
<div class="page">
    <h1>
        Pillow
    </h1>
</div>

<style>
    .page {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1 {
        text-align: center;
        font-size: 2.75rem;

        height: 3.25rem;
        min-width: 10rem;
    }
</style>
<script lang="ts">
    import Navbar from "$lib/components/navbar.svelte";

    let navbar_choice: string = "";
    let navbar_index: number = -1;
</script>

<Navbar bind:selection={navbar_choice} bind:index={navbar_index}/>
<div class="page">
    <h1>
        Pillow
    </h1>
    <p>
        You picked:<br>{navbar_index+1}. {navbar_choice} 
    </p>
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
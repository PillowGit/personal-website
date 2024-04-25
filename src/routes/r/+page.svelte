<script lang="ts">
  import PageBg from "$lib/components/pagebg.svelte";
  import redirects from '$lib/resources/redirects.json';
  let links: [string, string][] = Object.entries(redirects);
</script>
  
<PageBg />
<div class="container">
  <a href="/">A link back home, incase you're lost</a>
  <h1>Here's a list of all redirects available from my site:</h1>
  {#each links as [redirect, url]}
  <div class="redirect">
    <a href={url} target="_blank">
      pillo.dev/r/{redirect}
    </a>
  </div>
  {/each}
</div>
  
<style>
  /* Style general page layout */
  .container {
    text-align: left;
  
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    
    height: 90%;
    width: 80%;
  }
  .redirect {
    font-size: 2.5rem;
    margin-top: 5rem;
  }
  .redirect a:link, .redirect a:visited {
    color: var(--main-color);
  }
  .redirect a:hover, .redirect a:active {
    color: color-mix(in srgb, var(--main-color) 50%, transparent);
  }
  h1 {
    font-size: 3.5rem;
  }
  .container>a:link, .container>a:visited {
    color: var(--main-color);
    font-size: 1rem;
  }
</style>
  
<script lang="ts">
  import redirects from '$lib/resources/redirects.json';
  let links: [string, string][] = Object.entries(redirects);
</script>
  
<div class="container">
  <h2>Hi</h2>
  <p>If you're seeing this, you either typed a url wrong or came from the home page</p>
  <p>Here's a list of all the redirects available:</p>
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
  h2, p {
    font-size: 2rem;
  }
</style>
  
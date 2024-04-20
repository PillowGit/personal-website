<script lang="ts">
  import redirects from '$lib/resources/redirects.json';
  let links: [string, string][] = Object.entries(redirects);
</script>
  
<div class="container">
  <h2>Hi</h2>
  <p>If you're seeing this, you either typed a url wrong or came from the home page</p>
  <p>Here's a list of all the redirects available:</p>
  {#each links as [redirect, url]}
    <a href={url} target="_blank">
      <p class="redirect">pillo.dev/r/{redirect}</p>
    </a>
  {/each}
</div>
  
<style>
  /* Style general page layout */
  .container {
    /* Format text */
    text-align: left;
  
    /* Center the container slightly */
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 5%;
    margin-bottom: 5%;
    
    /* Size the container */
    height: 90%;
    width: 80%;
  }
  .redirect {
    /* Format text */
    font-size: 3rem;
    margin-top: 5rem;
  }
  /* Size text */
  h2, p {
    font-size: 2rem;
  }
</style>
  
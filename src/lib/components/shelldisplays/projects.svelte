
<script lang="ts">
  import { onMount } from 'svelte';
  export let allow_typing: boolean = false;
  export let project_open_complete: boolean = false;

  let input_field: string = "▮"; // cat aboutme.txt
  let imitate_load: boolean = false;

  // Basic sleep function
  async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Function to type the input command
  async function typeInputCmd() {
    let input_text = "python3 project_display_gui.py";
    let i = 0;
    while (i < input_text.length) {
      input_field = input_text.slice(0, i+1) + "▮";
      i++;
      await sleep(Math.random() * 90 + 50);
    }
    await sleep(500);
    imitate_load = true;
    input_field = input_text;
    await sleep(2000);
  }
  // Function to completely remove the shell-input element
  function removeShell() {
    project_open_complete = true;
  }

  // On page mount || Controls typing effects
  onMount(async () => {
    await sleep(1500);
    while (!allow_typing) {
      await sleep(2000);
    }
    await typeInputCmd();
    removeShell();
  });
</script>

<div class="content-container-projects">
  <div class="shell-input-projects">
    <div class="input-title-projects">
      ~/git-repos/projects
    </div>
    <div class="input-line-projects">
      <div class="prompt-projects">
        ⟩
      </div>
      <div class="input-text-projects">
        {input_field}
      </div>
    </div>
    {#if imitate_load}
        <p>Loading...</p>
    {/if}
  </div>
  <div class="bottom-spacing-projects"></div>
</div>

<style>
  .shell-input-projects p {
    font-weight: 700;
    width: 95%;
    align-self: center;
  }
  .content-container-projects {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    min-height: 17rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .shell-input-projects {
    min-height: 5rem;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  .input-title-projects {
    font-size: 1.15rem;
    margin-left: 1rem;
    margin-top: 0.5rem;

    color: var(--color3);
  }
  .input-line-projects {
    font-size: 1.15rem;
    margin-left: 1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: flex-end;
    width: 97%;
  }
  .prompt-projects {
    width: 1rem;
    color: var(--color5);
    align-self: flex-start;
  }
  .input-text-projects {
    width: 100%;
    text-wrap: balance;
  }
  .bottom-spacing-projects {
    height: 1.5rem;
  }
</style>
<script lang="ts">
  import { onMount } from 'svelte';
  export let allow_typing: boolean = false;

  let input_field: string = "▮"; // cat aboutme.txt

  // Basic sleep function
  async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Function to type the input command
  async function typeInputCmd() {
    let input_text = "clear && cat aboutme.txt";
    let i = 0;
    while (i < input_text.length) {
      input_field = input_text.slice(0, i+1) + "▮";
      i++;
      await sleep(150);
    }
    await sleep(1000);
    input_field = input_text;
  }
  // Function to completely remove the shell-input element
  function removeShellInput() {
    let shell_input: HTMLElement | null = document.querySelector('.shell-input');
    if (shell_input) {
      shell_input.remove();
    }
  }

  onMount(async () => {
    await sleep(3000);
    while (!allow_typing) {
      await sleep(200);
    }
    await typeInputCmd();
    removeShellInput();
  });
</script>

<div class="content-container">
  <div class="shell-input">
    <div class="input-title">
      ~/about
    </div>
    <div class="input-line">
      <div class="prompt">
        ⟩
      </div>
      <div class="input-text">
        {input_field}
      </div>
    </div>
  </div>
</div>

<style>
  .content-container {
    display: flex;
    flex-direction: column;
    align-items: left;

    width: 100%;
    min-height: 17rem;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
  .shell-input {
    min-height: 5rem;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
  }
  .input-title {
    font-size: 1.15rem;
    margin-left: 1rem;
    margin-top: 0.5rem;

    color: var(--color3);
  }
  .input-line {
    font-size: 1.15rem;
    margin-left: 1rem;
    margin-top: 0.2rem;
    margin-bottom: 0.5rem;

    display: flex;
    align-items: flex-end;
    width: 97%;
  }
  .prompt {
    width: 1rem;
    color: var(--color5);
    align-self: flex-start;
  }
  .input-text {
    width: 100%;
    text-wrap: balance;
  }
</style>
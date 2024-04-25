<script lang="ts">
  import { onMount } from 'svelte';
	import type { InlineConfig } from 'vite';
  export let allow_typing: boolean = false;

  let input_field: string = "▮"; // cat aboutme.txt

  // Basic sleep function
  async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  // Function to type the input command
  async function typeInputCmd() {
    let input_text = "clear && cat aboutme.md";
    let i = 0;
    while (i < input_text.length) {
      input_field = input_text.slice(0, i+1) + "▮";
      i++;
      await sleep(90);
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

  // Function to type main text lines
  interface Line {
    type: string;
    icon: null | {
      path: string;
      alt: string;
    };
    colored: null | string;
    content: string;
  }
  const lines: Line[] = [
    {
      type: "title",
      icon: null,
      colored: null,
      content: "About Me!"
    },
    {
      type: "icon",
      icon: {
        path: "/icons/github.svg",
        alt: "github"
      },
      colored: null,
      content: "PillowGit",
    },
    {
      type: "icon",
      icon: {
        path: "/icons/discord.svg",
        alt: "discord"
      },
      colored: null,
      content: "pillo.",
    },
    {
      type: "icon",
      icon: {
        path: "/icons/mail.svg",
        alt: "gmail",
      },
      colored: null,
      content: "e.f.escartin@gmail.com",
    },
    {
      type: "colored",
      icon: null,
      colored: "Name:",
      content: "Esteban Escartin"
    },
    {
      type: "colored",
      icon: null,
      colored: "Nickname:",
      content: "Pillow"
    },
    {
      type: "colored",
      icon: null,
      colored: "Age/DOB:",
      content: "April 21, 2003  -  21 years old"
    },
    {
      type: "colored",
      icon: null,
      colored: "Skills:",
      content: "C++, C, Lua, TS, JS, HTML, CSS, Python, Rust, Go"
    },
    {
      type: "colored",
      icon: null,
      colored: "Titles:",
      content: "3rd Year CS Student @ CSUF, Google SWE Intern, ACM CSUF Algo Board Member, Fullyhacks Organizer"
    },
  ];
  let shown_lines: Line[] = [];
  async function displayLines() {
    for (let i = 0; i < lines.length; i++) {
      // Add entry to shown_lines
      shown_lines.push({
        type: lines[i].type,
        icon: lines[i].icon,
        colored: (lines[i].type === "colored") ? "" : null,
        content: "",
      });
      shown_lines = shown_lines;
      // If entry has type colored, simulate typing the colored section too
      if (lines[i].colored !== null && lines[i].type === "colored") {
        const colored_text: string = lines[i].colored || "";
        for (let j = 0; j < colored_text.length; j++) {
          shown_lines[i].colored += colored_text[j];
          shown_lines = shown_lines;
          await sleep(20);
        }
      }
      for (let j = 0; j < lines[i].content.length; j++) {
        shown_lines[i].content += lines[i].content[j];
        shown_lines = shown_lines;
        await sleep(20);
      }
      await sleep(300);
    }
  }

  // On page mount || Controls typing effects
  onMount(async () => {
    await sleep(1500);
    while (!allow_typing) {
      await sleep(200);
    }
    await typeInputCmd();
    removeShellInput();
    await sleep(50);
    await displayLines();
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
  {#each shown_lines as line}
    {#if line.type === "title"}
      <div class="output-title">
        {line.content}
      </div>
    {:else if line.type === "icon" && line.icon !== null}
      <div class="output-icon">
        <img src={line.icon.path} alt={line.icon.alt} />
        <div class="output-icon-text">
          {line.content}
        </div>
      </div>
    {:else if line.type === "colored" && line.colored !== null}
      <div class="output-colored">
        <div class="output-colored-text">{line.colored}</div>
        <div class="output-colored-normal">{line.content}</div>
      </div>
    {/if}
  {/each}
  <div class="bottom-spacing"></div>
</div>

<style>
  .output-colored {
    display: flex;
    align-items: center;
    align-self: center;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    width: 92.5%;
  }
  .output-colored>div {
    margin-right: 1rem;
    align-self: center;
    font-weight: 600;
  }
  .output-colored-text {
    color: var(--color5);
  }

  .output-icon {
    display: flex;
    align-items: center;
    align-self: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    width: 92.5%;
    font-weight: 700;
  }
  .output-icon>img {
    height: 1.5rem;
    aspect-ratio: 1/1;
    -webkit-filter: invert(1);
    filter: invert(1);
    margin-right: 1rem;
    padding-left: 0.5rem;
  }
  .output-title {
    font-size: 2rem;
    font-weight: bold;
    align-self: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    width: 95%;
    border-bottom: solid 0.5px color-mix(in srgb, var(--main-color) 50%, transparent);
  }
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
  .bottom-spacing {
    height: 1.5rem;
  }
</style>
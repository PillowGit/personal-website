<script lang="ts">
    interface Project {
        title: string;
        description: string;
        image: string;
        alt: string;
        link: string;
    }
    const projects: Project[] = [
        {
            title: "Base discord.js Template",
            description: "An informative, open source template for discord.js projects",
            image: "https://pbs.twimg.com/media/D6hPTEiWAAI9uoz.png",
            alt: "Discord Wumpus",
            link: "https://github.com/PillowGit/base-discord-js-bot",
        },
        {
            title: "Personal Site/Portfolio",
            description: "My first real frontend project, completed with SvelteKit and deployed with Vercel",
            image: "/images/homepage.png",
            alt: "Site homepage",
            link: "/",
        },
        {
            title: "Kanban Todo List (CPSC 362)",
            description: "A kanban style todo list for the CPSC 362 class at CSUF. My First completely fullstack webdev project, built using SvelteKit, firebase, and deployed with Vercel",
            image: "/images/todolist.png",
            alt: "Todo-List",
            link: "https://362-todo-list.pillo.dev/",
        },
        {
            title: "Fullyhacks Bot",
            description: "A discord bot created using Discord.js and Node.js to help operations perform smoothly at CSUF's 2024 hackathon, Fullyhacks",
            image: "/images/fullyhacksbot.png",
            alt: "Fullyhacks Discord Bot",
            link: "https://github.com/PillowGit/Fullyhacks-Bot",
        },
    ];
</script>

<div class="project-display-box">
    {#each projects as project}
        <div class="project-card">
            <a href={project.link} target="_blank">
            <img src={project.image} alt={project.alt} />
            <div class="project-card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
            </a>
        </div>
    {/each}
</div>

<style>
    .project-display-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;

        min-height: 20rem;
        width: 90%;
        align-self: center;
        margin-bottom: 10rem;
    }
    .project-card {
        margin-bottom: 2rem;
        height: 20rem;
        aspect-ratio: 1/1;
        transition: 0.2s;
        border-radius: 1rem;
        border: 0.5px solid color-mix(in srgb, var(--main-color) 50%, transparent);
    }
    .project-card img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 1rem;
    }
    .project-card:hover {
        transform: scale(1.05);
        -webkit-filter: grayscale(1);
        filter: grayscale(1);
    }
    .project-card-info p, h3 {
        margin-left: 1rem;
        margin-right: 1rem;
    }
    .project-card-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: var(--complement);
        font-weight: 700;

        height: 20rem;
        aspect-ratio: 1/1;
        position: absolute;
        transform: translateY(-20.25rem);
        background-color: color-mix(in srgb, var(--main-color) 70%, transparent);
        border-radius: 1rem;

        opacity: 0;
        visibility: hidden;
        transition: 0.2s;
    }
    .project-card:hover .project-card-info {
        opacity: 1;
        visibility: visible;
    }
</style>
<script lang="ts">
    import { onMount } from 'svelte';

    // Distance formula
    function distance(x1: number, y1: number, x2: number, y2: number) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    // Angle formula
    function double_dist(x1: number, y1: number, x2: number, y2: number) {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const rad = Math.atan2(dy, dx);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const newdist = dist * 2;
        const newx = x1 + Math.cos(rad) * newdist;
        const newy = y1 + Math.sin(rad) * newdist;
        return { x:newx, y:newy };
    }

    onMount(() => {
        // Target the title
        const title: Element | null = document.querySelector('.title');
        if (title === null) return;
        // Change its left position
        title.style.left = window.innerWidth * .45 + 'px';
        title.style.top = window.innerHeight * .45 + 'px';
        // Create mouse move event listener 
        document.addEventListener('mousemove', (event) => {
            // Calculate distance between mouse and title
            const title_x = title.offsetLeft + title.offsetWidth / 2;
            const title_y = title.offsetTop + title.offsetHeight / 2;
            const dist: number = distance(event.clientX, event.clientY, title_x, title_y);
            // Move title away from mouse if dist < 100
            if (dist > 110) return;
            // Calculate where to move the title to
            const new_pt = double_dist(event.clientX, event.clientY, title_x, title_y);
            // Now move the title smoothly
            title.style.transition = 'all 0.1s ease';
            title.style.position = 'absolute';
            title.style.left = new_pt.x + 'px';
            title.style.top = new_pt.y + 'px';
        })
    })
</script>

<body>
    <h1 class="title">Pillow</h1>
</body>

<style>
    body { 
        overflow: hidden;
    }
    h1 {
        position: absolute;
        left: 45%;
        top: 45%;

        font-size: 2.75rem;

        text-align: center;
        height: 3.25rem;
        width: 11rem;
    }
</style>
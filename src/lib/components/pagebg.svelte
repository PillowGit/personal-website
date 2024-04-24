<script lang="ts">
    import { onMount } from 'svelte';
    onMount(() => {
        // Set area size to screen size
        const area: HTMLElement | null = document.querySelector('.area');
        if (!area) return;
        area.style.width = `${window.innerWidth-20}px`;
        area.style.height = `${window.innerHeight}px`;
        // On resize, set area size to screen size
        window.addEventListener('resize', () => {
            area.style.width = `${window.innerWidth - 20}px`;
            area.style.height = `${window.innerHeight}px`;
        })
    });
</script>

<!-- Inspo: https://codepen.io/mohaiman/pen/MQqMyo -->

<div class="area" >
  <ul class="circles">
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>

<style>
    .area {
        background: var(--bg-color);
        background: -webkit-linear-gradient(to left, color-mix(in srgb, var(--main-color) 80%, transparent), var(--bg-color));  
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -5;
        top: 0;
        left: 0;
    }
    .circles{
        display: flex;
        justify-content: space-between;
        position: absolute;
        top: 0;
        left: 0;
        width: 98%;
        height: 100%;
        overflow: hidden;
    }
    .circles li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;

    }
    .circles li:nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }
    .circles li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }
    .circles li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }
    .circles li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }
    .circles li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }
    .circles li:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }
    .circles li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }
    .circles li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }
    .circles li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }
    .circles li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }
    @keyframes animate {
        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }
        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }
    }
</style>
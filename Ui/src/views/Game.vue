<style src="../styles/Game.css"/>
<script setup>
import { ref } from 'vue';
    const num = ref(0);

    const increment = () => {
        num.value++;
    }
</script>

<template>
    <div class="game-container">
        <p class="title-text">FORTE!</p>
        <p>{{ num }}</p>
        <button v-on:click="increment">Increment</button>
    </div>
</template>
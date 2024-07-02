<template>
    <Navbar />
    <router-view />
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
header h1 {
    color: #dfdfdf;
    font-size: 48px;
}
header a {
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}
header a.router-link-active {
    color: #444;
    font-weight: bold;
}
</style>

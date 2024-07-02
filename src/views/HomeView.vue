<template>
    <div class="home">
        <div v-if="err">{{ err }}</div>
        <div v-if="posts" class="layout">
            <PostList :posts="posts" />
            <TagCloud :posts="posts" />
        </div>
        <div v-else><Spinner /></div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";
import TagCloud from "../components/TagCloud.vue";
import getPosts from "../composables/getPosts.js";
const { posts, err, fetchData } = getPosts();

onMounted(() => {
    fetchData();
});
</script>

<style>
.home {
    max-width: 1480px;
    margin: 0 auto;
    padding: 10px;
}
.layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
}
</style>

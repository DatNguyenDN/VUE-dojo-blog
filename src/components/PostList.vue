<template>
    <div class="post-list">
        <div v-for="post in posts" :key="post.id">
            <SinglePost :post="post" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["posts", "filterTag"]);
import SinglePost from "./SinglePost.vue";
</script>

<style></style>

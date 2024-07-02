<template>
    <div class="post-list">
        <div v-if="err">{{ err }}</div>
        <div v-if="posts">
            <PostList :posts="filterTag" />
        </div>
        <div v-else><Spinner /></div>
    </div>
</template>

<script setup>
import getPosts from "@/composables/getPosts";
import { computed, onMounted, ref } from "vue";
import PostList from "@/components/PostList.vue";
import Spinner from "@/components/Spinner.vue";
import { useRoute } from "vue-router";
const { posts, err, fetchData } = getPosts();
const route = useRoute();
const filterTag = computed(() => {
    return posts.value.filter((post) => post.tags.includes(route.params.tag));
});
onMounted(() => {
    fetchData();
});
</script>

<style></style>

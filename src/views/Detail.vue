<template>
    <div v-if="err">{{ err }}</div>
    <div v-if="post" class="post">
        <h3>{{ post.title }}</h3>
        <p class="pre">{{ post.body }}</p>
    </div>
    <div v-else><Spinner /></div>
</template>

<script setup>
import Spinner from "../components/Spinner.vue";
import { onMounted } from "vue";
import getPost from "../composables/getPost";

const props = defineProps(["id"]);
const { post, err, fetchData } = getPost();
onMounted(() => {
    fetchData(props.id);
});
</script>

<style>
.post {
    max-width: 1200px;
    margin: 0 auto;
}

.post p {
    color: #444;
    line-height: 1.5rem;
    margin-top: 40px;
}
.pre {
    white-space: pre-wrap;
}
</style>

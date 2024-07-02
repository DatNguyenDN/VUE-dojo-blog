<template>
    <div class="create">
        <form @submit.prevent="handleSubmit">
            <label>Title:</label>
            <input v-model="title" type="text" required />
            <label>Content:</label>
            <textarea v-model="content" required></textarea>
            <label>Tag (Hit enter to add)</label>
            <input
                v-model="tag"
                type="text"
                @keydown.enter.prevent="handleKeyDown"
            />
            <p v-for="tag in tags" :key="tag" class="pill">#{{ tag }}</p>
            <button>Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const title = ref("");
const content = ref("");
const tag = ref("");
const tags = ref([]);

const handleKeyDown = () => {
    if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.trim();
        tags.value.push(tag.value);
    }
    tag.value = "";
};

const handleSubmit = async () => {
    const newPost = {
        title: title.value,
        content: content.value,
        tags: tags.value,
    };
    const res = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
    });
    if (!res.ok) {
        throw new Error("Failed to post");
    } else {
        alert("Success");
    }
};
</script>

<style>
form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
}
input,
textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
}
textarea {
    height: 160px;
}
label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
}
label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
}
button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
}
.pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
}
</style>

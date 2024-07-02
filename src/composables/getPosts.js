import { ref } from "vue";

const getPosts = () => {
    const posts = ref(null);
    const err = ref(null);

    const fetchData = async () => {
        // await new Promise((resolve) => {
        //     setTimeout(resolve, 2000);
        // });
        try {
            let res = await fetch("http://localhost:3000/posts");
            if (!res.ok) throw new Error("Failed to load posts");
            posts.value = await res.json();
        } catch (error) {
            err.value = error.message;
        }
    };
    // fetchData();
    return { posts, err, fetchData };
};

export default getPosts;

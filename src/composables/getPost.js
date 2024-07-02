import { ref } from "vue";

const getPost = () => {
    const post = ref(null);
    const err = ref(null);

    const fetchData = async (id) => {
        // await new Promise((resolve) => {
        //     setTimeout(resolve, 2000);
        // });
        try {
            let res = await fetch(`http://localhost:3000/posts/${id}`);
            if (!res.ok) throw new Error("Failed to load posts");
            post.value = await res.json();
        } catch (error) {
            err.value = error.message;
        }
    };

    return { post, err, fetchData };
};

export default getPost;

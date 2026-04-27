import { useState } from "react";
import { createPost } from "../../services/post.services.js";


function useCreatePost() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function submitPost(data) {
        try {
            setLoading(true);
            const newPost = await createPost(data);
            return newPost;
        } catch(err) {
            setError(err.message || "Failed to create post");
            // throw err;
        } finally {
            setLoading(false);
        };
    };

    return {submitPost, loading, error};
};


export default useCreatePost;

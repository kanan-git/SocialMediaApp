import { useState, useEffect } from "react";
import { getPosts } from "../../services/post.services.js";


function usePosts(params) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchPosts() {
        try {
            setLoading(true);
            const data = await getPosts(params);
            setPosts(data);
        } catch(err) {
            setError(err.message || "Failed to fetch posts");
        } finally {
            setLoading(false);
        };
    };

    useEffect(() => {
        fetchPosts();
    }, [JSON.stringify(params)]);

    return {posts, loading, error, refetch: fetchPosts};
};


export default usePosts;

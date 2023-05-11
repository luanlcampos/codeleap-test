import { createPost } from "../redux/user";
import store from "../redux/store"

// file responsible for adding the post to the api and add it to the local storage
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;
/**
 * 
 * @param {Post} post 
 * Post = {username: string, title: string, content: string}
 * @returns response object containing info about the added post
 */


const addPost = async (post) => {
    if (post && post.title.length > 0 && post.username.length > 0 && post.content.length > 0) {
        try {
            let res = (await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(post)
            }));
            if (res.ok) {
                res = await res.json();
                store.dispatch(createPost(res));
                console.log(store.getState());
            }

            return res;

        } catch (err) {
            console.warn(err);
            throw new Error("Error while posting a new content");
        }
    }

    throw new Error("Invalid title/username/content");
}

export default addPost;

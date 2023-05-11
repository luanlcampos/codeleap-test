import { deletePost } from "../redux/user";
import store from "../redux/store"

// file responsible for adding the post to the api and add it to the local storage
const url = process.env.NEXT_PUBLIC_API_ENDPOINT;
/**
 * 
 * @param {number} postId 
 * @returns action status
 */


const removePost = async (postId) => {
    if (postId) {
        try {
            let res = (await fetch(`${url}${postId}/`, {
                method: "DELETE"
            }));

            if (res.ok) {
                store.dispatch(deletePost(postId));
            }

            return { status: "ok" };

        } catch (err) {
            console.warn(err);
            throw new Error("Error while posting a new content");
        }
    }

    throw new Error("Invalid title/username/content");
}

export default removePost;

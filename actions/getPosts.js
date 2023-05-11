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


const getPosts = async (page = 0) => {
    try {
        let res = (await fetch(`${url}?limit=10&${page === 0 ? "" : `offset=${page}`}`));
        if (res.ok) {
            res = await res.json();
        }

        return res;

    } catch (err) {
        console.warn(err);
        throw new Error("Error while posting a new content");
    }
}

export default getPosts;

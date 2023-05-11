import { useState } from "react";
import addPost from "../../actions/addPost";
import { useSelector } from "react-redux";

const CreatePost = () => {
  const [postTitle, setPostTitle] = useState("Test from App");
  const [postContent, setPostContent] = useState("Luan from app");
  const [loading, setLoading] = useState(false);
  const username = useSelector((state) => state.username);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await addPost({ username, title: postTitle, content: postContent });
    setLoading(false);
  };

  return (
    <div className="create-post-form px-3 py-2 border border-[#999999] rounded-lg flex flex-col gap-y-4 shadow-lg">
      <div className="title text-xl font-bold">What{"'"}s on your mind</div>
      <form
        action="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-5"
      >
        <div className="post-title">
          <label htmlFor="post-title">Title</label>
          <input
            type="text"
            name="post-title"
            id="post-title"
            placeholder="Hello world"
            value={postTitle}
            className="w-full rounded-md border-[#999999] border px-3 py-1"
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </div>
        <div className="post-content">
          <label htmlFor="post-contet">Content</label>
          <textarea
            type="text"
            name="post-content"
            id="post-content"
            placeholder="Content Here"
            className="w-full rounded-md border-[#999999] border px-3 py-1 resize-none min-h-[80px]"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            required
          />
        </div>
        <div className="btn-row flex w-full justify-end">
          <input
            type="submit"
            value={loading ? "Loading..." : "Create"}
            disabled={postTitle.length === 0 || postContent.length === 0}
            className="px-6 py-1 bg-[#7695EC] text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};

export default CreatePost;

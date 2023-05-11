import { useState } from "react";
import Modal from "react-modal";
import modifyPost from "../../actions/modifyPost";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "50%",
    marginRight: "-50%",
    borderRadius: "16px",
    transform: "translate(-50%, -50%)",
  },
};
const UpdatePostModal = ({ isOpen, setIsOpen, post }) => {
  const [postTitle, setPostTitle] = useState(post.title);
  const [postContent, setPostContent] = useState(post.content);
  const [loading, setLoading] = useState(false);
  const handleUpate = async (e) => {
    e.preventDefault();
    setLoading(true);
    await modifyPost({
      username: post.username,
      title: postTitle,
      content: postContent,
      id: post.id,
    });
    setLoading(false);
    setIsOpen(false);
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      <div className="create-post-form px-3 py-2  flex flex-col gap-y-4 shadow-lg">
        <div className="title text-xl font-bold">What{"'"}s on your mind</div>
        <form
          action="post"
          onSubmit={handleUpate}
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
              defaultValue={post.title}
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
              defaultValue={post.content}
              onChange={(e) => setPostContent(e.target.value)}
              required
            />
          </div>
          <div className="btn-row flex justify-end font-bold gap-x-4 pt-2">
            <button
              onClick={() => setIsOpen(false)}
              className="border border-[#999999] px-5 rounded-lg hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={postTitle.length === 0 || postContent.length === 0}
              className="border border-[#999999] bg-[#47B960] hover:bg-[#3a984e] text-white px-5 rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              {loading ? "Loading" : "Save"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default UpdatePostModal;

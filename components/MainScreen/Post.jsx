import { useSelector } from "react-redux";
import { DeleteIcon, EditIcon } from "../Icons";
import { useState } from "react";
import DeleteModal from "./DeleteModal";
import Modal from "react-modal";
import UpdatePostModal from "./UpdatePostModal";

Modal.setAppElement("#__next");

const formatDate = (dateStr) => {
  let date = new Date(dateStr);
  const formatter = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diffInMs = Date.now() - date.getTime();
  const diffInSec = Math.round(diffInMs / 1000);
  const diffInMin = Math.round(diffInSec / 60);
  const diffInHr = Math.round(diffInMin / 60);
  const diffInDay = Math.round(diffInHr / 24);

  let formattedTime;
  if (diffInSec < 60) {
    formattedTime = formatter.format(-diffInSec, "second");
  } else if (diffInMin < 60) {
    formattedTime = formatter.format(-diffInMin, "minute");
  } else if (diffInHr < 24) {
    formattedTime = formatter.format(-diffInHr, "hour");
  } else {
    formattedTime = formatter.format(-diffInDay, "day");
  }

  return formattedTime;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "16px",
    transform: "translate(-50%, -50%)",
  },
};

const Post = ({ post }) => {
  const userPostsFromStorage = useSelector((state) => state.posts);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  return (
    <>
      <div
        className="post border border-[#999999] rounded-2xl shadow-lg relative fade-in"
        key={post.id}
      >
        <Modal
          isOpen={deleteModalOpen}
          onRequestClose={() => setDeleteModalOpen(false)}
          style={customStyles}
        >
          <DeleteModal setDeleteModalOpen={setDeleteModalOpen} id={post.id} />
        </Modal>
        <UpdatePostModal
          isOpen={updateModalOpen}
          setIsOpen={setUpdateModalOpen}
          onRequestClose={() => setUpdateModalOpen(false)}
          post={post}
        />
        <div className="post-header bg-[#7695EC] text-white h-16 rounded-t-2xl px-5  flex items-center">
          <span className="post-title font-semibold flex-1">{post.title}</span>
          {userPostsFromStorage[post.id] ? (
            <div className="action-buttons flex-1 flex justify-end items-center gap-x-4">
              <button onClick={() => setDeleteModalOpen(true)}>
                <DeleteIcon className="w-6 h-6 hover:opacity-50" />
              </button>
              <button onClick={() => setUpdateModalOpen(true)}>
                <EditIcon className="w-6 h-6 hover:opacity-50" />
              </button>
            </div>
          ) : null}
        </div>
        <div className="post-body px-5 py-3">
          <div className="post-data opacity-50 w-full font-semibold flex">
            <span className="flex-1">
              {"@"}
              {post.username}
            </span>
            <span className="flex-1 text-right">
              {formatDate(post.created_datetime)}
            </span>
          </div>
          <div className="post-content">{post.content}</div>
        </div>
      </div>
    </>
  );
};

export default Post;

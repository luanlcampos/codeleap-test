import removePost from "../../actions/removePost";

const DeleteModal = ({ id, setDeleteModalOpen }) => {
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await removePost(id);
    setDeleteModalOpen(false);
  };
  return (
    <div className="flex flex-col gap-y-10">
      <h1 className="font-bold text-xl">
        Are you sure you want to delete this item?
      </h1>
      <div className="btn-row flex justify-end font-bold gap-x-4 pt-2">
        <button
          onClick={() => setDeleteModalOpen(false)}
          className="border border-[#999999] px-5 rounded-lg hover:bg-gray-200"
        >
          Cancel
        </button>
        <button
          onClick={(e) => handleDelete(e)}
          className="border border-[#999999] bg-[#FF5151] hover:bg-[#f84949] text-white px-5 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;

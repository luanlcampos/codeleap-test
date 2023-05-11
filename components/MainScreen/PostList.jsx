import { useEffect, useRef, useState } from "react";
import getPosts from "../../actions/getPosts";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const userPostsFromStorage = useSelector((state) => state.posts);
  const ref = useRef();
  useEffect(() => {
    console.log(page, userPostsFromStorage);
    const getPostsCall = async () => {
      setLoading(true);
      const data = await getPosts(page);
      setPosts([...data.results]);
      setLoading(false);
    };

    getPostsCall();
  }, [userPostsFromStorage, page]);

  const handleLoadMoreClick = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="dummy" ref={ref}></div>
      <section className="flex flex-col gap-y-6 py-4 relative">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
        <div id="postListFooter" className="text-center">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="flex w-full items-center justify-center gap-x-3">
              <button
                className="border border-[#999999] px-4 py-2 w-28 rounded-xl shadow-lg text-white bg-[#7695EC] hover:bg-opacity-80 font-semibold text-lg disabled:bg-gray-200 disabled:cursor-not-allowed"
                onClick={() => {
                  setPage((prevPage) => prevPage - 10);
                  handleLoadMoreClick();
                }}
                disabled={page === 0}
              >
                Previous
              </button>
              <button
                className="border border-[#999999] px-4 py-2 w-28 rounded-xl shadow-lg text-white bg-[#7695EC] hover:bg-opacity-80 font-semibold text-lg"
                onClick={() => {
                  setPage((prevPage) => prevPage + 10);
                  handleLoadMoreClick();
                }}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PostList;

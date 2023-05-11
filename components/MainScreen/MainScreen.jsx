import { useSelector } from "react-redux";
import CreatePost from "./CreatePost";
import PostList from "./PostList";
import { useState } from "react";
import { logout } from "../../actions/user";

const MainScreen = () => {
  const username = useSelector((state) => state.username);
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);
  const handleLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <>
      <header className="w-full h-20 bg-[#7695EC] text-white px-5 flex items-center shadow-lg relative ">
        <span className="text-xl font-bold flex-1">CodeLeap Network</span>
        <div className="profile flex-1 flex items-center justify-end font-semibold">
          <button
            className="relative hover:cursor-pointer"
            onClick={() => setOpenProfileDropdown(!openProfileDropdown)}
          >
            Hello, {username} <span className="text-xs"> ▼</span>
          </button>

          <div
            className={`dropdown absolute bg-white w-32 shadow-lg text-black font-normal translate-y-full ${
              openProfileDropdown
                ? "opacity-100 scale-y-100"
                : "opacity-0 scale-y-0"
            } transform origin-top`}
          >
            <button
              className="hover:bg-gray-300 px-5 w-full z-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="px-6 py-5 relative">
        <CreatePost />
        <PostList />
      </main>
    </>
  );
};

export default MainScreen;

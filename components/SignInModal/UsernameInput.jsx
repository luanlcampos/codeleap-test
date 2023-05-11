// /components/UsernameInput.js

import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../../redux/user";
import { useState } from "react";

export default function UsernameInput() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const [tempUser, setTempUser] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(setUsername(tempUser));
  };

  return (
    <form onSubmit={handleChange} className="flex flex-col gap-y-3">
      <label htmlFor="username-input" className="w-full">
        Please enter your username:
      </label>
      <input
        type="text"
        id="username-input"
        className="w-full rounded-md border-[#999999] border px-3 py-1"
        placeholder="John Doe"
        onChange={(e) => setTempUser(e.target.value)}
        value={tempUser || ""}
      />
      <div className="btn-row flex w-full justify-end">
        <button
          className="px-6 py-1 bg-[#7695EC] text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
          disabled={tempUser.length === 0}
        >
          ENTER
        </button>
      </div>
    </form>
  );
}

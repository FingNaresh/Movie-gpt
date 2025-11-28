import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Remove user from Redux
        dispatch(removeUser());

        // Navigate to login
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      {/* Logo */}
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {user && (
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 rounded"
          alt="usericon"
          // src="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
          src={user?.photURL}
        />

        <button onClick={handleSignOut} className="text-white font-semibold">
          Sign Out
        </button>
      </div>
      )}
    </div>
  );
};

export default Header;

import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <div className="navbar bg-base-100 px-12">
      <div className="navbar-start">
        <h1 className="btn btn-ghost normal-case text-xl">To-Do App</h1>
      </div>

      <div className="navbar-end">
        {user ? (
          <button className="btn btn-accent" onClick={handleSignout}>
            Signout
          </button>
        ) : (
          <NavLink to={"/login"} className="btn btn-accent">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  let location = useLocation();
  let navigate = useNavigate();
  let from = location.state?.from?.pathname || "/home";

  useEffect(() => {
    if (user) {
      console.log(user);
      toast.success("successfully logged in");
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-semibold">Welcome to To-Do App</h1>
          <h3 className="text-xl text-center">
            Sign in with Google to continue
          </h3>
          <div className="">
            <button
              className="btn btn-primary block mx-auto"
              onClick={() => {
                signInWithGoogle();
              }}
            >
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

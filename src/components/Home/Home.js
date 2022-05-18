import React from "react";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
    <Navbar></Navbar>
      <div className="h-screen flex justify-center items-center">
          <div className="">
              <h1  className="text-6xl font-semibold mb-12">My TO-DO App</h1>
              <div>
                  <form className="space-y-4">
                    <input type="text" name="taskName" placeholder="Task name" className="input input-bordered w-full max-w-lg" />
                    <textarea rows={3} name="taskDetails" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                    <input type="submit" className="btn btn-primary block mx-auto" value="Submit" />
                  </form>
              </div>
          </div>
      </div>
    </>
  );
};

export default Home;

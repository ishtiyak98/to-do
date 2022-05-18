import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import MyTask from "../MyTask/MyTask";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [user] = useAuthState(auth);


  const { data: tasks, isLoading, refetch } = useQuery("tasks", () =>
    fetch(`https://enigmatic-thicket-06642.herokuapp.com/my-task/${user?.email}`).then((res) =>
      res.json()
    )
  );

  const handleSubmit =(e)=>{
    e.preventDefault();

    const taskName = e.target.taskName.value;
    const description = e.target.taskDetails.value;
    const email = user?.email;

    const data = {taskName, description, email}
    
    fetch("https://enigmatic-thicket-06642.herokuapp.com/my-task",{
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then(data => {
      if (data.acknowledged) {
        toast.success("new task added");
        refetch();
        e.target.reset();
      }
    })

  }
  return (
    <>
    <Navbar></Navbar>
      <div className="h-[500px] flex justify-center items-center">
          <div className="">
              <h1  className="text-6xl font-semibold mb-12">My TO-DO App</h1>
              <div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input required type="text" name="taskName" placeholder="Task name" className="input input-bordered w-full max-w-lg" />
                    <textarea required rows={3} name="taskDetails" className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                    <input type="submit" className="btn btn-primary block mx-auto" value="Submit" />
                  </form>
              </div>
          </div>
      </div>

      <div>
        <MyTask tasks={tasks} isLoading={isLoading} refetch={refetch}></MyTask>
      </div>
    </>
  );
};

export default Home;

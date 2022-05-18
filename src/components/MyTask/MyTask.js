import React from "react";
import TaskRow from "./TaskRow";

const MyTask = ({isLoading, tasks, refetch}) => {
  
  if (isLoading) {
    return <h1>loading</h1>;
  }

  return (
    <div className="mx-12 mb-20">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Task Name</th>
              <th>Description</th>
              <th>Manage</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <TaskRow key={index} index={index} task={task} refetch={refetch}></TaskRow>
            ))}
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTask;

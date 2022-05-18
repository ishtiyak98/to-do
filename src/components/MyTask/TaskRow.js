import React, { useState } from "react";
import { toast } from "react-toastify";

const TaskRow = ({ task, index, refetch }) => {
  const { _id,taskName, description } = task;
  const [complete, setComplete] = useState(false);

  const handleDelete = (_id)=>{
    fetch(`https://enigmatic-thicket-06642.herokuapp.com/my-task/delete/${_id}`,{
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(data => {
        if (data.acknowledged) {
            toast.success("task deleted");
            refetch();
        }
    })
  }

  const handleComplete = () => {
      toast.success("task completed");
      setComplete(true)
  }

  return (
    <tr>
      <th className={`${complete? "line-through" :""}`}>{index + 1}</th>
      <td className={`${complete? "line-through" :""}`}>{taskName}</td>
      <td className={`${complete? "line-through" :""}`}>{description}</td>
      <td>
        <button className="btn btn-sm btn-success text-white" onClick={handleComplete}>Complete</button>{" "}
        <button className="btn btn-sm btn-error text-white" onClick={()=>handleDelete(_id)}>Delete</button>
      </td>
    </tr>
  );
};

export default TaskRow;

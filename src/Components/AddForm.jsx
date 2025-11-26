import { useState } from "react";
import { useDispatch } from "react-redux"; //allow us to dispatch actions to the redux store by giving the action as an argument to the dispatch varliable
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(task));
    setTask("");
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Add todo"
          onChange={(e) => setTask(e.target.value)}
        ></input>
        &nbsp;
        <button type="submit">Add Task</button>
      </form>
    </>
  );
}

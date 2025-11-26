import { useSelector } from "react-redux"; //to read data from the redux store
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";
export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
    
  const dispatch = useDispatch();

    const clickHandler = (id) => {
      console.log("delete", id);
    dispatch(deleteTodo(id));
    };
    
    const markcomplete = (id) => {
        console.log("mark as done", id);
        dispatch(markAsDone(id));
    }

  return (
    <div>
      <AddForm />
      <p>Todo list </p>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>
            {todo.task} &nbsp;
                <button onClick={() => clickHandler(todo.id)}>Delete</button>
                <button onClick={()=>{markcomplete(todo.id)}}>MarkAsDone</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

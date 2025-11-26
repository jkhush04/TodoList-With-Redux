import { createSlice , nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: 1, task: 'Learn Redux Toolkit', isDone: false }],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addTodo: (state, action) => {

            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },

        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        },

        markAsDone: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.isDone = true;
                }
                return todo;
            });
        }
    },  
    });

    export const{ addTodo, deleteTodo, markAsDone} = todoSlice.actions;

    export default todoSlice.reducer;   
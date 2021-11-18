import React, {useState, useReducer} from 'react';
import TodoItem from './TodoItem';
import '../../styles/style.css'

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(
    <div class="text-center" >
      <div className="Heading">
      <h1>Simple TodoApp</h1>
      </div>

      <div class="Input-box">
      <form onSubmit={handleSubmit}>
        <p class="fw-normal">To do : <input class="Input" type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <button class="btn btn-info btn-sm ms-2 mb-1  " type="Submit">Add Todo</button> </p>
        
      </form>
      </div>
     

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
  );
}

export default Todos;
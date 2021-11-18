import React from 'react';

function TodoItem({todo, dispatch}) {
  return(
    <div className="list">
      <table >
        <tr class="border border-info ">
          <td className="check-box"><input type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} /></td>
          <td className="notes"><span style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span></td>
          <td><button  class="btn btn-outline-danger button-sm" onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}>🗑️</button></td>
        </tr>
      </table>
    </div>
  );
}

export default TodoItem;
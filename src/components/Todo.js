//This will be the display for our todo items, will also display Update.js
import React from "react";
import Update from "./Update";

const Todo = props => {
    console.log(props)
  return (
    <div className="todo">
      
        <div>
          <h3>Task:{props.data.task}</h3>
          <h4>Description:{props.data.description}</h4>
          <button onClick={() => props.delete(props.data.id)}>
            Delete This Task
          </button>
          
        </div>
      
        <Update edit={props.edit} update={props.update} data={props.data} toggle={props.toggle} />
      
    </div>
  );
};
export default Todo;

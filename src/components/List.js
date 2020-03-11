//We will map over the list here and pass to a display of Todo in the map.
import React from "react";
import Todo from "./Todo";

const List = props => {
  const todos = props.todo.map((el, i) => (
    <Todo
      update={props.update}
      edit={props.edit}
      toggle={props.toggle}
      delete={props.delete}
      data={el}
      key={i}
    />
  ));
  return <div>{todos}</div>;
};
export default List;

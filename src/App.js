import React from "react";
import "./App.css";
import List from "./components/List";
import NewTask from "./components/NewTask";

class App extends React.Component {
  state = {
    todoList: [],
    editing: false
  };
  setTodos = value => {
    this.setState({ todoList: [...this.state.todoList, value] });
  };
  deleteTodo = id => {
    const index = this.state.todoList.findIndex(el => el.id === +id);
    const arr = this.state.todoList;
    arr.splice(index, 1);
    this.setState({ todoList: arr });
  };
  updateTodo = (id, val1, val2) => {
    const index = this.state.todoList.findIndex(el => el.id === +id);
    const arr = this.state.todoList;
    const obj = {
      id: id,
      task: val1,
      description: val2
    };
    arr.splice(index, 1, obj);
    this.setState({ todoList: arr });
  };
  toggleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };
  render() {
    // console.log("list", this.state.todoList);
    return (
      <div className="App">
        <List
          update={this.updateTodo}
          edit={this.state.editing}
          toggle={this.toggleEdit}
          delete={this.deleteTodo}
          todo={this.state.todoList}
        />
        <NewTask set={this.setTodos} />
      </div>
    );
  }
}

export default App;

import React from "react";
import "./itemsTodo.css";

class itemsTodo extends React.Component {
  deleteTodo(id) {
    this.props.deleteTodo(id);
  }

  render() {
    return (
      <div className="todo-cont">
        <button className="deleteTodo" onClick={(e) => this.deleteTodo(this.props.id)}>Remove</button>{this.props.todo.message}
      </div>
    )
  }
}

export default itemsTodo;

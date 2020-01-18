import React from "react";
import "./todoInput.css";

class todoInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    };
    this.updateValue = this.updateValue.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  updateValue(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: '' });
    }
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.updateValue} />
        <button className="btn btn-primary" onClick={() => this.addTodo(this.state.value)}>Submit</button>
      </div>
    );
  }
}

export default todoInput;

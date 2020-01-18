import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from "./Header/Header";
import TodoInput from './todoInput/todoInput';
import ItemsTodo from './itemsTodo/itemsTodo';
import { ADD_TODO, REMOVE_TODO } from './actions/actions';

class App extends React.Component {
  addTodo = todoText => {
    this.props.addTodo({ id: this.props.nextId, message: todoText })
  }

  deleteTodo = id => {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-container">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>
            {
              this.props.todos.map((todo) => {
                return <ItemsTodo todo={todo} key={todo.id} id={todo.id} deleteTodo={this.deleteTodo} />
              })
            }
          </ul>
        </div>

      </div>
    );
  }
}
export default connect(state => ({ 
  todos: Object.values(state.items),
  nextId: Math.max(...Object.keys(state.items)) + 1,
}), dispatch => ({
  addTodo: payload => {
    dispatch({ type: ADD_TODO, payload })
  },
  removeTodo: id => {
    dispatch({type: REMOVE_TODO, payload: { id }})
  }
}))(App);

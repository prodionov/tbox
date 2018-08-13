import React, { Component } from "react";
import { addTask, completedTask } from "../../reducers/todoReducer";
import "./style.css";
import { connect } from "react-redux";
import Login from "../login/Login";

class Todo extends Component {
  state = {
    task: "",
    todoList: []
  };

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };

  handleCheck = task => {
    console.log("task", task);
    this.props.completedTask(task.id);
  };

  addTask = event => {
    event.preventDefault();
    let task = this.state.task;
    task ? this.props.addTask(task) : alert("You cannot add an empty task");
    this.setState({ task: "" });
  };

  render() {
    if (!this.props.isLoggedin) {
      return <Login />;
    }
    let list = this.props.todoList.slice();
    list.reverse();
    return (
      <div className="todo-page">
        <div className="todo-headline">
          <h1>ToDo List</h1>
        </div>
        <div className="todo-form">
          <form>
            <input
              className="form-input"
              type="text"
              name="task"
              id="task"
              value={this.state.task}
              onChange={this.handleChange}
              placeholder="Add task here"
            />
            <button onClick={this.addTask} className="todo-button" />
          </form>
        </div>
        <div className="todo-list">
          <ul>
            {list.map((task, index) => {
              return (
                <li key={index}>
                  <div className="Task-container">
                    <span className="task-item">{task.task}</span>
                    <input
                      type="checkbox"
                      checked={task.checked}
                      onChange={() => this.handleCheck(task)}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    username: state.login.username,
    todoList: state.todo
  };
};

export default connect(mapStateToProps, { addTask, completedTask })(Todo);

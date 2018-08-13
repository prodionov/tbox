import React, { Component } from "react";
import { connect } from "react-redux";
import("./style.css");

class TodoMini extends Component {
  render() {
    const tasks = this.props.todoList;
    return tasks.length === 0 ? (
      <h2 className="nothing-message">No tasks to display</h2>
    ) : (
      <ul>
        {tasks.map((task, index) => {
          return (
            <li className="Task-item" key={index}>
              <div className="Task-container">{task.task}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedin: state.login.isLoggedin,
    todoList: state.todo
  };
};

export default connect(mapStateToProps, {})(TodoMini);

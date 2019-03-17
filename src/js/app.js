import './util';

import React from 'react';
import { render } from 'react-dom';
import "../scss/styles.scss";
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import Actions from './components/Actions';

class App extends React.Component {
  state = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || []
  }
  handleAddTask = (task) => {
    this.setState({
      tasks: [...this.state.tasks, task]
    });
  }
  handleEditText = (id, text) => {
    const tasks = this.state.tasks.map( task => {
      if(task.id === id) {
        task.label = text;
      }
      return task;
    });
    this.setState({ tasks });
  } 
  handleCleanList = () => {
    this.setState({
      tasks: []
    })
  }
  handleCheckTask = (id) => {
    const tasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    this.setState({
      tasks: tasks
    })
  }
  handleCompleteList = () => {
    const tasks = this.state.tasks.map(task => {
      task.done = true;
      return task;
    });
    this.setState({
      tasks
    });
  }
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('tasks', JSON.stringify(nextState.tasks));
  }
  render() {
    return (
      <div className="layout">
        <div className="layout-fixed">
          <h1>Lista de Tarefas</h1>
        </div>
        <div className="layout-grow">
          <Tasks
            handleCheckTask={this.handleCheckTask.bind(this)}
            handleEditText={this.handleEditText}
            tasks={this.state.tasks} />
        </div>
        <div className="layout-fixed">
          <Actions
            tasks={this.state.tasks}
            handleCleanList={this.handleCleanList}
            handleCompleteList={this.handleCompleteList} />
        </div>
        <div className="layout-fixed">
          <AddTask handleAddTask={this.handleAddTask} />
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'));
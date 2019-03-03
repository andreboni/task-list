import React from 'react';
import { loadPreviousState, saveCurrentState } from '../util';
import TasksList from './TasksList';

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);
  }
  state = loadPreviousState('TaskListState') || {
    search: '',
    priority: -1,
    showCompleted: true
  }
  componentWillUpdate(nextProps, nextState) {
    saveCurrentState('TaskListState', nextState);
  }
  render() {

    if (!this.props.tasks.length) {
      return (
        <p>Nenhuma tarefa adicionada ainda.</p>
      )
    }

    return (
      <div className="layout">
        <div className="layout-fixed grid is-vertical-bottomed is-small">
          <div className="grid-division">
            <label htmlFor="show-completed">
              <span className="tag-icon fa fa-search"></span>
              Pesquisar</label>
            <input type="text" value={this.state.search} onChange={e => {
              this.setState({
                search: e.target.value
              })
            }} className="is-full" placeholder="Descrição..." />
          </div>
          <div className="grid-division is-narrow">
            <label htmlFor="priority">
              {this.state.priority === -1 && <span className="tag-icon fa fa-sort-amount-down"></span>}
              {this.state.priority === 1 && <span className="tag-icon fa fa-sort-amount-up"></span>}
              Ordernar por</label>
            <select id="priority" value={this.state.priority} onChange={e => {
              this.setState({
                priority: parseInt(e.target.value)
              })
            }} className="is-full">
              <option value="-1">Maior prioridade</option>
              <option value="1">Menor prioridade</option>
            </select>
          </div>
          <div className="grid-division is-narrow">
            <label htmlFor="show-completed">
              <span className="tag-icon fa fa-filter"></span>
              Ocultar</label>
            <input onChange={e => {
              this.setState({
                showCompleted: !this.state.showCompleted
              })
            }} checked={this.state.showCompleted} type="checkbox" id="show-completed" />
            <label htmlFor="show-completed" className="is-inline is-discreet">Finalizadas</label>
          </div>
        </div>

        <TasksList
          handleCheckTask={this.props.handleCheckTask}
          tasks={this.props.tasks}
          filter={this.state} />

      </div>
    )
  }
}
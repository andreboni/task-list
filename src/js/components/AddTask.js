import React from 'react';

export default class AddTask extends React.Component {
  state = {
    error: false,
    label: '',
    priority: 1
  }
  constructor(props) {
    super(props);
  }
  handleAddTask = (e) => {
    if (this.state.label === '') {
      this.setState({
        error: 'Faltou adicionar uma descrição para a tarefa'
      });

      return false;
    }
    this.props.handleAddTask({
      done: false,
      id: new Date().getTime(),
      label: this.state.label,
      priority: parseInt(this.state.priority)
    });
    this.setState({
      label: '',
      priority: 1
    });
  }
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="grid is-small">
          <div className="grid-division">
            <label htmlFor="task">
              <span className="fa fa-tasks"></span>
              Tarefa</label>
            <input className="is-full" onChange={(e) => {
              this.setState({
                label: e.target.value
              })
            }} value={this.state.label} type="text" id="task" placeholder="O que precisa ser feito?" />
          </div>
          <div className="grid-division is-narrow">
            <label htmlFor="priority">
              <span className="fa fa-list-ol"></span>
              Prioridade</label>
            <select id="priority" className="is-full" onChange={(e) => {
              this.setState({
                priority: e.target.value
              })
            }} value={this.state.priority}>
              <option value="1">Normal</option>
              <option value="2">Média</option>
              <option value="3">Alta</option>
            </select>
          </div>
          <div className="grid-division is-narrow">
            <label className="is-visually-hidden is-mobile-hidden">Go!</label>
            <button className="is-full is-transparent" onClick={(e) => this.handleAddTask(e)}>
              <span className="fa fa-save" />
              Salvar</button>
          </div>
        </div>
        {this.state.error && <p className="callout">
          <span className="fa fa-bullhorn" />
          {this.state.error}</p>}
      </form>
    )
  }
}

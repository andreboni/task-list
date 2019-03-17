import React from 'react';

class EditableText extends React.Component {
  state = {
    text: this.props.text,
    editMode: false
  }
  render() {
    const Input = () => (
      <div className="is-inline">
        <p className="is-inline">Editando...</p>
        <form>
          <div className="grid is-small">
            <div className="grid-division">
              <input autoFocus onChange={(e) => {
                this.setState({text: e.target.value})
              }} type="text" className="is-full" value={this.state.text} />
            </div>
            <div className="grid-division is-narrow">
              <button onClick={e => {
                e.preventDefault();
                this.setState({
                  text: this.state.text,
                  editMode: false
                });
                this.props.callback(this.state.text);
              }}>
                <span className="fa fa-save"></span>
                Salvar
              </button>
            </div>
          </div>
        </form>
      </div>
    );

    const Label = () => (
      <button title={"Editar texto '" + this.state.text + "'"} className="is-unstyled is-text" onClick={e => {
        this.setState({
          editMode: true
        });
      }}>{this.state.text}</button>
    );

    return (
      <span>{this.state.editMode ? <Input /> : <Label />}</span>
    );
  }
}

export default EditableText;
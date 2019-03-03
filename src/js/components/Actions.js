import React from 'react';

const Actions = (props) => (
  <div>
    {props.tasks.length > 0
      &&
      <div className="grid is-mobile is-small">
        <div className="grid-division">
          <button className="is-full is-transparent" onClick={props.handleCleanList}>
          <span className="fa fa-trash" />
          Limpar Lista</button>
        </div>
        <div className="grid-division">
          <button className="is-full is-transparent" onClick={props.handleCompleteList}>
            <span className="fa fa-check" />
            Finalizar lista</button>
        </div>
      </div>
    }
  </div>
)

export default Actions;
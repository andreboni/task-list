import React from 'react';

const PriorityTag = (props) => {
  if (props.priority === 1) {
    return <span className="tag">
      <span className="tag-icon fa fa-exclamation"></span>
      <span className="tag-label">Normal</span>
    </span>;
  }
  if (props.priority === 2) {
    return <span className="tag">
      <span className="tag-icon fa fa-exclamation is-marginless"></span>
      <span className="tag-icon fa fa-exclamation"></span>
      <span className="tag-label">Média</span>
    </span>;
  }
  if (props.priority === 3) {
    return <span className="tag">
      <span className="tag-icon fa fa-exclamation is-marginless"></span>
      <span className="tag-icon fa fa-exclamation is-marginless"></span>
      <span className="tag-icon fa fa-exclamation"></span>
      <span className="tag-label">Alta</span>
    </span>;
  }
}


export default PriorityTag;
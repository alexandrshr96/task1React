import React from 'react';

function EditInput(props){
  return(
    <input
      className='edit show'
      onChange={props.editChange}
      onBlur={props.editBlur}
      onKeyDown={props.editSave}
      value={props.editValue}
      id={props.id}
      autoFocus
    ></input>
  );
}

class TodoItem extends React.Component{

  render(){
    const editing = this.props.editing;
    let input;
    if(editing === this.props.id){
      input = <EditInput
        editValue={this.props.editValue}
        editChange={this.props.editChange}
        editBlur={this.props.editBlur}
        editSave={this.props.editSave}
        id={this.props.id}
      />
    }
    return(
      <li className='todo-list__item'>
        <div className='todo-list__item-content' id={this.props.id}>
          <input type='checkbox' id='todo-list__item-check' className='todo-list__item-check'></input>
          <label
            className= {this.props.checked ? 'todo-list__item-check-label check' : 'todo-list__item-check-label'}
            htmlFor='todo-list__item-check'
            onClick={()=>this.props.toggle(this.props.id)}
          ></label>
          <span
            className='todo-list__item-text'
            onDoubleClick={()=>this.props.edit(this.props.id)}
          >{this.props.value}</span>
          <button
            className='todo-list__item-close'
            onClick={()=>this.props.delete(this.props.id)}
          >X</button>
        </div>
        {input}
      </li>
    );
  }
}

export default TodoItem
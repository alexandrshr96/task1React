import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{

  render(){
    let input;
    if(this.props.editing === this.props.id){
      input = <input
        className='edit show'
        onChange={this.props.handleChangeEditInput}
        onBlur={this.props.handleChangeBlurInput}
        onKeyDown={this.props.handleSubmitEdit}
        value={this.props.textFromEditInput}
        id={this.props.id}
        autoFocus
    ></input>
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
            onDoubleClick={()=>this.props.handleShowEdit(this.props.id)}
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
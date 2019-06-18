import React from 'react';
import './TodoItem.css';

class TodoItem extends React.Component{
  state = {
    textFromEditInput: '',
    editing: null,
  }

  toggle = (id) => {
    const array = this.props.store.getItem() || [];

    array.find(el => {
      if(el.id === id) el.checked = !el.checked
    });

    this.props.store.setItem(array);
    this.props.reRender();
  }

  delete = (id) => {
    const array = this.props.store.getItem() || [];

    array.splice(array.indexOf(array.find(el=> el.id === id )),1);

    this.props.store.setItem(array);
    this.props.reRender();
  }

  handleShowEdit = (id) => {
    this.setState({
      editing: id
    });
  }

  handleChangeEditInput = (e) => {
    this.setState({
      textFromEditInput: e.target.value,
    });
  }

  handleSubmitEdit = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    e.preventDefault();

    const array = this.props.store.getItem();
    let val = this.state.textFromEditInput.trim();

    if(!val){
      return;
    }

    array.find(el=>{
      if(el.id === +(e.target.id)){
        el.value = this.state.textFromEditInput;
      }
    })

    this.props.store.setItem(array);
    this.props.reRender();
    this.setState({
      editing: null,
      textFromEditInput: ''
    });
  }

  handleChangeBlurInput = () => {
    this.setState({
      editing: null,
      textFromEditInput: ''
    });
  }

  render(){
    const editing = this.state.editing;
    let input;
    if(editing === this.props.id){
      input = <input
        className='edit show'
        onChange={this.handleChangeEditInput}
        onBlur={this.handleChangeBlurInput}
        onKeyDown={this.handleSubmitEdit}
        value={this.textFromEditInput}
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
            onClick={()=>this.toggle(this.props.id)}
          ></label>
          <span
            className='todo-list__item-text'
            onDoubleClick={()=>this.handleShowEdit(this.props.id)}
          >{this.props.value}</span>
          <button
            className='todo-list__item-close'
            onClick={()=>this.delete(this.props.id)}
          >X</button>
        </div>
        {input}
      </li>
    );
  }
}

export default TodoItem
import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props){
  const list = props.items;
  if(!list){
    return null;
  }
    return(
      <ul className="todo-list">
        { list.map(item=>
            <TodoItem
              key={item.id}
              id={item.id}
              value={item.value}
              checked={item.checked}
              toggle={props.toggle}
              delete={props.delete}
              edit={props.edit}
              editing={props.editing}
              editChange={props.editChange}
              editBlur={props.editBlur}
              editValue={props.editValue}
              editSave={props.editSave}
            />
          )
        }
      </ul>
    );
}

function ToggleAllLabel(props){
  if(!props.itemsLength){
    return null;
  }
  return(
    <label className="toggle-all-label" htmlFor="toggle-all" onClick={props.toggleAll}></label>
  );
}

class Main extends React.Component{

  render(){
    const itemsLength = this.props.quantityItems;
    return(
      <section className="main">
        <input
          className={this.props.completedCounter === itemsLength ? "toggle-all checked" : "toggle-all"}
          id="toggle-all"
          type="checkbox">
        </input>
        <ToggleAllLabel
          itemsLength={itemsLength}
          toggleAll={()=>this.props.toggleAll()}
        />
        <TodoList
          items={this.props.items}
          toggle={this.props.toggle}
          delete={this.props.delete}
          editing={this.props.editing}
          edit={this.props.edit}
          editChange={this.props.editChange}
          editBlur={this.props.editBlur}
          editValue={this.props.editValue}
          editSave={this.props.editSave}
        />
      </section>
    );
  }
}



export default Main
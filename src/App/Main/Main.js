import React from 'react';
import TodoItem from './TodoItem/TodoItem';
import  {ToggleAllInput, ToggleAllLabel, TodoList} from './MainStyle';

class Main extends React.Component{
  state = {
    textFromEditInput: '',
    editing: null,
  }

  toggleAll = () => {
    const array = this.props.store.getItem() || [];

    array.every(el=> el.checked === true) ?
      this.removeCheckedAllItems(array)
        : this.checkedAllItems(array);
  }

  checkedAllItems(array){
    array.forEach(el=>{
      el.checked = true;
    })

    this.props.store.setItem(array);
    this.props.reRender();
  }

  removeCheckedAllItems(array){
    array.forEach(el=>{
      el.checked = false;
    })

    this.props.store.setItem(array);
    this.props.reRender();
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
    const itemsLength = this.props.quantityItems;
    const list = this.props.items;
    let items;
    let ToggleAllLabelWrapper;
    let a;

    if(itemsLength){
      ToggleAllLabelWrapper = ToggleAllLabel(this.props.completedCounter, this.props.quantityItems);
       a = <ToggleAllLabelWrapper
        className="toggle-all-label"
        htmlFor="toggle-all"
        onClick={this.toggleAll}>
      </ToggleAllLabelWrapper>;
    }

    if(list){
      items = list.map(item=>
        <TodoItem
          store={this.props.store}
          key={item.id}
          id={item.id}
          value={item.value}
          checked={item.checked}
          reRender={this.props.reRender}
          items={this.props.items}
          toggle={this.toggle}
          delete={this.delete}
          handleShowEdit={this.handleShowEdit}
          handleChangeEditInput={this.handleChangeEditInput}
          handleSubmitEdit={this.handleSubmitEdit}
          handleChangeBlurInput={this.handleChangeBlurInput}
          editing={this.state.editing}
          textFromEditInput={this.state.textFromEditInput}
        />
      )
    }

    return(
      <section className="main">
        <ToggleAllInput
          className="toggle-all"
          id="toggle-all"
          type="checkbox">
        </ToggleAllInput>
        {a}
        <TodoList className="todo-list">
          {items}
        </TodoList>
      </section>
    );
  }
}

export default Main
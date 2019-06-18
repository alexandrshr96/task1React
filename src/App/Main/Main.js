import React from 'react';
import TodoItem from './TodoItem/TodoItem';
//import './Main.css';
import  {ToggleAllInput, ToggleAllLabel, TodoList} from './MainStyle';

class Main extends React.Component{

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

  render(){
    const itemsLength = this.props.quantityItems;
    const list = this.props.items;
    let items;
    let ToggleAllLabelWrapper;
    let a;

    if(itemsLength){
      ToggleAllLabelWrapper = ToggleAllLabel(this.props.completedCounter, this.props.quantityItems);
      //console.log(toggleAllLabelWrapper);

      //console.log(ToggleAllLabel(this.props.completedCounter, this.props.quantityItems));
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

// "browserslist": {
//   "production": [
//     ">0.2%",
//     "not dead",
//     "not op_mini all"
//   ],
//   "development": [
//     "last 1 chrome version",
//     "last 1 firefox version",
//     "last 1 safari version"
//   ]
// }



export default Main
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class Store {
  constructor(name){
    this.name = name;
    this.store = localStorage;
  }

  getItem() {
    return JSON.parse(this.store.getItem(this.name));
  }

  setItem(array) {
    this.store.setItem(this.name, JSON.stringify(array));
  }
}

const initialValue = {
  filter: 'all'
};

let initState = new Store('initState');
initState.setItem(initialValue);

let filterItem = new Store('filterItem');

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todoItems: [],
      textFromHeaderInput: '',
      textFromEditInput: '',
      nowShowing: '',
      editing: null,
    };
    this.store = new Store('items');
  }

  componentDidMount(){
    this.filterUpdate();
  }

  render(){
    const quantityItems = this.store.getItem().length;
    return(
      <section className='todo'>
        <Header
          update={this.handleChangeInput.bind(this)}
          save={this.handleSubmitInput.bind(this)}
          value={this.state.textFromHeaderInput}
        />
        <Main
          items={this.state.todoItems}
          quantityItems={quantityItems}
          toggle={this.toggle.bind(this)}
          delete={this.delete.bind(this)}
          edit={this.handleShowEdit.bind(this)}
          editChange={this.handleChangeEditInput.bind(this)}
          editBlur={this.handleChangeBlurInput.bind(this)}
          editing={this.state.editing}
          editValue={this.state.textFromEditInput}
          editSave={this.handleSubmitEdit.bind(this)}
          toggleAll={this.toggleAll.bind(this)}
          completedCounter={this.completedCounter()}
        />
        <Footer
          nowShowing={this.state.nowShowing}
          count={this.updateCounter()}
          quantityItems={quantityItems}
          completedCounter={this.completedCounter()}
          filterUpdate={this.filterUpdate.bind(this)}
          clearChecked={this.clearCheckedElements.bind(this)}
        />
      </section>
    );
  }

  handleChangeInput(e){
    this.setState({ textFromHeaderInput: e.target.value });
  }

  handleSubmitInput(event){
    if (event.keyCode !== 13) {
      return;
    }

    event.preventDefault();
    const todoItems = this.state.todoItems.slice();
    let val = this.state.textFromHeaderInput.trim();

    if(!val){
      return;
    }

    const newItem = {
      id: Date.now(),
      value: this.state.textFromHeaderInput,
      checked: false
    };

    this.setState({
      todoItems: todoItems.concat(newItem),
      textFromHeaderInput: ''
    });

    this.updateItemsStorage(newItem);
    this.filterUpdate();
  }

  handleShowEdit(id){
    this.setState({
      editing: id
    });
  }

  handleChangeEditInput(e){
    this.setState({
      textFromEditInput: e.target.value,
    });
  }

  handleSubmitEdit(e){
    if (e.keyCode !== 13) {
      return;
    }

    e.preventDefault();

    const array = this.store.getItem();
    let val = this.state.textFromEditInput.trim();

    if(!val){
      return;
    }

    array.forEach(el=>{
      if(el.id == e.target.id){
        el.value = this.state.textFromEditInput;
      }
    })
    this.store.setItem(array);
    this.filterUpdate();
  }

  handleChangeBlurInput(){
    this.setState({
      editing: null,
      textFromEditInput: ''
    });
  }


  updateItemsStorage(newItem){
    const array = this.store.getItem() || [];
    array.push(newItem)
    this.store.setItem(array);
  }

  toggle(id){
    const array = this.store.getItem() || [];

    array.find(el => {if(el.id === id) el.checked = !el.checked});
    this.store.setItem(array);
    this.filterUpdate();
  }

  delete(id){
    const array = this.store.getItem() || [];

    array.splice(array.indexOf(array.find(el=> el.id === id )),1);
    this.store.setItem(array);
    this.filterUpdate();
  }

  toggleAll(){
    const array = this.store.getItem() || [];

    array.every(el=> el.checked === true) ?
      this.removeCheckedAllItems(array)
        : this.checkedAllItems(array);
  }

  checkedAllItems(array){
    array.forEach(el=>{
      el.checked = true;
    })
    this.store.setItem(array);
    this.filterUpdate();
  }

  removeCheckedAllItems(array){
    array.forEach(el=>{
      el.checked = false;
    })
    this.store.setItem(array);
    this.filterUpdate();
  }

  updateCounter(){
    const array = this.store.getItem() || [];
    let counter = 0;

    if(array.length !== 0){
      array.forEach(el => {
        if(!el.checked) counter++;
      });
    }
    return counter;
  }

  completedCounter(){
    const array = this.store.getItem() || [];
    let counter = 0;

    if(array.length !== 0){
      array.forEach(el => {
        if(el.checked) counter++;
      });
    }
    return counter;
  }



  filterUpdate(filterName){
    const array = this.store.getItem() || [];
    const ff = filterItem.getItem() !== null ?
      filterItem.getItem()
        : initState.getItem().filter;
    const name = filterName !== undefined ?
      filterName
        : ff;
    let newArray = [];

    if(array.length !== 0){
      newArray = name === 'active' ?
        array.filter(el=> el.checked === false)
          : name === 'completed' ?
          array.filter(el=> el.checked === true)
            : array;
    }

    filterItem.setItem(name);
    this.setState({
      todoItems: newArray,
      nowShowing : name,
      editing: null,
      textFromEditInput: ''
    });
  }


  clearCheckedElements(){
    const array = this.store.getItem() || [];

    if(array.length !== 0){
      this.store.setItem(array.filter(element=> !element.checked));
    }

    this.filterUpdate();
  }
}


export default App;

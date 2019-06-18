import React from 'react';
import Store from './Store'
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';


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
      nowShowing: '',
    };
    this.store = new Store('items');
  }

  componentDidMount(){
    this.filterUpdate();
  }

  // componentDidUpdate(prevProps, prevState){
  //   let store = this.store.getItem();
  //   //console.log('prevState',prevState);
  //   //console.log('store', store);

  //   if(this.state.textFromHeaderInput !== prevState.textFromHeaderInput){
  //     console.log('----');
  //     console.log('store',store);
  //     console.log('todoItems',this.state.todoItems);
  //     this.setState({
  //       todoItems: store,
  //     });
  //   }
  // }

  handleChangeInput = (e) => {
    this.setState({
      textFromHeaderInput: e.target.value
    });
  }

  handleSubmitInput = (e) => {
    if (e.keyCode !== 13) {
      return;
    }

    e.preventDefault();

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

  updateItemsStorage(newItem){
    const array = this.store.getItem() || [];

    array.push(newItem)

    this.store.setItem(array);
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

  filterUpdate = (filterName) => {
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
    });
  }


  clearCheckedElements = () => {
    const array = this.store.getItem() || [];

    if(array.length !== 0){
      this.store.setItem(array.filter(element=> !element.checked));
    }

    this.filterUpdate();
  }

  render(){
    const quantityItems = this.store.getItem().length;

    return(
      <section className='todo'>
        <Header
          update={this.handleChangeInput}
          save={this.handleSubmitInput}
          value={this.state.textFromHeaderInput}
        />
        <Main
          items={this.state.todoItems}
          quantityItems={quantityItems}
          store={this.store}
          reRender={this.filterUpdate}
          completedCounter={this.completedCounter()}
        />
        <Footer
          nowShowing={this.state.nowShowing}
          count={this.updateCounter()}
          quantityItems={quantityItems}
          completedCounter={this.completedCounter()}
          filterUpdate={this.filterUpdate}
          clearChecked={this.clearCheckedElements}
        />
      </section>
    );
  }
}


export default App;

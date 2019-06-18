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

export default Store


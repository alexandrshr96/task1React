import React from 'react';

function FilterLink(props){
  if(props.nowShowing === props.value){
    return(
      <a
        href="#"
        className={`filters__link ${props.value} check`}
        onClick={props.handleClick}
      >{props.value}</a>
    );
  }else{
    return(
      <a
        href="#"
        className={`filters__link ${props.value}`}
        onClick={props.handleClick}
      >{props.value}</a>
    );
  }
}

function FilterItem(props){
  return(
    <li className="filters__item">
      <FilterLink
        value={props.value}
        filterUpdate={props.filterUpdate}
        nowShowing={props.nowShowing}
        handleClick={()=>props.filterUpdate(props.value)}
      />
    </li>
  );
}

function FilterList(props){
  const filterItems = props.filterItems;
  return(
    <ul className="filters">
      {filterItems.map(item=>
        <FilterItem
          key={filterItems.indexOf(item)}
          value={item}
          filterUpdate={props.filterUpdate}
          nowShowing={props.nowShowing}
        />
      )}
    </ul>
  );
}



class Footer extends React.Component {
  constructor(props){
    super(props);
    this.filterItem = ['all','active','completed'];
  }

  render(){
    if(this.props.quantityItems === 0){
      return null;
    }
    return(
      <footer className="footer">
        <div className="footer__left">
          <span className="todo-count">
            <strong>{this.props.count}</strong>
            <span> items left</span>
          </span>
        </div>
        <div className="footer__middle">
          <FilterList
            filterItems={this.filterItem}
            filterUpdate={this.props.filterUpdate}
            nowShowing={this.props.nowShowing}
          />
        </div>
        <div className="footer__right">
          <button
            className={this.props.completedCounter > 0 ? "clear-btn show" : "clear-btn"}
            onClick={this.props.clearChecked}
          >Clear completed</button>
        </div>
      </footer>
    );
  }
}

export default Footer

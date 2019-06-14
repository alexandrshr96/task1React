import React from 'react';

class Header extends React.Component{

  render(){
    return(
      <header className="header">
        <h1 className="header__title">todos</h1>
        <input className="header__input" placeholder="What needs to be done?"
          onChange={this.props.update}
          onKeyDown={this.props.save}
          value={this.props.value}
        ></input>
      </header>
    );
  }
}

export default Header
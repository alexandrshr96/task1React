import React from 'react';
import * as el from './FooterStyle';


class Footer extends React.Component {
  constructor(props){
    super(props);
    this.filterItem = ['all','active','completed'];
  }

  render(){
    if(this.props.quantityItems === 0){
      return null;
    }

    let clearButton;

    if(this.props.completedCounter > 0){
      clearButton = <el.Clearbutton
        className="clear-btn"
        onClick={this.props.clearChecked}
    >Clear completed</el.Clearbutton>
    }

    return(
      <el.SemanticFooter className="footer">
        <el.FooterLeft className="footer__left">
          <span className="todo-count">
            <strong>{this.props.count}</strong>
            <span> items left</span>
          </span>
        </el.FooterLeft>
        <el.FooterMiddle className="footer__middle">
          <el.Filters className="filters">
            {this.filterItem.map(item=>
              <el.FiltersItem key={this.filterItem.indexOf(item)} className="filters__item">
                <el.FiltersLink
                  href="#"
                  className={this.props.nowShowing === item ? `filters__link ${item} check` : `filters__link ${item}`}
                  onClick={()=>this.props.filterUpdate(item)}
                >{item}</el.FiltersLink>
              </el.FiltersItem>
            )}
          </el.Filters>
        </el.FooterMiddle>
        <el.FooterRight className="footer__right">
          {clearButton}
        </el.FooterRight>
      </el.SemanticFooter>
    );
  }
}

export default Footer

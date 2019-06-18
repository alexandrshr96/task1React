import React from 'react';
//import './Header.css';
import styled from 'styled-components';

const Input = styled.input`
      width: 100%;
      padding: 16px 16px 16px 60px;
      font-size: 24px;
      border: none;
      background: rgba(0, 0, 0, 0.003);
      box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
      &::placeholder{
        color: #e6e6e6;
      }
    `;
    const SemanticHeader = styled.header`
      text-align: center;
    `;
    const Title = styled.h1`
      position: absolute;
      top: -180px;
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      color: rgba(175, 47, 47, 0.15);
    `;

class Header extends React.Component{

  render(){
    return(
      <SemanticHeader className='header'>
        <Title className="header__title">todos</Title>
        <Input className="header__input" placeholder="What needs to be done?"
          onChange={this.props.update}
          onKeyDown={this.props.save}
          value={this.props.value}
        ></Input>
      </SemanticHeader>
    );
  }
}

export default Header
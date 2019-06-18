import styled from 'styled-components';

const ToggleAllInput = styled.input`
  position: absolute;
  display: none;
`;

 const ToggleAllLabel = (counter,quantity) =>  styled.label`
      position: absolute;
      width: 60px;
      height: 34px;
      font-size: 0;
      top: 14px;
      left: -14px;
      transform: rotate(90deg);
      cursor: pointer;

      &::before {
        content: '❯';
        font-size: 22px;
        padding: 10px 20px;
        color: ${counter === quantity ? "#737373" : "#e6e6e6"};
      }
`;

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export{
  ToggleAllInput,
  ToggleAllLabel,
  TodoList
}
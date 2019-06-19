import styled from 'styled-components';

const TodoListItemLi = (checked) => styled.li`
  position: relative;
  padding: 5px;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  &:hover .todo-list__item-close{
    display: block;
  }
  background: ${checked ? 'url(../../../img/tick.png) no-repeat center center;' : ''}
`;

const TodoListItemContent = styled.div`
  display: flex;
  align-items: center;
`;

const TodoListItemCheck = styled.input`
  display: none;
`;

const TodoListItemCheckLabel = styled.label`
  position: relative;
  width: 35px;
  height: 35px;
  margin: 5px;
  border: 1px solid #d9d9d9;
  border-radius: 50%;
`;

const TodoListItemText = styled.span`
  width: 80%;
  padding: 15px 20px;
`;

const TodoListItemCloseButton = styled.button`
  display: none;
  margin-left: auto;
  margin-right: 15px;
  background: none;
  border: none;
  color: red;
`;

export {
  TodoListItemLi,
  TodoListItemContent,
  TodoListItemCheck,
  TodoListItemCheckLabel,
  TodoListItemText,
  TodoListItemCloseButton
}
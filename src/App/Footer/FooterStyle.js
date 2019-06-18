import styled from 'styled-components';
const SemanticFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 15px;
  border-top: 1px solid #e6e6e6;
  color: #777;
  z-index: 100;
  &::before{
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;
const FooterLeft = styled.div`
  flex: 1 1 0;
  z-index: 10;
  text-align: left;
`;
const FooterMiddle = styled.div`
  flex: 1 1 0;
  z-index: 10;
`;
const FooterRight = styled.div`
  flex: 1 1 0;
  z-index: 10;
  text-align: right;
`;
const Filters = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
const FiltersItem = styled.li`
  &:not(:last-of-type){
    margin-right: 10px;
  }
`;
const FiltersLink = styled.a`
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 3px;
  color: #777;
  &:hover{
    border-color: rgba(175, 47, 47, 0.2);
  }
`;
const Clearbutton = styled.button`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: #777;
  &:hover{
    text-decoration: underline;
  }
`;
export {
  SemanticFooter,
  FooterLeft,
  FooterMiddle,
  FooterRight,
  Filters,
  FiltersItem,
  FiltersLink,
  Clearbutton
}
// const VariablesObject = {
//   SemanticFooter,
//   FooterLeft,
//   FooterMiddle,
//   FooterRight,
//   Filters,
//   FiltersItem,
//   FiltersLink,
//   Clearbutton
// }

 
// .footer{
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   text-align: center;
//   padding: 10px 15px;
//   border-top: 1px solid #e6e6e6;
//   color: #777;
//   z-index: 100;
// }

// .footer::before{
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   content: '';
//   height: 50px;
//   overflow: hidden;
//   box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
// }

// .footer__left, .footer__middle, .footer__right{
//   flex: 1 1 0;
//   z-index: 10;
// }

// .footer__left{
//   text-align: left;
// }

// .footer__right{
//   text-align: right;
// }

// .filters{
//   display: flex;
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
// }

// .filters__item:not(:last-of-type){
//   margin-right: 10px;
// }

// .filters__link{
//   padding: 3px 7px;
//   border: 1px solid transparent;
//   border-radius: 3px;
//   color: #777;
// }

// .filters__link:hover{
//   border-color: rgba(175, 47, 47, 0.2);
// }

// .filters__link.check{
//   border-color: rgba(175, 47, 47, 0.2);
// }

// .clear-btn{
//   margin: 0;
//   padding: 0;
//   background: none;
//   border: none;
//   cursor: pointer;
//   color: #777;
//   opacity: 0;
// }

// .clear-btn:hover{
//   text-decoration: underline;
// }
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *:focus {
    outline: none;
  }

  body {
    margin: 0;
  }

  .pagination {
    display: inline-flex;
    list-style-type: none;
    justify-content: space-evenly;
    width: 90%;
  }

  .active {
    box-shadow: 0 0 1pt 0pt blue;
    background-color: #dbf3ff;
  }

  .scroller {
    box-shadow: 0 0 1pt 0pt blue;
  }

  .page {
    padding: 5px 10px;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      box-shadow: 0 0 1pt 0pt black;
      background-color: #f2f2f2;
    }
  }
`

const AppDiv = styled.div`
  width: 100%
`

const Header = styled.header`
  display: block;
  width: 100%;
  background-color: #dbf3ff;
  font-size: 30px;
  padding: 10px 15px;
  color: #454545;
`

const StyledSearch = styled.input`
  border-radius: 25px;
  width: 70%;
  font-size: 30px;
  display: block;
  margin: 25px auto 5px;
  padding: 15px 25px;
  &:hover {
    box-shadow: 0px 0px 5px;
    transition-delay: .05s;
  };
`

const SearchButton = styled.button`
  margin: 5px auto;
  display: block;
  border-radius: 10px;
  background-color: #ededed;
  border: none;
  font-size: 20px;
  padding: 5px 10px;
  color: #737373;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #f2f2f2;
    transition-delay: .05s;
  };
`

const EventDiv = styled.div`
  margin: 10px auto;
  font-size: 16px;
  display: block;
  width: 90%;
  padding: 5px 15px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: #fbfbfb;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    transition-delay: .05s;
  };
`

const EventDescription = styled.p`
  font-size: 18px;
`

const EventHeader = styled.span`
  font-weight: bold;
`
const EventInformation = styled.span`
  font-style: italic;
`

export {
  GlobalStyle,
  AppDiv,
  StyledSearch,
  SearchButton,
  Header,
  EventDiv,
  EventDescription,
  EventHeader,
  EventInformation,
};
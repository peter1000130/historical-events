import React from 'react';
import getHistoricalData from './api.js';
import PageResults from './PageResults.jsx';
import {
  GlobalStyle,
  AppDiv,
  StyledSearch,
  SearchButton,
  Header,
} from './StyledComponents.jsx'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      PageResults: '',
      totalRecords: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({searchText: value});
  }

  async handlePageClick(data) {
    const { searchText, totalRecords } = this.state;
    const { selected } = data;
    const newPageSelection = selected + 1
    const result = await getHistoricalData(searchText, newPageSelection);
    const { data: resultData } = result;
    
    this.setState({PageResults: <
      PageResults 
      pageData={resultData}
      searchText={searchText}
      totalRecords={totalRecords}
      handlePageClick={this.handlePageClick}
    />});
  }

  async handleSubmit(event) {
    const { searchText } = this.state;
    event.preventDefault();

    const result = await getHistoricalData(searchText, 1);
    const { headers } = result;
    const totalRecords = Number(headers["x-total-count"]);
    const { data } = result;
  
    this.setState({
      totalRecords: totalRecords,
      PageResults: <
        PageResults 
        pageData={data}
        searchText={searchText}
        totalRecords={totalRecords}
        handlePageClick={this.handlePageClick}
      />
    });
  }
  
  render() {
    const {PageResults} = this.state

    return (
      <React.Fragment>
        <GlobalStyle />
        <AppDiv>
          <Header>World History Archive</Header>
          <form onSubmit={this.handleSubmit}>
            <StyledSearch id="searchText" type="text" placeholder="Example: Edo Period" onChange={this.handleChange}></StyledSearch>
            <SearchButton type="submit">Search</SearchButton>
          </form>
          {PageResults}
        </AppDiv>
      </React.Fragment>
    )
  }
}

export default HomePage;

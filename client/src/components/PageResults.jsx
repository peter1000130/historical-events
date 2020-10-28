import React from 'react';
import ReactPaginate from 'react-paginate';
import getHistoricalData from './api.js';

class PageResults extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props
    this.state = {
      page: 1,
      pageData: data,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  async handlePageClick(data) {
    const { searchText } = this.props;
    const { selected } = data;
    const newPageSelection = selected + 1
    const result = await getHistoricalData(searchText, newPageSelection);
    this.setState({pageData: result.data});
  }

  render() {
    const {pageData} = this.state
    console.log(pageData)

    const historicalEvents = pageData.map((historicalEvent, index) => {
      const {
        category1,
        category2,
        date,
        description,
      } = historicalEvent;
      
      return (
        <div key={index}>
          <p>{date}</p>
          <p>{description}</p>
          <p>{`${category1} ${category2}`}</p>
        </div>
      )
    })

    return (
      <div id="results">
        <div id="historicalData">
          {historicalEvents}
        </div>
        <ReactPaginate
          previousLabel={'Previous Page'}
          nextLabel={'Next Page'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageRangeDisplayed={3}
          marginPagesDisplayed={3}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default PageResults;

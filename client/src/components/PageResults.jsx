import React from 'react';
import ReactPaginate from 'react-paginate';
import {
  EventDiv,
  EventDescription,
  EventHeader,
  EventInformation
} from './StyledComponents.jsx'

class PageResults extends React.Component {
  constructor(props) {
    super(props);
    const { totalRecords } = this.props
    this.state = {
      maxPages: Math.floor(totalRecords/10),
    };
  }

  render() {
    const { maxPages } = this.state;
    const { pageData, handlePageClick } = this.props;
  
    console.log(pageData);

    const historicalEvents = pageData.map((historicalEvent, index) => {
      const {
        category1,
        category2,
        date,
        description,
      } = historicalEvent;
      
      return (
        <EventDiv key={index}>
          <p>
            <EventHeader>
              {'Date '}
            </EventHeader>
            <EventInformation>
              {date}
            </EventInformation>
          </p>
          <EventDescription>
            {description}
          </EventDescription>
          <p>
            <EventHeader>
              {'Tags '}
            </EventHeader>
            <EventInformation>
              {` ${category1}; ${category2}`}
            </EventInformation>
          </p>
        </EventDiv>
      )
    })

    // to do: clean up pagination results below
    return (
      <div id="results">
        <div id="historicalData">
          {historicalEvents}
        </div>
        <ReactPaginate
          pageCount={maxPages}
          pageRangeDisplayed={2}
          marginPagesDisplayed={2}
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page'}
          previousClassName={'page scroller'}
          nextClassName={'page scroller'}
          activeClassName={'active'}
        />
      </div>
    )
  }
}

export default PageResults;

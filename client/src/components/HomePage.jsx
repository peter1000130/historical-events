import React from 'react';
import getHistoricalData from './api.js';
import PageResults from './PageResults.jsx';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      PageResults: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { target } = event;
    const { value } = target;
    this.setState({searchText: value});
  }

  async handleSubmit(event) {
    const { searchText } = this.state;
    event.preventDefault();
    const result = await getHistoricalData(searchText, 1);

    const { data } = result;
    this.setState({
      PageResults: <PageResults data={data} searchText={searchText}/>
    });
  }
  
  render() {
    const {PageResults} = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input id="searchText" type="text" placeholder="Example: Edo Period" onChange={this.handleChange}></input>
          <button type="submit">Search Historical Event</button>
        </form>
        {PageResults}
      </div>
    )
  }
}

export default HomePage;

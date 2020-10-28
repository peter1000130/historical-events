import axios from 'axios'

const getHistoricalData = function getHistoricalEventData(searchTerm, page) {
  //to do: apply the search to filter out results
  return axios.get(`events?q=${searchTerm}&_page=${page}`)
}

export default getHistoricalData;
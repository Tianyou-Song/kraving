import axios from 'axios';


export const zomSearch = (searchInfo) => dispatch => {
  axios
    .get('/api/zomato/search', {
    params: {
      searchInfo
    }})
    .then(res => {
      debugger;
      // const businesses = res.data
      // dispatch(setSearchResults(businesses))
    })
    .catch(err => {
      console.log(err);
    });
}

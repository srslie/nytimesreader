import axios from 'axios';

// get request from NY Times API
export const getHomeArticles = async () => {

  const urlWithKey = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`

  try {
    console.log('in getHomeArticles')
    const response = await axios.get(urlWithKey);
    console.log(response.data.results);
    return response.data.results
  } catch (error) {
    console.error(error)
  }
}
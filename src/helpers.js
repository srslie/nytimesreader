import axios from 'axios';

// get request from NY Times API

export const getArticles = async (section) => {
  console.log(`in get ${section} Articles`)
  const urlWithKey = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${process.env.REACT_APP_API_KEY}`

  try {
    const response = await axios.get(urlWithKey);
    console.log(response.data.results);
    return response.data.results
  } catch (error) {
    console.error(error)
  }
}

export const parseDate = (date) => {
  return date
    .toLocaleString('en-US')
    .split(' ')
    .splice(0, 4)
    .join(' ')
}
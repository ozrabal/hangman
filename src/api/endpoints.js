const API_KEY = process.env.REACT_APP_API_KEY

const endpoints = {
  GET_WORD: `http://api.wordnik.com:80/v4/words.json/randomWord?maxLength=11&api_key=${API_KEY}`,
}

export default endpoints

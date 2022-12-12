import axios from "axios";

const fetchNewsRequest = () => {
  return {
    type: "FETCH_NEWS_REQUEST",
  }
}

const fetchNewsSuccess = (news) => {
  return {
    type: "FETCH_NEWS_SUCCESS",
    payload: news
  }
}

const fetchNewsFailure = (error) => {
  return {
    type: "FETCH_NEWS_FAILURE",
    payload: error,
  }
}

export const fetchNews = category => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    axios.get(`https://inshorts.deta.dev/news?category=${category}`)
    .then((response) => {
      const news = response.data;
      dispatch(fetchNewsSuccess(news))
    })
    .catch((error) => {
      const errorMsg = error.message;
      dispatch(fetchNewsFailure(errorMsg))
    })
  }
}
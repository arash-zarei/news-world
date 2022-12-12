import React,{ useEffect } from "react";

// import { Routes, Route, Navigate } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchNews } from "./redux/news/newsActions";

// Components
import Header from "./components/header/Header";
import NavLink from "./components/navlink/NavLink";
import NewsCard from "./components/newsCard/NewsCard";
import Loading from "./components/loading/Loading";

// Style
import "./App.css";

const App = () => {
  const mode = useSelector((state) => state.modeState.mode);
  const newsData = useSelector(state => state.newsState)
  const categoryNews = useSelector(state => state.categoryState.category)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNews(categoryNews))
  }, [categoryNews])

  return (
    <div id={mode} className="parent">
      <Header />
      <NavLink />
      <div className="news">
        {
          newsData.loading ? <Loading /> :
          newsData.news.data?.map(news => <NewsCard key={news.id} data={news} />)
        }
      </div>
    </div>
  );
};

export default App;

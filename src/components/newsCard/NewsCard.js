import React, { useState } from "react";

// Styles
import "./NewsCard.css";

const NewsCard = ({ data }) => {

    const [isMore , setIsMore] = useState(false)

  const { author, date, time, title, imageUrl, content } = data;

  return (
    <div className="nwesCard">
      <div className="image">
        <img src={imageUrl} alt="news" />
      </div>
      <div className="description">
        <p className="author">{author}</p>
        <div className="titleMore">
          <h4 className="newsTitle">{title}</h4>
          <p className={`contentNews ${isMore && 'display'}`}>{content}</p>
          <button onClick={() => setIsMore(!isMore)} className="moreRead">{isMore ? 'fewer' : 'more...'}</button>
        </div>
        <div className="dateTime">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

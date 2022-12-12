import React from "react";

// Gif
import loading from "../../gif/loading_anim.gif";

const Loading = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{width: '100%'}} src={loading} alt="LOADING ..." />
    </div>
  );
};

export default Loading;

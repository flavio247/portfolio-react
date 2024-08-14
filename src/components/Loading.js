import React from "react";
import loading from "../assets/loading.gif";
const Loading = () => {
  return (
    <div className="loading-position">
      <div className="lds-roller">
        <img src={loading} height="250px" width="250px"></img>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;

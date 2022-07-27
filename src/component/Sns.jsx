import React from "react";
import githubPic from "../Images/github.png";
import gmailPic from "../Images/gmail.png";

export const Sns = () => {
  return (
    <div className="container text-center">
      <a href="https://github.com/takumi12311123">
        <img src={githubPic} style={{ width: "200px", height: "100px" }} />
      </a>
      <a href="mailto:takumiakasaka1231@gmail.com">
        <img src={gmailPic} style={{ width: "100px", height: "100px" }} />
      </a>
    </div>
  );
};

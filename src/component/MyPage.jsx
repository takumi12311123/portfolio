import React from "react";

import profileImage from "../Images/mypic.jpg";

export const MyPage = () => {
  return (
    <div className="container text-center">
      <img
        src={profileImage}
        style={{ textAlign: "left" }}
        className="profileImage"
      />
      <h1>経歴</h1>
    </div>
  );
};

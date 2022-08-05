import React from "react";

import profileImage from "../Images/mypic.jpg";

export const MyPage = () => {
  return (
    <div className="container text-center">
      <img
        src={profileImage}
        style={{ textAlign: "left" }}
        className="profileImage"
        alt=""
      />
      <h1>経歴</h1>
      <h3>2001.12.31誕生</h3>
      <h3>2007年けやき小学校入学</h3>
      <h3>2013年明照学園樹徳中学校入学</h3>
      <h3>2016年明照学園樹徳高校入学</h3>
      <h3>2019年青山学院大学入学</h3>
      <p>大学生になり、プログラミングと出会う</p>
      <p>HTML,CSS,JavaScript,TypeScript,Pythonといった言語を扱う</p>
      <p>フレームワークは、React,GraphQL,Django,fastAPIを扱う</p>
    </div>
  );
};

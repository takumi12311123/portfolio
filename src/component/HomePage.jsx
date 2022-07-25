import React from "react";
import { Button } from "react-bootstrap";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";
import typescriptImage from "../Images/TypeScript.png";
import graphqlImage from "../Images/graphql.png";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>赤坂匠のポートフォリオ</h1>
      <img src={profileImage} className="profileImage" />
      <p>青山学院大学陸上競技部長距離ブロック、駅伝部に所属しています。</p>
      <p>
        大学生になって、陸上を怪我で引退し、マネージャーとして部活動を続けながら、
        プログラミングの勉強を日々しています。
      </p>
      <p>得意言語は、TypeScriptです</p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center" textAlign="center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">webアプリケーション</h4>
              <p class="text-muted">
                バックエンドとフロントエンドを両方できます。
                フルスタックエンジニアを目標にしています。
                ReactとgraphQLを使うことが多いです。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={typescriptImage} />
              <h4>TypeScript/JavaScript/Python</h4>
              <p>TypeScript/JavaScript/Pythonがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={graphqlImage} />
              <h4>GraphQL/fastAPI/Django</h4>
              <p>GraphQL/fastAPI/Djangoがつかえます</p>
            </div>
          </div>
          <Link to={`/skills`}>
            <button type="button" class="btn btn-primary">
              スキル一覧
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

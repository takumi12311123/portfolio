import React from "react";
import awsImage from "../Images/aws.png";
import fastAPIImage from "../Images/fastapi-1.svg";
import graphqlImage from "../Images/graphql.png";
import jsImage from "../Images/js.png";
import pythonImage from "../Images/python.png";
import reactImage from "../Images/react.png";
import typescriptImage from "../Images/TypeScript.png";

export const AllSkill = () => {
  return (
    <section id="skill">
      <div class="text-center">
        <h1 class="title">スキル</h1>
        <div class="row text-center">
          <div class="col-md-4 services">
            <img src={typescriptImage} alt="" />
            <h4>TypeScript</h4>
            <p>TypeScriptがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={jsImage} alt="" />
            <h4>JavaScript</h4>
            <p>JavaScriptがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={pythonImage} alt="" />
            <h4>Python</h4>
            <p>Pythonがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={reactImage} alt="" />
            <h4>React</h4>
            <p>Reactがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={graphqlImage} alt="" />
            <h4>GraphQL</h4>
            <p>GraphQLがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={fastAPIImage} alt="" />
            <h4>fastAPI</h4>
            <p>fastAPIがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={awsImage} alt="" />
            <h4>aws</h4>
            <p>awsがつかえます</p>
          </div>
        </div>
      </div>
    </section>
  );
};

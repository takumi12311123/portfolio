import React from "react";
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import graphqlImage from "../Images/graphql.png";
import typescriptImage from "../Images/TypeScript.png";

export const AllSkill = () => {
  return (
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
            <img src={jsImage} />
            <h4>JavaScript</h4>
            <p>JavaScriptがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={reactImage} />
            <h4>React</h4>
            <p>Reactがつかえます</p>
          </div>
          <div class="col-md-4 services">
            <img src={graphqlImage} />
            <h4>GraphQL</h4>
            <p>GraphQLがつかえます</p>
          </div>
        </div>
      </div>
    </section>
  );
};

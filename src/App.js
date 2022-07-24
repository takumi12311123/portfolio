import "./App.css";
import { BlogPage } from "./component/BlogPage";
import { Header } from "./component/Header";
import { HomePage } from "./component/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AllSkill } from "./component/AllSkill";
import { Sns } from "./component/Sns";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/skills" element={<AllSkill />} />
          <Route path="/contact" element={<Sns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

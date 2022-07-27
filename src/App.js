import "./App.css";
import { MyPage } from "./component/MyPage";
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
          <Route path="/aboutMe" element={<MyPage />} />
          <Route path="/skills" element={<AllSkill />} />
          <Route path="/contact" element={<Sns />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

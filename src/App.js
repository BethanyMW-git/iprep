import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { SurveyOne } from "./surveycomponents/surveydisplay/displaysurvey";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/survey" element={<SurveyOne />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

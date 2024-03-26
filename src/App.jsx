import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../src/pages/home/Home";
import NoPage from "../src/pages/noPage/NoPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

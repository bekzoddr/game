import { Routes, Route } from "react-router-dom";
import Yes from "./routes/yes/Yes";
import Home from "./routes/home";
function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </main>
  );
}

export default App;

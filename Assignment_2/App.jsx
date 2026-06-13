import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountrySearch from "./CountrySearch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CountrySearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

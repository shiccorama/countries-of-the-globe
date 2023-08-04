import "./App.css";
import Home from "./pages/home/Home";

// using Route and Routes for navigation
import {Route, Routes} from "react-router-dom"
// import Header from ./components/header/Header.jsx
import Header from "./components/header/Header" ;
import CountryDetail from "./pages/country-detail/CountryDetail";

const App = () => {
  return <main className="main-container">
    <Routes>
      <Route exact path="/" element={<Header />} >
        <Route index element={<Home />} />
        <Route exact path="/:code" element={<CountryDetail />} />
      </Route>
    </Routes>
  </main>;
};

export default App;

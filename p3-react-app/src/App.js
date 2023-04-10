import Home from "./components/Home";
import Popular from "./components/Popular";
import Search from "./components/Search";
import { Routes, Route, Link } from 'react-router-dom';
import PopularRecipes from "./Page/PopularRecipes";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">Popular</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/popular" element={<Popular />} /> */}
        <Route path="/search" element={<Search />} />
        <Route path="/popular-recipes" element={<PopularRecipes />} />
      </Routes>
      <Popular />
    </>
  );
}

export default App;

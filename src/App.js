import { Routes, Route, useLocation } from "react-router-dom";
import { Splash } from "./ui/pages/Splash";
import Layout from "./ui/components/Layout/Layout";
import { Movies } from "./ui/pages/Movies";
import { Series } from "./ui/pages/Series";
import { SearchResults } from "./ui/pages/SearchResults/SearchResults";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Splash />} />
          <Route path="movies">
            <Route index element={<Movies />} />
            <Route path=":date" element={<SearchResults />} />
          </Route>
          <Route path="series">
            <Route index element={<Series />} />
            <Route path=":date" element={<SearchResults />} />
          </Route>
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

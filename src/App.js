import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Layout from "./components/Layout";
import Covid19 from "./pages/Covid19";
import Saved from "./pages/Saved";
import Search from "./pages/Search";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="programming" element={<Programming />} />
        <Route path="Covid19" element={<Covid19 />} />
        <Route path="Saved" element={<Saved />} />
        <Route path="Search/:q" element={<Search />} />
        {/* <Route path="*" element={<NoPage />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Resume from "./pages/Resume.jsx";
import Software from "./pages/Software.jsx";
import Games from "./pages/Games.jsx";
import Other from "./pages/Other.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/games" element={<Games />} />
        <Route path="/software" element={<Software />} />
        {/* <Route path="/other" element={<Other />} /> */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

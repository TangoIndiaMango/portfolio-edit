import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import MainLayout from "./components/Layout/mainlayout";
import HomePage from "./pages/HomePage";
import Story from "./pages/HomePage/story";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index Component={MainLayout(HomePage)} />
        <Route path="/contact" Component={Contact} />
        <Route path="/story" Component={Story} />

      </Routes>
    </Router>
  );
}

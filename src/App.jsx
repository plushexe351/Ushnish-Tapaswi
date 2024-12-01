import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Overview from "./pages/Overview/Overview";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Projects from "./pages/Projects/Projects";
import "./style.scss";
import TopBar from "./components/TopBar/TopBar";
import Footer from "./components/Footer/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ScrollToTop />
        <TopBar />
        <Routes>
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;

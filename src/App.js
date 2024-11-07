import { BrowserRouter as Router } from "react-router-dom";
import Content from "./Component/Content";
import Navbar from "./Component/Navbar";
import ScrollToTop from "./Component/ScrollTotop";
import Header from "./Component/Header";

function App() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className="App">
      <Router>
        <div id="appMain">
          <Header />
          <Navbar />
          <ScrollToTop />
          <Content />
        </div>
      </Router>
    </div>
  );
}

export default App;

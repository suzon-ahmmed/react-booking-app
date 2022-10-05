import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotel from "./components/pages/Hotel";
import Home from "./components/pages/Home";
import HotelList from "./components/pages/HotelList";
// import Layout from "./components/component/Layout";
function App() {
  return (
    <Router>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/hotels" element={<HotelList />} />
          <Route exact path="/hotel/:id" element={<Hotel />} />
        </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;

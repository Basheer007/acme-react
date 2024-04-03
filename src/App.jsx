import { Header } from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Donate } from "./component/Donate";
import { Shop } from "./component/Shop";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import BucketTransfer from "./components/BucketTransfer/BucketTransfer";
import InfinteScroll from "./components/InfiniteScroll/InfiniteScroll";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Home/Sidebar";
import Dashboard from "./components/Home/Dashboard";
import SplitBox from "./components/SplitBox/SplitBox";
import HitIt from "./components/HitIt/HitIt";
import Navbar from "./components/Home/Navbar";
import NestedComponents from "./components/NestedComponents/NestedComponents";

// function App() {
//   return (
//     <div className="App">
//       {/* <BucketTransfer /> */}
//       {/* <InfinteScroll /> */}
//       {/* <SplitBox /> */}
//       <HitIt />
//     </div>
//   );
// }
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/elementTransfer" element={<BucketTransfer />} />
                <Route path="/infiniteScroll" element={<InfinteScroll />} />
                <Route path="/splitBox" element={<SplitBox />} />
                <Route path="/hitIt" element={<HitIt />} />
                <Route
                  path="/nestedComponents"
                  element={<NestedComponents />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;

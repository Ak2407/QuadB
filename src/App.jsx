import ModalForm from "./components/ModalForm";
import Home from "./pages/Home"
import Summary from "./pages/Summary"
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
    <div>
        <Toaster position="top-right"></Toaster>
      </div>
    <div className="font-poppins">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </BrowserRouter>
        {/* <ModalForm/> */}
    </div>
    </>
  )
}

export default App

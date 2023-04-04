import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notification from "./pages/Notification";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/signup/SignUp";
import Verify from "./pages/auth/signup/Verify";
import Save from "./pages/auth/signup/Save";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw"; 

// import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";
import Promotions from "./pages/Promotions";
import TxHistory from "./pages/TxHistory";
import BetHistory from "./pages/BetHistory";
import Account from "./pages/Account";
import Rebate from "./pages/Rebate";


// LoadingOverlay.propTypes = undefined;

function App() {
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   AOS.init({ once: true });
  // }, []);

  return (
    <div className="app-container">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/save" element={<Save />} />
          <Route path="/deposit" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Deposit />
              <Footer />
            </>
          } />
          <Route path="/withdraw" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Withdraw />
              <Footer />
            </>
          } />
          <Route path="/promotions" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Promotions />
              <Footer />
            </>
          } />
          <Route path="/txhistory" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <TxHistory />
              <Footer />
            </>
          } />
          <Route path="/bethistory" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <BetHistory />
              <Footer />
            </>
          } />
          <Route path="/account" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Account />
              <Footer />
            </>
          } />
          <Route path="/rebate" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Rebate />
              <Footer />
            </>
          } />
          <Route path="/notification" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Notification />
              <Footer />
            </>
          } />
          <Route path="/" element={
            <>
              <Header setOpen={setOpen} open={open} />
              <Home />
              <Footer />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

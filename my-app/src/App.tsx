import React from "react";
import s from "./App.module.scss";
import { Routes, Route, } from "react-router-dom";
import Header from "./components/Header/Header";
import AddLiquidity from "./components/AddLiquidity/AddLiquidity";
import Swap from "./components/Swap/Swap";

function App() {
  return <div className={s.app}>
    <Routes>
      <Route path='/' element={<AddLiquidity />} />
      <Route path='/swap' element={<Swap />} />
    </Routes>
  </div>;
}

export default App;

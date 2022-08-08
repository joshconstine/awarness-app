import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button, Box } from "@mui/material";
import Navbar from "./components/shared/Navbars/Navbar";
import DataHome from "./components/pages/DataHome";
import Home from "./components/pages/Home";
import { AppStyle } from "./AppStyles";
function App() {
  let [data, setData] = useState({});

  // 3. Create out useEffect function
  useEffect(() => {
    const url = "https://api.census.gov/data/2017/ecnbasic.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box style={AppStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/data" element={<DataHome />}></Route>
      </Routes>
    </Box>
  );
}

export default App;

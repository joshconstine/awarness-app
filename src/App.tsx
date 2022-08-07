import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@mui/material";

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
    <div>
      <Button variant="outlined">click me</Button>
    </div>
  );
}

export default App;

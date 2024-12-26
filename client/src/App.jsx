import { BrowserRouter, Routes, Route } from "react-router";
import { Typography } from "@mui/material";

import RecipeOverview from "./pages/RecipeOverview";
import RecipeDetails from "./pages/RecipeDetails";

import './App.css'

function App() {

  return (
    <>
    <Typography variant="h2">Recipe app</Typography>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeOverview/>}></Route>
      <Route path="/details/:id" element={<RecipeDetails/>}></Route>
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;

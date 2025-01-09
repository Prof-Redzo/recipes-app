import { BrowserRouter, Routes, Route } from "react-router";
import { Typography } from "@mui/material";
import { Provider } from "react-redux";

import RecipeOverview from "./pages/RecipeOverview";
import RecipeDetails from "./pages/RecipeDetails";
import { Store } from "./redux/store";

import './App.css'
import UserFeedback from "./components/UserFeedback";

function App() {

  return (
    <>
    <Provider store={Store}>
      <UserFeedback/>
    <Typography variant="h2">Recipe app</Typography>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeOverview/>}></Route>
      <Route path="/details/:id" element={<RecipeDetails/>}></Route>
    </Routes>
  </BrowserRouter>
  </Provider>
  </>
  )
}

export default App;

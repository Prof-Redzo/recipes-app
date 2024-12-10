import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'
import RecipeOverview from "./pages/RecipeOverview";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RecipeOverview/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;

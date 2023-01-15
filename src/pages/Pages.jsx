import Home from "./Home"
import { Route,Routes } from "react-router-dom"
import Cuisine from "./Cuisine"
import SearchedItem from "./SearchedItem"
import Recipe from "./Recipe"
function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />}/>
      <Route path="/searched/:search" element={<SearchedItem />}/>
      <Route path="/recipe/:name" element={<Recipe />}/>
    </Routes>
  )
}

export default Pages

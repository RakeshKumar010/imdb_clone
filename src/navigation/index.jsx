import { BrowserRouter,Routes,Route } from "react-router-dom"
import NavBar from "../components/NavBar"
import HomePage from "../pages/HomePage"
import MovieDetails from "../pages/MovieDetails"
import FavList from "../pages/FavList"

// Navigation component that sets up the routes for the app
const Navigation = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route index element={<HomePage/>}/> 
        <Route path="/:id" element={<MovieDetails/>}/> 
        <Route path="/favlist" element={<FavList/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation

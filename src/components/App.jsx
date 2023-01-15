
import { Routes, Route, NavLink } from "react-router-dom";
import Movies from "pages/Movies/Movies";
import { StyledHeader, Nav, StyledLink } from "./HeaderStyled";
import Homepage from "pages/Homepage";
import Details from "pages/MovieDetails/Details";
import Cast from "./Cast/cast";
import Rewiev from "./Review/review";
import { GlobalStyles } from "./GlobalStyles";
export const App = () => {

  return (
    <>
      <StyledHeader>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
  <StyledLink to="/movies">Movies</StyledLink>
  
        </Nav>
      </StyledHeader>
      <Routes>
         <Route path="/goit-react-hw-05-movies/" element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
           <Route path="movies/:movieId" element={<Details/>} >
          <Route path="cast" element={<Cast/>} />
      <Route path="reviews" element={<Rewiev/>}/>
        </Route>
        <Route path="*" element={<Homepage />}/>
      </Routes>
      <GlobalStyles/>
   </>
    
  );
}


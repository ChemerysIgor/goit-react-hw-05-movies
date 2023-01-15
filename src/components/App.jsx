
import { Routes, Route} from "react-router-dom";
// import Movies from "pages/Movies/Movies";
import { StyledHeader, Nav, StyledLink } from "./HeaderStyled";
import Homepage from "pages/Homepage";
// import Details from "pages/MovieDetails/Details";
// import Cast from "./Cast/cast";
// import Rewiev from "./Review/review";
import { GlobalStyles } from "./GlobalStyles";
import { lazy, Suspense } from "react";


const Movies = lazy(() => import('../pages/Movies/Movies'));
const Details = lazy(() => import('../pages/MovieDetails/Details'));
const Cast = lazy(() => import('./Cast/cast'));
const Reviews = lazy(() => import('./Review/review'))


export const App = () => {

  return (
    <>
      <StyledHeader>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
  <StyledLink to="/movies">Movies</StyledLink>
  
        </Nav>
      </StyledHeader>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
         <Route path="/goit-react-hw-05-movies/" element={<Homepage />} />
        <Route path="movies" element={<Movies />} />
           <Route path="movies/:movieId" element={<Details/>} >
          <Route path="cast" element={<Cast/>} />
      <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Homepage />}/>
        </Routes>
        </Suspense>
      <GlobalStyles/>
   </>
    
  );
}


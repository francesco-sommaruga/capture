//import useState
import { useState } from 'react';

//import react-router
import { Switch, Route } from 'react-router-dom';

//import global styles
import GlobalStyle from './components/styled-components/GlobalStyles';

//import components
import Nav from './components/sections/Nav';

//import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

//import hard-coded movies
import { MovieState } from './movieState';

const App = () => {
    const [movies, setMovies] = useState(MovieState);

    return (
        <div className="App">
            <GlobalStyle />
            <Nav />
            <Switch>
                <Route path="/" exact>
                    <AboutUs />
                </Route>
                <Route path="/contacts" exact>
                    <ContactUs />
                </Route>
                <Route path="/work" exact>
                    <OurWork movies={movies} />
                </Route>
                <Route path="/work/:id">
                    <MovieDetail movies={movies} />
                </Route>
            </Switch>
        </div>
    );
};

export default App;

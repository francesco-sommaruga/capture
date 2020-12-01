//import global styles
import GlobalStyle from './components/GlobalStyles';

//import pages
import AboutUs from './pages/AboutUs';

const App = () => {
    return (
        <div className="App">
            <GlobalStyle />
            <AboutUs />
        </div>
    );
};

export default App;

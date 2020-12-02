import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1>
                <Link to="/">Capture</Link>
            </h1>

            <ul>
                <li key={'nav-1'}>
                    <Link to="/">1. About Us</Link>
                </li>
                <li key={'nav-2'}>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li key={'nav-3'}>
                    <Link to="/contacts">3. Contact Us</Link>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index:100;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
        li {
            padding-left: 10rem;
            position: relative;
        }
    }
    h1 a {
        font-size: 1.5rem;
        font-family: 'lobster', cursive;
        font-weight: lighter;
    }
`;

export default Nav;

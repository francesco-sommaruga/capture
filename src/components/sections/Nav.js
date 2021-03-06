import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Nav = () => {
    const { pathname } = useLocation();

    return (
        <StyledNav>
            <h1>
                <Link to="/">Capture</Link>
            </h1>

            <ul>
                <li key={'nav-1'}>
                    <Link to="/">1. About Us</Link>
                    {pathname === '/' ? (
                        <Line transition={{ duration: 0.75 }} initial={{ width: 0 }} animate={{ width: '50%' }} />
                    ) : null}
                </li>
                <li key={'nav-2'}>
                    <Link to="/work">2. Our Work</Link>
                    {pathname === '/work' ? (
                        <Line transition={{ duration: 0.75 }} initial={{ width: 0 }} animate={{ width: '50%' }} />
                    ) : null}
                </li>
                <li key={'nav-3'}>
                    <Link to="/contacts">3. Contact Us</Link>
                    {pathname === '/contacts' ? (
                        <Line transition={{ duration: 0.75 }} initial={{ width: 0 }} animate={{ width: '50%' }} />
                    ) : null}
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
    z-index: 100;
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
    @media screen and (max-width: 1300px) {
        flex-direction: column;
        padding: 1rem;
        ul {
            padding: 2rem;
            justify-content: space-around;
            width: 100%;
            li {
                padding: 0;
            }
        }
        h1 a {
            padding: 5rem;
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #23d997;
    width: 0;
    position: absolute;
    bottom: -80%;
    left: 60%;
    @media screen and (max-width: 1300px) {
        left: 0;
    }
`;

export default Nav;

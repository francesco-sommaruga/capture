//import styled components
import styled from 'styled-components';
//import framer-motion
import { motion } from 'framer-motion';

//styled components
export const StyledLayout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media screen and (max-width: 1300px) {
        display: block;
        padding: 2rem;
        text-align: center;
    }
`;
export const StyledDescription = styled.div`
    flex: 1;
    padding-right: 5rem;
    h2 {
        font-weight: lighter;
    }
    .hide {
        overflow: hidden;
    }
    @media screen and (max-width: 1300px) {
        display: block;
        padding: 0;
        button{
            margin: 2rem 0 5rem 0;
        }
    }
`;
export const StyledImage = styled.div`
    flex: 1;
    overflow: hidden;
    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;

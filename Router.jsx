import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import styled from 'styled-components';

import Introduce from './Pages/Introduce.jsx';
import Contact from './Pages/Contact.jsx';
import Article from './Pages/Article.jsx';

const MenuBar = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #f8f9fa;
    padding: 10px 20px;
    display: flex;
    justify-content: space-around;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const MenuLink = styled(Link)`
    color: black;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;

    &:hover {
        color: green;
    }
`;

function Router() {
    return (
        <BrowserRouter>
            <MenuBar>
                <MenuLink to='/'>Introduce</MenuLink>
                <MenuLink to='/Article'>Article</MenuLink>
                <MenuLink to='/Contact'>Contact</MenuLink>
            </MenuBar>

            <Routes>
                <Route path='/' element={<Introduce />} />
                <Route path='/Article' element={<Article />} />
                <Route path='/Contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
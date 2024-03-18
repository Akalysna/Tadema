import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { ReactComponent as TademaLogo } from '../../assets/svg/tadema_logo.svg'

import './TademaNavbar.scss';

const TademaNavbar = () => {

    const [isGlass, setGlass] = useState<boolean>(false)

    useEffect(() => {

        window.addEventListener('scroll', glass);
        return () => window.removeEventListener('scroll', glass);

    }, [])

    const glass = () => setGlass(!(window.scrollY < 320))

    return (
        <NavBar $isGlassMorphism={isGlass}>
            <TademaLogo />
            <ItemList>
                <li><a href=''>Home</a></li>
                <li><a href=''>About us</a></li>
                <li><a href=''>Contacts</a></li>
                <li><a href=''>FAQ</a></li>
            </ItemList>
        </NavBar>
    );
}

export default TademaNavbar;

const ItemList = styled.ul`
    position: relative;
    z-index: 8;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    width: 100%;
    padding: 0;
    margin: 0;

    gap: 2em;

    li {
        font-size: 1.2em;
        padding: 0.5em;

        a {
            color: #1b2002;
            text-decoration: none;

            &:hover {
                color: $main-color;
            }
        }
    }
`;

const NavBar = styled.nav<{ $isGlassMorphism?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

    width: 100%;
    padding: 0.5em;

    display: flex;
    align-items: center;
    justify-content: center;

    ${props => {
        if (props.$isGlassMorphism) {
            return `
            color: #ffffff0d;
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.105);
            `
        }
    }};

    svg {
        position: absolute;
        left: 0;
        float: left;
        transform: scale(0.7);
    }
`;
import React, { useRef } from 'react';
import { ReactComponent as TademaLogo } from '../../assets/svg/tadema_logo.svg'

import './TademaNavbar.scss';

const TademaNavbar = () => {

    const ref = useRef(null)

    /**Ajout de glassmorphisme à la navbar si le scroll dépasse une certaine limite */
    document.addEventListener('scroll', function (event) {

        if (!ref.current)
            return

        if (window.scrollY > 320) {
            ref.current.classList.add('glass')
        } else {
            ref.current.classList.remove('glass')
        }
        
    })

    return (
        <nav ref={ref} id='coffee-nav'>
            <TademaLogo />
            <ul>
                <li><a href=''>Home</a></li>
                <li><a href=''>About us</a></li>
                <li><a href=''>Contacts</a></li>
                <li><a href=''>FAQ</a></li>
            </ul>
        </nav>
    );
}

export default TademaNavbar;
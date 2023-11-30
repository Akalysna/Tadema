import React, { useEffect } from 'react';
import './CoffeeSidebar.scss';
import { ReactComponent as CoffeeBar } from '../../assets/svg/coffee-sidebar.svg'

const CoffeeSidebar = () => {

    let sidebarSeeds = []

    document.addEventListener('scroll', function (event) {
        let activeIndex = window.scrollY < 300 ? 0 : (window.scrollY > 300 && window.scrollY < 580 ? 1 : 2)

        sidebarSeeds.forEach((element, index, array) => {
            let remove = index == activeIndex ? 'sidebar-stroke' : 'sidebar-fill'
            let add = index == activeIndex ? 'sidebar-fill' : 'sidebar-stroke'

            element.classList.replace(remove, add)
            element.style.setProperty("--side-color", window.scrollY > 150 ? '#262626' : 'white')
        });
    })

    useEffect(()=>{
         //Récupération des paths des graines de café de la navigation vertical
         for (let index = 1; index <= 3; index++) {
            sidebarSeeds.push(document.getElementById('seed-' + index))
        }


    })

    return (
        <CoffeeBar />
    );
}

export default CoffeeSidebar;
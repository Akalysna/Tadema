import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './Coffee.scss';

import { ReactComponent as CoffeePath } from '../../assets/svg/coffee_path.svg'
import { ReactLenis } from '@studio-freight/react-lenis';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TademaNavbar from '../../components/TademaNavbar/TademaNavbar';
import CoffeeSidebar from '../../components/CoffeeSidebar/CoffeeSidebar';
import SoundCps from '../../components/SoundCPS/SoundCPS';
import SeedBar from '../../components/SeedBar/SeedBar';
import CoffeeLine from './CoffeeLine';

gsap.registerPlugin(ScrollTrigger)

const Coffee = () => {

    const introSectionRef = useRef(null)
    const productSectionRef = useRef(null)
    const documentTitleRef = useRef(null)
    const soundCpsRef = useRef<HTMLElement>(null)
    const btnGammeRef = useRef<HTMLDivElement>(null)
    const rotateRef = useRef<HTMLDivElement>(null)
    


    document.addEventListener('scroll', () => {

        parallaxEffect()
        rotateFrame()
    })

    useLayoutEffect(() => {
        gsap.set(rotateRef.current, {});

        let ctx = gsap.context(()=> {

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#bottom",
                    pin: true,
                    scrub: 1,
                    start: 'center 72%',
                    end: '54% 72%',
                    // markers : true
                }
            }).to(rotateRef.current, {
                rotation:"+= 10",
                duration: 1, ease: 'none',
            })

        }, [])

        return () => ctx.revert()

    }, [])

    const rotateFrame = () => {
        let distance = window.scrollY;
        // console.log(distance);

        if (distance > 700) {
            if (rotateRef.current) {

                // gsap.set(rotateRef.current, {});

                // let rotate = gsap.timeline({
                //     scrollTrigger: {
                //         trigger: rotateRef.current,
                //         pin: true,
                //         scrub: 0.2,
                //         start: 'top top',
                //         end: 'bottom bottom',
                //     }
                // })
                //     .to(rotateRef.current, {
                //         rotation: 360 * 5,
                //         duration: 1, ease: 'none',
                //     })

                // let tmp = rotateRef.current.style.getPropertyValue("transform")
                // console.log(tmp);

                // let values = tmp.split('(')[1];
                // values = values.split(')')[0];

                // let value = values.split(',');
                // let a:number = Number(value[0]);
                // let b:number = Number(value[1]);

                // var scale = Math.sqrt(a * a + b * b);

                // // First option, don't check for negative result
                // // Second, check for the negative result
                // /**/
                // var radians = Math.atan2(b, a);
                // var angle = Math.round(radians * (180 / Math.PI));

                // console.log("angle : ", angle);

                // rotateRef.current.style.transform = `rotate(${angle + (distance * 0.2)}deg)`
            }
        }
    }

    /**Effet parallax sur la page d'acceuil */
    function parallaxEffect() {
        let distance = window.scrollY;

        if (documentTitleRef.current)
            documentTitleRef.current.style.transform = `translateY(${distance * 0.5}px)`
        if (introSectionRef.current)
            introSectionRef.current.style.transform = `translateY(${distance * -1}px)`
        if (productSectionRef.current)
            productSectionRef.current.style.transform = `translateY(${distance * -1}px)`
        if (btnGammeRef.current)
            btnGammeRef.current.style.transform = `translateY(${distance * -1}px)`
    }

    return (

            <div className="coffee">

                {/* Ligne de café */}
                <CoffeeLine/>

                <TademaNavbar />
                <SeedBar  position={[{start:0, end: 300}, {start:300, end: 580}, {start:580, end: 800}, {start:800, end: Number.MAX_VALUE}]}/>

                <SoundCps src={['/Link_Click_Season_2_Opening_FullVORTEXby_JAWS.mp3']} />

                {/* ________________________ */}

                <section id='top'>
                    <h1 ref={documentTitleRef}>Un goût <br />de <span>nature</span></h1>
                </section>

                <section ref={introSectionRef} id='middle'>
                    <h2>Tout à commencé avec un café</h2>
                    <div id='presentation'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at metus lobortis, finibus orci eu, congue leo. Mauris porta sem vitae ex rhoncus ultricies.</p>
                        <p>Praesent rutrum justo ligula, et hendrerit turpis placerat quis. Donec et imperdiet mauris. Vestibulum volutpat, lorem ac aliquam sollicitudin, lectus orci aliquam sem, a congue augue massa ut orci. Praesent felis nulla, malesuada in ipsum non, tempus elementum neque. Nam ut vehicula nunc, sed pellentesque nisl. Maecenas gravida ligula a pulvinar consequat. Integer venenatis at magna a tincidunt. Nullam sit amet pulvinar nisl. Etiam pharetra purus ut nulla malesuada, eget lacinia lacus iaculis. Donec luctus, ligula eget dapibus elementum, sem metus tristique magna, quis feugiat lorem tortor eget quam. Sed iaculis augue vitae commodo porta. Vestibulum euismod elit sapien, sit amet maximus augue laoreet vel.</p>
                    </div>
                    <button>Découvrire nos gammes</button>
                </section>


                <section ref={productSectionRef} id='bottom'>

                    {/* <img src={require('../../assets/img/pro/nathan-dumlao-zUNs99PGDg0-unsplash.jpg')}></img> */}

                    <div ref={rotateRef} className="frame frame-img">

                    </div>

                    <div className="frame frame-border">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at metus lobortis, finibus orci eu, congue leo. Mauris porta sem vitae ex rhoncus ultricies.</p>
                    </div>


                </section>

            </div>
    );
}

export default Coffee;
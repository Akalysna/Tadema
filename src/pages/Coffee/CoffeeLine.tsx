import styled from 'styled-components';
import { ReactComponent as CoffeePath } from '../../assets/svg/coffee_path.svg'
import { useCallback, useEffect, useRef, useState } from 'react';

interface IProps {
    drawSpeedMultiplier?: number
}
const CoffeeLine = ({ drawSpeedMultiplier = 3 }: IProps) => {

    const [lenght, setLenght] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)

    let path:SVGPathElement


    useEffect(() => {

        console.log("MOUNT");
        
        path =(document.getElementById("path").childNodes.item(0)) as SVGPathElement
        
        setLenght(path.getTotalLength())
       
        onScroll()

        // updateLenght()
        window.addEventListener('scroll', onScroll);
        
        //Lorque le composant est démonté
        return () => window.removeEventListener('scroll', onScroll);
        
    }, [])

    const onScroll = () => {

        // console.log(path.getTotalLength());
        let totalLength = path.getTotalLength()
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        let calcOffset = totalLength - (totalLength * scrollPercentage * drawSpeedMultiplier);
        setOffset(calcOffset)
        // setLenght(totalLength)
        // console.log(calcOffset);
        console.log(totalLength);
    }


    return (
        <CoffeeLineGroup $dashArray={lenght + " " + lenght} $dashOffset={offset.toString()}>
            <CoffeePath id='path'/>
        </CoffeeLineGroup>
    )
}

export default CoffeeLine

const CoffeeLineGroup = styled.div<{ $dashArray: string, $dashOffset: string }>`
    display: flex;
    justify-content: flex-start;
    position: fixed;
    z-index: 6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    overflow: hidden;

    pointer-events: none;

    svg {
        display: inline-block;
        height: 100%;
        margin-left: 8%;

        path {
            stroke: #6c7631;
            stroke-width: 8;

            stroke-dasharray: ${props => props.$dashArray};
            stroke-dashoffset: ${props => props.$dashOffset};
        }
    }
`;

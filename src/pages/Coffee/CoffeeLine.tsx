import styled from 'styled-components';
import { ReactComponent as CoffeePath } from '../../assets/svg/coffee_path.svg'
import { Children, useCallback, useEffect, useRef, useState } from 'react';

interface IProps {
    drawSpeedMultiplier?: number, 
    color?:string
}
const CoffeeLine = ({ drawSpeedMultiplier = 3, color='#6c7631' }: IProps) => {

    const [lenght, setLenght] = useState<number>(0)
    const [offset, setOffset] = useState<number>(0)
    const [isHide, setHide] = useState<boolean>(true)

    let ref = useRef<SVGSVGElement>(null)
    let path: SVGPathElement

    useEffect(() => {
        
        //Get path and lenght
        path = (ref.current.childNodes.item(0)) as SVGPathElement
        setLenght(path.getTotalLength())
        
        //Init scroll
        onScroll()
        
        //Montage et démontage de l'événement scroll
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
        
    }, [])
    
    const onScroll = () => {
        setHide(prev => prev && false)
        let totalLength = path.getTotalLength()
        let scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        setOffset(totalLength - (totalLength * scrollPercentage * drawSpeedMultiplier));
    }


    return (
        <CoffeeLineGroup $isHide={isHide} >
            <CoffeePath 
                ref={ref}
                strokeDasharray={`${lenght} ${lenght}`} 
                strokeDashoffset={offset.toString()} 
                strokeWidth={8}
                stroke={color}
            />
        </CoffeeLineGroup>
    )
}

export default CoffeeLine

const CoffeeLineGroup = styled.div<{$isHide?:boolean}>`
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
        display: ${props => props.$isHide ? "none": "inline-block"};;
        height: 100%;
        margin-left: 8%;
    }
`;

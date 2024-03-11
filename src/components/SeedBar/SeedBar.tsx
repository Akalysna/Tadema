import styled from "styled-components"
import { ReactComponent as SeedSVG } from "../../assets/icons/seed.svg"
import { useEffect, useState } from "react"

type theme = "light" | "dark"
interface IProps {
    position: {
        start: number,
        end: number
    }[]
}
const SeedBar = (props: IProps) => {

    const [selectIndex, setSelectIndex] = useState<number>(1)
    const [theme, setTheme] = useState<theme>("dark")

    useEffect(() => {

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onScroll = () => {

        let scrollY = window.scrollY

        let index = props.position.findIndex((value) => scrollY >= value.start && scrollY < value.end) + 1
        setSelectIndex(index)

        let usedTheme: theme = scrollY > 150 ? "light" : "dark"
        setTheme(usedTheme)
    }

    const goTo = (index: number) => {
        window.scrollTo({ top: props.position[index].start, left: 0, behavior: 'smooth' })
    }

    return (

        <SeedBarGroup $index={selectIndex} $theme={theme}>
            {[...Array(props.position.length ?? 3)].map((v, i) => <SeedSVG key={i} onClick={() => goTo(i)} />)}
        </SeedBarGroup>
    )
}

export default SeedBar

const SeedBarGroup = styled.div<{ $index: number, $theme: "light" | "dark" }>`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;

    position: fixed;
    right: 3em;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;

    gap: 3em;

    svg {

        fill: transparent;
        stroke: ${props => props.$theme == "light" ? "black" : "white"};
        overflow: visible;
        stroke-width: 1.8px;

        &:nth-child(${props => props.$index}) {
            fill: #93AD24;
            stroke: transparent;
        }

        &:nth-child(even) {
            -webkit-transform: scaleX(-1);
            transform: scaleX(-1);
        }
    }
`;
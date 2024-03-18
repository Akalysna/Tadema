import { useState } from 'react';
import './SoundCPS.scss';
import styled from 'styled-components';

import { ReactComponent as Volume } from '../../assets/icons/volume.svg'
import { ReactComponent as VolumeOff } from '../../assets/icons/volume-off.svg'
import ReactHowler from 'react-howler'

interface IProps {
    src:string[], 
    volume?:number
}
const SoundCps = (props:IProps) => {

    const [isPlaying, setPlaying] = useState<boolean>(false)

    const play = () => {setPlaying(prev => !prev); console.log(isPlaying);}

    return (
        <HowlerPlayer onClick={play}>
            <ReactHowler format={["mp3"]}  playing={isPlaying} src="./Link_Click_Season_2_Opening_FullVORTEXby_JAWS.mp3" html5={true} volume={ 1}/>
            {isPlaying ? <Volume/> : <VolumeOff/>}
        </HowlerPlayer>
    )
    
    // const [soundPlay, setSoundPlay] = useState(false)
    
    // return (
        //     <div ref={innerRef} onClick={()=>{setSoundPlay(!soundPlay); }} className="sound-cps">
        //         <ReactHowler playing={soundPlay} src={src} html5={true} volume={0.5}/>
        //        {isPlaying ? <Volume/> : <VolumeOff/>}
    //     </div>
    // );
}

export default SoundCps;

const HowlerPlayer = styled.div`
    
    position: fixed;
    z-index: 1000;
    right: 2em;
    bottom: 2em;
    
    svg {

        height: 2em;
        width: 2em;
        
        path{
            
            stroke: white;
            stroke-width: 1.5px;
        }
    }

    &:hover{
        cursor: pointer;
    }
`;
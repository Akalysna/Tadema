import { useState } from 'react';
import './SoundCPS.scss';
import { ReactComponent as Volume } from '../../assets/icons/volume.svg'
import { ReactComponent as VolumeOff } from '../../assets/icons/volume-off.svg'
import ReactHowler from 'react-howler'

const SoundCps = ({innerRef, src}) => {

    const [soundPlay, setSoundPlay] = useState(false)

    return (
        <div ref={innerRef} onClick={()=>{setSoundPlay(!soundPlay); }} className="sound-cps">
            <ReactHowler playing={soundPlay} src={src} html5={true} volume={0.5}/>
            {soundPlay ? <Volume/> : <VolumeOff/>}
        </div>
    );
}

export default SoundCps;
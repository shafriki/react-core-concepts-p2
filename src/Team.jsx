import { useState } from 'react'
import './App.css'


export default function Team() {
    const [team, setTeam] = useState(11)

    const handleADD = () => {
        const newTeam = team + 1;
        setTeam(newTeam)
    }
    const handleReduce = () => {
        if(team > 11) {
            const newTeam = team - 1

            setTeam(newTeam)
        }
        
    }

    return (
        <div className='team'>
            <p>Players: {team} </p>
            <button className='tbtn-1' onClick={handleADD}>PLAYER +</button>
            <button className='tbtn-2' onClick={handleReduce}>PLAYER -</button>
        </div>
    )
}
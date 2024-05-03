import React from 'react'
import advait from '../Image/Common.png'
import aniket from '../Image/Common.png'
import qazi from '../Image/Common.png'

function Team() {
    const teams=[
        {
            name:"Parvesh Kumar",
            img:advait,
        },
        {
            name:"Akash Choudhary",
            img:aniket,
        },
        {
            name:"Unisha Tirkey",
            img:qazi,
        },
    ]
  return (
    <div>
        <p className='header_Problem'>Team</p>
        <div className='container'>
            {teams.map((team,index)=>(
                
            <div key={index} className='profile_container'>
                <img src={`${team.img}`} alt="" className='prfile_pic'/>
                <h4>{team.name}</h4>
                {/* Add LinkedIn link if available */}
                {/* <a href={team.linkdin} target="_blank" rel="noopener noreferrer"> <IoLogoLinkedin size={30} color='black'/></a> */}
            </div>
            ))}
        </div>
    </div>
  )
}

export default Team

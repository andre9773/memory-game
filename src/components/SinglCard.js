import React from 'react'
import "../components/SinglCard.css"

export default function SinglCard({src}) {

const handelClick = () => {
    
}

  return (
    <div className='card' >
            <div>
              <img className='front' src={src} alt="card front"/>
              <img 
                className='back' 
                src="/img/cover.png" 
                onClick={handelClick} 
                alt='card back'
              />
            </div>
          </div>
  )
}

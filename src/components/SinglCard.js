import React from 'react'
import "../components/SinglCard.css"

export default function SinglCard({card, handleChosed}) {

const handelClick = () => {
    handleChosed(card)
}

  return (
    <div className='card' >
            <div>
              <img className='front' src={card.src} alt="card front"/>
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

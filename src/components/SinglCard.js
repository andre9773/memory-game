import React from 'react'
import "../components/SinglCard.css"

export default function SinglCard({card, handleChosed, flipped}) {

const handelClick = () => {
    handleChosed(card)
}

  return (
    <div className='card' >
            <div className={flipped ? "flipped" : ""}>
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

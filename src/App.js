import './App.css';
import { useEffect, useState } from 'react';
import SinglCard from './components/SinglCard';


 const cardImages = [
  {"src": "/img/1.png", march: false},
  {"src": "/img/2.png", march: false},
  {"src": "/img/3.png", march: false},
  {"src": "/img/4.png", march: false},
  {"src": "/img/5.png", march: false},
  {"src": "/img/6.png", march: false}
 ]
function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiseOne] = useState(null)
  const [choiceTwo, setChoiseTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  const handleChosed = (card) => {
   
    choiceOne ? setChoiseTwo(card) : setChoiseOne(card)
  
  }

useEffect(() =>{
  if (choiceOne && choiceTwo){
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src){
      setCards(prevCards => {
        return prevCards.map(card => {
          if (card.src === choiceOne.src){
            return {...card, march: true}
          }else{
            return card
          }
        })
      })
      reset()
    }else{
     setTimeout(() => reset(), 1000)
      
    }
  }
}, [choiceOne, choiceTwo])


const reset = () =>{
  setChoiseTwo(null)
  setChoiseOne(null)
  setDisabled(false)
}
  // shuffle cards
const shuffleCards = () =>{
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))
  reset();
  setCards(shuffledCards)
}


useEffect(() => {
  shuffleCards()
}, [])
  return (
    <div className="App">
      <h1>Memory Game </h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SinglCard 
          card={card} 
          handleChosed={handleChosed}
          key={card.id}
          flipped={card === choiceOne || card === choiceTwo || card.march}
          disabled={disabled}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

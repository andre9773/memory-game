import './App.css';
import { useState } from 'react';
import SinglCard from './components/SinglCard';


 const cardImages = [
  {"src": "/img/1.png"},
  {"src": "/img/2.png"},
  {"src": "/img/3.png"},
  {"src": "/img/4.png"},
  {"src": "/img/5.png"},
  {"src": "/img/6.png"}
 ]
function App() {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiseOne] = useState(null)
  const [choiceTwo, setChoiseTwo] = useState(null)
  // shuffle cards
const shuffleCards = () =>{
  const shuffledCards = [...cardImages, ...cardImages]
  .sort(() => Math.random() - 0.5)
  .map((card) => ({...card, id: Math.random()}))

  setCards(shuffledCards)
}


  return (
    <div className="App">
      <h1>Memory Game </h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map(card => (
          <SinglCard src={card.src} key={card.id}/>
        ))}
      </div>
    </div>
  );
}

export default App;

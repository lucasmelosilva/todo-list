import { useState } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { NewCard } from './components/NewCard';
import { ButtonNewCard } from './components/ButtonNewCard';

import "./main.css";

function App() {
  const [isNewCard, setIsNewCard] = useState(false);

  function handleNewCard() {
    setIsNewCard(!isNewCard);
  }

  return (
    <>
      <Header />

      {
        isNewCard === true ? <NewCard handleNewCard={handleNewCard} /> : <ButtonNewCard handleNewCard={handleNewCard} />
      }


      <Footer />
    </>
  )
}

export default App

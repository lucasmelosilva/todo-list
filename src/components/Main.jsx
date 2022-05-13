import { useState } from 'react';

import { NewCard } from '../components/NewCard';
import { ListCards } from '../components/ListCards';
import { ButtonNewCard } from '../components/ButtonNewCard';

export function Main() {
  const [isNewCard, setIsNewCard] = useState(false);

  function handleNewCard() {
    setIsNewCard(!isNewCard);
  }
  return (
    <div className='mt-[80px] mb-[80px]'>
      <ListCards />
      {
        isNewCard === true ? <NewCard handleNewCard={handleNewCard} /> : <ButtonNewCard handleNewCard={handleNewCard} />
      }
    </div>
  )

}
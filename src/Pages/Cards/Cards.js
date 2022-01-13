import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Card from '../../Components/Card/Card';
import { CartContext } from '../../contexts/cart';

function Cards() {

  const {addItem} = useContext(CartContext)

  const params = useParams()

  const [cards, setCards] = useState([])

  useEffect(() => {
    async function handleCards() {
      const res = await fetch(`http://localhost:3333/cards?race=${params.category}`)
      const json = await res.json()
      setCards(json)
    }

    handleCards()
  }, [params.category])

  return (
    <>
      <h1>Yu-Gi-Oh</h1>

      <h1>Total de cards: {cards.length}</h1>
      <div className='container'>
        {cards.map((card, index) => {
          return (
            <div key={`card${index}`}>
              <Card card={card} />
              <button onClick={() => addItem(card)}>Adicionar ao carrinho</button>
            </div>
          )
        })}
      </div>
    </>
  );
}


export default Cards;
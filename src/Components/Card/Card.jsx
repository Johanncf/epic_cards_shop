export default function Card({card}) {
    return (
        <div className='card_container'>
            <img src={card.card_images[0].image_url} alt='foto da carta' className='card_image' />
            <span>{card.name}</span>
            <span>{card.type}</span>
        </div>
    )
}
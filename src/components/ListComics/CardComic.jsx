export default function CardComic({ title, image }) {
    return (
        <div className='card-comic' >
            <img className='card-comic-image' src={image} alt={title} />
            <p className='card-comic-title'>{title}</p>
        </div>
    );
}
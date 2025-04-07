export default function CardComic({ title, image }) {
    return (
        <div className='card-comic' >
            <img src={image} alt={title} />
            <p className='card-comic-title'>{title}</p>
        </div>
    );
}
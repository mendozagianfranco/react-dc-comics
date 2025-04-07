export default function Card(props) {
    return (
        <div className="card-icon">
            <img className='card-icon-image' src={props.image} alt={props.alt} />
            <div className='card-icon-text'>{props.text}</div>
        </div>
    );
}
export default function Card(props) {
    return (
        <div className="card">
            <img src={props.image} alt={props.alt} />
            <div className='card-text'>{props.text}</div>
        </div>
    );
}
import CardComic from './CardComic';
import comics from '../../data/comics';

export default function ListComics() {

    return (
        <div className='list-comics'>
            {comics.map(comic => {
                return <CardComic key={comic.id} title={comic.title} image={comic.thumb} />;
            })}
        </div>
    );
}
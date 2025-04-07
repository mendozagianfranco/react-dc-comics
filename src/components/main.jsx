import ListComics from './ListComics/ListComics';
import ButtonLoadMore from './ButtonLoadMore';
import BadgeTitle from './BadgeTitle';

export default function Main() {
    return (
        <main>
            <div className="container">
                <BadgeTitle />
                <ListComics />
                <ButtonLoadMore />
            </div>
        </main>
    );
}
import Menu from './Menu';

export default function Header() {
    return (
        <header>
            <div className='container container-header'>
                <img src="/dc-logo.png" alt="Logo DC comics" />
                <Menu />
            </div>
        </header>
    );
}
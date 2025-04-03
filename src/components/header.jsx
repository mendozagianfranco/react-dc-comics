import logoDC from '../assets/img/dc-logo.png';
import Menu from './Menu';

export default function Header() {
    return (
        <header>
            <img src={logoDC} alt="Logo DC comics" />
            <Menu />
        </header>
    );
}
import Menu from './Menu';
import Logo from './Logo';

export default function Header() {
    return (
        <header>
            <div className='container container-header'>
                <Logo />
                <Menu />
            </div>
        </header>
    );
}
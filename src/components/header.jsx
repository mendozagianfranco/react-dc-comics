import Menu from './Menu';
import Logo from './Logo';

export default function Header(props) {
    return (
        <header>
            <div className='container container-header'>
                <Logo />
                <Menu linksMenu={props.linksMenu} />
            </div>
        </header>
    );
}
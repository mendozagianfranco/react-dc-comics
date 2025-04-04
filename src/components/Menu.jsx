export default function Menu({ linksMenu }) {

    return (
        <ul className='menu-bar'>
            <li><a href="#">{linksMenu[0]}</a></li>
            <li className='menu-active'><a href="#">{linksMenu[1]}</a></li>
            <li><a href="#">{linksMenu[2]}</a></li>
            <li><a href="#">{linksMenu[3]}</a></li>
            <li><a href="#">{linksMenu[4]}</a></li>
            <li><a href="#">{linksMenu[5]}</a></li>
            <li><a href="#">{linksMenu[6]}</a></li>
            <li><a href="#">{linksMenu[7]}</a></li>
            <li><a href="#">{linksMenu[8]}</a></li>
            <li><a href="#">{linksMenu[9]}</a></li>
        </ul>
    );
}
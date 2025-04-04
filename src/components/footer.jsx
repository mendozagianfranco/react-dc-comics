import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

export default function Footer({ linksFooter }) {

    return (
        <footer>
            <FooterTop linksFooter={linksFooter} />
            <FooterBottom />
        </footer>
    );
}
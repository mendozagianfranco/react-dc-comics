import ButtonSignUp from './ButtonSignUp';
import SocialLinks from './SocialLinks';

export default function FooterBottom() {
    return (
        <div className='footer-bottom'>
            <div className="container container-footer-bottom">
                <ButtonSignUp />
                <SocialLinks />
            </div>
        </div>
    );
}
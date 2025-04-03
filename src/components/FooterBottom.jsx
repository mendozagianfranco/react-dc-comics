import ButtonSignUp from './ButtonSignUp';
import SocialLinks from './SocialLinks';

export default function FooterBottom() {
    return (
        <div className='footer-bottom'>
            <div className="container">
                <ButtonSignUp />
                <SocialLinks />
            </div>
        </div>
    );
}
import CardIcon from './CardIcon';

export default function IconLinks() {
    return (
        <div className='icon-links'>
            <div className="container container-icon-links">
                <CardIcon image='/buy-comics-digital-comics.png' alt='digital comics' text='Digital Comics' />
                <CardIcon image='/buy-comics-merchandise.png' alt='Dc Merchandise' text='DC Merchandise' />
                <CardIcon image='/buy-comics-subscriptions.png' alt='Subscription' text='Subscription' />
                <CardIcon image='/buy-comics-shop-locator.png' alt='Comic Shop Locator' text='Comic Shop Locator' />
                <CardIcon image='/buy-dc-power-visa.svg' alt='DC power visa' text='DC Power Visa' />
            </div>
        </div>
    );
}
import Card from './Card';

export default function IconLinks() {
    return (
        <div className='icon-links'>
            <div className="container container-icon-links">
                <Card image='/buy-comics-digital-comics.png' alt='digital comics' text='Digital Comics' />
                <Card image='/buy-comics-merchandise.png' alt='Dc Merchandise' text='DC Merchandise' />
                <Card image='/buy-comics-subscriptions.png' alt='Subscription' text='Subscription' />
                <Card image='/buy-comics-shop-locator.png' alt='Comic Shop Locator' text='Comic Shop Locator' />
                <Card image='/buy-dc-power-visa.svg' alt='DC power visa' text='DC Power Visa' />
            </div>
        </div>
    );
}
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import ListIconLinks from './components/IconLinks/ListIconLinks';

function App() {
    const linksMenu = [
        'Characters',
        'Comics',
        'Movies',
        'TV',
        'Games',
        'Colletctibles',
        'Videos',
        'Fans',
        'News',
        'Shop'
    ];

    const linksFooter = [
        {
            'title-list-link': 'DC COMICS',
            link1: 'Characters',
            link2: 'Comics',
            link3: 'Movies',
            link4: 'TV',
            link5: 'Games',
            link6: 'Videos',
            link7: 'News',
        },
        {
            'title-list-link': 'SHOP',
            link1: 'Shop DC',
            link2: 'Shop DC Collectibles'
        },
        {
            'title-list-link': 'DC',
            link1: 'Terms Of Use',
            link2: 'Privacy policy (New)',
            link3: 'Ad Choices',
            link4: 'Advertising',
            link5: 'Jobs',
            link6: 'Subscriptions',
            link7: 'Talent Workshops',
            link8: 'CPSC Certificates',
            link9: 'Ratings',
            link10: 'Shop Help',
            link11: 'Contact Us',
        },
        {
            'title-list-link': 'SITES',
            link1: 'DC',
            link2: 'MAD Magazine',
            link3: 'DC Kids',
            link4: 'Dc Universe',
            link5: 'DC Power Visa',
        }
    ];
    return (
        <>
            <Header linksMenu={linksMenu} />
            <Main />
            <ListIconLinks />
            <Footer linksFooter={linksFooter} />
        </>
    );
}

export default App;

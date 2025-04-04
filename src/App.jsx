import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import IconLinks from './components/IconLinks';

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
    return (
        <>
            <Header linksMenu={linksMenu} />
            <Main />
            <IconLinks />
            <Footer />
        </>
    );
}

export default App;

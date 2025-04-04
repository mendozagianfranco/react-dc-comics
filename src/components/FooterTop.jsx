export default function FooterTop({ linksFooter }) {
    return (
        <div className='footer-top'>
            <div className="container container-footer-top">
                <div className='footer-links'>
                    <ul className='list-link'>
                        <li className='title-list-link'>{linksFooter[0]['title-list-link']}</li>
                        <li>{linksFooter[0].link1}</li>
                        <li>{linksFooter[0].link2}</li>
                        <li>{linksFooter[0].link3}</li>
                        <li>{linksFooter[0].link4}</li>
                        <li>{linksFooter[0].link5}</li>
                        <li>{linksFooter[0].link6}</li>
                        <li>{linksFooter[0].link7}</li>
                        <li className='title-list-link'>{linksFooter[1]['title-list-link']}</li>
                        <li>{linksFooter[1].link1}</li>
                        <li>{linksFooter[1].link2}</li>
                    </ul>
                    <ul className='list-link'>
                        <li className='title-list-link'>{linksFooter[2]['title-list-link']}</li>
                        <li>{linksFooter[2].link1}</li>
                        <li>{linksFooter[2].link2}</li>
                        <li>{linksFooter[2].link3}</li>
                        <li>{linksFooter[2].link4}</li>
                        <li>{linksFooter[2].link5}</li>
                        <li>{linksFooter[2].link6}</li>
                        <li>{linksFooter[2].link7}</li>
                        <li>{linksFooter[2].link8}</li>
                        <li>{linksFooter[2].link9}</li>
                        <li>{linksFooter[2].link10}</li>
                        <li>{linksFooter[2].link11}</li>
                    </ul>
                    <ul className='list-link'>
                        <li className='title-list-link'>{linksFooter[3]['title-list-link']}</li>
                        <li>{linksFooter[3].link1}</li>
                        <li>{linksFooter[3].link2}</li>
                        <li>{linksFooter[3].link3}</li>
                        <li>{linksFooter[3].link4}</li>
                        <li>{linksFooter[3].link5}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
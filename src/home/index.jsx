import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    return (
        <>
           <Carousel
           infiniteLoop
           useKeyboardArrows
           autoPlay
           showArrows={true}
           showStatus={false}
           showThumbs={false}
           >
        <div>
            <img src="https://www.mandatory.gg/wp-content/uploads/mandatory-valorant-version-consoles-xbox-playstation.jpg"></img>
        </div>

        <div>
            <img src="https://imageio.forbes.com/specials-images/imageserve/60671861be1d5990e3464ead/MLB-The-Show-21/960x0.jpg?format=jpg&width=960"></img>
        </div>

        <div>
            <img src="https://i0.wp.com/news.xbox.com/pt-br/wp-content/uploads/sites/8/2020/09/XGP_EAPlay_HERO.jpg?resize=1200%2C675&ssl=1"></img>
        </div>
        </Carousel>
       
        </>
    )
}
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
    return (
        <>
           <Carrosel
           infiniteLoop
           useKeyboardArrows
           autoPlay
           showArrows={true}
           showStatus={false}
           showThumbs={false}
           >
        <div>
            <img src="https://al.agenciasebrae.com.br/wp-content/uploads/sites/3/2022/08/Banner_Sympla_Start_Games_Alagoas_p3197_thumb_resized.jpg"/>
        </div>

        <div>
            <img src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=630/uploads/users/1631/posts/32590/image/YouTube%20Banner%20Maker%20with%20Background%20Image%20of%20Tokyo%20copy.jpg"/>
        </div>

        <div>
            <img src="https://wallpapers.com/images/hd/youtube-banner-gaming-ddn9ga2d1plhiw89.jpg"/>
        </div>
        </Carrosel>
       
        </>
    )
}
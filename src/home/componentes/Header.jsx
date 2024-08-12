import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
export default function Header() {
    return(
        <header>
            <Link to="/home">
                <p>Home</p>
            </Link>
            <Link to="/produto"> 
                <p>Produto</p>
                </Link>
            <Link to="/ofertas">
                <p>Oferta</p>
                </Link>
        </header>
    );
}
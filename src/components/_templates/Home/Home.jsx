import { Cards, Carousel, Feedback, Footer, Header, Product } from '../../_organisms'
import './style.scss'

export const Home = () => {
    return (
        <div className="wrapper">
            <div className="wrapper_first-screen">
                <Header />
                <Product />
            </div>
            <Cards />
            <Feedback />
            <Footer />
        </div>
    )
}
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from 'react-router-dom'

import reveillon from '../../img/reveillon.png'
import chega_junto from '../../img/chega_junto.jpeg'
import card1 from '../../img/cards/card1.jpeg'
import styles from './Home.module.css'

function Home() {
    return (
        <div>
            <div className={styles.carroselBg}>
                <div className={styles.carrosel}>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="2000">
                                <img src={reveillon} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={chega_junto} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <Link className={styles.link} to="/"><img src={card1} className={styles.cardsImg} alt="card1" /></Link>
                <Link className={styles.link} to="/"><img src={card1} className={styles.cardsImg} alt="card1" /></Link>
                <Link className={styles.link} to="/"><img src={card1} className={styles.cardsImg} alt="card1" /></Link>
                <Link className={styles.link} to="/"><img src={card1} className={styles.cardsImg} alt="card1" /></Link>
            </div>
        </div>
    )
}

export default Home

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'

import reveillon from '../../img/reveillon.png'
import chega_junto from '../../img/chega_junto.jpeg'
import denis from '../../img/denis.jpeg'
import styles from './Home.module.css'

function Home() {
    return (
        <div>
            <div className={styles.carroselBg}>
                <div className={styles.carrosel}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={reveillon}
                            alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={chega_junto}
                            alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={denis}
                            alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.card1}><h3 className={styles.h3}>EVENTOS DE HOJE</h3></div>
                <div className={styles.card2}><h3 className={styles.h3}>ATIVIDADES AO AR LIVRE</h3></div>
                <div className={styles.card3}><h3 className={styles.h3}>DOAÇÕES</h3></div>
                <div className={styles.card4}><h3 className={styles.h3}>FESTAS E BALADAS</h3></div>
                <div className={styles.card5}><h3 className={styles.h3}>SHOWS E FESTIVAIS</h3></div>
                <div className={styles.card6}><h3 className={styles.h3}>UNIVERSITÁRIO</h3></div>
                <div className={styles.card7}><h3 className={styles.h3}>GASTRONOMIA</h3></div>
            </div>
        </div>
    )
}

export default Home

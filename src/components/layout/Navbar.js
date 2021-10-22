import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'

function Navbar() {
    return(
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <div className={styles.leftNav}>
                    <li className={styles.itemNav}>
                        <Link to="/">Home</Link>
                    </li>
                </div>
                <div className={styles.rightNav}>
                    <li className={styles.itemNav}>
                        <Link to="/criar-evento" className={styles.criarEvento}>CRIAR EVENTO</Link>
                    </li>
                    <li className={styles.itemNav}>
                        <Link to="/meus-ingressos" className={styles.link}>Meus Ingressos</Link>
                    </li>
                    <li className={styles.itemNav}>
                        <Link to="/meus-ingressos" className={styles.link}>Perfil</Link>
                    </li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar

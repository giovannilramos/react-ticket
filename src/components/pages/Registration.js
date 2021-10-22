import evento from '../../img/image-asset.jpeg'
import styles from './Registration.module.css'
import imgForm from '../../img/formImg.png'
import ProjectForm from '../project/ProjectForm'

function Registration() {
    return (
        <div>
            <figure className={styles.container}>
                <img className={styles.img} src={evento} alt="Crie um evento"/>
                <figcaption>CRIAR EVENTO</figcaption>
            </figure>
            <p className={styles.text}>Preencha o formulário que entraremos em contato com você.</p>
            <img className={styles.imgForm} src={imgForm} alt="Crie um evento"/>
            <ProjectForm />
        </div>
    )
}

export default Registration

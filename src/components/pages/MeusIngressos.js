import { useState, useEffect } from 'react'

import styles from './MeusIngressos.module.css'

function MeusIngressos() {
    const [categories, setCategories] = useState([])

        useEffect(()=> {
            fetch("http://localhost:8080/ingressos", {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
            }).then((resp)=> resp.json()).then((data)=> {setCategories(data)}).catch((err)=>console.log(err))     
        }, [])

    return (
        <h3 className={styles.title}>MEUS INGRESSOS</h3>
    )
}

export default MeusIngressos

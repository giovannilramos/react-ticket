import { useState } from 'react'

import Button from '../form/Button'
import Input from '../form/Input'
import styles from './ProjectForm.module.css'

function ProjectForm({projectData , handleSubmit}) {
    const[project, setProject] = useState(projectData || {})

    const submit = (e)=> {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.id]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input id="nome" name="Nome *" handleOnChange={handleChange} type="text" value={project.nome ? project.nome : ''} />
            <Input id="email" name="E-mail *" handleOnChange={handleChange} type="email" value={project.email ? project.email : ''} />
            <Input id="fone" name="Telefone *" handleOnChange={handleChange} type="tel" value={project.fone ? project.fone : ''} />
            <Button name="ENVIAR" />
        </form>
    )
}

export default ProjectForm

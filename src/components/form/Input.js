import styles from './Input.module.css'

function Input({id, name, type, handleOnChange, value}) {
    return (
        <div className={styles.formControl}>
            <label htmlFor={id}>{name}</label>
            <input id={id} name={id} value={value} type={type} onChange={handleOnChange} />
        </div>
    )
}

export default Input

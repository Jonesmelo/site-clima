import styles from './form.module.css'

export default function Form(): JSX.Element {
    return (
        <div className={styles.form}>
            <form>
                <label htmlFor="Cidade" className={styles.textos}>Nome da cidade </label>
                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade.."className={styles.caixatexto}></input>

                <label htmlFor="estado" className={styles.textos}>Selecione seu Estado: </label>
                <select id="estado" name="estado" className={styles.caixasuspensa}>
                    <option value="ba">Bahia</option>
                    <option value="sp">São Paulo</option>
                    <option value="rj">Rio de Janeiro</option>
                </select>

                <button type="button" className={styles.formbutton}>Buscar</button>
            </form>
        </div>
    )
}
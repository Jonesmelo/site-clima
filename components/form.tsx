import { MouseEvent, MouseEventHandler, useDebugValue } from 'react'
import styles from './form.module.css'



export default function Form(): JSX.Element {

    return (
        

        <div className={styles.form}>
            
            <form>
                
                <label htmlFor="Cidade" className={styles.textos}>Nome da cidade </label>
                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade.."className={styles.caixatexto}/><br />

                <label htmlFor="estado" className={styles.textos}>Selecione seu Estado: </label>
                <select id="estado" name="estado" className={styles.caixasuspensa}>
                    <option value="ba" >Bahia</option>
                    <option value="sp" >São Paulo</option>
                    <option value="rj" >Rio de Janeiro</option>
                </select>

                <button type="submit" className={styles.formbutton} onClick={onSubmit}>Buscar</button>
            </form>
        </div>
    )
}
function onSubmit(event: MouseEvent<HTMLButtonElement>){
    event.preventDefault()
    let cid = (document.getElementById('cidade') as HTMLInputElement).value;
    let est = (document.getElementById('estado') as HTMLInputElement).value;


    alert(`Sua Cidade: ${cid} Seu Estado: ${est} `)
    document.write("Site em Manutenção! Logo estará pronto")
}
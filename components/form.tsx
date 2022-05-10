import styles from './form.module.css'

export default function Form(): JSX.Element {
    return (
        <div>
            <form>
                <label htmlFor="fname">Nome da cidade </label>
                <input type="text" id="cidade" name="cidade" placeholder="Digite sua cidade.."></input>

                <label htmlFor="country">Selecione seu Estado: </label>
                <select id="estado" name="estado">
                    <option value="ba">Bahia</option>
                    <option value="sp">São Paulo</option>
                    <option value="rj">Rio de Janeiro</option>
                </select>

                <input type="submit" value="Buscar"></input>
            </form>
        </div>
    )
}
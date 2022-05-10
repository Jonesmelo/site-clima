import styles from './form.module.css'

export default function Form(): JSX.Element {
    return (
        <div>
            <form action="/action_page.php">
                <label htmlFor="fname">Nome da cidade </label>
                <input type="text" id="fname" name="firstname" placeholder="Digite sua cidade.."></input>

                <label htmlFor="lname">Nome do Estado (Ex: BA) </label>
                <input type="text" id="lname" name="lastname" placeholder="Digite seu Estado.."></input>

                <label htmlFor="country">Selecione seu Estado: </label>
                <select id="country" name="country">
                    <option value="ba">Bahia</option>
                    <option value="sp">São Paulo</option>
                    <option value="rj">Rio de Janeiro</option>
                </select>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}
import styles from '../styles/components/FormulariodeLogin.module.css'

export function FormulariodeLogin(){
    return(
        <div className={styles.container}>
            <div>
                <h2>ShortWriter</h2>
                <input type="text" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
                <button type="button">Entrar</button>
                <button type="button">Cadastrar</button>
            </div>
            

        </div>
    )
}
import { LoginCard } from "../src/components/loginCard"
import Link from "next/link"

import styles from "../styles/cadastroPage.module.css"

const CadastroPage=()=>{
    return(
        <div className={styles.bg}>
            <LoginCard title="Crie sua conta">
                <form action="#" className={styles.box}>
                    <input type="text" 
                    placeholder="Name"/>
                    <input type="email"
                    placeholder="Email" />
                    <input type="password"
                    placeholder="senha"/>
                    <button className={styles.btn}>Cadastrar</button>
                    <Link href="/login">Já possui uma conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}

export default CadastroPage
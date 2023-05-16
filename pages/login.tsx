import { LoginCard } from "../src/components/loginCard";
import Link from "next/link";

import styles from "../styles/loginPage.module.css"

export default function LoginPage(){
    return(
        <div className={styles.bg}>
            <LoginCard title="Entre em sua conta">
                <form action="#" className={styles.box}>
                    
                    <input type="email"
                    placeholder="Email:"
                    />
                    <input
                    type="password"
                    placeholder="Senha:"
                    />
                    <button
                     className={styles.btn}>
                        Entrar
                    </button>
                    <Link href="/cadastro">Ainda não possui sua conta?</Link>
                </form>
            </LoginCard>
        </div>
    )
}
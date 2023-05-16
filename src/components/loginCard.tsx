import styles from './loginCard.module.css'

interface IloginCardProps{
    title:string
    children:React.ReactNode
}
export const LoginCard:React.FC<IloginCardProps>=({title,children})=>{
  return(
    <div className={styles.box}>
        <h2  className={styles.title}>{title}</h2>
        {children}
    </div>
  )
}
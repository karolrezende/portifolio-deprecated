import array from './assets/imgArray.json'
import styles from './styles.module.scss'
interface obj {
  id: number,
    nome: string,
    descricao: string
}
export default function TechModule() {
  return (
    <>
        {array.map((obj: obj)=>
         <li className={styles.li} key={obj.id}>
            <img src={obj.descricao} alt={obj.nome} />
        </li>)}
    </>
  )
}

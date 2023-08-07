import TechModule from '../TechModule/TechModule'
import styles from './styles.module.scss'

export default function TechList() {
  return (
    <div className={styles.container}>
      <ul className={styles.container_ul}>
          <TechModule/>
      </ul>
      <ul className={styles.container_ul_2}>
          <TechModule/>
      </ul>
    </div>
  )
}

import ProjectList from '../ProjectList/ProjectList'
import styles from './styles.module.scss'
export default function ProjectScreen() {
  return (
    <div className={styles.container}>
        <div className={styles.container_main}>
          <div className={styles.container_main__title}>
             <h1>PROJETOS</h1>
          </div>
          <div className={styles.container_main__project}>
            <ProjectList/>
          </div>
        </div>
    </div>
  )
}

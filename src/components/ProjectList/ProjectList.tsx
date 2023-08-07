import React from 'react'
import projects from './assets/projects.json'
import styles from './styles.module.scss'
interface iProject{
    name: string
}
export default function ProjectList() {
  return (
    <div className={styles.main}>
        <div className={styles.main_preview}>
            <div>
                <h1>Clique para ver o preview</h1>
            </div>
        </div>
        <div className={styles.main_ul}>
            {
                projects.map((project: iProject)=> <div className={styles.main_ul_li}>
                    <p>{project.name}</p>
                </div>)
            }
        </div>
    </div>
  )
}

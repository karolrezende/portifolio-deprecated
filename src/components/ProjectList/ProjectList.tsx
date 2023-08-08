import React, { useState } from 'react'
import projects from './assets/projects.json'
import styles from './styles.module.scss'
interface iProject{
    name: string
}
export default function ProjectList() {
    const [offline, setOffline] = useState(true)

    const setOfflineFunction = () => {
        setOffline(false)
    }
  return (
    <>
    <div className={styles.main}>
        <div className={styles.main_preview}>
            <div>
                <h1 onClick={setOfflineFunction}>Clique para ver o preview</h1>
                <div>
                    oi
                </div>
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
    </>
  )
}

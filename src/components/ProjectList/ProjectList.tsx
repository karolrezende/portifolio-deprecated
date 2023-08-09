import React, { useState } from 'react'
import projects from './assets/projects.json'
import styles from './styles.module.scss'
import { iProject, useProjectContext } from '../../providers/ProjectsProvider'
import SetProjectList from '../SetProjectList/SetProjectList'
export default function ProjectList() {
    const [offline, setOffline] = useState(true)

    const handleFunction = (project: number) => {
        setOffline(false)
        setProjectList(project)
    }

    const setProjectList = (project: number) =>{
        setAtualProject(project)
    }

    const {setAtualProject} = useProjectContext()
  return (
    <>
    <div className={styles.main}>
        <div className={styles.main_preview}>
         
                {
                    offline ? (<div className={styles.prev}>
                            <div className={styles.prev_header}>X</div>
                            <div className={styles.prev_body}>
                                    Clique para ver o preview
                        </div>
                    
                    </div>) : ''
                }
                {
                    !offline ? (<>
                        <SetProjectList/>
                    </>):''
                }
         
        </div>
        <div className={styles.main_ul}>
            {
                projects.map((project: iProject)=> <div className={styles.main_ul_li} onClick={()=>handleFunction(project.id)} key={project.id}>
                    <p >{project.name}</p>
                </div>)
            }
        </div>
    </div>
    </>
  )
}

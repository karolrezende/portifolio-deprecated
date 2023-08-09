import React from 'react'
import { useProjectContext } from '../../providers/ProjectsProvider'
import styles from './styles.module.scss'
import projects from '../ProjectList/assets/projects.json'
import SetProjectModule from '../SetProjectModule/SetProjectModule'
export default function SetProjectList() {
    const {project} = useProjectContext()
  return (
    <>
      {
        projects.map(pro => pro.id === project ?  <SetProjectModule project={pro.image}/>: '')
      }
    </>
  )
}

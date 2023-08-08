import { ReactNode, createContext, useContext, useState } from "react";
export interface iProject {
    id: number,
    name: string
}
interface iContext {
    setAtualProject: (atualProject: any) => void,
    project: iProject
}
interface iReactNode{
    children: ReactNode
}
const ProjectContext = createContext<iContext>({} as iContext)

export const ProjectProvider=({children}: iReactNode)=>{
    const [project, setProject] = useState({} as iProject)

    const setAtualProject = (atualProject: iProject) => {
        setProject(atualProject)
    }

    return <ProjectContext.Provider value={{setAtualProject, project}}>
        {children}
    </ProjectContext.Provider>
}

export const useProjectContext = () => useContext(ProjectContext)
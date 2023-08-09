import { ReactNode, createContext, useContext, useState } from "react";
export interface iProject {
    id: number,
    name: string
}
interface iContext {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    setAtualProject: (atualProject: any) => void,
    project: number
}
interface iReactNode{
    children: ReactNode
}
const ProjectContext = createContext<iContext>({} as iContext)

export const ProjectProvider=({children}: iReactNode)=>{
    const [project, setProject] = useState({} as number)

    const setAtualProject = (atualProject: number) => {
        setProject(atualProject)
    }

    return <ProjectContext.Provider value={{setAtualProject, project}}>
        {children}
    </ProjectContext.Provider>
}

export const useProjectContext = () => useContext(ProjectContext)
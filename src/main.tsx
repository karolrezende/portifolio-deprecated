import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App'
import './index.css'
import { ProjectProvider } from './providers/ProjectsProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ProjectProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </ProjectProvider>
)

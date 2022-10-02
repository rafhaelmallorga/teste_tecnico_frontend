import { AnticipationProvider } from "./Anticipation";

interface AppProvider {
    children: React.ReactNode
}

import React from 'react'

const Provider = ({children}: AppProvider) => {
  return (
    <AnticipationProvider>
        {children}
    </AnticipationProvider>
  )
}

export default Provider
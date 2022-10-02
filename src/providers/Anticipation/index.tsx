import { createContext, useContext, useEffect, useState } from "react";
import { IAnticipationContext } from "../../interface/Anticipation";

interface AnticipationProviderProps {
    children: React.ReactNode
}

const AnticipationContext = createContext<IAnticipationContext>({} as IAnticipationContext)

export const AnticipationProvider = ({ children }: AnticipationProviderProps) => {
    const [ anticipation, setAnticipation ] = useState()

    return (
        <AnticipationContext.Provider value={{anticipation, setAnticipation}}>
            {children}
        </AnticipationContext.Provider>
    )
}

export const useAnticipation = () => useContext(AnticipationContext)

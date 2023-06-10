import { createContext, useContext, useState } from "react"

const MainUserDataContext = createContext()

export const useMainUserData = () => {
    return useContext(MainUserDataContext)
}

export const MainUserDataProvider = ({children}) => {
    const [mainUserData, setMainUserData] = useState()
    const [mainUserPostData, setMainUserPostData] = useState()

    const handleMainUserData = (data) => {
        setMainUserData(data)
    }

    const handleMainUserPostData = (data) => {
        setMainUserPostData(data)
    }

   return (
    <MainUserDataContext.Provider value={{mainUserData, mainUserPostData, handleMainUserData, handleMainUserPostData}}>
        {children}
    </MainUserDataContext.Provider>
   ) 
}

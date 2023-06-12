import { createContext, useContext, useState } from "react";

const MainPagePostContext = createContext()

export const useMainPagePost = () => {
    return useContext(MainPagePostContext)
}

export const MainPagePostProvier = ({children}) => {
    const [mainPagePostData, setMainPagePostData] = useState()

    const handleMainPagePostData = (data) => {
        setMainPagePostData(data)
    }
    return (
        <MainPagePostContext.Provider value={{mainPagePostData, handleMainPagePostData}}>
            {children}
        </MainPagePostContext.Provider>
    )
}
import { createContext, useContext, useState } from "react";

const UserProfileContext = createContext()

export const useUserProfile = () => {
    return useContext(UserProfileContext)
}

export const UserProfileProvider = ({children}) => {
    const [userProfileID, setUserProfileID] = useState()

    const handleUserProfileID = (id) => {
        setUserProfileID(id)
    }

    return (
        <UserProfileContext.Provider value={{userProfileID, handleUserProfileID}}>
            {children}
        </UserProfileContext.Provider>
    )
}
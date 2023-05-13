import { createContext, useContext, useState } from "react";

const ImgUploadContext = createContext()
const ImgSetUploadContext = createContext()

export function useUploadedImg() {
    return useContext(ImgUploadContext)
}
// Use to set file to upImg variable
export function useSetImgToUpload() {
    return useContext(ImgSetUploadContext)
}

export const ImgUploadProvider = ({children}) => {
    const [upImg, setUpImg] = useState()

    function setUploadImg(file) {
        setUpImg(file)
    }

    return (
        <ImgUploadContext.Provider value={upImg}>
            <ImgSetUploadContext.Provider value={setUploadImg}>
             {children}
            </ImgSetUploadContext.Provider>
        </ImgUploadContext.Provider>
    )
}
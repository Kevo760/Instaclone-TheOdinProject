import { createContext, useContext, useState } from "react"

const ImgPageStepContext = createContext()
const ImgCropSectionContext = createContext()
const ImgFilterSectionContext = createContext()
const ImgDetailSectionContext = createContext()

export function useImgCurrentPage() {
    return useContext(ImgPageStepContext)
}

export function useShowCropSection() {
    return useContext(ImgCropSectionContext)
}

export function useShowFilterSection() {
    return useContext(ImgFilterSectionContext)
}

export function useShowDetailSection() {
    return useContext(ImgDetailSectionContext)
}


export const ImgPageHandlerProvider = ({children}) => {
    const [showStep, setShowStep] = useState(1)

    function showImgCropSection() {
        setShowStep(1)
      }
    
    function showFilterSection() {
        setShowStep(2)
      }
    
    function showImgDetailSection() {
        setShowStep(3)
      }

    return (
        <ImgPageStepContext.Provider value={showStep}>
            <ImgCropSectionContext.Provider value={showImgCropSection}>
                <ImgFilterSectionContext.Provider value={showFilterSection}>
                    <ImgDetailSectionContext.Provider value={showImgDetailSection}>
                        {children}
                    </ImgDetailSectionContext.Provider>
                </ImgFilterSectionContext.Provider>
            </ImgCropSectionContext.Provider>
        </ImgPageStepContext.Provider>
    )
}
import { createContext, useContext, useState } from "react"
import CommentModal from "../Components/Comment Modal/CommentModal"

const CommentModalContext = createContext()

export const useCommentModal = () => {
    return useContext(CommentModalContext)
}

export const CommentModalProvider = ({children}) => {
    const [showComments, setShowComments] = useState(false)
    const [postData, setPostData] = useState()

    const handleShowCommentModal = (postdata) => {
        setPostData(postdata)
        setShowComments(true)
    }

    const handleExitCommentModal = () => {
        setShowComments(false)
        setPostData(null)
    }

    return (
        <CommentModalContext.Provider value={{showComments, postData, handleShowCommentModal, handleExitCommentModal}}>
            
                {
                    showComments ?
                    <CommentModal />
                    :
                    null
                }
                {children}
        </CommentModalContext.Provider>
    )
}
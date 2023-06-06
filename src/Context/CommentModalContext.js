import { createContext, useContext, useState } from "react"
import CommentModal from "../Components/Comment Modal/CommentModal"

const CommentModalContext = createContext()

export const useCommentModal = () => {
    return useContext(CommentModalContext)
}

export const CommentModalProvider = ({children}) => {
    const [showComments, setShowComments] = useState(false)
    const [postID, setPostID] = useState()

    const handleShowCommentModal = (data) => {
        setShowComments(true)
        setPostID(data)
    }

    const handleExitCommentModal = () => {
        setShowComments(false)
    }

    return (
        <CommentModalContext.Provider value={{showComments, postID, handleShowCommentModal, handleExitCommentModal}}>
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
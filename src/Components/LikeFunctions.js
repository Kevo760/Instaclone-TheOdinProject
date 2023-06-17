import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from '../firebase'

export const checkIsLiked = (likeArray, userUID) => {
    //if like array includes userID return true else false and pass function value of didUserLikePost
    const didUserLikePost = likeArray.includes(userUID)
    return didUserLikePost
}

export const likePostHander = async (postID, posterUID, likersUserID) => {
    try {
        const mainRef = doc(db, 'mainPagePost', 'post')
        const postRef = doc(db, 'userPost', posterUID)

        await updateDoc(postRef, {
          [postID + '.likes']: arrayUnion(likersUserID)
        })

        await updateDoc(mainRef, {
          [postID + '.likes']: arrayUnion(likersUserID)
        })
      } catch(error) {
        return 
      }

}
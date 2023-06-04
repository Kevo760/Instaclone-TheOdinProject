export const checkIsLiked = (likeArray, userUID) => {
    const didUserLikePost = likeArray.includes(userUID)
    return didUserLikePost
}

const likePostHander = async(mainUser, usersPost, errorHandler) => {


}
import { arrayUnion, doc, updateDoc } from "firebase/firestore"
import { db } from "../firebase"

export const checkIfFollowing = (followingArray, userUID) => {
    const isUserFollowing = followingArray.includes(userUID)
    return isUserFollowing
}

export const handleFollowUser = async (userFollowerUID, userFollowingUID) => {
  try {
    const userFollowingRef = doc(db, 'users', userFollowingUID)
    const userFollowerRef = doc(db, 'users', userFollowerUID)
    // Adds userUID who wants the person wants to follow
    await updateDoc(userFollowingRef, {
      followers: arrayUnion(userFollowerUID)
    })
    // Adds the person who the user is followings UID to their following
    await updateDoc(userFollowerRef, {
      following: arrayUnion(userFollowingUID)
    })
  } catch(error) {
    return
  }
}


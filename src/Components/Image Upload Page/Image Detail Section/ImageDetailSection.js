import React, { useState } from 'react'
import ImageDetailNavBar from './ImageDetailNavBar'
import styled from 'styled-components';
import ImgWrapperDetail from './ImgWrapperDetail';
import { useUploadedImg } from '../../../Context/ImgUploadContext';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';
import { db, storage } from '../../../firebase';
import { useAuth } from '../../../Context/AuthContext';
import { doc, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid'
import LoadingBox from '../../LoadingBox';
import { useNavigate } from 'react-router-dom';



const ImageDetailBox = styled.div`
    width: 480px;
    margin: 30px auto;
  `

const FormSection = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  border-radius: 5px;
  background-color: rgb(173, 181, 189);
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  textarea {
    resize: none;
    width: 100%;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
  span {
    padding: 10px 4px 4px 4px;
    color: red;
    font-weight: bold;
  }
`

function ImageDetailSection() {
  const [showErr, setShowErr] = useState(false)
  const [textValue, setTextValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const upImg = useUploadedImg()
  const user = useAuth()
  const displayName = user.currentUser.displayName
  const userID = user.currentUser.uid
  const navigate = useNavigate()

  const handleOnChangeText = (e) => {
    setTextValue(e.target.value)
  }
  
  const handlePostUpload = async(e) => {
    e.preventDefault()

    setIsLoading(true)
    const postRef = doc(db, 'userPost', userID)
    const mainPagePostRef = doc(db, 'mainPagePost', 'post')
    const generateUID = uuidv4()
    const generatePostId = generateUID.slice(0,8)

      try {
        const storageRef = ref(storage, displayName + '/' + generatePostId)
        uploadString(storageRef, upImg,'data_url').then((snapshot) => {
          getDownloadURL(storageRef)
          .then(async(url) => {
            // Adds post object on user post
            await setDoc(postRef, {
              [generatePostId]: {
                postID: generatePostId,
                displayName: displayName,
                posterUID: userID,
                userPhotoURL: user.currentUser.photoURL,
                imgURL: url,
                description: textValue,
                comments: '',
                likes: [],
                timestamp: serverTimestamp(),
              }
            }, {merge: true})
          // adds postid to mainpage post
          await updateDoc(mainPagePostRef, generatePostId, {
              postID: generatePostId,
              displayName: displayName,
              posterUID: userID,
              userPhotoURL: user.currentUser.photoURL,
              imgURL: url,
              description: textValue,
              comments: '',
              likes: [],
              timestamp: serverTimestamp(),
          })
          // after upload is done navigate home
          navigate('/')
          })
          .catch((error) => {
            setShowErr(true)
            setIsLoading(false)
          });
        });
    } catch(error) {
      setShowErr(true)
      setIsLoading(false)
    }
  }

  return (
    <>
      {
        isLoading ?
        <LoadingBox />
        :
        null
      }
      <ImageDetailBox>
          <ImageDetailNavBar handlePostUpload={handlePostUpload} />
          <ImgWrapperDetail imgSrc={upImg} />

          <FormSection onSubmit={handlePostUpload}>
            <label htmlFor='postDetail' style={{display: 'none'}}>add description</label>
            <textarea
              id="postDetail"
              name='postDetail'
              placeholder='Add description'
              onChange={handleOnChangeText}
              rows="4"
              required
            />
            {
              showErr ?
              <span>Something went wrong, try again.</span>
              :
              null
            }
            
          </FormSection>
          
      </ImageDetailBox>
    </>
  )
}

export default ImageDetailSection